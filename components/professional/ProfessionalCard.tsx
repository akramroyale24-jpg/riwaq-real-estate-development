import type { Professional } from "@/lib/professionals";
import {
  SPECIALIZATION_LABELS,
  MOBILITY_SCOPE_LABELS,
} from "@/lib/professional-constants";

type ProfessionalCardProps = {
  professional: Professional;
};

// --------------------------------------------
// المكوّن
// --------------------------------------------
export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const specializationLabel = SPECIALIZATION_LABELS[professional.specialization];
  const mobilityLabel = MOBILITY_SCOPE_LABELS[professional.mobility];

  return (
    <article className="rounded-lg border bg-surface shadow-card overflow-hidden flex flex-col">
      {/* ------- الصورة / Placeholder ------- */}
      <div className="relative aspect-[4/3] bg-surface-elevated border-b flex items-center justify-center">
        {/* أيقونة شخص (Placeholder) */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted opacity-30"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 22c0-4 4-6 8-6s8 2 8 6" />
        </svg>

        {/* بادج التخصص — الزاوية العلوية اليمنى */}
        <span className="absolute top-3 start-3 rounded-full bg-professionals px-3 py-1 text-xs font-medium text-white">
          {specializationLabel}
        </span>
      </div>

      {/* ------- المعلومات ------- */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* الاسم الكامل */}
        <h3 className="text-base font-medium leading-snug">
          {professional.fullName}
        </h3>

        {/* سنوات الخبرة */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span className="tabular-nums">
            {professional.experienceYears} سنة خبرة
          </span>
        </div>

        {/* الولاية */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>ولاية {professional.wilaya}</span>
        </div>

        {/* نطاق التنقل */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM23 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 17V9l2-4h11l3 5v7M16 5v5h5" />
          </svg>
          <span>{mobilityLabel}</span>
        </div>

        {/* رقم الهاتف */}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span dir="ltr" className="tabular-nums">
            {professional.phone}
          </span>
        </div>

        {/* رقم المرجع */}
        <div className="mt-auto pt-3 border-t text-xs text-text-muted">
          رقم المرجع:{" "}
          <span dir="ltr" className="font-medium">
            {professional.reference}
          </span>
        </div>
      </div>
    </article>
  );
}
