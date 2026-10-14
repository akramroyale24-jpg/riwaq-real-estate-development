import PageHeader from "@/components/layout/PageHeader";
import ArticleCard from "@/components/encyclopedia/ArticleCard";
import { SAMPLE_ARTICLES } from "@/lib/encyclopedia";
import { CHAPTERS, CHAPTER_LABELS, type Chapter } from "@/lib/encyclopedia-constants";

// ترتيب الأبواب الخمسة كما في وثيقة المشروع
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
