"use client";

import Link from "next/link";
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f1208] via-[#1a1810] to-[#0a1508]">
      {/* SVG Wave Border at Top */}
      <div className="absolute top-0 left-0 right-0 h-20 -mt-1 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c9e52" />
              <stop offset="33%" stopColor="#d4a853" />
              <stop offset="66%" stopColor="#5b8c5a" />
              <stop offset="100%" stopColor="#7c9e52" />
            </linearGradient>
          </defs>
          <path
            d="M0 50 Q300 20 600 50 T1200 50 L1200 0 L0 0 Z"
            fill="url(#waveGradient)"
            opacity="0.6"
          />
          <path
            d="M0 70 Q400 40 800 70 T1600 70 L1600 0 L0 0 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Animated organic background shapes */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-32 left-16 w-80 h-80 rounded-full bg-[#7c9e52] blur-[100px] animate-float" />
        <div className="absolute top-48 right-24 w-96 h-96 rounded-full bg-[#d4a853] blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-[#5b8c5a] blur-[140px]" style={{ animation: "float 20s ease-in-out infinite", animationDelay: "3s" }} />
      </div>

      {/* Decorative floating leaves */}
      <div className="absolute top-16 right-16 opacity-[0.08] animate-spin-slow pointer-events-none hidden lg:block">
        <Leaf className="w-40 h-40 text-[#7c9e52]" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-24 left-24 opacity-[0.06] animate-float pointer-events-none hidden lg:block">
        <Leaf className="w-32 h-32 text-[#d4a853] transform rotate-45" strokeWidth={0.5} />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section - Larger */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7c9e52] to-[#5b8c5a] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#7c9e52] via-[#5b8c5a] to-[#4a7a40] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span
                  className="font-bold text-white text-3xl block leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Adya
                </span>
                <span className="text-[11px] text-[#a0c080] font-bold tracking-[0.3em] uppercase flex items-center gap-1.5 mt-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-scale-pulse" />
                  Organics
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#a09080] mb-8 max-w-sm">
              Bringing you the purest organic products directly from farmers. 100% certified organic, farm-fresh, and chemical-free.
            </p>

            {/* Contact Info with Enhanced Icons */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-[#a09080] hover:text-[#7c9e52] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2a1e10] border border-[#3a2e20] flex items-center justify-center group-hover:bg-[#7c9e52] group-hover:border-[#7c9e52] transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:hello@adyaorganics.com"
                className="flex items-center gap-3 text-sm text-[#a09080] hover:text-[#7c9e52] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2a1e10] border border-[#3a2e20] flex items-center justify-center group-hover:bg-[#7c9e52] group-hover:border-[#7c9e52] transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@adyaorganics.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-[#a09080]">
                <div className="w-10 h-10 rounded-xl bg-[#2a1e10] border border-[#3a2e20] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-1.5">
                  123 Organic Valley, Farm Road<br />
                  Coimbatore, Tamil Nadu - 641001
                </span>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-white font-bold mb-6 text-lg tracking-wide flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="w-1 h-6 bg-gradient-to-b from-[#7c9e52] to-[#d4a853] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#a09080] hover:text-[#7c9e52] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4
              className="text-white font-bold mb-6 text-lg tracking-wide flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="w-1 h-6 bg-gradient-to-b from-[#d4a853] to-[#7c9e52] rounded-full" />
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Cold Pressed Oils", href: "/products?category=oils" },
                { label: "Millets & Grains", href: "/products?category=millets" },
                { label: "Superfoods", href: "/products?category=superfoods" },
                { label: "Honey & Sweeteners", href: "/products?category=honey" },
                { label: "Spices & Herbs", href: "/products?category=spices" },
                { label: "Herbal Teas", href: "/products?category=teas" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#a09080] hover:text-[#7c9e52] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Trust Badges */}
          <div className="lg:col-span-3">
            <h4
              className="text-white font-bold mb-6 text-lg tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Certifications
            </h4>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["FSSAI", "Organic", "ISO"].map((cert) => (
                <div
                  key={cert}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-square rounded-xl bg-[#2a1e10] border border-[#3a2e20] flex flex-col items-center justify-center text-center p-2 group-hover:border-[#7c9e52] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2a1e10]/80">
                    <span className="text-2xl mb-1">
                      {cert === "FSSAI" ? "🏅" : cert === "Organic" ? "🌿" : "✓"}
                    </span>
                    <span className="text-[10px] font-bold text-[#7c9e52]">{cert}</span>
                    <span className="text-[9px] text-[#6b5a47]">Certified</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs text-[#6b5a47] flex items-center gap-2">
                <span className="text-[#7c9e52]">✓</span> Lab Tested Quality
              </p>
              <p className="text-xs text-[#6b5a47] flex items-center gap-2">
                <span className="text-[#7c9e52]">✓</span> Chemical Free
              </p>
              <p className="text-xs text-[#6b5a47] flex items-center gap-2">
                <span className="text-[#7c9e52]">✓</span> Direct from Farmers
              </p>
            </div>
          </div>
        </div>

        {/* Social Links - Centered across full width */}
        <div className="flex gap-3 justify-center mb-12">
          {[
            { Icon: Facebook, gradient: "from-blue-600 to-blue-400", link: "#" },
            { Icon: Instagram, gradient: "from-purple-500 to-pink-500", link: "#" },
            { Icon: Twitter, gradient: "from-blue-400 to-cyan-400", link: "#" },
          ].map(({ Icon, gradient, link }, i) => (
            <a
              key={i}
              href={link}
              className="group relative w-12 h-12 rounded-xl border border-[#3a2e20] flex items-center justify-center text-[#a09080] transition-all duration-300 hover:border-transparent hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <Icon className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a1e10]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[#5a4a37]">
              <p>© 2025 Adya Organics. All rights reserved.</p>
              <span className="hidden sm:inline text-[#3a2e20]">•</span>
              <p className="flex items-center gap-1.5">
                Made with
                <span className="inline-block animate-scale-pulse text-red-400">❤️</span>
                in India
              </p>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Shipping Policy", href: "/shipping" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-[#5a4a37] hover:text-[#7c9e52] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7c9e52] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#7c9e52]/30 to-transparent" />
    </footer>
  );
}
