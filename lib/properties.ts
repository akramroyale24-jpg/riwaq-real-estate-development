// ============================================
// نوع العقار + بيانات النماذج
// ============================================

import type {
  Transaction,
  LandSubCategory,
  BuildingSubCategory,
  ProjectSubCategory,
  ReservationSubCategory,
  PriceUnit,
} from "./constants";

// --------------------------------------------
// 1. الحقول المشتركة بين كل العقارات
// --------------------------------------------
type PropertyBase = {
  id: string;
  reference: string;
  transaction: Transaction;
  publishedAt: string;
  wilaya: string;
  baladiya: string;
  neighborhood: string;
  urbanPlan: string;
  area: number;
  builtArea?: number;
  gardenArea?: number;
  realEstateBook: string;
  ownershipDeed: string;
  surveyDocuments: string;
  buildingPermit: string;
  subdivisionPermit: string;
  demolitionPermit: string;
  negativeCertificate: string;
  urbanizationCertificate: string;
  judicialRulings: string;
  description: string;
  phone: string;
  price: number | null;
  priceUnit?: PriceUnit;
  reservationType?: ReservationSubCategory;
  image?: string | null;
};

// --------------------------------------------
// 2. الأنواع (Discriminated Union)
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

export type Property = LandProperty | BuildingProperty | ProjectProperty;

// --------------------------------------------
// 3. قيم مشتركة لتقليل التكرار
// --------------------------------------------
const COMMON = {
  wilaya: "الولاية الفلانية",
  baladiya: "البلدية الفلانية",
  neighborhood: "الحي الفلاني",
  phone: "000000000000",
};

