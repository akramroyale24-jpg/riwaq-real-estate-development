// ============================================
// ثوابت قسم المهنيين والشركاء
// ============================================

// --------------------------------------------
// 1. التخصصات
// --------------------------------------------
export const SPECIALIZATIONS = {
  CONTRACTING: "contracting",
  ENGINEERING: "engineering",
  SAFETY: "safety",
  SITE_MANAGEMENT: "site-management",
  CRAFTSMEN: "craftsmen",
  TECHNICAL: "technical",
  HEAVY_MACHINERY: "heavy-machinery",
} as const;

export type Specialization =
  (typeof SPECIALIZATIONS)[keyof typeof SPECIALIZATIONS];

export const SPECIALIZATION_LABELS: Record<Specialization, string> = {
  contracting: "المقاولات والتنفيذ",
  engineering: "الدراسات الهندسية",
  safety: "السلامة المهنية",
  "site-management": "تسيير موقع البناء",
  craftsmen: "الحرفيون واليد العاملة",
  technical: "التخصصات الفنية",
  "heavy-machinery": "تشغيل وصيانة الآليات الثقيلة",
};

// --------------------------------------------
// 2. نطاق التنقل
// --------------------------------------------
export const MOBILITY_SCOPES = {
  LOCAL: "local",
  REGIONAL: "regional",
} as const;

export type MobilityScope =
  (typeof MOBILITY_SCOPES)[keyof typeof MOBILITY_SCOPES];

export const MOBILITY_SCOPE_LABELS: Record<MobilityScope, string> = {
  local: "يعمل في ولايته فقط",
  regional: "مستعد للتنقل لمختلف الولايات",
};
