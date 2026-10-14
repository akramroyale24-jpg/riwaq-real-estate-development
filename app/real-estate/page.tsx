import PageHeader from "@/components/layout/PageHeader";
import RealEstateBrowser from "@/components/property/RealEstateBrowser";
import { SAMPLE_PROPERTIES } from "@/lib/properties";

export default function RealEstatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="realestate"
        title="العروض العقارية"
        description="بيع، إيجار، وحجز العقارات في مختلف الولايات."
      />
      <RealEstateBrowser properties={SAMPLE_PROPERTIES} />
    </div>
  );
}
