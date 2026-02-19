"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mockProducts,
  filterProducts,
  Product,
  Category,
  PriceRange,
} from "@/lib/mockData";

import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid    from "@/components/product/ProductGrid";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activePrice,    setActivePrice]    = useState<PriceRange>("All Prices");
  const [search,         setSearch]         = useState("");
  const [favorites,      setFavorites]      = useState<string[]>([]);
  const [toast,          setToast]          = useState("");

  const filtered = filterProducts(mockProducts, activeCategory, activePrice, search);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    showToast(`${product.name} added 🌿`);
  };

  const handleToggleFav = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setActivePrice("All Prices");
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] pt-20">
      {/* ── Filters + sort bar ── */}
      <ProductFilters
        activeCategory={activeCategory}
        activePrice={activePrice}
        resultCount={filtered.length}
        onCategoryChange={setActiveCategory}
        onPriceChange={setActivePrice}
      />

      {/* ── Product grid ── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24">
        <ProductGrid
          products={filtered}
          favorites={favorites}
          onAddToCart={handleAddToCart}
          onToggleFav={handleToggleFav}
          onClearFilters={handleClearFilters}
        />
      </main>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-[#1a3a2a] text-white px-5 py-2.5 rounded-full text-sm font-medium z-[100] whitespace-nowrap shadow-lg"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
