import Link from "next/link";
import type { Property } from "@/lib/properties";
import { formatPrice, formatDate } from "@/lib/properties";
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
// الشريط اللوني العلوي حسب نوع المعاملة
// --------------------------------------------
const transactionBarClass: Record<Property["transaction"], string> = {
  sale: "bg-realestate",
  rent: "bg-professionals",
  reservation: "bg-market",
};

const transactionBadgeClass: Record<Property["transaction"], string> = {
  sale: "bg-realestate text-white",
  rent: "bg-professionals text-white",
  reservation: "bg-market text-white",
};

// --------------------------------------------
// التصنيف الفرعي المختصر (للبادج)
// --------------------------------------------
function getSubCategoryLabel(property: Property): string {
  switch (property.type) {
    case "land":
      return LAND_SUB_CATEGORY_LABELS[property.subCategory];
    case "building":
      return BUILDING_SUB_CATEGORY_LABELS[property.subCategory];
    case "project":
      return PROJECT_SUB_CATEGORY_LABELS[property.subCategory];
  }
}

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function PropertyCard({ property }: PropertyCardProps) {
  const subCategoryLabel = getSubCategoryLabel(property);
  const transactionLabel = TRANSACTION_LABELS[property.transaction];
  const typeLabel = PROPERTY_TYPE_LABELS[property.type];

  return (
    <Link
      href={`/real-estate/${property.id}`}
      className="relative flex rounded-lg border bg-surface shadow-card overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[160px] md:min-h-[200px]"
    >
      {/* الشريط اللوني العلوي */}
      <div
        className={`absolute top-0 start-0 end-0 h-1 z-10 ${transactionBarClass[property.transaction]}`}
        aria-hidden="true"
      />

      {/* الصورة / Placeholder — يمين في RTL */}
      <div className="w-28 md:w-40 shrink-0 bg-surface-elevated border-e flex items-center justify-center">
        <svg
          width="44"
          height="44"
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
      </div>

      {/* المحتوى */}
      <div className="flex-1 p-3 md:p-4 pt-4 md:pt-5 flex flex-col gap-1.5 md:gap-2 min-w-0">
        {/* البادجات */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${transactionBadgeClass[property.transaction]}`}
          >
            {transactionLabel}
          </span>
          <span className="rounded-full bg-slate-900/70 px-2 py-0.5 text-xs font-medium text-white">
            {typeLabel}
          </span>
          <span className="rounded-full bg-surface-elevated border px-2 py-0.5 text-xs font-medium text-text-muted">
            {subCategoryLabel}
          </span>
        </div>

        {/* الوصف — مقصوص إلى سطرين */}
        <p className="text-sm md:text-base font-medium leading-snug line-clamp-2">
          {property.description}
        </p>

        {/* الموقع */}
        <div className="flex items-center gap-1.5 text-xs md:text-sm text-text-muted min-w-0">
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
          <span className="truncate">
            {property.wilaya} — {property.baladiya}
            {property.neighborhood ? ` — ${property.neighborhood}` : ""}
          </span>
        </div>

        {/* المساحة + السعر */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm">
          <div className="flex items-center gap-1">
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
          <div className="flex items-center gap-1 font-medium">
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

        {/* الهاتف + التاريخ (التاريخ مخفي على الهاتف) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-text-muted">
          <div className="flex items-center gap-1">
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
          <div className="hidden md:flex items-center gap-1">
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
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span className="tabular-nums">
              {formatDate(property.publishedAt)}
            </span>
          </div>
        </div>

        {/* رقم المرجع (مخفي على الهاتف) */}
        <div className="hidden md:block mt-auto pt-2 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {property.reference}
          </span>
        </div>
      </div>
    </Link>
  );
}
