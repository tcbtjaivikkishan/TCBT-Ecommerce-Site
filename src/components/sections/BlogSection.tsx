"use client";

import Link from "next/link";
import { blogData } from "@/lib/homeData";

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#7c9e52] text-xs font-bold tracking-[0.2em] uppercase">
            Our Blog
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1a3a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Latest Articles
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover tips, recipes, and insights about organic living, healthy
            eating, and sustainable farming practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-[#1a3a1a] font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#7c9e52] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-[#7c9e52] font-semibold text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-[#1a3a1a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#2c4a2c] transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
