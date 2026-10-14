import PageHeader from "@/components/layout/PageHeader";
import ProfessionalsBrowser from "@/components/professional/ProfessionalsBrowser";
import { SAMPLE_PROFESSIONALS } from "@/lib/professionals";

export default function ProfessionalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="professionals"
        title="المهنيون والشركاء"
        description="دليل المهنيين والحرفيين والشركاء في القطاع العقاري."
      />
      <ProfessionalsBrowser professionals={SAMPLE_PROFESSIONALS} />
    </div>
  );
}
