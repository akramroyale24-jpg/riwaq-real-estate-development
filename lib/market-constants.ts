// ============================================
// ثوابت قسم سوق البناء والتجهيزات
// ============================================

// --------------------------------------------
// 1. الفئات
// --------------------------------------------
export const MARKET_CATEGORIES = {
  MATERIALS: "materials",
  EQUIPMENT: "equipment",
  HEAVY_MACHINERY: "heavy-machinery",
  HARDWARE: "hardware",
} as const;

export type MarketCategory =
  (typeof MARKET_CATEGORIES)[keyof typeof MARKET_CATEGORIES];

export const MARKET_CATEGORY_LABELS: Record<MarketCategory, string> = {
  materials: "مواد البناء",
  equipment: "معدات البناء",
  "heavy-machinery": "الآليات الثقيلة",
  hardware: "الخردوات",
};

// --------------------------------------------
// 2. نوع العرض (بيع أو كراء)
// --------------------------------------------
export const LISTING_TYPES = {
  SALE: "sale",
  RENT: "rent",
} as const;

export type ListingType = (typeof LISTING_TYPES)[keyof typeof LISTING_TYPES];

export const LISTING_TYPE_LABELS: Record<ListingType, string> = {
  sale: "بيع",
  rent: "كراء",
};
