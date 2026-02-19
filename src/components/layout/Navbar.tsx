"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Leaf, Heart, Package, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { navLinks } from "@/lib/homeData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector(
    (state: any) => state.cart?.items?.reduce((acc: number, item: any) => acc + item.quantity, 0) ?? 0
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-white shadow-lg border-b border-[#e8dcc8]/50"
          : "top-0 bg-white"
      }`}
    >
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c9e52] via-[#d4a853] via-[#5b8c5a] to-[#7c9e52] opacity-70" />
      
      {/* Floating organic shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#e8f0d8] blur-3xl animate-float" />
        <div className="absolute -top-10 right-1/4 w-32 h-32 rounded-full bg-[#f0e8d0] blur-3xl animate-float-delayed" />
        <div className="absolute -top-16 right-10 w-24 h-24 rounded-full bg-[#d4e8b0] blur-2xl" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo with pulsing ring */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Pulsing ring behind logo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7c9e52] to-[#5b8c5a] opacity-30 animate-pulse-ring" />
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#7c9e52] via-[#5b8c5a] to-[#4a7a40] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Leaf className="w-5 h-5 text-white animate-wiggle" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-[#1a1208] text-xl tracking-tight group-hover:text-[#7c9e52] transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Adya
              </span>
              <span className="text-[11px] text-[#7c9e52] font-bold tracking-[0.25em] uppercase -mt-1 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-[#d4a853] animate-scale-pulse" />
                Organics
              </span>
            </div>
          </Link>

          {/* Desktop Nav with bubble animation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="relative px-4 py-2 text-[#4a3728] font-semibold text-sm tracking-wide group flex items-center gap-1">
                      <span className="relative z-10 group-hover:text-[#7c9e52] transition-colors duration-300">
                        {link.label}
                      </span>
                      <ChevronDown className="w-3 h-3 group-hover:text-[#7c9e52] transition-colors duration-300" />
                      {/* Animated background blob */}
                      <span className="absolute inset-0 rounded-full bg-[#e8f0d8] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                      {/* Bottom accent line */}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7c9e52] to-[#d4a853] group-hover:w-full transition-all duration-300 rounded-full" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-56 bg-white/95 backdrop-blur-xl border border-[#e8dcc8] shadow-xl rounded-2xl p-2 mt-2"
                  >
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-3 py-2.5 text-[#4a3728] hover:text-[#7c9e52] hover:bg-[#e8f0d8]/50 rounded-xl cursor-pointer transition-all duration-200"
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-[#4a3728] font-semibold text-sm tracking-wide group"
                >
                  <span className="relative z-10 group-hover:text-[#7c9e52] transition-colors duration-300">
                    {link.label}
                  </span>
                  {/* Animated background blob */}
                  <span className="absolute inset-0 rounded-full bg-[#e8f0d8] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  {/* Bottom accent line */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7c9e52] to-[#d4a853] group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              )
            ))}
          </nav>

          {/* Right Icons - Enhanced */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="relative p-2.5 text-[#4a3728] hover:text-[#7c9e52] transition-all duration-300 group rounded-full hover:bg-[#e8f0d8]">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Wishlist with heart beat */}
            <Link
              href="/wishlist"
              className="relative p-2.5 text-[#4a3728] hover:text-[#7c9e52] transition-all duration-300 group rounded-full hover:bg-[#e8f0d8]"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 group-hover:fill-red-400 group-hover:text-red-400 transition-all duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Link>

            {/* Track Order */}
            <Link
              href="/track-order"
              className="relative p-2.5 text-[#4a3728] hover:text-[#7c9e52] transition-all duration-300 group rounded-full hover:bg-[#e8f0d8]"
            >
              <Package className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </Link>

            {/* Cart with animated badge */}
            <Link
              href="/cart"
              className="relative p-2.5 text-[#4a3728] hover:text-[#7c9e52] transition-all duration-300 group rounded-full hover:bg-[#e8f0d8]"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-gradient-to-br from-[#7c9e52] to-[#5b8c5a] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* CTA Button with gradient */}
            <Link
              href="/products"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#7c9e52] to-[#5b8c5a] hover:from-[#5b8c5a] hover:to-[#4a7a40] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 ml-2"
            >
              <span>Shop Now</span>
              <span className="text-xs">🌿</span>
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-[#4a3728] rounded-full hover:bg-[#e8f0d8] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-gradient-to-b from-white to-[#faf7f2] border-t border-[#e8dcc8]/50`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#4a3728] font-semibold text-base hover:text-[#7c9e52] transition-colors flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c9e52]" />
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="w-fit bg-gradient-to-r from-[#7c9e52] to-[#5b8c5a] text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
            onClick={() => setMenuOpen(false)}
          >
            Shop Now 🌿
          </Link>
        </nav>
      </div>

      {/* Bottom decorative line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#7c9e52]/30 to-transparent" />
        </div>
      )}
    </header>
  );
}
