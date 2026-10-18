import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import PropertyCard from "@/components/property/PropertyCard";
import { SAMPLE_PROPERTIES } from "@/lib/properties";
import {
  BUILDING_SUB_CATEGORY_LABELS,
  type BuildingSubCategory,
} from "@/lib/constants";

// --------------------------------------------
// رابط Google Forms
// --------------------------------------------
const PUBLISH_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScjUQvgWwH6weyWnZcI0pJ-MxdhXNukaFerQ8EBKJYWdRZELg/viewform?usp=publish-editor";

// --------------------------------------------
// الأنواع الصالحة
// --------------------------------------------
const VALID_TYPES = Object.keys(
  BUILDING_SUB_CATEGORY_LABELS
) as BuildingSubCategory[];

// --------------------------------------------
// الصفحة
// --------------------------------------------
type PageProps = {
  params: Promise<{ type: string }>;
};

export default async function RentTypePage({ params }: PageProps) {
  const { type } = await params;

  // التحقق من صحة النوع
  if (!VALID_TYPES.includes(type as BuildingSubCategory)) {
    notFound();
  }

  const typeKey = type as BuildingSubCategory;
  const typeLabel = BUILDING_SUB_CATEGORY_LABELS[typeKey];

  // فلترة المباني للإيجار من هذا النوع
  const filtered = SAMPLE_PROPERTIES.filter(
    (p) =>
      p.transaction === "rent" &&
      p.type === "building" &&
      p.subCategory === typeKey
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      {/* زر الرجوع */}
      <Link
        href="/real-estate/rent"
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
        رجوع إلى العقارات المعروضة للإيجار
      </Link>

      {/* الترويسة */}
      <PageHeader
        variant="professionals"
        title={`${typeLabel} للإيجار`}
        description={`تصفح ${typeLabel} المعروضة للإيجار في مختلف الولايات.`}
      />

      {/* زر إضافة عرض */}
      <div className="flex justify-start">
        <a
          href={PUBLISH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-professionals px-5 py-2.5 text-sm font-medium text-white"
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
            <path d="M12 5v14M5 12h14" />
          </svg>
          أضف عرضك الآن
        </a>
      </div>

      {/* ------- النتائج ------- */}
      {filtered.length > 0 ? (
        <>
          <p className="text-sm text-text-muted">
            {filtered.length} عرض متاح
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-lg border bg-surface p-12 text-center space-y-3">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-text-muted opacity-40"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="m9 9 6 6M15 9l-6 6" />
          </svg>
          <p className="text-lg font-medium">لا توجد عروض متاحة حاليًا</p>
          <p className="text-sm text-text-muted">
            سيتم إضافة العروض الجديدة قريبًا.
          </p>
        </div>
      )}
    </div>
  );
}
