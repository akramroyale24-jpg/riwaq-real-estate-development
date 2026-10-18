import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import {
  LAND_SUB_CATEGORY_LABELS,
  BUILDING_SUB_CATEGORY_LABELS,
  PROJECT_SUB_CATEGORY_LABELS,
  type LandSubCategory,
  type BuildingSubCategory,
  type ProjectSubCategory,
} from "@/lib/constants";

// --------------------------------------------
// رابط Google Forms للنشر (يُعدّل لاحقًا عند الحاجة)
// --------------------------------------------
const PUBLISH_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScjUQvgWwH6weyWnZcI0pJ-MxdhXNukaFerQ8EBKJYWdRZELg/viewform?usp=publish-editor";

// --------------------------------------------
// بيانات الأقسام الثلاثة
// --------------------------------------------
type SectionCard = {
  href: string;
  title: string;
};

type Section = {
  title: string;
  cards: SectionCard[];
};

const LAND_CARDS: SectionCard[] = (
  Object.keys(LAND_SUB_CATEGORY_LABELS) as LandSubCategory[]
).map((key) => ({
  href: `/real-estate/sale/land/${key}`,
  title: LAND_SUB_CATEGORY_LABELS[key],
}));

const BUILDING_CARDS: SectionCard[] = (
  Object.keys(BUILDING_SUB_CATEGORY_LABELS) as BuildingSubCategory[]
).map((key) => ({
  href: `/real-estate/sale/building/${key}`,
  title: BUILDING_SUB_CATEGORY_LABELS[key],
}));

const PROJECT_CARDS: SectionCard[] = (
  Object.keys(PROJECT_SUB_CATEGORY_LABELS) as ProjectSubCategory[]
).map((key) => ({
  href: `/real-estate/sale/project/${key}`,
  title: PROJECT_SUB_CATEGORY_LABELS[key],
}));

const SECTIONS: Section[] = [
  { title: "الأراضي المعروضة للبيع", cards: LAND_CARDS },
  { title: "المباني المعروضة للبيع", cards: BUILDING_CARDS },
  { title: "المشاريع المعروضة للبيع", cards: PROJECT_CARDS },
];

// --------------------------------------------
// بطاقة قسم صغيرة
// --------------------------------------------
function SectionLinkCard({ href, title }: SectionCard) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 rounded-lg border bg-surface p-4 shadow-card transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <span className="text-sm font-medium leading-snug">{title}</span>
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
        className="shrink-0 text-text-muted group-hover:text-primary transition-colors"
      >
        <path d="m12 19-7-7 7-7M19 12H5" />
      </svg>
    </Link>
  );
}

// --------------------------------------------
// الصفحة
// --------------------------------------------
export default function SalePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
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

      {/* الترويسة */}
      <PageHeader
        variant="realestate"
        title="العقارات المعروضة للبيع"
        description="تصفح العقارات المتاحة للبيع في مختلف الولايات، مصنفة حسب النوع والتصنيف الفرعي."
      />

      {/* المقال الترحيبي */}
      <section className="rounded-lg border bg-surface-elevated p-6 md:p-8 space-y-4">
        <p className="text-sm md:text-base leading-loose text-text-muted">
          في هذا القسم، تجد جميع العقارات المعروضة للبيع في الجزائر. تصفح حسب
          نوع العقار: أراضٍ، مبانٍ، أو مشاريع استثمارية. اختر التصنيف الذي يهمك
          للوصول إلى العروض المتاحة.
        </p>
        <div>
          <a
            href={PUBLISH_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-realestate px-5 py-2.5 text-sm font-medium text-white"
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
      </section>

      {/* الأقسام الثلاثة */}
      {SECTIONS.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {section.cards.map((card) => (
              <SectionLinkCard key={card.href} {...card} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
