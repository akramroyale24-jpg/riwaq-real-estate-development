import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import {
  RESERVATION_SUB_CATEGORY_LABELS,
  type ReservationSubCategory,
} from "@/lib/constants";

// --------------------------------------------
// رابط Google Forms
// --------------------------------------------
const PUBLISH_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScjUQvgWwH6weyWnZcI0pJ-MxdhXNukaFerQ8EBKJYWdRZELg/viewform?usp=publish-editor";

// --------------------------------------------
// بطاقات أنواع الحجز
// --------------------------------------------
type SectionCard = {
  href: string;
  title: string;
};

const RESERVATION_CARDS: SectionCard[] = (
  Object.keys(RESERVATION_SUB_CATEGORY_LABELS) as ReservationSubCategory[]
).map((key) => ({
  href: `/real-estate/reservation/${key}`,
  title: RESERVATION_SUB_CATEGORY_LABELS[key],
}));

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
export default function ReservationPage() {
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
        variant="market"
        title="العقارات المعروضة للحجز"
        description="تصفح المشاريع المتاحة للحجز: عقد البيع على التصاميم (VSP) وعقد حفظ الحق."
      />

      {/* المقال الترحيبي */}
      <section className="rounded-lg border bg-surface-elevated p-6 md:p-8 space-y-4">
        <p className="text-sm md:text-base leading-loose text-text-muted">
          في هذا القسم، تجد المشاريع العقارية المتاحة للحجز. الحجز نوعان: عقد
          البيع على التصاميم (VSP) للمشاريع المستوفية للشروط والترخيص القانوني،
          وعقد حفظ الحق للحجوزات الأولية والمشاريع في مراحلها الأولى.
        </p>
        <div>
          <a
            href={PUBLISH_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-market px-5 py-2.5 text-sm font-medium text-white"
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

      {/* بطاقات الأنواع */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">أنواع الحجز</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {RESERVATION_CARDS.map((card) => (
            <SectionLinkCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
