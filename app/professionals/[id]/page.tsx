import { notFound } from "next/navigation";
import ProfessionalDetail from "@/components/professional/ProfessionalDetail";
import { SAMPLE_PROFESSIONALS } from "@/lib/professionals";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProfessionalDetailPage({ params }: PageProps) {
  const { id } = await params;
  const professional = SAMPLE_PROFESSIONALS.find((p) => p.id === id);

  if (!professional) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <ProfessionalDetail professional={professional} />
    </div>
  );
}
