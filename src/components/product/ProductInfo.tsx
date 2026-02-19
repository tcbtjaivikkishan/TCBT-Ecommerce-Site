"use client";

import { useState } from "react";
import { Product } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";

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
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProductInfo = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [showViewCart, setShowViewCart] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const lowStock = product.stock <= 10;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id + "-" + selectedSize.label,
        title: `${product.name} (${selectedSize.label})`,
        price: selectedSize.price,
        image: product.images[0],
        qty,
      })
    );

    setShowViewCart(true);
    setQty(1);

    setTimeout(() => setShowViewCart(false), 5000);
  };

  return (
    <div className="relative font-['Cormorant_Garamond',Georgia,serif] px-1 space-y-0">

      {/* Decorative accent */}
      <div className="absolute -top-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#3d6b4f] to-transparent rounded-full" />

      {/* HEADER */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-4 pb-6 border-b border-stone-200/80"
      >
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#3d6b4f]/70">
              Botanical Collection
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900">
              {product.name}
            </h1>
          </div>

          {lowStock && (
            <span className="px-3 py-1.5 text-xs rounded-full bg-amber-50 text-amber-700 border">
              Only {product.stock} left
            </span>
          )}
        </div>

        {/* PRICE */}
        <div className="mt-4 flex items-baseline gap-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedSize.price}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl font-bold text-[#2d5a3d]"
            >
              ₹{(selectedSize.price * qty).toFixed(2)}
            </motion.span>
          </AnimatePresence>

          <span className="text-sm text-stone-400">incl. tax</span>
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 text-stone-500 border-b"
      >
        {product.description}
      </motion.p>

      {/* SIZE SELECTOR */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 border-b"
      >
        <h4 className="text-xs uppercase mb-3">Size</h4>

        <div className="flex gap-2.5 flex-wrap">
          {product.sizes.map((s) => (
            <button
              key={s.label}
              onClick={() => setSelectedSize(s)}
              className={`px-5 py-2 rounded-xl text-sm transition ${
                selectedSize.label === s.label
                  ? "bg-[#3d6b4f] text-white"
                  : "border hover:border-[#3d6b4f]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* QUANTITY + CTA */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="py-6 space-y-4"
      >
        {/* Quantity */}
        <div className="flex items-center border rounded-2xl w-fit">
          <button
            onClick={() => setQty((p) => Math.max(1, p - 1))}
            className="w-11 h-11"
          >
            −
          </button>

          <span className="w-12 text-center">{qty}</span>

          <button
            onClick={() => setQty((p) => p + 1)}
            className="w-11 h-11"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3.5 border border-[#3d6b4f] text-[#3d6b4f] rounded-2xl"
          >
            Add to Cart
          </button>

          <button
            className="flex-1 py-3.5 bg-[#2d5a3d] text-white rounded-2xl"
          >
            Buy Now
          </button>

        </div>

        {/* VIEW CART */}
        {showViewCart && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => router.push("/cart")}
            className="w-full py-3 bg-stone-900 text-white rounded-2xl"
          >
            View Cart
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default ProductInfo;
