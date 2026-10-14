import Link from "next/link";
import type { MarketItem } from "@/lib/market-items";
import {
  MARKET_CATEGORY_LABELS,
  LISTING_TYPE_LABELS,
} from "@/lib/market-constants";

type MarketDetailProps = {
  item: MarketItem;
};

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatPrice(item: MarketItem): string {
  if (item.price === null) return "السعر عند الاتصال";
  const formatted = formatNumber(item.price);
  if (item.priceUnit === "daily") return `${formatted} دج / يوم`;
  if (item.priceUnit === "monthly") return `${formatted} دج / شهر`;
  return `${formatted} دج`;
}

function InfoRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b last:border-b-0">
      <span className="text-text-muted shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 space-y-0.5">
        <p className="text-xs text-text-muted">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

export default function MarketDetail({ item }: MarketDetailProps) {
  const categoryLabel = MARKET_CATEGORY_LABELS[item.category];
  const listingLabel = LISTING_TYPE_LABELS[item.listingType];

  return (
    <div className="space-y-8">
      <Link
        href="/market"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        رجوع إلى سوق البناء
      </Link>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-market px-3 py-1 text-xs font-medium text-white">
            {categoryLabel}
          </span>
          <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
            {listingLabel}
          </span>
        </div>

        <h1 className="text-2xl font-bold md:text-3xl">{item.title}</h1>
      </div>

      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div className="h-1 bg-market" aria-hidden="true" />

        <div className="p-6">
          <InfoRow
            label="الفئة"
            value={categoryLabel}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
            }
          />

          <InfoRow
            label="نوع العرض"
            value={listingLabel}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 12V8H6a2 2 0 0 1 0-4h12v4M4 6v12a2 2 0 0 0 2 2h14v-4M18 12a2 2 0 0 0 0 4h4v-4z" />
              </svg>
            }
          />

          <InfoRow
            label="الولاية"
            value={`ولاية ${item.wilaya}`}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />

          <InfoRow
            label="السعر"
            value={formatPrice(item)}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9 8h4.5a2 2 0 0 1 0 4H9v4M9 12h5" />
              </svg>
            }
          />

          <InfoRow
            label="رقم الهاتف"
            value={item.phone}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />

          <InfoRow
            label="رقم المرجع"
            value={item.reference}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
