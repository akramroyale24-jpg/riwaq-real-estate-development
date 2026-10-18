import PageHeader from "@/components/layout/PageHeader";
import ProfessionalsBrowser from "@/components/professional/ProfessionalsBrowser";
import { SAMPLE_PROFESSIONALS } from "@/lib/professionals";
import { PUBLISH_PROFESSIONAL_FORM_URL } from "@/lib/external-links";

export default function ProfessionalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <PageHeader
        variant="professionals"
        title="المهنيون والشركاء"
        description="دليل المهنيين والحرفيين والشركاء في القطاع العقاري."
      />

      <div className="flex justify-start">
        <a
          href={PUBLISH_PROFESSIONAL_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 min-h-[44px] rounded-md bg-professionals px-5 py-2.5 text-sm font-medium text-white"
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
            <path d="M12 5v14M5 12h14" />
          </svg>
          سجّل كمهني
        </a>
      </div>

      <ProfessionalsBrowser professionals={SAMPLE_PROFESSIONALS} />
    </div>
  );
}
