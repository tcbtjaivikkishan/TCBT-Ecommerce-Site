"use client";

import { useState } from "react";
import { Product } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
  product: Product;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const ProductInfo = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const lowStock = product.stock <= 10;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="relative font-['Cormorant_Garamond',Georgia,serif] px-1 space-y-0">

      {/* Decorative accent */}
      <div className="absolute -top-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#3d6b4f] to-transparent rounded-full" />

      {/* ── Header ───────────────────────── */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-4 pb-6 border-b border-stone-200/80"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1.5">
            <p className="font-['DM_Sans',sans-serif] text-xs tracking-[0.18em] uppercase text-[#3d6b4f]/70 font-medium">
              Botanical Collection
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] tracking-[-0.01em] text-stone-900">
              {product.name}
            </h1>
          </div>

          {lowStock && (
            <motion.span
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-['DM_Sans',sans-serif] shrink-0 mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Only {product.stock} left
            </motion.span>
          )}
        </div>

        {/* 🔥 Animated Price */}
        <div className="mt-4 flex items-baseline gap-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedSize.price}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold text-[#2d5a3d] tracking-tight"
            >
              ₹{(selectedSize.price * qty).toFixed(2)}
            </motion.span>
          </AnimatePresence>

          <span className="font-['DM_Sans',sans-serif] text-sm text-stone-400">
            incl. tax
          </span>
        </div>
      </motion.div>

      {/* ── Description ───────────────────── */}
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 font-['DM_Sans',sans-serif] text-[0.95rem] leading-relaxed text-stone-500 max-w-[38rem] border-b border-stone-200/80"
      >
        {product.description}
      </motion.p>

      {/* ── Size Selector ─────────────────── */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 border-b border-stone-200/80"
      >
        <h4 className="font-['DM_Sans',sans-serif] text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-3">
          Size
        </h4>

        <div className="flex flex-wrap gap-2.5">
          {product.sizes.map((s) => (
            <motion.button
              key={s.label}
              whileTap={{ scale: 0.93 }}
              onClick={() => setSelectedSize(s)}
              className={`relative px-5 py-2 rounded-xl font-['DM_Sans',sans-serif] text-sm font-medium transition-all duration-300 ${
                selectedSize.label === s.label
                  ? "text-white shadow-md shadow-[#3d6b4f]/30"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-[#3d6b4f]/50 hover:text-[#3d6b4f]"
              }`}
            >
              {selectedSize.label === s.label && (
                <motion.span
                  layoutId="size-pill"
                  className="absolute inset-0 rounded-xl bg-[#3d6b4f]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {s.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── Quantity + CTA ────────────────── */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 space-y-4"
      >
        <div className="flex items-center gap-0 w-fit rounded-2xl border border-stone-200 overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setQty((p) => Math.max(1, p - 1))}
            className="w-11 h-11 flex items-center justify-center text-lg text-stone-500 hover:bg-stone-50"
          >
            −
          </button>

          <div className="w-px h-5 bg-stone-200" />

          <span className="w-12 text-center text-sm font-semibold text-stone-800">
            {qty}
          </span>

          <div className="w-px h-5 bg-stone-200" />

          <button
            onClick={() => setQty((p) => p + 1)}
            className="w-11 h-11 flex items-center justify-center text-lg text-stone-500 hover:bg-stone-50"
          >
            +
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="flex-1 py-3.5 px-6 rounded-2xl border border-[#3d6b4f] font-medium text-sm text-[#3d6b4f] hover:shadow-md hover:shadow-[#3d6b4f]/10 transition-all"
          >
            Add to Cart
          </motion.button>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 py-3.5 px-6 rounded-2xl bg-[#2d5a3d] text-white shadow-lg shadow-[#2d5a3d]/25 hover:bg-[#3d6b4f] transition-all"
          >
            Buy Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
