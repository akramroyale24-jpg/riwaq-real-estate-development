import type { Property } from "@/lib/properties";
import {
  TRANSACTION_LABELS,
  PROPERTY_TYPE_LABELS,
  LAND_SUB_CATEGORY_LABELS,
  BUILDING_SUB_CATEGORY_LABELS,
  PROJECT_SUB_CATEGORY_LABELS,
} from "@/lib/constants";

type PropertyCardProps = {
  property: Property;
};

// --------------------------------------------
// ألوان بادج نوع المعاملة
// --------------------------------------------
const transactionColors: Record<Property["transaction"], string> = {
  sale: "bg-realestate text-white",
  rent: "bg-professionals text-white",
  reservation: "bg-market text-white",
};

// --------------------------------------------
// صياغة نوع المعاملة داخل الجملة
// --------------------------------------------
const transactionPhrase: Record<Property["transaction"], string> = {
  sale: "للبيع",
  rent: "للإيجار",
  reservation: "حجز",
};

// --------------------------------------------
// استخراج التصنيف الفرعي حسب نوع العقار
// --------------------------------------------
function getSubCategoryLabel(property: Property): string {
  switch (property.type) {
    case "land":
      return LAND_SUB_CATEGORY_LABELS[property.subCategory];
    case "building":
      return BUILDING_SUB_CATEGORY_LABELS[property.subCategory];
    case "project":
      return PROJECT_SUB_CATEGORY_LABELS[property.subCategory];
    case "commercial":
      return property.subCategory ?? "محل تجاري";
  }
}

// --------------------------------------------
// تنسيق الأرقام بفواصل الآلاف
// --------------------------------------------
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// --------------------------------------------
// تنسيق السعر
// --------------------------------------------
function formatPrice(property: Property): string {
  if (property.price === null) return "السعر عند الاتصال";
  const formatted = formatNumber(property.price);
  if (property.priceUnit === "monthly") {
    return `${formatted} دج / شهر`;
  }
  return `${formatted} دج`;
}

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function PropertyCard({ property }: PropertyCardProps) {
  const subCategoryLabel = getSubCategoryLabel(property);
  const transactionLabel = TRANSACTION_LABELS[property.transaction];
  const typeLabel = PROPERTY_TYPE_LABELS[property.type];
  const phrase = transactionPhrase[property.transaction];

  return (
    <article className="rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col">
      {/* ------- الصورة / Placeholder ------- */}
      <div className="relative aspect-[4/3] bg-surface-elevated border-b flex items-center justify-center">
        {/* أيقونة المبنى (Placeholder) */}
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
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
        </svg>

        {/* بادج نوع المعاملة — الزاوية العلوية اليمنى */}
        <span
          className={`absolute top-3 start-3 rounded-full px-3 py-1 text-xs font-medium ${transactionColors[property.transaction]}`}
        >
          {transactionLabel}
        </span>

        {/* بادج نوع العقار — الزاوية العلوية اليسرى */}
        <span className="absolute top-3 end-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {typeLabel}
        </span>
      </div>

      {/* ------- المعلومات ------- */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* السطر الرئيسي */}
        <h3 className="text-base font-medium leading-snug">
          {subCategoryLabel} — {phrase}
        </h3>

        {/* الولاية والبلدية */}
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
          <span>
            {property.wilaya} — {property.baladiya}
          </span>
        </div>

        {/* المساحة + السعر */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
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
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <path d="M3 9h18M9 3v18" />
            </svg>
            <span className="tabular-nums">{property.area} م²</span>
          </div>

          <div className="flex items-center gap-2 font-medium">
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
            <span className="tabular-nums">{formatPrice(property)}</span>
          </div>
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
            {property.phone}
          </span>
        </div>

        {/* رقم المرجع — أسفل البطاقة */}
        <div className="mt-auto pt-3 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {property.reference}
          </span>
        </div>
      </div>
    </article>
  );
}
