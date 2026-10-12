import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export default function MarketPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="market"
        title="سوق البناء والتجهيزات"
        description="مواد البناء، المعدات، والآليات الثقيلة للبيع والكراء."
      />
      <Card>
        <p className="text-center text-text-muted py-8">
          هذا القسم قيد الإنشاء — سيُبنى المحتوى قريبًا
        </p>
      </Card>
    </div>
  );
}
