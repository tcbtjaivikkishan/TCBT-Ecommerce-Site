// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/provider";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adya Organics | Pure Nature, Pure Life",
  description:
    "Shop 100% certified organic, cold-pressed, and farm-fresh products. From millets to superfoods — pure, honest, and wholesome food for your family.",
  keywords: "organic food, cold pressed oil, millets, superfoods, natural honey, farmer direct",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
