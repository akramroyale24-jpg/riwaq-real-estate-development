import { notFound } from "next/navigation";
import PropertyDetail from "@/components/property/PropertyDetail";
import { SAMPLE_PROPERTIES } from "@/lib/properties";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = SAMPLE_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <PropertyDetail property={property} />
    </div>
  );
}
