"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProductsData } from "@/lib/homeData";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#7c9e52] text-xs font-bold tracking-[0.2em] uppercase">
            Featured Products
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a3a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Customer Favorites
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProductsData.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <div
                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="p-4">
                <p className="text-[#7c9e52] text-xs font-medium mb-1">
                  {product.category}
                </p>
                <h3 className="text-[#1a3a1a] font-semibold text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#1a3a1a] font-bold">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-[#7c9e52] text-xs font-medium">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % off
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    <span className="text-[#1a3a1a] text-xs font-medium">
                      {product.rating}
                    </span>
                    <span className="text-gray-400 text-xs">
                      ({product.reviews})
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">{product.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-[#1a3a1a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2c4a2c] transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
