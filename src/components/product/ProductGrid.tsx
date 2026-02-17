"use client";

import { Product } from "@/lib/mockData";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  favorites: number[];
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleFav: (id: number, e: React.MouseEvent) => void;
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
      <div className="empty">
        <div className="empty-emoji">🌾</div>
        <h3>No plants found</h3>
        <p>Try adjusting your filters or search</p>
        <button className="empty-btn" onClick={onClearFilters}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="product-grid">
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