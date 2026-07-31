import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-10 py-6 md:py-10">
      {/* 1. TOP HEADER GRID (Title + Subtext & Button) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-14 px-10">
        {/* Left: Main Maroon Heading */}
        <div className="md:col-span-7">
          <h1 className="text-3xl md:text-5xl font-black text-[#8C2C2C] leading-tight tracking-tight uppercase">
            Yayasan Pendidikan <br />
            Islam Imam Syafi'i
          </h1>
        </div>

        {/* Right: Intro Paragraph & Pill Button */}
        <div className="md:col-span-5 flex flex-col items-start md:items-start justify-between space-y-4">
          <p className="text-md font-medium text-[#1B1B1B] leading-relaxed text-left md:text-left max-w-md mb-10">
            Menanamkan benih tauhid dan adab sejak dini dalam lingkungan yang
            penuh kasih sayang. Fokus pada penanaman aqidah yang lurus, hafalan
            doa harian, dan pembiasaan adab islami.
          </p>

          <Link
            href="/profil"
            className="inline-flex items-center gap-10 bg-[#8C2C2C] hover:bg-[#722323] text-white text-md font-normal pl-5 pr-1 py-1   rounded-full transition-colors shadow-sm"
          >
            <span>Daftar Sekarang</span>
            {/* Arrow Icon */}
            <div className="flex justify-start md:justify-center items-center bg-white w-10 h-10 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#8C2C2C"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* 2. HERO IMAGE BANNER WITH OVERLAY TEXT */}
      <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-md">
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
      </div>
    </section>
  );
}
