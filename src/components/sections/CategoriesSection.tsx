"use client";

import Link from "next/link";
import { categoriesData } from "@/lib/homeData";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#7c9e52] text-xs font-bold tracking-[0.2em] uppercase">
            Shop by Category
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a3a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Browse Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${category.color}20` }}
                />
              </div>
              <h3 className="text-[#1a3a1a] font-semibold text-center text-sm">
                {category.name}
              </h3>
              <p className="text-[#7c9e52] text-xs text-center mt-1">
                {category.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
