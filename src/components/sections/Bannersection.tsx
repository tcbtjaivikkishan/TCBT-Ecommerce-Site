"use client";

import { bannerData } from "@/lib/homeData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bannerData.image}
          alt="Farm banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-[#7c9e52] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Our Promise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {bannerData.headline}
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            {bannerData.subtext}
          </p>
          <button className="bg-[#7c9e52] hover:bg-[#5b8c5a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-900/30 text-lg">
            {bannerData.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
