import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FadeIn from "../animation/FadeIn";
import HoverButton from "../animation/HoverButton";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-10 py-6">
      {/* 1. TOP HEADER GRID (Title + Subtext & Button) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-14 px-10">
        {/* Left: Main Maroon Heading */}
        <FadeIn
          className="md:col-span-7"
          delay={0}
          duration={1}
          x={-50}
          once={true}
        >
          <h1 className="text-3xl md:text-5xl font-black text-[#8C2C2C] leading-tight tracking-tight uppercase">
            Yayasan Pendidikan <br />
            Islam Imam Syafi'i
          </h1>
        </FadeIn>

        {/* Right: Intro Paragraph & Pill Button */}
        <div className="md:col-span-5 flex flex-col items-start md:items-start justify-between space-y-4">
          <FadeIn
            className="md:col-span-5"
            delay={0.2}
            duration={1}
            x={50}
            once={true}
          >
            <p className="text-base font-medium text-[#1B1B1B] leading-relaxed text-left md:text-left max-w-md mb-10">
              Menanamkan benih tauhid dan adab sejak dini dalam lingkungan yang
              penuh kasih sayang. Fokus pada penanaman aqidah yang lurus,
              hafalan doa harian, dan pembiasaan adab islami.
            </p>
          </FadeIn>
          <FadeIn
            className="md:col-span-5"
            delay={0.4}
            duration={1}
            x={50}
            once={true}
          >
            <HoverButton />
          </FadeIn>
        </div>
      </div>

      {/* 2. HERO IMAGE BANNER */}
      <FadeIn
        className="relative w-full h-120 rounded-2xl overflow-hidden shadow-md"
        delay={0.6}
        duration={1}
        y={50}
        once={true}
      >
        {/* Base Background Image */}
        <Image
          src="/hero-school.jpg" // Place your high-res hero image in public/hero-campus.jpg
          alt="Gedung Yayasan Pendidikan Islam Imam Syafi'i"
          fill
          priority // Prioritize loading for LCP (Largest Contentful Paint)
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />

        {/* Dark Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </FadeIn>
    </section>
  );
}
