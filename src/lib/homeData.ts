// lib/homeData.ts

export const heroData = {
  badge: "100% Natural & Certified Organic",
  headline: "Pure Nature,",
  headlineAccent: "Pure Life",
  subheadline:
    "From the heart of organic farms to your table — discover wholesome food that nourishes your body and respects the planet.",
  cta: "Shop Now",
  ctaSecondary: "Our Story",
  heroImage:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
  trustBadges: ["Lab Tested", "No Preservatives", "Farmer Direct"],
};

export const categoriesData = [
  {
    id: 1,
    name: "Cold Pressed Oils",
    slug: "cold-pressed-oils",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    count: "12 Products",
    color: "#d4a853",
  },
  {
    id: 2,
    name: "Millets & Grains",
    slug: "millets-grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    count: "18 Products",
    color: "#7c9e52",
  },
  {
    id: 3,
    name: "Herbal Teas",
    slug: "herbal-teas",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    count: "9 Products",
    color: "#5b8c5a",
  },
  {
    id: 4,
    name: "Natural Sweeteners",
    slug: "natural-sweeteners",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    count: "6 Products",
    color: "#c17d3c",
  },
  {
    id: 5,
    name: "Superfoods",
    slug: "superfoods",
    image:
      "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=400&q=80",
    count: "14 Products",
    color: "#6b4c8a",
  },
  {
    id: 6,
    name: "Spices & Masalas",
    slug: "spices-masalas",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    count: "22 Products",
    color: "#c0392b",
  },
];

export const featuredProductsData = [
  {
    id: 1,
    name: "Cold Pressed Coconut Oil",
    category: "Oils",
    price: 349,
    originalPrice: 420,
    weight: "500ml",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&q=80",
    badge: "Bestseller",
    badgeColor: "#d4a853",
    rating: 4.8,
    reviews: 234,
    slug: "cold-pressed-coconut-oil",
  },
  {
    id: 2,
    name: "Foxtail Millet",
    category: "Millets",
    price: 129,
    originalPrice: 160,
    weight: "1kg",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    badge: "New",
    badgeColor: "#7c9e52",
    rating: 4.6,
    reviews: 89,
    slug: "foxtail-millet",
  },
  {
    id: 3,
    name: "Raw Forest Honey",
    category: "Sweeteners",
    price: 499,
    originalPrice: 599,
    weight: "500g",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
    badge: "Organic",
    badgeColor: "#5b8c5a",
    rating: 4.9,
    reviews: 412,
    slug: "raw-forest-honey",
  },
  {
    id: 4,
    name: "Moringa Powder",
    category: "Superfoods",
    price: 279,
    originalPrice: 340,
    weight: "200g",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80",
    badge: "Superfood",
    badgeColor: "#6b4c8a",
    rating: 4.7,
    reviews: 156,
    slug: "moringa-powder",
  },
];

export const whyUsData = [
  {
    id: 1,
    icon: "🌿",
    title: "100% Organic Certified",
    description:
      "Every product is certified by India Organic & FSSAI, ensuring purity you can trust.",
  },
  {
    id: 2,
    icon: "🧑‍🌾",
    title: "Direct From Farmers",
    description:
      "We partner with 500+ small farmers across India, ensuring fair wages and fresh produce.",
  },
  {
    id: 3,
    icon: "🔬",
    title: "Lab Tested Quality",
    description:
      "Every batch is third-party lab tested for pesticides, heavy metals, and adulterants.",
  },
  {
    id: 4,
    icon: "♻️",
    title: "Eco Friendly Packaging",
    description:
      "Biodegradable, minimal packaging that's as kind to the planet as our products.",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b9e77ac7?w=80&q=80",
    text: "Switched to Adya Organics 6 months ago and I can genuinely feel the difference. The coconut oil is incredible — nothing like what you find in supermarkets.",
    rating: 5,
    product: "Cold Pressed Coconut Oil",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Bengaluru",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    text: "The millets are so fresh and clean. My whole family is eating healthier now. The packaging is minimal and sustainable — exactly what I look for.",
    rating: 5,
    product: "Foxtail Millet",
  },
  {
    id: 3,
    name: "Ananya Krishnan",
    location: "Chennai",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    text: "The forest honey is the real deal — thick, raw, and absolutely delicious. I've tried many brands but this is on another level. Will never go back!",
    rating: 5,
    product: "Raw Forest Honey",
  },
];

export const statsData = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "500+", label: "Farmer Partners" },
  { value: "100+", label: "Products" },
  { value: "8", label: "Years of Trust" },
];

export const bannerData = {
  headline: "Farm to Fork, Nothing In Between",
  subtext:
    "Taste the difference of food grown with love, harvested with care, and delivered with purpose.",
  image:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80",
  cta: "Explore All Products",
};

export const blogData = [
  {
    id: 1,
    title: "Why Cold Pressed Oils Are Better For Your Health",
    excerpt:
      "Most refined oils lose their nutrients during processing. Cold pressing preserves the natural antioxidants, vitamins, and flavour.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    slug: "cold-pressed-oils-health",
  },
  {
    id: 2,
    title: "The Ancient Power of Millets: A Modern Superfood",
    excerpt:
      "Once a staple of Indian diets, millets are making a comeback — and for good reason. Rich in fibre, protein, and minerals.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    date: "Jan 28, 2025",
    readTime: "5 min read",
    slug: "millets-superfood",
  },
  {
    id: 3,
    title: "How to Identify Real Raw Honey from the Fake",
    excerpt:
      "The honey market is flooded with adulterated products. Here's a simple guide to ensure you're getting the pure, raw deal.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
    date: "Jan 15, 2025",
    readTime: "3 min read",
    slug: "real-raw-honey-guide",
  },
];

export const navLinks = [
  { 
    label: "Categories", 
    href: "/products",
    dropdown: [
      { label: "Cold Pressed Oils", href: "/products?category=cold-pressed-oils" },
      { label: "Millets & Grains", href: "/products?category=millets-grains" },
      { label: "Herbal Teas", href: "/products?category=herbal-teas" },
      { label: "Natural Sweeteners", href: "/products?category=natural-sweeteners" },
      { label: "Superfoods", href: "/products?category=superfoods" },
    ]
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];


