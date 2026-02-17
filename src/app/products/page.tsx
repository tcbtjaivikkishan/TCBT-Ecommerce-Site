"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mockProducts,
  filterProducts,
  Product,
  Category,
  PriceRange,
} from "@/lib/mockData";

import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid    from "@/components/product/ProductGrid";

// ─── Global styles (injected once at the page level) ─────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf7f2; font-family: 'DM Sans', sans-serif; }

  :root {
    --green-dark:   #1a3a2a;
    --green-mid:    #2d5a3d;
    --green-accent: #4a8c62;
    --green-light:  #c8e6c9;
    --cream:        #faf7f2;
    --sand:         #f0ebe0;
    --stone:        #8a7f72;
    --ink:          #1a1612;
  }

  .page { min-height: 100vh; background: var(--cream); }

  /* ── Header ── */
  .header {
    position: sticky; top: 0; z-index: 50;
    background: rgba(250,247,242,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(42,90,61,0.1);
    padding: 0 20px;
  }
  .header-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center; gap: 12px;
    height: 60px;
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 800;
    color: var(--green-dark); letter-spacing: -0.5px;
    flex-shrink: 0;
  }
  .logo span { color: var(--green-accent); font-style: italic; }
  .search-wrap { flex: 1; position: relative; }
  .search-input {
    width: 100%;
    padding: 10px 40px 10px 16px;
    border: 1.5px solid rgba(42,90,61,0.2);
    border-radius: 100px;
    background: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; color: var(--ink);
    outline: none; transition: border-color 0.2s;
  }
  .search-input:focus { border-color: var(--green-accent); }
  .search-input::placeholder { color: #b0a898; }
  .search-icon {
    position: absolute; right: 14px; top: 50%;
    transform: translateY(-50%);
    color: var(--stone); font-size: 14px; pointer-events: none;
  }
  .cart-btn {
    flex-shrink: 0;
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--green-dark);
    border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 16px;
    position: relative; transition: transform 0.2s;
  }
  .cart-btn:active { transform: scale(0.92); }
  .cart-badge {
    position: absolute; top: -4px; right: -4px;
    background: #e85d4a; color: white;
    font-size: 9px; font-weight: 700;
    width: 16px; height: 16px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Hero ── */
  .hero {
    background: var(--green-dark);
    padding: 32px 20px;
    overflow: hidden; position: relative;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(74,140,98,0.3) 0%, transparent 60%);
  }
  .hero-inner { max-width: 1400px; margin: 0 auto; position: relative; }
  .hero-label {
    display: inline-block;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: #a8d5b5; font-size: 11px;
    font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; padding: 5px 12px;
    border-radius: 100px; margin-bottom: 14px;
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 800; color: white; line-height: 1.2;
    margin-bottom: 10px;
  }
  .hero h1 em { color: #a8d5b5; font-style: italic; }
  .hero p { color: rgba(255,255,255,0.6); font-size: 14px; }
  .hero-stats { display: flex; gap: 24px; margin-top: 20px; }
  .hero-stat { color: white; }
  .hero-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700;
  }
  .hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.5); }

  /* ── Filters ── */
  .filter-section {
    background: white;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    position: sticky; top: 60px; z-index: 40;
  }
  .filter-inner {
    max-width: 1400px; margin: 0 auto;
    padding: 12px 20px;
    display: flex; gap: 8px;
    overflow-x: auto; scrollbar-width: none;
  }
  .filter-inner::-webkit-scrollbar { display: none; }
  .pill {
    flex-shrink: 0;
    padding: 7px 16px; border-radius: 100px;
    font-size: 13px; font-weight: 500;
    cursor: pointer; border: 1.5px solid transparent;
    transition: all 0.2s; white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
  }
  .pill-inactive { background: var(--sand); color: var(--stone); }
  .pill-inactive:hover { border-color: var(--green-accent); color: var(--green-mid); }
  .pill-active { background: var(--green-dark); color: white; border-color: var(--green-dark); }
  .pill-divider { width: 1px; background: rgba(0,0,0,0.08); margin: 4px; flex-shrink: 0; }

  /* ── Sort bar ── */
  .sort-bar {
    max-width: 1400px; margin: 0 auto;
    padding: 16px 20px 0;
    display: flex; align-items: center; justify-content: space-between;
  }
  .result-count { font-size: 13px; color: var(--stone); }
  .result-count strong { color: var(--ink); }
  .sort-select {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; color: var(--ink);
    background: white; border: 1.5px solid rgba(0,0,0,0.1);
    border-radius: 100px; padding: 6px 14px;
    outline: none; cursor: pointer;
  }

  /* ── Grid ── */
  .main-content {
    max-width: 1400px; margin: 0 auto;
    padding: 16px 16px 100px;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 640px) {
    .product-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
  }
  @media (min-width: 1024px) {
    .product-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .main-content { padding: 20px 20px 60px; }
  }

  /* ── Card ── */
  .card {
    background: white; border-radius: 20px;
    overflow: hidden; border: 1px solid rgba(0,0,0,0.06);
    cursor: pointer; transition: box-shadow 0.3s, transform 0.3s;
  }
  .card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
  .card-img-wrap {
    position: relative; aspect-ratio: 1;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; font-size: 64px;
    transition: transform 0.4s;
  }
  .card:hover .card-img-wrap { transform: scale(1.04); }
  .card-tag {
    position: absolute; top: 10px; left: 10px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(8px);
    font-size: 10px; font-weight: 600; color: var(--green-dark);
    padding: 3px 9px; border-radius: 100px; letter-spacing: 0.5px;
  }
  .card-fav {
    position: absolute; top: 10px; right: 10px;
    width: 30px; height: 30px;
    background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
    border-radius: 50%; display: flex;
    align-items: center; justify-content: center;
    font-size: 14px; transition: transform 0.2s;
    border: none; cursor: pointer;
  }
  .card-fav:hover { transform: scale(1.15); }
  .card-body { padding: 12px 14px 14px; }
  .card-category {
    font-size: 10px; font-weight: 600; color: var(--green-accent);
    text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;
  }
  .card-name {
    font-family: 'Playfair Display', serif;
    font-size: 15px; font-weight: 600;
    color: var(--ink); line-height: 1.3; margin-bottom: 8px;
  }
  .card-footer { display: flex; align-items: center; justify-content: space-between; }
  .card-price { font-size: 16px; font-weight: 700; color: var(--green-dark); }
  .card-price span { font-size: 11px; font-weight: 400; color: var(--stone); }
  .card-add {
    width: 32px; height: 32px;
    background: var(--green-dark); border-radius: 50%; border: none;
    color: white; font-size: 18px; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: background 0.2s, transform 0.15s;
  }
  .card-add:active  { transform: scale(0.88); }
  .card-add:hover   { background: var(--green-accent); }

  /* ── Empty state ── */
  .empty { text-align: center; padding: 60px 20px; }
  .empty-emoji { font-size: 48px; margin-bottom: 12px; }
  .empty h3 {
    font-family: 'Playfair Display', serif;
    font-size: 22px; color: var(--ink); margin-bottom: 6px;
  }
  .empty p { color: var(--stone); font-size: 14px; }
  .empty-btn {
    margin-top: 16px; padding: 10px 24px;
    background: var(--green-dark); color: white;
    border: none; border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 500; cursor: pointer;
  }

  /* ── Toast ── */
  .toast {
    position: fixed; top: 72px; left: 50%; transform: translateX(-50%);
    background: var(--green-dark); color: white;
    padding: 10px 20px; border-radius: 100px;
    font-size: 13px; font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    z-index: 100; white-space: nowrap;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  }

  /* ── Bottom nav ── */
  .bottom-nav {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
    background: var(--green-dark);
    display: flex; align-items: stretch;
    padding-bottom: env(safe-area-inset-bottom);
  }
  @media (min-width: 1024px) { .bottom-nav { display: none; } }
  .bnav-item {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 12px 0; gap: 3px;
    cursor: pointer; border: none; background: transparent;
    color: rgba(255,255,255,0.45);
    transition: color 0.2s; font-family: 'DM Sans', sans-serif;
  }
  .bnav-item.active { color: white; }
  .bnav-icon  { font-size: 20px; }
  .bnav-label { font-size: 10px; font-weight: 500; letter-spacing: 0.3px; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }
