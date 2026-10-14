import Link from "next/link";
import type { Property } from "@/lib/properties";
import {
  TRANSACTION_LABELS,
  PROPERTY_TYPE_LABELS,
  LAND_SUB_CATEGORY_LABELS,
  BUILDING_SUB_CATEGORY_LABELS,
  PROJECT_SUB_CATEGORY_LABELS,
} from "@/lib/constants";

type PropertyDetailProps = {
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
// صياغة نوع المعاملة
// --------------------------------------------
const transactionPhrase: Record<Property["transaction"], string> = {
  sale: "للبيع",
  rent: "للإيجار",
  reservation: "حجز",
};

// --------------------------------------------
// استخراج التصنيف الفرعي
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
// تنسيق الأرقام
// --------------------------------------------
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatPrice(property: Property): string {
  if (property.price === null) return "السعر عند الاتصال";
  const formatted = formatNumber(property.price);
  if (property.priceUnit === "monthly") return `${formatted} دج / شهر`;
  return `${formatted} دج`;
}

// --------------------------------------------
// صف معلومات
// --------------------------------------------
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

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function PropertyDetail({ property }: PropertyDetailProps) {
  const subCategoryLabel = getSubCategoryLabel(property);
  const transactionLabel = TRANSACTION_LABELS[property.transaction];
  const typeLabel = PROPERTY_TYPE_LABELS[property.type];
  const phrase = transactionPhrase[property.transaction];

  return (
    <div className="space-y-8">
      {/* زر الرجوع */}
      <Link
        href="/real-estate"
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
        رجوع إلى العروض العقارية
      </Link>

      {/* ترويسة التفاصيل */}
      <div className="space-y-4">
        {/* البادجات */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${transactionColors[property.transaction]}`}
          >
            {transactionLabel}
          </span>
          <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
            {typeLabel}
          </span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-2xl font-bold md:text-3xl">
          {subCategoryLabel} — {phrase}
        </h1>
      </div>

      {/* بطاقة المعلومات */}
      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        {/* شريط لوني علوي */}
        <div
          className={`h-1 ${
            property.transaction === "sale"
              ? "bg-realestate"
              : property.transaction === "rent"
                ? "bg-professionals"
                : "bg-market"
          }`}
          aria-hidden="true"
        />

        <div className="p-6">
          <InfoRow
            label="الموقع"
            value={`${property.wilaya} — ${property.baladiya}`}
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
            label="المساحة"
            value={`${formatNumber(property.area)} م²`}
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
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <path d="M3 9h18M9 3v18" />
              </svg>
            }
          />

          <InfoRow
            label="السعر"
            value={formatPrice(property)}
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
            value={property.phone}
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
            value={property.reference}
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
