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

type PropertyDetailProps = {
  property: Property;
};

// --------------------------------------------
// ألوان الشريط العلوي حسب نوع المعاملة
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
// التصنيف الفرعي
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
// بطاقة معلومات (Shell)
// --------------------------------------------
function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
      <div className="px-4 py-3 border-b bg-surface-elevated">
        <h2 className="text-sm font-bold">{title}</h2>
      </div>
      <div className="p-4 divide-y">{children}</div>
    </div>
  );
}

// --------------------------------------------
// صف معلومات
// --------------------------------------------
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2.5 first:pt-0 last:pb-0">
      <p className="text-xs text-text-muted mb-0.5">{label}</p>
      <p className="text-sm font-medium leading-relaxed whitespace-pre-line">
        {value}
      </p>
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

  // قائمة حقول الموقع
  const locationFields: { label: string; value: string }[] = [
    { label: "الولاية", value: property.wilaya },
    { label: "البلدية", value: property.baladiya },
    { label: "الحي", value: property.neighborhood },
    { label: "المخطط العمراني", value: property.urbanPlan },
    { label: "المساحة الإجمالية", value: `${property.area} م²` },
  ];
  if (property.builtArea) {
    locationFields.push({
      label: "مساحة المبنى",
      value: `${property.builtArea} م²`,
    });
  }
  if (property.gardenArea) {
    locationFields.push({
      label: "مساحة الحديقة",
      value: `${property.gardenArea} م²`,
    });
  }

  return (
    <div className="space-y-6 md:space-y-8">
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

      {/* ------- ترويسة التفاصيل ------- */}
      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div
          className={`h-1 ${transactionBarClass[property.transaction]}`}
          aria-hidden="true"
        />
        <div className="p-4 md:p-6 space-y-4">
          {/* البادجات */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${transactionBadgeClass[property.transaction]}`}
            >
              {transactionLabel}
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
              {typeLabel}
            </span>
            <span className="rounded-full bg-surface-elevated border px-3 py-1 text-xs font-medium text-text-muted">
              {subCategoryLabel}
            </span>
          </div>

          {/* السعر الكبير */}
          <p className="text-2xl md:text-3xl font-bold">
            {formatPrice(property)}
          </p>

          {/* التاريخ والهاتف */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
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
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span className="tabular-nums">
                نُشر في: {formatDate(property.publishedAt)}
              </span>
            </div>
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
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span dir="ltr" className="tabular-nums">
                {property.phone}
              </span>
            </div>
          </div>

          {/* رقم المرجع */}
          <div className="pt-3 border-t text-xs text-text-muted">
            رقم المرجع:{" "}
            <span dir="ltr" className="font-medium">
              {property.reference}
            </span>
          </div>
        </div>
      </div>

      {/* ------- الوصف ------- */}
      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b bg-surface-elevated">
          <h2 className="text-sm font-bold">وصف العقار</h2>
        </div>
        <div className="p-4">
          <p className="text-sm md:text-base leading-loose whitespace-pre-line">
            {property.description}
          </p>
        </div>
      </div>

      {/* ------- المجموعات الأربع ------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* 1. الموقع */}
        <InfoBlock title="1. الموقع المحدد للعقار">
          {locationFields.map((field) => (
            <InfoRow key={field.label} label={field.label} value={field.value} />
          ))}
        </InfoBlock>

        {/* 2. وثائق الملكية */}
        <InfoBlock title="2. وثائق الملكية للعقار">
          <InfoRow label="الدفتر العقاري" value={property.realEstateBook} />
          <InfoRow label="سند الملكية" value={property.ownershipDeed} />
          <InfoRow label="وثائق المسح" value={property.surveyDocuments} />
        </InfoBlock>

        {/* 3. الرخص */}
        <InfoBlock title="3. الرخص المتعلقة بالعقار">
          <InfoRow label="رخصة البناء" value={property.buildingPermit} />
          <InfoRow label="رخصة التجزئة" value={property.subdivisionPermit} />
          <InfoRow label="رخصة الهدم" value={property.demolitionPermit} />
        </InfoBlock>

        {/* 4. الوضعية القانونية */}
        <InfoBlock title="4. الوضعية القانونية للعقار">
          <InfoRow
            label="شهادة سلبية"
            value={property.negativeCertificate}
          />
          <InfoRow
            label="شهادة التعمير"
            value={property.urbanizationCertificate}
          />
          <InfoRow label="الأحكام القضائية" value={property.judicialRulings} />
        </InfoBlock>
      </div>

      {/* ------- صور العقار ------- */}
      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b bg-surface-elevated">
          <h2 className="text-sm font-bold">صور العقار</h2>
        </div>
        <div className="p-8 text-center text-sm text-text-muted">
          الصور ستُضاف قريبًا
        </div>
      </div>
    </div>
  );
}
