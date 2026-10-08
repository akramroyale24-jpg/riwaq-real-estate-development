import Hero from "@/components/home/Hero";
import PathCard from "@/components/home/PathCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-12">
      {/* المنطقة الترحيبية */}
      <Hero />

      {/* منطقة البحث — بصرية فقط، غير مفعّلة */}
      <section aria-label="البحث" className="space-y-3">
        <div className="mx-auto flex max-w-2xl gap-2">
          <input
            type="text"
            placeholder="ابحث عن عقار، مهني، أو منتج..."
            aria-label="حقل البحث (غير مفعّل حاليًا)"
            disabled
            className="flex-1 min-h-[48px] rounded-md border border-border bg-surface-elevated px-4 text-text-muted placeholder:text-text-muted cursor-not-allowed"
          />
          <button
            type="button"
            aria-label="بحث (غير مفعّل حاليًا)"
            disabled
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface-elevated text-text-muted cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
        <p className="text-center text-sm text-text-muted">
          البحث الذكي قيد التطوير — سيتوفّر قريبًا
        </p>
      </section>

      {/* المسارات الأربعة */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">المسارات الرئيسية</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PathCard
            variant="realestate"
            title="العروض العقارية"
            description="بيع، إيجار، وحجز العقارات في مختلف الولايات."
          />
          <PathCard
            variant="professionals"
            title="المهنيون والشركاء"
            description="دليل المهنيين والحرفيين والشركاء في القطاع العقاري."
          />
          <PathCard
            variant="market"
            title="سوق البناء والتجهيزات"
            description="مواد البناء، المعدات، والآليات الثقيلة للبيع والكراء."
          />
          <PathCard
            variant="encyclopedia"
            title="الموسوعة العقارية والعمرانية"
            description="مرجع معرفي وقانوني لبناء الثقة ورفع الوعي العقاري."
          />
        </div>
      </section>

      {/* شريط الأمان والتوثيق */}
      <section className="rounded-lg border bg-surface-elevated p-6 space-y-3">
        <h2 className="text-xl font-bold">الأمان والتوثيق</h2>
        <p className="text-sm text-text-muted leading-relaxed">
          نؤكد على أهمية التعامل المباشر والتعاقد أمام الموثق. جميع الإعلانات
          تخضع لمراجعة فريق رواق قبل النشر.
        </p>
      </section>

      {/* دعوة لنشر إعلان — بصرية فقط، ستُفعّل لاحقًا */}
      <section className="rounded-lg border bg-surface p-8 text-center space-y-4 shadow-md">
        <h2 className="text-2xl font-bold">
          هل لديك عقار أو خدمة لنشرها؟
        </h2>
        <p className="text-text-muted leading-relaxed">
          انشر إعلانك الآن وسيتم مراجعته من فريق رواق قبل النشر.
        </p>
        <button
          type="button"
          aria-label="نشر إعلان (غير مفعّل حاليًا)"
          disabled
          className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md border border-border bg-surface-elevated px-6 py-3 text-text-muted font-medium cursor-not-allowed"
        >
          أنشر إعلانك
        </button>
        <p className="text-sm text-text-muted">
          خاصية النشر ستُفعّل قريبًا
        </p>
      </section>
    </div>
  );
}
