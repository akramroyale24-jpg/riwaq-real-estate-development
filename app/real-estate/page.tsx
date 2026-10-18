import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";

// --------------------------------------------
// بيانات البطاقات الثلاث
// --------------------------------------------
const TRANSACTION_CARDS = [
  {
    href: "/real-estate/sale",
    title: "العقارات المعروضة للبيع",
    description:
      "تصفح العقارات المتاحة للبيع: أراضٍ، مبانٍ، ومشاريع في مختلف الولايات.",
    barClass: "bg-realestate",
    iconClass: "text-realestate",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    href: "/real-estate/rent",
    title: "العقارات المعروضة للإيجار",
    description:
      "اعثر على العقارات المتاحة للإيجار: سكنية، تجارية، ومهنية.",
    barClass: "bg-professionals",
    iconClass: "text-professionals",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="15" r="4" />
        <path d="m10.85 12.15 9.15-9.15M18 5l3 3M15 8l3 3" />
      </svg>
    ),
  },
  {
    href: "/real-estate/reservation",
    title: "العقارات المعروضة للحجز",
    description:
      "اطلع على المشاريع المتاحة للحجز: عقد البيع على التصاميم (VSP) وعقد حفظ الحق.",
    barClass: "bg-market",
    iconClass: "text-market",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
      </svg>
    ),
  },
];

// --------------------------------------------
// الصفحة
// --------------------------------------------
export default function RealEstatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      <PageHeader
        variant="realestate"
        title="العروض العقارية"
        description="بيع، إيجار، وحجز العقارات في مختلف الولايات."
      />

      {/* مقال ترحيبي */}
      <section className="rounded-lg border bg-surface-elevated p-6 md:p-8">
        <p className="text-sm md:text-base leading-loose text-text-muted">
          مرحبًا بك في قسم العروض العقارية. هنا تجد العقارات المتاحة في مختلف
          ولايات الوطن، مقسمة حسب نوع المعاملة لتسهيل التصفح. اختر المسار الذي
          يناسبك أدناه لتصفح العروض المتاحة.
        </p>
      </section>

      {/* البطاقات الثلاث */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {TRANSACTION_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[220px]"
          >
            {/* الشريط اللوني */}
            <div className={`h-1 ${card.barClass}`} aria-hidden="true" />

            <div className="flex-1 p-6 flex flex-col items-center text-center gap-4">
              {/* الأيقونة */}
              <div className={`${card.iconClass} opacity-70 group-hover:opacity-100 transition-opacity`}>
                {card.icon}
              </div>

              {/* العنوان */}
              <h2 className="text-lg font-bold leading-snug">{card.title}</h2>

              {/* الوصف */}
              <p className="text-sm text-text-muted leading-relaxed">
                {card.description}
              </p>

              {/* سهم الانتقال */}
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                تصفح الآن
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
                  <path d="m12 19-7-7 7-7M19 12H5" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
