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
    fullName: "فلان بن فلان",
    specialization: "contracting",
    experienceYears: 0,
    wilaya: "الجزائر",
    mobility: "regional",
    phone: "0000000000",
  },
  {
    id: "prof-002",
    reference: "PR-2026-00028",
    fullName: "فلان بن فلان",
    specialization: "engineering",
    experienceYears: 0,
    wilaya: "وهران",
    mobility: "local",
    phone: "0000000000",
  },
  {
    id: "prof-003",
    reference: "PR-2026-00034",
    fullName: "فلان بن فلان",
    specialization: "safety",
    experienceYears: 0,
    wilaya: "قسنطينة",
    mobility: "local",
    phone: "0000000000",
  },
  {
    id: "prof-004",
    reference: "PR-2026-00041",
    fullName: "فلان بن فلان",
    specialization: "site-management",
    experienceYears: 0,
    wilaya: "سطيف",
    mobility: "regional",
    phone: "0000000000",
  },
  {
    id: "prof-005",
    reference: "PR-2026-00047",
    fullName: "فلان بن فلان",
    specialization: "craftsmen",
    experienceYears: 0,
    wilaya: "البليدة",
    mobility: "local",
    phone: "0000000000",
  },
  {
    id: "prof-006",
    reference: "PR-2026-00053",
    fullName: "فلان بن فلان",
    specialization: "technical",
    experienceYears: 0,
    wilaya: "عنابة",
    mobility: "regional",
    phone: "0000000000",
  },
  {
    id: "prof-007",
    reference: "PR-2026-00059",
    fullName: "فلان بن فلان",
    specialization: "heavy-machinery",
    experienceYears: 0,
    wilaya: "ورقلة",
    mobility: "regional",
    phone: "0000000000",
  },
  {
    id: "prof-008",
    reference: "PR-2026-00064",
    fullName: "فلان بن فلان",
    specialization: "contracting",
    experienceYears: 0,
    wilaya: "تيبازة",
    mobility: "local",
    phone: "0000000000",
  },
  {
    id: "prof-009",
    reference: "PR-2026-00071",
    fullName: "فلان بن فلان",
    specialization: "engineering",
    experienceYears: 0,
    wilaya: "بجاية",
    mobility: "local",
    phone: "0000000000",
  },
];
