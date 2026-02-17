"use client";

import {
  CATEGORIES,
  PRICE_RANGES,
  Category,
  PriceRange,
} from "@/lib/mockData";

interface Props {
  activeCategory: Category;
  activePrice: PriceRange;
  resultCount: number;
  onCategoryChange: (cat: Category) => void;
  onPriceChange: (price: PriceRange) => void;
}

export default function ProductFilters({
  activeCategory,
  activePrice,
  resultCount,
  onCategoryChange,
  onPriceChange,
}: Props) {
  return (
    <>
      {/* ── Scrollable pill bar ── */}
      <div className="filter-section">
        <div className="filter-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "pill-active" : "pill-inactive"}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}

          <div className="pill-divider" aria-hidden="true" />

          {PRICE_RANGES.map((pr) => (
            <button
              key={pr}
              className={`pill ${activePrice === pr ? "pill-active" : "pill-inactive"}`}
              onClick={() => onPriceChange(pr)}
            >
              {pr}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sort / result-count bar ── */}
      <div className="sort-bar">
        <span className="result-count">
          <strong>{resultCount}</strong> plants found
        </span>

        <select className="sort-select" defaultValue="Popular">
          <option>Popular</option>
          <option>Price: Low–High</option>
          <option>Price: High–Low</option>
          <option>Newest</option>
        </select>
      </div>
    </>
  );
}