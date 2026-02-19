"use client";

import { Product } from "@/lib/mockData";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  favorites: string[];
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleFav: (id: string, e: React.MouseEvent) => void;
  onClearFilters: () => void;
}

export default function ProductGrid({
  products,
  favorites,
  onAddToCart,
  onToggleFav,
  onClearFilters,
}: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-5">
        <div className="text-5xl mb-3">🌾</div>
        <h3 className="font-serif text-xl text-[#1a1612] mb-2">No plants found</h3>
        <p className="text-sm text-[#8a7f72]">Try adjusting your filters or search</p>
        <button 
          className="mt-4 px-6 py-2.5 bg-[#1a3a2a] text-white border-none rounded-full text-sm font-medium cursor-pointer" 
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5">
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          index={i}
          isFavorite={favorites.includes(product.id)}
          onAddToCart={onAddToCart}
          onToggleFav={onToggleFav}
        />
      ))}
    </div>
  );
}