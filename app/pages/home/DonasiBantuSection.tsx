"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/animation/FadeIn";

interface DonasiBantuSectionProps {
  buttonHref?: string;
  patternImageSrc?: string;
}

export default function DonasiBantuSection({
  buttonHref = "https://forms.gle/E7A5QVvVU4K9pfQs6",
  patternImageSrc = "/donasi-card-art.svg",
}: DonasiBantuSectionProps) {
  return (
    <section id="infaq" className="py-6 lg:py-12 bg-[#faf8f500]">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Maroon Card Container */}
        <FadeIn delay={0.2} duration={1} y={50} once={true}>
          <div className="relative bg-[#7C3131] rounded-3xl overflow-hidden text-white flex flex-col md:flex-row items-stretch justify-between shadow-lg">
            {/* Left Content Area */}
            <div className="p-6 sm:p-8 2xl:p-12 z-10 flex flex-col justify-between w-full md:w-[65%] 2xl:w-[70%]">
              <div>
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 lg:mb-14 leading-tight">
                  AYO Bantu Mereka...
                </h2>

                {/* Description Paragraph with Gold Highlighted Text */}
                <p className="text-white/90 font-medium text-sm sm:text-base 2xl:text-xl leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                  Untuk meraih mimpi &amp; pendidikan yang layak.{" "}
                  <span className="text-[#E0A82E] font-semibold">
                    Dukungan Anda adalah jembatan
                  </span>{" "}
                  bagi para santri di TPA, SD, SMP, SMA, hingga IKBS untuk
                  mendapatkan fasilitas pendidikan yang memadai. Wujudkan
                  lingkungan belajar yang nyaman dan islami dengan infaq terbaik
                  Anda hari ini.
                </p>

                {/* Disclaimer / Subtext */}
                <p className="text-white/70 italic text-xs mb-6 sm:mb-8 lg:mb-15 2xl:mb-25">
                  *Seluruh infaq akan dialokasikan untuk pengembangan fasilitas
                  semua unit pendidikan
                </p>
              </div>

              {/* Kirim Infaq Button */}
              <div>
                <Link
                  target="_blank"
                  href={buttonHref}
                  className="btn-expand-center relative overflow-hidden inline-flex items-center justify-center sm:justify-start gap-3 group bg-[#F8F7F3] text-[#8A3635] text-base sm:text-lg font-medium w-full sm:w-auto px-10 sm:px-16 lg:px-20 py-3 2xl:px-24 2xl:py-4 rounded-lg hover:text-[#F8F7F3] transition-colors"
                >
                  {/* Right Caret Icon */}
                  <svg
                    className="w-4 h-4 text-[#8A3635] transform transition-transform group-hover:text-[#F8F7F3] shrink-0"
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
                  <span>Kirim Infaq</span>
                </Link>
              </div>
            </div>

            {/* Bottom (Mobile/Tablet) & Right (Desktop) Decorative Pattern Area */}
            <div className="w-full md:w-[35%] 2xl:w-[30%] h-40 sm:h-48 md:h-auto relative overflow-hidden shrink-0">
              {patternImageSrc ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full md:rotate-0 -rotate-90 scale-330 md:scale-100 transition-all duration-300">
                    <Image
                      src={patternImageSrc}
                      alt="Decorative Pattern"
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      className="object-contain opacity-90 object-center md:object-right"
                    />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#E89CA3_1px,transparent_1px)] bg-size-[16px_16px]" />
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