// --------------------------------------------
// 4. بيانات النماذج (18 بطاقة)
// --------------------------------------------
export const SAMPLE_PROPERTIES: Property[] = [
  // ═══════════════════════════════════════════
  // البيع — أراضٍ (4)
  // ═══════════════════════════════════════════
  {
    id: "prop-001",
    reference: "RQ-2026-00101",
    transaction: "sale",
    type: "land",
    subCategory: "urban",
    publishedAt: "2026-10-01",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 250,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 112/2024",
    buildingPermit: "غير مطلوبة للأرض",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة، العقار خالٍ من أي رهن",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "أرض في منطقة حضرية بمساحة 250 م²، واجهة على شارعين، صالحة للبناء السكني، في موقع استراتيجي قريب من المرافق.",
    price: 900000000,
  },
  {
    id: "prop-002",
    reference: "RQ-2026-00102",
    transaction: "sale",
    type: "land",
    subCategory: "agricultural",
    publishedAt: "2026-10-02",
    ...COMMON,
    urbanPlan: "تابع للمخطط الفلاحي",
    area: 5000,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 205/2023",
    buildingPermit: "غير مطلوبة",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "غير مطلوبة للأراضي الزراعية",
    judicialRulings: "لا توجد نزاعات",
    description:
      "أرض في منطقة زراعية بمساحة 5000 م²، صالحة لزراعة الحبوب والأشجار المثمرة، بها بئر ماء وحظيرة صغيرة.",
    price: 1800000000,
  },
  {
    id: "prop-003",
    reference: "RQ-2026-00103",
    transaction: "sale",
    type: "land",
    subCategory: "industrial",
    publishedAt: "2026-10-03",
    ...COMMON,
    urbanPlan: "تابع للمنطقة الصناعية",
    area: 1200,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 089/2022",
    buildingPermit: "غير مطلوبة للأرض",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة، العقار خالٍ من أي رهن",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "أرض في منطقة صناعية بمساحة 1200 م²، مخصصة للنشاط الصناعي أو التخزين، قريبة من الطريق الوطني والمرافق الصناعية.",
    price: 2500000000,
  },
  {
    id: "prop-004",
    reference: "RQ-2026-00104",
    transaction: "sale",
    type: "land",
    subCategory: "touristic",
    publishedAt: "2026-10-04",
    ...COMMON,
    urbanPlan: "تابع للمخطط العمراني للسياحة",
    area: 800,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 156/2023",
    buildingPermit: "غير مطلوبة للأرض",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "أرض في منطقة سياحية بمساحة 800 م²، بإطلالة على البحر، مناسبة لإنشاء مشروع سياحي أو استراحة عائلية.",
    price: 2400000000,
  },

  // ═══════════════════════════════════════════
  // البيع — مبانٍ (4)
  // ═══════════════════════════════════════════
  {
    id: "prop-005",
    reference: "RQ-2026-00105",
    transaction: "sale",
    type: "building",
    subCategory: "residential",
    publishedAt: "2026-10-05",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 180,
    builtArea: 120,
    gardenArea: 60,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم CC12",
    buildingPermit: "لا يحتاجها العقار لأنه مبني أصلاً",
    subdivisionPermit: "موجودة، لأن العقار شيوع بين الورثة",
    demolitionPermit: "لا يحتاجها العقار",
    negativeCertificate: "موجودة، العقار خالٍ من أي رهن",
    urbanizationCertificate: "موجودة",
    judicialRulings: "حكم قضائي لتقسيم التركة وإخراج الورثة من الشيوع",
    description:
      "منزل سكني مع حديقة خلفية في حي بوزوران، 3 طوابق، مساحة 180 م². طابق أرضي يكفي لركن 3 سيارات + طابقان سكنيان F05، تدفئة مركزية، حالة جيدة.",
    price: 900000000,
  },
  {
    id: "prop-006",
    reference: "RQ-2026-00106",
    transaction: "sale",
    type: "building",
    subCategory: "commercial",
    publishedAt: "2026-10-06",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 120,
    builtArea: 120,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 078/2021",
    buildingPermit: "موجودة، رقم 2019/156",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "عقار تجاري بمساحة 120 م² في شارع تجاري حيوي، واجهة 8 متر، مناسب لمختلف الأنشطة التجارية، بحالة جيدة.",
    price: 1500000000,
  },
  {
    id: "prop-007",
    reference: "RQ-2026-00107",
    transaction: "sale",
    type: "building",
    subCategory: "professional",
    publishedAt: "2026-10-07",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 200,
    builtArea: 200,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 034/2022",
    buildingPermit: "موجودة، رقم 2020/089",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة، العقار خالٍ من أي رهن",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "عقار مهني بمساحة 200 م²، مخصص للمكاتب أو العيادات أو الاستشارات، مجهز بأنظمة تكييف وكهرباء حديثة.",
    price: 2000000000,
  },
  {
    id: "prop-008",
    reference: "RQ-2026-00108",
    transaction: "sale",
    type: "building",
    subCategory: "industrial",
    publishedAt: "2026-10-08",
    ...COMMON,
    urbanPlan: "تابع للمنطقة الصناعية",
    area: 800,
    builtArea: 800,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 112/2020",
    buildingPermit: "موجودة، رقم 2017/234",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "عقار صناعي بمساحة 800 م²، مخصص للنشاط الصناعي أو التخزين، سقف مرتفع، أرضية صناعية، مناسب لمختلف الاستخدامات.",
    price: 4000000000,
  },

  // ═══════════════════════════════════════════
  // البيع — مشاريع (4)
  // ═══════════════════════════════════════════
  {
    id: "prop-009",
    reference: "RQ-2026-00109",
    transaction: "sale",
    type: "project",
    subCategory: "assets",
    publishedAt: "2026-10-09",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 500,
    builtArea: 450,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 067/2021",
    buildingPermit: "موجودة، رقم 2019/078",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "أصل عقاري بمساحة 500 م² يشمل مبنى إداري ومستودع، مناسب لمقرات الشركات أو الأنشطة المهنية المتعددة.",
    price: 3000000000,
  },
  {
    id: "prop-010",
    reference: "RQ-2026-00110",
    transaction: "sale",
    type: "project",
    subCategory: "agricultural",
    publishedAt: "2026-10-10",
    ...COMMON,
    urbanPlan: "تابع للمخطط الفلاحي",
    area: 5000,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 189/2022",
    buildingPermit: "موجودة للوحدات الإنتاجية",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "غير مطلوبة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "مشروع فلاحي متكامل بمساحة 5000 م² يشمل معصرة زيتون ووحدة تحويل المنتجات الفلاحية ومخزن للثمار.",
    price: 2500000000,
  },
  {
    id: "prop-011",
    reference: "RQ-2026-00111",
    transaction: "sale",
    type: "project",
    subCategory: "investment",
    publishedAt: "2026-10-11",
    ...COMMON,
    urbanPlan: "تابع للمخطط العمراني",
    area: 1500,
    builtArea: 1200,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 234/2020",
    buildingPermit: "موجودة، رقم 2018/312",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "مشروع استثماري بمساحة 1500 م² يشمل قاعة أعراس ومركز خدمات ومغسلة مهنية، جاهز للاستغلال الفوري.",
    price: 5000000000,
  },
  {
    id: "prop-012",
    reference: "RQ-2026-00112",
    transaction: "sale",
    type: "project",
    subCategory: "tourism",
    publishedAt: "2026-10-12",
    ...COMMON,
    urbanPlan: "تابع للمخطط السياحي",
    area: 3000,
    builtArea: 2500,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 298/2019",
    buildingPermit: "موجودة، رقم 2016/189",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "مشروع سياحي متكامل بمساحة 3000 م² يشمل فندق 40 غرفة ومطعم ومنتجع ترفيهي، بإطلالة بانورامية.",
    price: 8000000000,
  },

  // ═══════════════════════════════════════════
  // الإيجار — مبانٍ (4)
  // ═══════════════════════════════════════════
  {
    id: "prop-013",
    reference: "RQ-2026-00113",
    transaction: "rent",
    type: "building",
    subCategory: "residential",
    publishedAt: "2026-10-13",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 90,
    builtArea: 90,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة",
    buildingPermit: "لا يحتاجها العقار لأنه مبني",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "شقة سكنية بمساحة 90 م²، طابق ثاني، مكونة من F3 مع مطبخ مجهز وحمام، في حي هادئ وقريب من المرافق.",
    price: 4500000,
    priceUnit: "monthly",
  },
  {
    id: "prop-014",
    reference: "RQ-2026-00114",
    transaction: "rent",
    type: "building",
    subCategory: "commercial",
    publishedAt: "2026-10-14",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 100,
    builtArea: 100,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة",
    buildingPermit: "موجودة، رقم 2019/234",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "محل تجاري للإيجار بمساحة 100 م²، واجهة على الشارع الرئيسي، مناسب لمختلف الأنشطة التجارية.",
    price: 8000000,
    priceUnit: "monthly",
  },
  {
    id: "prop-015",
    reference: "RQ-2026-00115",
    transaction: "rent",
    type: "building",
    subCategory: "professional",
    publishedAt: "2026-10-15",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 150,
    builtArea: 150,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة",
    buildingPermit: "موجودة، رقم 2020/156",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "مكتب مهني للإيجار بمساحة 150 م²، مكون من 3 غرف واستقبال، مناسب للعيادات أو مكاتب الاستشارات.",
    price: 12000000,
    priceUnit: "monthly",
  },
  {
    id: "prop-016",
    reference: "RQ-2026-00116",
    transaction: "rent",
    type: "building",
    subCategory: "industrial",
    publishedAt: "2026-10-16",
    ...COMMON,
    urbanPlan: "تابع للمنطقة الصناعية",
    area: 500,
    builtArea: 500,
    realEstateBook: "موجود",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة",
    buildingPermit: "موجودة، رقم 2018/089",
    subdivisionPermit: "غير مطلوبة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "مستودع صناعي للإيجار بمساحة 500 م²، سقف مرتفع، مناسب للتخزين أو النشاط الصناعي الخفيف.",
    price: 20000000,
    priceUnit: "monthly",
  },

  // ═══════════════════════════════════════════
  // الحجز (2)
  // ═══════════════════════════════════════════
  {
    id: "prop-017",
    reference: "RQ-2026-00117",
    transaction: "reservation",
    type: "project",
    subCategory: "assets",
    reservationType: "vsp",
    publishedAt: "2026-10-17",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 120,
    realEstateBook: "قيد التسجيل",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 301/2024",
    buildingPermit: "موجودة، رقم 2024/089",
    subdivisionPermit: "موجودة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "موجودة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "شقة سكنية F4 ضمن مشروع VSP معتمد، مساحة 120 م²، تسليم بعد 18 شهرًا، متاح الحجز بعقد رسمي.",
    price: null,
  },
  {
    id: "prop-018",
    reference: "RQ-2026-00118",
    transaction: "reservation",
    type: "project",
    subCategory: "assets",
    reservationType: "hifz-haq",
    publishedAt: "2026-10-18",
    ...COMMON,
    urbanPlan: "تابع للمخطط POS",
    area: 100,
    realEstateBook: "قيد التسجيل",
    ownershipDeed: "موجود",
    surveyDocuments: "موجودة، رقم 402/2024",
    buildingPermit: "قيد الدراسة",
    subdivisionPermit: "قيد الدراسة",
    demolitionPermit: "غير مطلوبة",
    negativeCertificate: "موجودة",
    urbanizationCertificate: "قيد الدراسة",
    judicialRulings: "لا توجد نزاعات",
    description:
      "شقة سكنية F3 ضمن مشروع في مراحله الأولى، مساحة 100 م²، متاح الحجز بعقد حفظ الحق مع أولوية عند اكتمال الترخيص.",
    price: null,
  },
];

// --------------------------------------------
// 5. تنسيق الأرقام
// --------------------------------------------
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// --------------------------------------------
// 6. تنسيق السعر
// --------------------------------------------
export function formatPrice(property: Property): string {
  if (property.price === null) return "السعر عند الاتصال";

  const centimes = property.price;
  let formatted: string;

  if (centimes >= 1_000_000) {
    const millions = centimes / 1_000_000;
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
// 7. تنسيق التاريخ
// --------------------------------------------
export function formatDate(isoDate: string): string {
  const parts = isoDate.split("-");
  if (parts.length !== 3) return isoDate;
  const [year, month, day] = parts;
  return `${day}-${month}-${year}`;
}
