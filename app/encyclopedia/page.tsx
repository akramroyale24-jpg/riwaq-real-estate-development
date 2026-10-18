import PageHeader from "@/components/layout/PageHeader";
import ArticleCard from "@/components/encyclopedia/ArticleCard";
import { SAMPLE_ARTICLES } from "@/lib/encyclopedia";
import {
  CHAPTERS,
  CHAPTER_LABELS,
  type Chapter,
} from "@/lib/encyclopedia-constants";
import { PUBLISH_ARTICLE_FORM_URL } from "@/lib/external-links";

// ترتيب الأبواب الخمسة
const CHAPTER_ORDER: Chapter[] = [
  CHAPTERS.FUNDAMENTALS,
  CHAPTERS.LEGAL,
  CHAPTERS.GOODS,
  CHAPTERS.URBAN_PLANNING,
  CHAPTERS.MARKET_STATUS,
];

export default function EncyclopediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-12">
      <PageHeader
        variant="encyclopedia"
        title="الموسوعة العقارية والعمرانية"
        description="مرجع معرفي وقانوني لبناء الثقة ورفع الوعي العقاري."
      />

      {/* زر إضافة مقال */}
      <div className="flex justify-start">
        <a
          href={PUBLISH_ARTICLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-encyclopedia px-5 py-2.5 text-sm font-medium text-white"
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
          أضف مقالًا
        </a>
      </div>

      {CHAPTER_ORDER.map((chapter) => {
        const articles = SAMPLE_ARTICLES.filter((a) => a.chapter === chapter);
        if (articles.length === 0) return null;

        return (
          <section key={chapter} className="space-y-4">
            <h2 className="text-2xl font-bold">{CHAPTER_LABELS[chapter]}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
