import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export default function ProfessionalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="professionals"
        title="المهنيون والشركاء"
        description="دليل المهنيين والحرفيين والشركاء في القطاع العقاري."
      />
      <Card>
        <p className="text-center text-text-muted py-8">
          هذا القسم قيد الإنشاء — سيُبنى المحتوى قريبًا
        </p>
      </Card>
    </div>
  );
}
