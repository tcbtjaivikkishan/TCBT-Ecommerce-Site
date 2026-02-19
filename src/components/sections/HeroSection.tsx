"use client";

import { heroData } from "@/lib/homeData";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1920&q=80",
    alt: "Fresh organic vegetables",
    caption: "Farm-fresh every morning",
  },
  {
    src: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1920&q=80",
    alt: "Colorful organic produce",
    caption: "Naturally grown, naturally good",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80",
    alt: "Organic farm harvest",
    caption: "Straight from our farms",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80",
    alt: "Fresh herbs and greens",
    caption: "Pure, pesticide-free goodness",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 260, damping: 30 },
      opacity: { duration: 0.6 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 260, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
};

export default function HeroSection() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback(
    (newDirection: number) => {
      setSlide(([prev]) => [
        (prev + newDirection + sliderImages.length) % sliderImages.length,
        newDirection,
      ]);
    },
    []
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={sliderImages[currentIndex].src}
              alt={sliderImages[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl ml-4 md:ml-12 lg:ml-20 pt-16 md:pt-24"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {heroData.headline}
              <span className="block text-[#7c9e52]">{heroData.headlineAccent}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              {heroData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#7c9e52] hover:bg-[#5b8c5a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 text-lg">
                {heroData.cta}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a1a] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg backdrop-blur-sm">
                {heroData.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-2">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide([idx, idx > currentIndex ? 1 : -1])}
            aria-label={`Go to slide ${idx + 1}`}
            className="relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
            style={{ width: currentIndex === idx ? "2rem" : "0.5rem" }}
          >
            <span
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                currentIndex === idx ? "bg-white" : "bg-white/40"
              }`}
            />
            {currentIndex === idx && isAutoPlaying && (
              <motion.span
                key={`progress-${idx}`}
                className="absolute inset-0 bg-[#7c9e52] rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm text-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-1 z-30"
      >
        <span className="text-lg font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="text-white/60 text-sm">/ {String(sliderImages.length).padStart(2, "0")}</span>
      </motion.div>
    </section>
  );
}
