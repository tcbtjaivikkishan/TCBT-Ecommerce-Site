"use client";

import { whyUsData, statsData } from "@/lib/homeData";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#7c9e52] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a1a] mb-4">
              Pure & Honest Food
            </h2>
            <p className="text-[#4a5a4a] max-w-2xl mx-auto">
              We're committed to bringing you the purest organic products directly from trusted farms.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1a3a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4a5a4a] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2c4a2c]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#7c9e52] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
