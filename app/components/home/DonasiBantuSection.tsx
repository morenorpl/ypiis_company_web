"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "../animation/FadeIn";

interface DonasiBantuSectionProps {
  buttonHref?: string;
  patternImageSrc?: string; // Optional: supply your SVG/PNG pattern asset here
}

export default function DonasiBantuSection({
  buttonHref = "/donasi",
  patternImageSrc = "/donasi-card-art.svg", // Replace with your actual pattern image path if available
}: DonasiBantuSectionProps) {
  return (
    <section className="py-6 bg-[#FAF8F5]">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Maroon Card Container */}
        <FadeIn delay={0.2} duration={1} y={50} once={true}>
          <div className="relative bg-[#7C3131] rounded-2xl overflow-hidden text-white flex flex-col md:flex-row items-stretch justify-between min-h-[320px] shadow-lg">
            {/* Left Content Area */}
            <div className="flex-1 p-8 2xl:p-12 z-10 flex flex-col justify-between max-w-6/10 2xl:max-w-7/10">
              <div>
                {/* Title */}
                <h2 className=" text-5xl 2xl:text-6xl font-extrabold tracking-tight mb-14">
                  AYO Bantu Mereka...
                </h2>

                {/* Description Paragraph with Gold Highlighted Text */}
                <p className="text-white/90 font-medium text-base 2xl:text-xl leading-relaxed mb-8">
                  Untuk meraih mimpi &amp; pendidikan yang layak.{" "}
                  <span className="text-[#E0A82E] font-semibold">
                    Dukungan Anda adalah jembatan
                  </span>{" "}
                  bagi para santri di TPA, SD, SMP, SMA, hingga IKBS untuk
                  mendapatkan fasilitas pendidikan yang memadai. Wujudkan
                  lingkungan belajar yang nyaman dan islami dengan donasi
                  terbaik Anda hari ini.
                </p>

                {/* Disclaimer / Subtext */}
                <p className="text-white/70 italic text-xs mb-15 2xl:mb-25">
                  *Seluruh donasi akan dialokasikan untuk pengembangan fasilitas
                  semua unit pendidikan
                </p>
              </div>

              {/* Kirim Donasi Button */}
              <div>
                <Link
                  href={buttonHref}
                  className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 group
                  bg-[#F8F7F3] text-[#8A3635] text-lg font-base px-16 py-3 2xl:px-20 2xl:py-4 rounded-sm hover:text-[#F8F7F3]"
                >
                  {/* Right Caret Icon */}
                  <svg
                    className="w-4 h-4 text-[#8A3635] transform transition-transform group-hover:text-[#F8F7F3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Kirim Donasi</span>
                </Link>
              </div>
            </div>

            {/* Right Decorative Pattern Area */}
            <div className="w-full md:w-1/4 min-h-[160px] md:min-h-xl relative overflow-hidden shrink-0">
              {/* If using an image file for the pattern */}
              {patternImageSrc ? (
                <Image
                  src={patternImageSrc}
                  alt="Decorative Pattern"
                  fill
                  className="object-cover object-right opacity-90"
                />
              ) : (
                /* Inline SVG Fallback Pattern if no image file exists yet */
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#E89CA3_1px,transparent_1px)] [background-size:16px_16px]" />
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
