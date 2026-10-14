import type { Article } from "@/lib/encyclopedia";
import { CHAPTER_LABELS } from "@/lib/encyclopedia-constants";

type ArticleCardProps = {
  article: Article;
};

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function ArticleCard({ article }: ArticleCardProps) {
  const chapterLabel = CHAPTER_LABELS[article.chapter];

  return (
    <article className="rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col">
      {/* شريط لوني علوي بترولي */}
      <div className="h-1 bg-encyclopedia" aria-hidden="true" />

      {/* ------- المحتوى ------- */}
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        {/* بادج الباب */}
        <span className="inline-flex w-fit rounded-full bg-encyclopedia/10 px-3 py-1 text-xs font-medium text-encyclopedia">
          {chapterLabel}
        </span>

        {/* عنوان المقال */}
        <h3 className="text-lg font-bold leading-snug">{article.title}</h3>

        {/* مقتطف */}
        <p className="text-sm text-text-muted leading-relaxed">
          {article.excerpt}
        </p>

        {/* رقم المرجع */}
        <div className="mt-auto pt-3 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {article.reference}
          </span>
        </div>
      </div>
    </article>
  );
}
