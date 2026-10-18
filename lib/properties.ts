// ============================================
// نوع العقار + بيانات النماذج
// ============================================

import type {
  Transaction,
  LandSubCategory,
  BuildingSubCategory,
  ProjectSubCategory,
  PriceUnit,
} from "./constants";

// --------------------------------------------
// 1. الحقول المشتركة بين كل العقارات
// --------------------------------------------
type PropertyBase = {
  // ---- أساسي ----
  id: string;
  reference: string;
  transaction: Transaction;
  publishedAt: string; // ISO: YYYY-MM-DD

  // ---- 1. الموقع ----
  wilaya: string;
  baladiya: string;
  neighborhood: string;
  urbanPlan: string;
  area: number; // المساحة الإجمالية بالمتر المربع
  builtArea?: number; // مساحة المبنى (اختياري)
  gardenArea?: number; // مساحة الحديقة (اختياري)

  // ---- 2. وثائق الملكية ----
  realEstateBook: string;
  ownershipDeed: string;
  surveyDocuments: string;

  // ---- 3. الرخص ----
  buildingPermit: string;
  subdivisionPermit: string;
  demolitionPermit: string;

  // ---- 4. الوضعية القانونية ----
  negativeCertificate: string;
  urbanizationCertificate: string;
  judicialRulings: string;

  // ---- الوصف ----
  description: string;

  // ---- التواصل ----
  phone: string;

  // ---- السعر (بالبنتيم) ----
  price: number | null;
  priceUnit?: PriceUnit;

  // ---- الصور ----
  image?: string | null;
};

// --------------------------------------------
// 2. الأنواع الثلاثة (Discriminated Union)
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

// --------------------------------------------
// 3. النوع الموحّد
// --------------------------------------------
export type Property = LandProperty | BuildingProperty | ProjectProperty;

// --------------------------------------------
// 4. بيانات النماذج (فارغة حاليًا)
// --------------------------------------------
export const SAMPLE_PROPERTIES: Property[] = [];

// --------------------------------------------
// 5. تنسيق الأرقام (بلا toLocaleString لمنع hydration mismatch)
// --------------------------------------------
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// --------------------------------------------
// 6. تنسيق السعر (بالبنتيم → مليون سنتيم أو سنتيم)
// --------------------------------------------
export function formatPrice(property: Property): string {
  if (property.price === null) return "السعر عند الاتصال";

  const centimes = property.price;
  let formatted: string;

  if (centimes >= 1_000_000) {
    const millions = centimes / 1_000_000;
    // إن كان الرقم صحيحًا (بلا كسور) نعرضه كاملًا
    const millionsStr =
      millions % 1 === 0
        ? formatNumber(millions)
        : millions.toString().replace(".", ",");
    formatted = `${millionsStr} مليون سنتيم`;
  } else {
    formatted = `${formatNumber(centimes)} سنتيم`;
  }

  if (property.priceUnit === "monthly") {
    formatted += " / شهر";
  }

  return formatted;
}

// --------------------------------------------
// 7. تنسيق التاريخ (ISO → DD-MM-YYYY)
// --------------------------------------------
export function formatDate(isoDate: string): string {
  const parts = isoDate.split("-");
  if (parts.length !== 3) return isoDate;
  const [year, month, day] = parts;
  return `${day}-${month}-${year}`;
}
