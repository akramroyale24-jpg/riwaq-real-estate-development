import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export default function RealEstatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="realestate"
        title="العروض العقارية"
        description="بيع، إيجار، وحجز العقارات في مختلف الولايات."
      />
      <Card>
        <p className="text-center text-text-muted py-8">
          هذا القسم قيد الإنشاء — سيُبنى المحتوى قريبًا
        </p>
      </Card>
    </div>
  );
}
