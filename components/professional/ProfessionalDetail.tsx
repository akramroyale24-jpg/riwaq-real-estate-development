import Link from "next/link";
import type { Professional } from "@/lib/professionals";
import {
  SPECIALIZATION_LABELS,
  MOBILITY_SCOPE_LABELS,
} from "@/lib/professional-constants";

type ProfessionalDetailProps = {
  professional: Professional;
};

function InfoRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b last:border-b-0">
      <span className="text-text-muted shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 space-y-0.5">
        <p className="text-xs text-text-muted">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

export default function ProfessionalDetail({
  professional,
}: ProfessionalDetailProps) {
  const specializationLabel = SPECIALIZATION_LABELS[professional.specialization];
  const mobilityLabel = MOBILITY_SCOPE_LABELS[professional.mobility];

  return (
    <div className="space-y-8">
      <Link
        href="/professionals"
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
        رجوع إلى دليل المهنيين
      </Link>

      <div className="space-y-4">
        <span className="inline-block rounded-full bg-professionals px-3 py-1 text-xs font-medium text-white">
          {specializationLabel}
        </span>

        <h1 className="text-2xl font-bold md:text-3xl">{professional.fullName}</h1>
      </div>

      <div className="rounded-lg border bg-surface shadow-card overflow-hidden">
        <div className="h-1 bg-professionals" aria-hidden="true" />

        <div className="p-6">
          <InfoRow
            label="سنوات الخبرة"
            value={`${professional.experienceYears} سنة`}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            }
          />

          <InfoRow
            label="الولاية"
            value={`ولاية ${professional.wilaya}`}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />

          <InfoRow
            label="نطاق التنقل"
            value={mobilityLabel}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM23 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 17V9l2-4h11l3 5v7M16 5v5h5" />
              </svg>
            }
          />

          <InfoRow
            label="رقم الهاتف"
            value={professional.phone}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />

          <InfoRow
            label="رقم المرجع"
            value={professional.reference}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
