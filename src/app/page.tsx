
// app/homePage/page.tsx  — Server Component
// All static data lives in @/lib/homeData.ts
// Client-side interactivity is in each section component

import BannerSection from "@/components/sections/Bannersection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProductsSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/Whyussection";
import BlogSection from "@/components/sections/BlogSection";
// This is a Server Component — fetches data and passes to client components
export default function HomePage() {
  return (
    <>
      {/* Hero - uses client animations & parallax */}
      <HeroSection />

      {/* Shop by category */}
      <CategoriesSection />

      {/* Featured Products - with cart add interaction */}
      <FeaturedProducts />

      {/* Why Choose Us + Stats */}
      <WhyUsSection />

      {/* Full-Width Farm Banner */}
      <BannerSection />

            {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Blog Preview */}
      <BlogSection />

      

    </>
  );
}




