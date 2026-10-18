// ============================================
// ثوابت المشروع — أنواع المعاملات والعقارات والتصنيفات
// ============================================

// --------------------------------------------
// 1. أنواع المعاملات
// --------------------------------------------
export const TRANSACTIONS = {
  SALE: "sale",
  RENT: "rent",
  RESERVATION: "reservation",
} as const;

export type Transaction = (typeof TRANSACTIONS)[keyof typeof TRANSACTIONS];

export const TRANSACTION_LABELS: Record<Transaction, string> = {
  sale: "بيع",
  rent: "إيجار",
  reservation: "حجز",
};

// --------------------------------------------
// 2. أنواع العقارات
// --------------------------------------------
export const PROPERTY_TYPES = {
  LAND: "land",
  BUILDING: "building",
  PROJECT: "project",
} as const;

export type PropertyType =
  (typeof PROPERTY_TYPES)[keyof typeof PROPERTY_TYPES];

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  land: "أرض",
  building: "مبنى",
  project: "مشروع",
};

// --------------------------------------------
// 3. التصنيفات الفرعية — الأراضي
// --------------------------------------------
export const LAND_SUB_CATEGORIES = {
  URBAN: "urban",
  AGRICULTURAL: "agricultural",
  INDUSTRIAL: "industrial",
  TOURISTIC: "touristic",
} as const;

export type LandSubCategory =
  (typeof LAND_SUB_CATEGORIES)[keyof typeof LAND_SUB_CATEGORIES];

export const LAND_SUB_CATEGORY_LABELS: Record<LandSubCategory, string> = {
  urban: "أرض في منطقة حضرية",
  agricultural: "أرض في منطقة زراعية",
  industrial: "أرض في منطقة صناعية",
  touristic: "أرض في منطقة سياحية",
};

// --------------------------------------------
// 4. التصنيفات الفرعية — المباني
// --------------------------------------------
export const BUILDING_SUB_CATEGORIES = {
  RESIDENTIAL: "residential",
  COMMERCIAL: "commercial",
  PROFESSIONAL: "professional",
  INDUSTRIAL: "industrial",
} as const;

export type BuildingSubCategory =
  (typeof BUILDING_SUB_CATEGORIES)[keyof typeof BUILDING_SUB_CATEGORIES];

export const BUILDING_SUB_CATEGORY_LABELS: Record<BuildingSubCategory, string> = {
  residential: "عقار سكني",
  commercial: "عقار تجاري",
  professional: "عقار مهني",
  industrial: "عقار صناعي",
};

// --------------------------------------------
// 5. التصنيفات الفرعية — المشاريع
// --------------------------------------------
export const PROJECT_SUB_CATEGORIES = {
  ASSETS: "assets",
  AGRICULTURAL: "agricultural",
  INVESTMENT: "investment",
  TOURISM: "tourism",
} as const;

export type ProjectSubCategory =
  (typeof PROJECT_SUB_CATEGORIES)[keyof typeof PROJECT_SUB_CATEGORIES];

export const PROJECT_SUB_CATEGORY_LABELS: Record<ProjectSubCategory, string> = {
  assets: "أصول عقارية",
  agricultural: "مشاريع فلاحية وإنتاجية",
  investment: "مشاريع استثمارية وخدماتية",
  tourism: "مشاريع سياحية وترفيهية",
};

// --------------------------------------------
// 6. وحدات السعر (للعرض فقط)
// --------------------------------------------
export const PRICE_UNITS = {
  TOTAL: "total",
  MONTHLY: "monthly",
} as const;

export type PriceUnit = (typeof PRICE_UNITS)[keyof typeof PRICE_UNITS];

export const PRICE_UNIT_LABELS: Record<PriceUnit, string> = {
  total: "",
  monthly: "/ شهر",
};
// --------------------------------------------
// 7. تصنيفات الحجز
// --------------------------------------------
export const RESERVATION_SUB_CATEGORIES = {
  VSP: "vsp",
  HIFZ_HAQ: "hifz-haq",
} as const;

export type ReservationSubCategory =
  (typeof RESERVATION_SUB_CATEGORIES)[keyof typeof RESERVATION_SUB_CATEGORIES];

export const RESERVATION_SUB_CATEGORY_LABELS: Record<
  ReservationSubCategory,
  string
> = {
  vsp: "عقد البيع على التصاميم (VSP)",
  "hifz-haq": "عقد حفظ الحق",
};
