// app/layout.tsx
import type { Metadata } from "next";
import { Red_Hat_Display, Inter } from "next/font/google";
import "./globals.css";

// Importing decomposed components
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-red-hat-display", // Optional CSS variable name
  display: "swap",
});
export const metadata: Metadata = {
  title: "test",
  description: "School platform homepage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className} ${redHatDisplay.variable}`}>
        {/* SHARED HEADER (Fixed at top) */}
        <Header />

        {/* MAIN CONTENT CONTAINER (The Page content goes here) */}
        <main className=" flex-1 min-h-screen pt-20 bg-[#F8F7F3]">
          {/* pt-20 is for header clearance if fixed */}
          {children}
        </main>

        {/* SHARED FOOTER (Stays at bottom) */}
        <Footer />
      </body>
    </html>
  );
}
