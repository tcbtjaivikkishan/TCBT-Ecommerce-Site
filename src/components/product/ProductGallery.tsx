"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { MouseEvent, TouchEvent, PointerEvent } from "react";

interface Props {
  images: string[];
}

const AUTO_ROTATE_INTERVAL = 4000;

const ProductGallery = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Parallax tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  // Auto rotate
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length, isInteracting]);

  const nextImage = () => {
    setIsInteracting(true);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsInteracting(true);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe handler
  const handleDragEnd = (
    _event: globalThis.MouseEvent | globalThis.TouchEvent | globalThis.PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) prevImage();
    if (info.offset.x < -100) nextImage();
  };

  // Parallax tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full max-w-130 mx-auto">
      {/* Image Wrapper */}
      <motion.div
        className="relative w-full h-115 md:h-140 rounded-3xl overflow-hidden shadow-2xl bg-neutral-100"
        style={{ rotateX, rotateY }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Animated Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="product"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft green glow */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[0_0_60px_rgba(34,197,94,0.2)]" />

        {/* Pagination Dots - Minimal Premium */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsInteracting(true);
                setIndex(i);
              }}
              className={`transition-all duration-300 rounded-full ${index === i
                  ? "w-8 h-2 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]"
                  : "w-2 h-2 bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default ProductGallery;
