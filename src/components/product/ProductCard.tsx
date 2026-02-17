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
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* ── Image area ── */}
      <div className="card-img-wrap">
        {/* Wishlist button */}
        <button
          className="card-fav"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => onToggleFav(product.id, e)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* ── Body ── */}
      <div className="card-body">
        <p className="card-category">{product.category}</p>

        <h3 className="card-name">{product.name}</h3>

        <div className="card-footer">
          <div className="card-price">
            ₹{product.sizes[0].price}
            <span> / {product.sizes[0].label}</span>
          </div>

          <button
            className="card-add"
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
