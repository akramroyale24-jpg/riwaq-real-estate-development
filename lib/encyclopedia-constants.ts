// ============================================
// ثوابت قسم الموسوعة العقارية والعمرانية
// ============================================

// --------------------------------------------
// الأبواب الخمسة
// --------------------------------------------
export const CHAPTERS = {
  FUNDAMENTALS: "fundamentals",
  LEGAL: "legal",
  GOODS: "goods",
  URBAN_PLANNING: "urban-planning",
  MARKET_STATUS: "market-status",
} as const;

export type Chapter = (typeof CHAPTERS)[keyof typeof CHAPTERS];

export const CHAPTER_LABELS: Record<Chapter, string> = {
  fundamentals: "المفاهيم الأساسية في الترقية العقارية",
  legal: "الإجراءات القانونية والإدارية",
  goods: "السلع والمعدات",
  "urban-planning": "تحسين التهيئة العمرانية",
  "market-status": "حال العقار الجزائري والأسعار",
};