`;

// ─── Bottom nav items ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "home",    icon: "🏠", label: "Home"     },
  { id: "shop",    icon: "🌿", label: "Shop"     },
  { id: "search",  icon: "🔍", label: "Search"   },
  { id: "fav",     icon: "❤️", label: "Wishlist" },
  { id: "profile", icon: "👤", label: "Profile"  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activePrice,    setActivePrice]    = useState<PriceRange>("All Prices");
  const [search,         setSearch]         = useState("");
  const [cart,           setCart]           = useState<Product[]>([]);
  const [favorites,      setFavorites]      = useState<number[]>([]);
  const [toast,          setToast]          = useState("");
  const [activeNav,      setActiveNav]      = useState("shop");

  const filtered = filterProducts(mockProducts, activeCategory, activePrice, search);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setCart((prev) => [...prev, product]);
    showToast(`${product.name} added 🌿`);
  };

  const handleToggleFav = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setActivePrice("All Prices");
    setSearch("");
  };

  return (
    <>
      <style>{globalStyles}</style>

      <div className="page">
        

        {/* ── Header ── */}
        {/* <header className="header">
          <div className="header-inner">
            <div className="logo">Plnt<span>.</span></div>

            <div className="search-wrap">
              <input
                className="search-input"
                placeholder="Search plants…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="search-icon" aria-hidden="true">🔍</span>
            </div>

            <button
              className="cart-btn"
              aria-label={`Cart — ${cart.length} items`}
              onClick={() => showToast(`${cart.length} item${cart.length !== 1 ? "s" : ""} in cart`)}
            >
              🛒
              {cart.length > 0 && (
                <span className="cart-badge" aria-hidden="true">{cart.length}</span>
              )}
            </button>
          </div>
        </header> */}

        {/* ── Hero ── */}
        {/* <section className="hero">
          <div className="hero-inner">
            <div className="hero-label">New Arrivals</div>
            <h1>Bring <em>Nature</em><br />into your home</h1>
            <p>Curated botanical collection, delivered fresh</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">200+</div>
                <div className="hero-stat-label">Varieties</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">48h</div>
                <div className="hero-stat-label">Delivery</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">4.9★</div>
                <div className="hero-stat-label">Rating</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ── Filters + sort bar ── */}
        <ProductFilters
          activeCategory={activeCategory}
          activePrice={activePrice}
          resultCount={filtered.length}
          onCategoryChange={setActiveCategory}
          onPriceChange={setActivePrice}
        />

        {/* ── Product grid ── */}
        <main className="main-content">
          <ProductGrid
            products={filtered}
            favorites={favorites}
            onAddToCart={handleAddToCart}
            onToggleFav={handleToggleFav}
            onClearFilters={handleClearFilters}
          />
        </main>

        {/* ── Toast ── */}
        <AnimatePresence>
          {toast && (
            <motion.div
              className="toast"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom nav (mobile only) ── */}
        <nav className="bottom-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`bnav-item ${activeNav === item.id ? "active" : ""}`}
              onClick={() => setActiveNav(item.id)}
              aria-current={activeNav === item.id ? "page" : undefined}
            >
              <span className="bnav-icon" aria-hidden="true">{item.icon}</span>
              <span className="bnav-label">{item.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </>
  );
}