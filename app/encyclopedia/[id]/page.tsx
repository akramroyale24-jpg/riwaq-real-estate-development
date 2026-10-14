import { notFound } from "next/navigation";
import ArticleDetail from "@/components/encyclopedia/ArticleDetail";
import { SAMPLE_ARTICLES } from "@/lib/encyclopedia";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = SAMPLE_ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <ArticleDetail article={article} />
    </div>
  );
}
