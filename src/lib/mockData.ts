export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  sizes: {
    label: string;
    price: number;
  }[];
  stock: number;
  category: string;
}

export const mockProducts: Product[] = [
  // ─── Plants ───────────────────────────────────────────────────────────────
  {
    id: "1",
    name: "Spider Plant Variegated & Pot",
    description:
      "Delivered with a stylish pot, each plant is both decorative and easy to care for. Thriving in bright, indirect light with moderate watering.",
    images: ["/products/P1.webp", "/products/P2.webp"],
    sizes: [
      { label: "Medium", price: 34.9 },
      { label: "Large",  price: 44.9 },
    ],
    stock: 10,
    category: "Plants",
  },
  {
    id: "2",
    name: "Monstera Deliciosa",
    description:
      "The iconic Swiss Cheese Plant with dramatic split leaves. A statement piece for any living space, thriving in indirect light with weekly watering. Air-purifying and pet-safe.",
    images: ["/products/P3.webp", "/products/P4.webp"],
    sizes: [
      { label: "Small",  price: 19.9 },
      { label: "Medium", price: 34.9 },
      { label: "Large",  price: 59.9 },
    ],
    stock: 8,
    category: "Plants",
  },
  {
    id: "3",
    name: "Peace Lily",
    description:
      "A graceful houseplant known for its elegant white blooms and glossy dark leaves. Excellent air purifier that removes common toxins. Tolerates low light beautifully.",
    images: ["/products/P5.webp", "/products/P6.webp"],
    sizes: [
      { label: "Small",  price: 14.9 },
      { label: "Medium", price: 24.9 },
    ],
    stock: 15,
    category: "Plants",
  },
  {
    id: "4",
    name: "Fiddle Leaf Fig",
    description:
      "The designer favourite with large, violin-shaped leaves. Makes a bold architectural statement in any room. Prefers bright, indirect light and consistent watering.",
    images: ["/products/P7.webp", "/products/P8.webp"],
    sizes: [
      { label: "Medium", price: 49.9 },
      { label: "Large",  price: 89.9 },
      { label: "XL",     price: 129.9 },
    ],
    stock: 5,
    category: "Plants",
  },
  {
    id: "5",
    name: "Bird of Paradise",
    description:
      "A tropical showstopper with large, paddle-shaped leaves that develop natural splits over time. Perfect for bright rooms and brings an instant resort feel to your home.",
    images: ["/products/P9.webp", "/products/P10.webp"],
    sizes: [
      { label: "Medium", price: 44.9 },
      { label: "Large",  price: 79.9 },
    ],
    stock: 6,
    category: "Plants",
  },
  {
    id: "6",
    name: "Snake Plant",
    description:
      "One of the most resilient houseplants available. Upright, architectural leaves with yellow margins thrive in almost any condition. An ideal beginner plant that purifies air overnight.",
    images: ["/products/P11.webp", "/products/P12.webp"],
    sizes: [
      { label: "Small",  price: 12.9 },
      { label: "Medium", price: 22.9 },
      { label: "Large",  price: 38.9 },
    ],
    stock: 20,
    category: "Plants",
  },
  {
    id: "7",
    name: "Pothos Golden",
    description:
      "A fast-growing trailing plant with heart-shaped, golden-green leaves. Nearly indestructible and perfect for hanging baskets or shelves. Tolerates low light and irregular watering.",
    images: ["/products/P13.webp", "/products/P14.webp"],
    sizes: [
      { label: "Small",  price: 9.9  },
      { label: "Medium", price: 18.9 },
    ],
    stock: 25,
    category: "Plants",
  },
  {
    id: "8",
    name: "ZZ Plant",
    description:
      "With its glossy, waxy leaves and drought-tolerant nature, the ZZ plant is a top choice for busy plant owners. Stores water in its thick rhizomes and thrives in low light.",
    images: ["/products/P15.webp", "/products/P16.webp"],
    sizes: [
      { label: "Small",  price: 16.9 },
      { label: "Medium", price: 29.9 },
    ],
    stock: 12,
    category: "Plants",
  },

  // ─── Succulents ───────────────────────────────────────────────────────────
  {
    id: "9",
    name: "Echeveria Elegans",
    description:
      "A classic rosette-shaped succulent with powdery blue-green leaves. Ideal for windowsills and terrariums. Requires very little water and loves full sun.",
    images: ["/products/S1.webp", "/products/S2.webp"],
    sizes: [
      { label: "Small",  price: 6.9  },
      { label: "Medium", price: 12.9 },
    ],
    stock: 30,
    category: "Succulents",
  },
  {
    id: "10",
    name: "Aloe Vera",
    description:
      "The original first-aid plant. Thick, fleshy leaves contain soothing gel perfect for minor burns and skin care. Extremely drought-tolerant and loves a sunny spot.",
    images: ["/products/S3.webp", "/products/S4.webp"],
    sizes: [
      { label: "Small",  price: 8.9  },
      { label: "Medium", price: 16.9 },
      { label: "Large",  price: 28.9 },
    ],
    stock: 18,
    category: "Succulents",
  },
  {
    id: "11",
    name: "Haworthia Zebra",
    description:
      "A charming compact succulent with distinctive white horizontal stripes. Thrives in indirect light making it perfect for offices or low-light corners. Slow growing and low maintenance.",
    images: ["/products/S5.webp", "/products/S6.webp"],
    sizes: [
      { label: "Small",  price: 7.9  },
      { label: "Medium", price: 13.9 },
    ],
    stock: 22,
    category: "Succulents",
  },
  {
    id: "12",
    name: "Jade Plant",
    description:
      "A long-lived succulent with thick, oval leaves often said to bring good luck. With time, develops an impressive tree-like form. Can live for decades with minimal care.",
    images: ["/products/S7.webp", "/products/S8.webp"],
    sizes: [
      { label: "Small",  price: 9.9  },
      { label: "Medium", price: 19.9 },
      { label: "Large",  price: 34.9 },
    ],
    stock: 14,
    category: "Succulents",
  },

  // ─── Outdoor Plants ───────────────────────────────────────────────────────
  {
    id: "13",
    name: "Lavender Hidcote",
    description:
      "Classic English lavender with deep purple flowers and intense fragrance. Beloved by pollinators and perfect for borders, pots or herb gardens. Drought-hardy once established.",
    images: ["/products/O1.webp", "/products/O2.webp"],
    sizes: [
      { label: "Small",  price: 11.9 },
      { label: "Medium", price: 19.9 },
    ],
    stock: 16,
    category: "Outdoor Plants",
  },
  {
    id: "14",
    name: "Bougainvillea Crimson",
    description:
      "A spectacular climbing plant with vivid crimson-magenta bracts that bloom profusely in warm weather. Perfect for fences, trellises and large pots. Drought tolerant and sun-loving.",
    images: ["/products/O3.webp", "/products/O4.webp"],
    sizes: [
      { label: "Medium", price: 24.9 },
      { label: "Large",  price: 44.9 },
    ],
    stock: 9,
    category: "Outdoor Plants",
  },
  {
    id: "15",
    name: "Olive Tree",
    description:
      "A timeless Mediterranean classic. Silver-green foliage and gnarled trunks bring instant character to patios and gardens. Long-lived, drought-tolerant, and surprisingly hardy.",
    images: ["/products/O5.webp", "/products/O6.webp"],
    sizes: [
      { label: "Medium", price: 49.9 },
      { label: "Large",  price: 89.9 },
      { label: "XL",     price: 149.9 },
    ],
    stock: 4,
    category: "Outdoor Plants",
  },

  // ─── Accessories ──────────────────────────────────────────────────────────
  {
    id: "16",
    name: "Terracotta Pot Set",
    description:
      "A set of three hand-finished terracotta pots in graduated sizes. Classic unglazed finish promotes healthy root growth through natural breathability. Drainage hole included.",
    images: ["/products/A1.webp", "/products/A2.webp"],
    sizes: [
      { label: "Set of 3 (S/M/L)", price: 22.9 },
      { label: "Set of 5 (XS–XL)", price: 38.9 },
    ],
    stock: 20,
    category: "Accessories",
  },
  {
    id: "17",
    name: "Woven Seagrass Basket",
    description:
      "Handwoven natural seagrass basket planter with a removable waterproof liner. Adds a warm, organic texture to any interior. Available in two sizes to fit standard nursery pots.",
    images: ["/products/A3.webp", "/products/A4.webp"],
    sizes: [
      { label: "Medium (fits 14cm pot)", price: 18.9 },
      { label: "Large (fits 21cm pot)",  price: 26.9 },
    ],
    stock: 17,
    category: "Accessories",
  },
  {
    id: "18",
    name: "Premium Potting Mix",
    description:
      "A professional-grade all-purpose potting mix enriched with perlite, coco coir and slow-release fertiliser. Provides excellent drainage and aeration for healthy root growth.",
    images: ["/products/A5.webp", "/products/A6.webp"],
    sizes: [
      { label: "5L Bag",  price: 8.9  },
      { label: "10L Bag", price: 14.9 },
      { label: "20L Bag", price: 24.9 },
    ],
    stock: 35,
    category: "Accessories",
  },
  {
    id: "19",
    name: "Copper Watering Can",
    description:
      "An elegant long-spouted watering can in brushed copper finish. The precision spout delivers a gentle, targeted stream ideal for houseplants and seedlings. Holds 1.5 litres.",
    images: ["/products/A7.webp", "/products/A8.webp"],
    sizes: [
      { label: "1.5L", price: 32.9 },
    ],
    stock: 11,
    category: "Accessories",
  },
  {
    id: "20",
    name: "Misting Spray Bottle",
    description:
      "A premium glass misting bottle with a fine-mist brass nozzle. Perfect for humidity-loving plants like ferns and orchids. Adjustable nozzle switches between mist and stream.",
    images: ["/products/A9.webp", "/products/A10.webp"],
    sizes: [
      { label: "300ml", price: 12.9 },
      { label: "500ml", price: 16.9 },
    ],
    stock: 24,
    category: "Accessories",
  },
];

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const CATEGORIES = [
  "All",
  "Plants",
  "Succulents",
  "Outdoor Plants",
  "Accessories",
] as const;

export const PRICE_RANGES = [
  "All Prices",
  "Under £15",
  "£15 – £40",
  "Above £40",
] as const;

export type Category   = (typeof CATEGORIES)[number];
export type PriceRange = (typeof PRICE_RANGES)[number];

export function filterProducts(
  products: Product[],
  category: Category,
  price: PriceRange,
  search: string,
): Product[] {
  return products.filter((p) => {
    const matchCat =
      category === "All" || p.category === category;

    const minPrice = p.sizes[0].price;
    const matchPrice =
      price === "All Prices" ||
      (price === "Under £15"   && minPrice < 15) ||
      (price === "£15 – £40"  && minPrice >= 15 && minPrice <= 40) ||
      (price === "Above £40"   && minPrice > 40);

    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    return matchCat && matchPrice && matchSearch;
  });
}