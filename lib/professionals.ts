// ============================================
// نوع المهني + بيانات النماذج
// ============================================

import type { Specialization, MobilityScope } from "./professional-constants";

// --------------------------------------------
// 1. نوع المهني
// --------------------------------------------
export type Professional = {
  id: string;
  reference: string;
  fullName: string;
  specialization: Specialization;
  experienceYears: number;
  wilaya: string;
  mobility: MobilityScope;
  phone: string;
  image?: string | null;
};

// --------------------------------------------
// 2. بيانات النماذج (9 بطاقات)
// --------------------------------------------
export const SAMPLE_PROFESSIONALS: Professional[] = [
  {
    id: "prof-001",
    reference: "PR-2026-00023",
    fullName: "أحمد بن يوسف",
    specialization: "contracting",
    experienceYears: 15,
    wilaya: "الجزائر",
    mobility: "regional",
    phone: "0555 20 11 01",
  },
  {
    id: "prof-002",
    reference: "PR-2026-00028",
    fullName: "سمير حجاج",
    specialization: "engineering",
    experienceYears: 8,
    wilaya: "وهران",
    mobility: "local",
    phone: "0555 20 11 02",
  },
  {
    id: "prof-003",
    reference: "PR-2026-00034",
    fullName: "نبيل مرابط",
    specialization: "safety",
    experienceYears: 5,
    wilaya: "قسنطينة",
    mobility: "local",
    phone: "0555 20 11 03",
  },
  {
    id: "prof-004",
    reference: "PR-2026-00041",
    fullName: "ياسين بلعيد",
    specialization: "site-management",
    experienceYears: 10,
    wilaya: "سطيف",
    mobility: "regional",
    phone: "0555 20 11 04",
  },
  {
    id: "prof-005",
    reference: "PR-2026-00047",
    fullName: "كريم زيتوني",
    specialization: "craftsmen",
    experienceYears: 3,
    wilaya: "البليدة",
    mobility: "local",
    phone: "0555 20 11 05",
  },
  {
    id: "prof-006",
    reference: "PR-2026-00053",
    fullName: "رضا بوقرة",
    specialization: "technical",
    experienceYears: 20,
    wilaya: "عنابة",
    mobility: "regional",
    phone: "0555 20 11 06",
  },
  {
    id: "prof-007",
    reference: "PR-2026-00059",
    fullName: "مراد شريف",
    specialization: "heavy-machinery",
    experienceYears: 7,
    wilaya: "ورقلة",
    mobility: "regional",
    phone: "0555 20 11 07",
  },
  {
    id: "prof-008",
    reference: "PR-2026-00064",
    fullName: "بلال عمراني",
    specialization: "contracting",
    experienceYears: 12,
    wilaya: "تيبازة",
    mobility: "local",
    phone: "0555 20 11 08",
  },
  {
    id: "prof-009",
    reference: "PR-2026-00071",
    fullName: "فؤاد بن ناصر",
    specialization: "engineering",
    experienceYears: 6,
    wilaya: "بجاية",
    mobility: "local",
    phone: "0555 20 11 09",
  },
];
