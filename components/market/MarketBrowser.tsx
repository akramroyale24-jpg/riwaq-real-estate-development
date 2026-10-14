"use client";

import { useMemo, useState } from "react";
import MarketCard from "./MarketCard";
import type { MarketItem } from "@/lib/market-items";
import {
  MARKET_CATEGORY_LABELS,
  LISTING_TYPE_LABELS,
  type MarketCategory,
  type ListingType,
} from "@/lib/market-constants";
import { WILAYAS } from "@/lib/wilayas";

// --------------------------------------------
// 1. حالة الفلاتر
// --------------------------------------------
type Filters = {
  category: MarketCategory | null;
  listingType: ListingType | null;
  wilaya: string | null;
};

const EMPTY_FILTERS: Filters = {
  category: null,
  listingType: null,
  wilaya: null,
};

// --------------------------------------------
// 2. منطق الفلترة
// --------------------------------------------
function applyFilters(items: MarketItem[], filters: Filters): MarketItem[] {
  return items.filter((item) => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.listingType && item.listingType !== filters.listingType)
      return false;
    if (filters.wilaya && item.wilaya !== filters.wilaya) return false;
    return true;
  });
}

// --------------------------------------------
// 3. المكوّن
// --------------------------------------------
export default function MarketBrowser({ items }: { items: MarketItem[] }) {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(
    () => applyFilters(items, filters),
    [items, filters]
  );

  const activeCount = [
    filters.category,
    filters.listingType,
    filters.wilaya,
  ].filter(Boolean).length;

  function clearAll() {
    setFilters(EMPTY_FILTERS);
  }

  const selectClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

  const filtersContent = (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {/* الفئة */}
      <div className="space-y-1">
        <label
          htmlFor="filter-category"
          className="block text-xs font-medium text-text-muted"
        >
          الفئة
        </label>
        <select
          id="filter-category"
          value={filters.category ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              category: (e.target.value || null) as MarketCategory | null,
            }))
          }
          className={selectClass}
        >
          <option value="">الكل</option>
          {Object.entries(MARKET_CATEGORY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* نوع العرض */}
      <div className="space-y-1">
        <label
          htmlFor="filter-listing"
          className="block text-xs font-medium text-text-muted"
        >
          نوع العرض
        </label>
        <select
          id="filter-listing"
          value={filters.listingType ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              listingType: (e.target.value || null) as ListingType | null,
            }))
          }
          className={selectClass}
        >
          <option value="">الكل</option>
          {Object.entries(LISTING_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* الولاية */}
      <div className="space-y-1">
        <label
          htmlFor="filter-wilaya"
          className="block text-xs font-medium text-text-muted"
        >
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
        {/* رأس الشريط على الهاتف */}
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
            {filtered.length} من {items.length}
          </span>
        </div>

        {/* الفلاتر */}
        <div className={`${mobileOpen ? "block" : "hidden"} md:block space-y-4`}>
          {filtersContent}

          <div className="flex items-center justify-between pt-2 border-t">
            <span className="hidden md:inline text-sm text-text-muted">
              {filtered.length} من {items.length} عنصر
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
          {filtered.map((item) => (
            <MarketCard key={item.id} item={item} />
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
