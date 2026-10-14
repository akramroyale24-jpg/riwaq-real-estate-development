import Link from "next/link";
import type { Article } from "@/lib/encyclopedia";
import { CHAPTER_LABELS } from "@/lib/encyclopedia-constants";

type ArticleDetailProps = {
  article: Article;
};

export default function ArticleDetail({ article }: ArticleDetailProps) {
  const chapterLabel = CHAPTER_LABELS[article.chapter];

  return (
    <div className="space-y-8">
      {/* زر الرجوع */}
      <Link
        href="/encyclopedia"
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
        رجوع إلى الموسوعة
      </Link>

      {/* ترويسة المقال */}
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-encyclopedia/10 px-3 py-1 text-xs font-medium text-encyclopedia">
          {chapterLabel}
        </span>

        <h1 className="text-2xl font-bold md:text-3xl leading-snug">
          {article.title}
        </h1>
      </div>

      {/* بطاقة المحتوى */}
      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div className="h-1 bg-encyclopedia" aria-hidden="true" />

        <div className="p-6 md:p-8 space-y-6">
          {/* المقتطف */}
          <p className="text-base leading-loose text-text">
            {article.excerpt}
          </p>

          {/* ملاحظة: المحتوى الكامل قيد الإعداد */}
          <div className="rounded-md border border-dashed bg-surface-elevated p-4 text-sm text-text-muted text-center">
            المحتوى الكامل لهذا المقال قيد الإعداد — سيتوفّر قريبًا
          </div>

          {/* رقم المرجع */}
          <div className="pt-4 border-t text-xs text-text-muted">
            رقم المرجع:{" "}
            <span dir="ltr" className="font-medium">
              {article.reference}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
