import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FadeIn from "../../components/animation/FadeIn";
import HoverButton from "../../components/animation/HoverButton";

export default function HeroSection() {
  return (
    <section className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
      {/* 1. TOP HEADER GRID (Title + Subtext & Button) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 lg:mb-16">
        {/* Left: Main Maroon Heading */}
        <FadeIn
          className="lg:col-span-7"
          delay={0}
          duration={1}
          x={-40}
          once={true}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-[#8C2C2C] leading-[1.15] tracking-tight uppercase">
            Yayasan Pendidikan <br className="hidden sm:inline" />
            Islam Imam Syafi'i
          </h1>
        </FadeIn>

        {/* Right: Intro Paragraph & Pill Button */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start space-y-6">
          <FadeIn delay={0.2} duration={1} x={40} once={true}>
            <p className="text-base sm:text-lg 2xl:text-xl font-medium text-[#1B1B1B] leading-relaxed max-w-xl">
              Menanamkan benih tauhid dan adab sejak dini dalam lingkungan yang
              penuh kasih sayang. Fokus pada penanaman aqidah yang lurus,
              hafalan doa harian, dan pembiasaan adab islami.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} duration={1} x={40} once={true}>
            <HoverButton />
          </FadeIn>
        </div>
      </div>

      {/* 2. HERO IMAGE BANNER */}
      <FadeIn
        className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] 2xl:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
        delay={0.6}
        duration={1}
        y={40}
        once={true}
      >
        {/* Base Background Image */}
        <Image
          src="/hero-school.jpg"
          alt="Gedung Yayasan Pendidikan Islam Imam Syafi'i"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1536px"
        />

        {/* Subtle Gradient Overlay for visual polish */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
      </FadeIn>
    </section>
  );
}
