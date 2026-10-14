// ============================================
// نوع عنصر السوق + بيانات النماذج
// ============================================

import type { MarketCategory, ListingType } from "./market-constants";

// --------------------------------------------
// 1. نوع العنصر
// --------------------------------------------
export type MarketItem = {
  id: string;
  reference: string;
  title: string;
  category: MarketCategory;
  listingType: ListingType;
  wilaya: string;
  price: number | null;
  priceUnit?: "total" | "daily" | "monthly";
  phone: string;
  image?: string | null;
};

// --------------------------------------------
// 2. بيانات النماذج (9 بطاقات)
// --------------------------------------------
export const SAMPLE_MARKET_ITEMS: MarketItem[] = [
  {
    id: "item-001",
    reference: "MK-2026-00031",
    title: "أسمنت بورتلاند — كيس 50 كغ",
    category: "materials",
    listingType: "sale",
    wilaya: "الجزائر",
    price: 750,
    priceUnit: "total",
    phone: "0000000000",
  },
  {
    id: "item-002",
    reference: "MK-2026-00038",
    title: "حديد التسليح 12 مم — طن",
    category: "materials",
    listingType: "sale",
    wilaya: "وهران",
    price: 95000,
    priceUnit: "total",
    phone: "0000000000",
  },
  {
    id: "item-003",
    reference: "MK-2026-00044",
    title: "خلاطة إسمنت 350 لتر",
    category: "equipment",
    listingType: "sale",
    wilaya: "سطيف",
    price: 185000,
    priceUnit: "total",
    phone: "0000000000",
  },
  {
    id: "item-004",
    reference: "MK-2026-00051",
    title: "سقالات معدنية — وحدة",
    category: "equipment",
    listingType: "rent",
    wilaya: "قسنطينة",
    price: 800,
    priceUnit: "daily",
    phone: "0000000000",
  },
  {
    id: "item-005",
    reference: "MK-2026-00057",
    title: "حفارة هيدروليكية 20 طن",
    category: "heavy-machinery",
    listingType: "sale",
    wilaya: "ورقلة",
    price: null,
    phone: "0000000000",
  },
  {
    id: "item-006",
    reference: "MK-2026-00063",
    title: "رافعة شوكية 3 طن",
    category: "heavy-machinery",
    listingType: "rent",
    wilaya: "عنابة",
    price: 25000,
    priceUnit: "daily",
    phone: "0000000000",
  },
  {
    id: "item-007",
    reference: "MK-2026-00069",
    title: "شاحنة قلابة 15 طن",
    category: "heavy-machinery",
    listingType: "rent",
    wilaya: "البليدة",
    price: 35000,
    priceUnit: "daily",
    phone: "0000000000",
  },
  {
    id: "item-008",
    reference: "MK-2026-00074",
    title: "مسامير وبراغي متنوعة — علبة",
    category: "hardware",
    listingType: "sale",
    wilaya: "تيبازة",
    price: 2500,
    priceUnit: "total",
    phone: "0000000000",
  },
  {
    id: "item-009",
    reference: "MK-2026-00081",
    title: "دهان خارجي مقاوم للماء — 20 لتر",
    category: "materials",
    listingType: "sale",
    wilaya: "بجاية",
    price: 8500,
    priceUnit: "total",
    phone: "0000000000",
  },
];
