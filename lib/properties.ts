// ============================================
// نوع العقار + بيانات النماذج
// ============================================

import type {
  Transaction,
  LandSubCategory,
  BuildingSubCategory,
  ProjectSubCategory,
} from "./constants";

// --------------------------------------------
// 1. الحقول المشتركة بين كل العقارات
// --------------------------------------------
type PropertyBase = {
  id: string;
  reference: string; // مثال: RQ-2026-00147
  transaction: Transaction;
  wilaya: string; // اسم الولاية
  baladiya: string; // اسم البلدية (نص حر)
  area: number; // المساحة بالمتر المربع
  price: number | null; // null = "السعر عند الاتصال"
  priceUnit?: "total" | "monthly"; // monthly للإيجار الشهري
  phone: string;
  image?: string | null; // null = placeholder
};

// --------------------------------------------
// 2. الأنواع الأربعة (Discriminated Union)
// --------------------------------------------
type LandProperty = PropertyBase & {
  type: "land";
  subCategory: LandSubCategory;
};

type BuildingProperty = PropertyBase & {
  type: "building";
  subCategory: BuildingSubCategory;
};

type ProjectProperty = PropertyBase & {
  type: "project";
  subCategory: ProjectSubCategory;
};

type CommercialProperty = PropertyBase & {
  type: "commercial";
  subCategory?: string;
};

// --------------------------------------------
// 3. النوع الموحّد
// --------------------------------------------
export type Property =
  | LandProperty
  | BuildingProperty
  | ProjectProperty
  | CommercialProperty;

// --------------------------------------------
// 4. بيانات النماذج (9 بطاقات)
// --------------------------------------------
export const SAMPLE_PROPERTIES: Property[] = [
  // 1. أرض في منطقة حضرية — بيع
  {
    id: "prop-001",
    reference: "RQ-2026-00147",
    transaction: "sale",
    type: "land",
    subCategory: "urban",
    wilaya: "الجزائر",
    baladiya: "باب الوادي",
    area: 250,
    price: 12500000,
    phone: "0555 12 34 56",
  },

  // 2. أرض في منطقة سياحية — بيع
  {
    id: "prop-002",
    reference: "RQ-2026-00152",
    transaction: "sale",
    type: "land",
    subCategory: "touristic",
    wilaya: "تيبازة",
    baladiya: "شرشال",
    area: 800,
    price: 24000000,
    phone: "0555 12 34 57",
  },

  // 3. أرض في منطقة زراعية — بيع
  {
    id: "prop-003",
    reference: "RQ-2026-00158",
    transaction: "sale",
    type: "land",
    subCategory: "agricultural",
    wilaya: "البليدة",
    baladiya: "الأربعاء",
    area: 5000,
    price: 18000000,
    phone: "0555 12 34 58",
  },

  // 4. مشروع سياحي — بيع
  {
    id: "prop-004",
    reference: "RQ-2026-00163",
    transaction: "sale",
    type: "project",
    subCategory: "touristic",
    wilaya: "تيبازة",
    baladiya: "القليعة",
    area: 5000,
    price: null,
    phone: "0555 12 34 59",
  },

  // 5. شقة — إيجار
  {
    id: "prop-005",
    reference: "RQ-2026-00171",
    transaction: "rent",
    type: "building",
    subCategory: "apartment",
    wilaya: "وهران",
    baladiya: "بئر الجير",
    area: 90,
    price: 45000,
    priceUnit: "monthly",
    phone: "0555 12 34 60",
  },

  // 6. فيلا — إيجار
  {
    id: "prop-006",
    reference: "RQ-2026-00177",
    transaction: "rent",
    type: "building",
    subCategory: "villa",
    wilaya: "الجزائر",
    baladiya: "حيدرة",
    area: 320,
    price: 250000,
    priceUnit: "monthly",
    phone: "0555 12 34 61",
  },

  // 7. مشروع سكني — حجز (VSP)
  {
    id: "prop-007",
    reference: "RQ-2026-00184",
    transaction: "reservation",
    type: "project",
    subCategory: "residential",
    wilaya: "سطيف",
    baladiya: "العلمة",
    area: 120,
    price: null,
    phone: "0555 12 34 62",
  },

  // 8. منزل — بيع
  {
    id: "prop-008",
    reference: "RQ-2026-00190",
    transaction: "sale",
    type: "building",
    subCategory: "house",
    wilaya: "قسنطينة",
    baladiya: "الخروب",
    area: 180,
    price: 22000000,
    phone: "0555 12 34 63",
  },

  // 9. محل تجاري — إيجار
  {
    id: "prop-009",
    reference: "RQ-2026-00196",
    transaction: "rent",
    type: "commercial",
    wilaya: "عنابة",
    baladiya: "الحجار",
    area: 65,
    price: 80000,
    priceUnit: "monthly",
    phone: "0555 12 34 64",
  },
];
