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
  COMMERCIAL: "commercial",
} as const;

export type PropertyType =
  (typeof PROPERTY_TYPES)[keyof typeof PROPERTY_TYPES];

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  land: "أرض",
  building: "مبنى",
  project: "مشروع",
  commercial: "محل تجاري",
};

// --------------------------------------------
// 3. التصنيفات الفرعية — الأراضي
// --------------------------------------------
export const LAND_SUB_CATEGORIES = {
  URBAN: "urban",
  INDUSTRIAL: "industrial",
  AGRICULTURAL: "agricultural",
  TOURISTIC: "touristic",
} as const;

export type LandSubCategory =
  (typeof LAND_SUB_CATEGORIES)[keyof typeof LAND_SUB_CATEGORIES];

export const LAND_SUB_CATEGORY_LABELS: Record<LandSubCategory, string> = {
  urban: "أرض في منطقة حضرية",
  industrial: "أرض في منطقة صناعية",
  agricultural: "أرض في منطقة زراعية",
  touristic: "أرض في منطقة سياحية",
};

// --------------------------------------------
// 4. التصنيفات الفرعية — المباني
// --------------------------------------------
export const BUILDING_SUB_CATEGORIES = {
  APARTMENT: "apartment",
  HOUSING_UNIT: "housing-unit",
  HOUSE: "house",
  VILLA: "villa",
} as const;

export type BuildingSubCategory =
  (typeof BUILDING_SUB_CATEGORIES)[keyof typeof BUILDING_SUB_CATEGORIES];

export const BUILDING_SUB_CATEGORY_LABELS: Record<BuildingSubCategory, string> = {
  apartment: "شقة",
  "housing-unit": "وحدة سكنية",
  house: "منزل",
  villa: "فيلا",
};

// --------------------------------------------
// 5. التصنيفات الفرعية — المشاريع
// --------------------------------------------
export const PROJECT_SUB_CATEGORIES = {
  RESIDENTIAL: "residential",
  COMMERCIAL: "commercial",
  TOURISTIC: "touristic",
  INDUSTRIAL: "industrial",
} as const;

export type ProjectSubCategory =
  (typeof PROJECT_SUB_CATEGORIES)[keyof typeof PROJECT_SUB_CATEGORIES];

export const PROJECT_SUB_CATEGORY_LABELS: Record<ProjectSubCategory, string> = {
  residential: "مشروع سكني",
  commercial: "مشروع تجاري",
  touristic: "مشروع سياحي",
  industrial: "مشروع صناعي",
};
