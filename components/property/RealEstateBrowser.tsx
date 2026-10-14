"use client";

import { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import type { Property } from "@/lib/properties";
import {
  TRANSACTION_LABELS,
  PROPERTY_TYPE_LABELS,
  LAND_SUB_CATEGORY_LABELS,
  BUILDING_SUB_CATEGORY_LABELS,
  PROJECT_SUB_CATEGORY_LABELS,
  type Transaction,
  type PropertyType,
} from "@/lib/constants";
import { WILAYAS } from "@/lib/wilayas";

// --------------------------------------------
// 1. حالة الفلاتر
// --------------------------------------------
type Filters = {
  transaction: Transaction | null;
  propertyType: PropertyType | null;
  subCategory: string | null;
  wilaya: string | null;
};

const EMPTY_FILTERS: Filters = {
  transaction: null,
  propertyType: null,
  subCategory: null,
  wilaya: null,
};

// --------------------------------------------
// 2. خيارات التصنيف الفرعي حسب نوع العقار
// --------------------------------------------
function getSubCategoryOptions(
  propertyType: PropertyType | null
): { value: string; label: string }[] {
  switch (propertyType) {
    case "land":
      return Object.entries(LAND_SUB_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));
    case "building":
      return Object.entries(BUILDING_SUB_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));
    case "project":
      return Object.entries(PROJECT_SUB_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));
    default:
      return [];
  }
}

// --------------------------------------------
// 3. منطق الفلترة
// --------------------------------------------
function applyFilters(properties: Property[], filters: Filters): Property[] {
  return properties.filter((p) => {
    if (filters.transaction && p.transaction !== filters.transaction) return false;
    if (filters.propertyType && p.type !== filters.propertyType) return false;
    if (filters.wilaya && p.wilaya !== filters.wilaya) return false;
    if (filters.subCategory && p.subCategory !== filters.subCategory) return false;
    return true;
  });
}

// --------------------------------------------
// 4. المكوّن
// --------------------------------------------
export default function RealEstateBrowser({
  properties,
}: {
  properties: Property[];
}) {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(
    () => applyFilters(properties, filters),
    [properties, filters]
  );

  const activeCount = [
    filters.transaction,
    filters.propertyType,
    filters.subCategory,
    filters.wilaya,
  ].filter(Boolean).length;

  const subCategoryOptions = getSubCategoryOptions(filters.propertyType);

  function handlePropertyTypeChange(value: string) {
    setFilters((prev) => ({
      ...prev,
      propertyType: (value || null) as PropertyType | null,
      subCategory: null,
    }));
  }

  function clearAll() {
    setFilters(EMPTY_FILTERS);
  }

  const selectClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

  // ----- الفلاتر الأربعة -----
  const filtersContent = (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {/* نوع المعاملة */}
      <div className="space-y-1">
        <label htmlFor="filter-transaction" className="block text-xs font-medium text-text-muted">
          نوع المعاملة
        </label>
        <select
          id="filter-transaction"
          value={filters.transaction ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              transaction: (e.target.value || null) as Transaction | null,
            }))
          }
          className={selectClass}
        >
          <option value="">الكل</option>
          {Object.entries(TRANSACTION_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* نوع العقار */}
      <div className="space-y-1">
        <label htmlFor="filter-type" className="block text-xs font-medium text-text-muted">
          نوع العقار
        </label>
        <select
          id="filter-type"
          value={filters.propertyType ?? ""}
          onChange={(e) => handlePropertyTypeChange(e.target.value)}
          className={selectClass}
        >
          <option value="">الكل</option>
          {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* التصنيف الفرعي */}
      <div className="space-y-1">
        <label htmlFor="filter-sub" className="block text-xs font-medium text-text-muted">
          التصنيف
        </label>
        <select
          id="filter-sub"
          value={filters.subCategory ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, subCategory: e.target.value || null }))
          }
          disabled={subCategoryOptions.length === 0}
          className={selectClass}
        >
          <option value="">
            {subCategoryOptions.length === 0 ? "اختر نوع العقار أولًا" : "الكل"}
          </option>
          {subCategoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* الولاية */}
      <div className="space-y-1">
        <label htmlFor="filter-wilaya" className="block text-xs font-medium text-text-muted">
          الولاية
        </label>
        <select
          id="filter-wilaya"
          value={filters.wilaya ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, wilaya: e.target.value || null }))
          }
          className={selectClass}
        >
          <option value="">الكل</option>
          {WILAYAS.map((w) => (
            <option key={w.code} value={w.name}>
              {w.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* ------- شريط الفلاتر ------- */}
      <div className="rounded-lg border bg-surface p-4 shadow-card space-y-3">
        {/* رأس الشريط على الهاتف فقط */}
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="inline-flex items-center gap-2 min-h-[44px] rounded-md border border-border bg-surface-elevated px-4 text-sm font-medium"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M6 12h12M10 18h4" />
            </svg>
            الفلاتر
            {activeCount > 0 && (
              <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs h-5 min-w-5 px-1">
                {activeCount}
              </span>
            )}
          </button>
          <span className="text-sm text-text-muted">
            {filtered.length} من {properties.length}
          </span>
        </div>

        {/* الفلاتر — ظاهرة دائمًا على الحاسوب، وعند الفتح على الهاتف */}
        <div className={`${mobileOpen ? "block" : "hidden"} md:block space-y-4`}>
          {filtersContent}

          {/* شريط سفلي */}
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="hidden md:inline text-sm text-text-muted">
              {filtered.length} من {properties.length} عقار
            </span>
            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="text-sm text-primary hover:underline"
              >
                مسح الكل
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ------- الشبكة ------- */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-surface p-12 text-center space-y-2">
          <p className="text-lg font-medium">لا توجد نتائج مطابقة</p>
          <p className="text-sm text-text-muted">جرّب تغيير الفلاتر أو مسحها.</p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-3 text-sm text-primary hover:underline"
          >
            مسح كل الفلاتر
          </button>
        </div>
      )}
    </div>
  );
}
