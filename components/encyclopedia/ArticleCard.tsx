import Link from "next/link";
import type { Article } from "@/lib/encyclopedia";
import { CHAPTER_LABELS } from "@/lib/encyclopedia-constants";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const chapterLabel = CHAPTER_LABELS[article.chapter];

  return (
    <Link
      href={`/encyclopedia/${article.id}`}
      className="block rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="h-1 bg-encyclopedia" aria-hidden="true" />

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <span className="inline-flex w-fit rounded-full bg-encyclopedia/10 px-3 py-1 text-xs font-medium text-encyclopedia">
          {chapterLabel}
        </span>

        <h3 className="text-lg font-bold leading-snug">{article.title}</h3>

        <p className="text-sm text-text-muted leading-relaxed">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {article.reference}
          </span>
        </div>
      </div>
    </Link>
  );
}
