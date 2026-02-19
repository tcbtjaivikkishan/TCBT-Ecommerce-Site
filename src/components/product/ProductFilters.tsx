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
      <div className="bg-white border-b border-black/5 sticky top-20 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-transparent transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat 
                  ? "bg-[#1a3a2a] text-white border-[#1a3a2a]" 
                  : "bg-[#f0ebe0] text-[#8a7f72] hover:border-[#4a8c62] hover:text-[#2d5a3d]"
              }`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}

          <div className="w-px bg-black/8 my-1 shrink-0" aria-hidden="true" />

          {PRICE_RANGES.map((pr) => (
            <button
              key={pr}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-transparent transition-all duration-200 whitespace-nowrap ${
                activePrice === pr 
                  ? "bg-[#1a3a2a] text-white border-[#1a3a2a]" 
                  : "bg-[#f0ebe0] text-[#8a7f72] hover:border-[#4a8c62] hover:text-[#2d5a3d]"
              }`}
              onClick={() => onPriceChange(pr)}
            >
              {pr}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sort / result-count bar ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <span className="text-xs text-[#8a7f72]">
          <strong className="text-[#1a1612]">{resultCount}</strong> plants found
        </span>

        <select 
          className="text-xs text-[#1a1612] bg-white border border-black/10 rounded-full px-3 py-1.5 outline-none cursor-pointer" 
          defaultValue="Popular"
        >
          <option>Popular</option>
          <option>Price: Low–High</option>
          <option>Price: High–Low</option>
          <option>Newest</option>
        </select>
      </div>
    </>
  );
}