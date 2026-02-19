"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/mockData";

interface Props {
  product: Product;
  index: number;
  isFavorite: boolean;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleFav: (id: string, e: React.MouseEvent) => void;
}

export default function ProductCard({
  product,
  index,
  isFavorite,
  onAddToCart,
  onToggleFav,
}: Props) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-black/5 cursor-pointer transition-shadow duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* ── Image area ── */}
      <div className="relative aspect-square flex items-center justify-center overflow-hidden text-6xl transition-transform duration-400 hover:scale-104">
        {/* Wishlist button */}
        <button
          className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm transition-transform duration-200 border-none cursor-pointer hover:scale-115"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => onToggleFav(product.id, e)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* ── Body ── */}
      <div className="p-3 sm:p-3.5">
        <p className="text-[10px] font-semibold text-[#4a8c62] uppercase tracking-wider mb-1">{product.category}</p>

        <h3 className="font-serif text-sm sm:text-base font-semibold text-[#1a1612] leading-tight mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center justify-between">
          <div className="text-sm sm:text-base font-bold text-[#1a3a2a]">
            ₹{product.sizes[0].price}
            <span className="text-xs font-normal text-[#8a7f72]"> / {product.sizes[0].label}</span>
          </div>

          <button
            className="w-8 h-8 bg-[#1a3a2a] rounded-full border-none text-white text-lg leading-1 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-[#4a8c62]"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => onAddToCart(product, e)}
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}
