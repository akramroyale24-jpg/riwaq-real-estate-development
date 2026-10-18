import Link from "next/link";
import Hero from "@/components/home/Hero";
import PathCard from "@/components/home/PathCard";
import PropertyCard from "@/components/property/PropertyCard";
import ProfessionalCard from "@/components/professional/ProfessionalCard";
import MarketCard from "@/components/market/MarketCard";
import ArticleCard from "@/components/encyclopedia/ArticleCard";
import { SAMPLE_PROPERTIES } from "@/lib/properties";
import { SAMPLE_PROFESSIONALS } from "@/lib/professionals";
import { SAMPLE_MARKET_ITEMS } from "@/lib/market-items";
import { SAMPLE_ARTICLES } from "@/lib/encyclopedia";
import { PUBLISH_PROPERTY_FORM_URL } from "@/lib/external-links";

export default function Home() {
  const featuredProperties = SAMPLE_PROPERTIES.slice(0, 3);
  const featuredProfessionals = SAMPLE_PROFESSIONALS.slice(0, 3);
  const featuredMarketItems = SAMPLE_MARKET_ITEMS.slice(0, 3);
  const featuredArticles = SAMPLE_ARTICLES.slice(0, 3);

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
            href="/real-estate"
            variant="realestate"
            title="العروض العقارية"
            description="بيع، إيجار، وحجز العقارات في مختلف الولايات."
          />
          <PathCard
            href="/professionals"
            variant="professionals"
            title="المهنيون والشركاء"
            description="دليل المهنيين والحرفيين والشركاء في القطاع العقاري."
          />
          <PathCard
            href="/market"
            variant="market"
            title="سوق البناء والتجهيزات"
            description="مواد البناء، المعدات، والآليات الثقيلة للبيع والكراء."
          />
          <PathCard
            href="/encyclopedia"
            variant="encyclopedia"
            title="الموسوعة العقارية والعمرانية"
            description="مرجع معرفي وقانوني لبناء الثقة ورفع الوعي العقاري."
          />
        </div>
      </section>

      {/* عينات: العروض العقارية */}
      {featuredProperties.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">أحدث العروض العقارية</h2>
            <Link
              href="/real-estate"
              className="text-sm text-primary hover:underline"
            >
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      )}

      {/* عينات: المهنيون والشركاء */}
      {featuredProfessionals.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">مهنيون مميزون</h2>
            <Link
              href="/professionals"
              className="text-sm text-primary hover:underline"
            >
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProfessionals.map((professional) => (
              <ProfessionalCard
                key={professional.id}
                professional={professional}
              />
            ))}
          </div>
        </section>
      )}

      {/* عينات: سوق البناء والتجهيزات */}
      {featuredMarketItems.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">جديد سوق البناء</h2>
            <Link
              href="/market"
              className="text-sm text-primary hover:underline"
            >
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredMarketItems.map((item) => (
              <MarketCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* عينات: الموسوعة العقارية والعمرانية */}
      {featuredArticles.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">من الموسوعة العقارية</h2>
            <Link
              href="/encyclopedia"
              className="text-sm text-primary hover:underline"
            >
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* شريط الأمان والتوثيق */}
      <section className="rounded-lg border bg-surface-elevated p-6 space-y-3">
        <h2 className="text-xl font-bold">الأمان والتوثيق</h2>
        <p className="text-sm text-text-muted leading-relaxed">
          نؤكد على أهمية التعامل المباشر والتعاقد أمام الموثق. جميع الإعلانات
          تخضع لمراجعة فريق رواق قبل النشر.
        </p>
      </section>

      {/* دعوة لنشر إعلان — مفعّلة الآن */}
      <section className="rounded-lg border bg-surface p-8 text-center space-y-4 shadow-card">
        <h2 className="text-2xl font-bold">
          هل لديك عقار أو خدمة لنشرها؟
        </h2>
        <p className="text-text-muted leading-relaxed">
          انشر إعلانك الآن وسيتم مراجعته من فريق رواق قبل النشر.
        </p>
        <a
          href={PUBLISH_PROPERTY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium transition-opacity hover:opacity-90"
        >
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
            <path d="M12 5v14M5 12h14" />
          </svg>
          أنشر إعلانك
        </a>
      </section>
    </div>
  );
}
