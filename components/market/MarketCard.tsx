import type { MarketItem } from "@/lib/market-items";
import {
  MARKET_CATEGORY_LABELS,
  LISTING_TYPE_LABELS,
} from "@/lib/market-constants";

type MarketCardProps = {
  item: MarketItem;
};

// --------------------------------------------
// تنسيق الأرقام بفواصل الآلاف
// --------------------------------------------
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// --------------------------------------------
// تنسيق السعر
// --------------------------------------------
function formatPrice(item: MarketItem): string {
  if (item.price === null) return "السعر عند الاتصال";
  const formatted = formatNumber(item.price);
  if (item.priceUnit === "daily") return `${formatted} دج / يوم`;
  if (item.priceUnit === "monthly") return `${formatted} دج / شهر`;
  return `${formatted} دج`;
}

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function MarketCard({ item }: MarketCardProps) {
  const categoryLabel = MARKET_CATEGORY_LABELS[item.category];
  const listingLabel = LISTING_TYPE_LABELS[item.listingType];

  return (
    <article className="rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col">
      {/* ------- الصورة / Placeholder ------- */}
      <div className="relative aspect-[4/3] bg-surface-elevated border-b flex items-center justify-center">
        {/* أيقونة صندوق/أدوات (Placeholder) */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted opacity-30"
          aria-hidden="true"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </svg>

        {/* بادج الفئة — الزاوية العلوية اليمنى */}
        <span className="absolute top-3 start-3 rounded-full bg-market px-3 py-1 text-xs font-medium text-white">
          {categoryLabel}
        </span>

        {/* بادج نوع العرض — الزاوية العلوية اليسرى */}
        <span className="absolute top-3 end-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {listingLabel}
        </span>
      </div>

      {/* ------- المعلومات ------- */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* العنوان */}
        <h3 className="text-base font-medium leading-snug">{item.title}</h3>

        {/* الولاية */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>ولاية {item.wilaya}</span>
        </div>

        {/* السعر */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9 8h4.5a2 2 0 0 1 0 4H9v4M9 12h5" />
          </svg>
          <span className="tabular-nums">{formatPrice(item)}</span>
        </div>

        {/* رقم الهاتف */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span dir="ltr" className="tabular-nums">
            {item.phone}
          </span>
        </div>

        {/* رقم المرجع */}
        <div className="mt-auto pt-3 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {item.reference}
          </span>
        </div>
      </div>
    </article>
  );
}
