"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../components/animation/FadeIn";

const MISSION_POINTS = [
  "Membina generasi penghafal Al-Qur'an dan memahami serta mengamalkan kandungannya,",
  "Mengajarkan ilmu syar'i yang diamalkan sesuai sunnah,",
  "Meneladani akhlak Nabi ﷺ dan para Sahabat dalam kehidupan sehari-hari,",
  "Melahirkan generasi Islami yang cerdas, mandiri, dan berdakwah dengan ilmu berlandaskan Al-Qur'an dan Hadits yang sesuai dengan pemahaman para sahabat.",
];

export default function TentangKamiSection() {
  return (
    <section className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16">
      {/* 1. SECTION HEADER */}
      <div className="mb-10 lg:mb-14 space-y-4 max-w-2xl 2xl:max-w-3xl">
        <FadeIn delay={0} duration={1} x={-40} once={true}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-[#8C2C2C] uppercase tracking-wide">
            Tentang Kami
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} duration={1} x={-40} once={true}>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#1B1B1B] font-medium leading-relaxed">
            Sebuah yayasan pendidikan di Kabupaten Berau, Kalimantan Timur yang
            bergerak di bidang pendidikan Islam, pengabdian masyarakat, dan
            sosial.
          </p>
        </FadeIn>
      </div>

      {/* 2. THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* COLUMN 1: VISI & LEMBAGA PENDIDIKAN (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Visi Kami (Top Light Box) */}
          <FadeIn delay={0.4} duration={1} y={-30} once={true}>
            <div className="bg-[#F8F7F3] border-2 border-[#A2A2A2] flex flex-col justify-between rounded-xl p-6 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl 2xl:text-3xl font-black text-black uppercase mb-8 lg:mb-12">
                Visi Kami
              </h3>
              <p className="text-sm sm:text-base 2xl:text-lg text-[#1B1B1B] font-medium leading-relaxed">
                Mewujudkan umat yang kembali kepada Al-Qur'an dan As-Sunnah
                dengan pemahaman para Sahabat.
              </p>
            </div>
          </FadeIn>

          {/* Lembaga Pendidikan (Bottom Maroon Box) */}
          <FadeIn
            className="flex-1 flex flex-col"
            delay={0.6}
            duration={1}
            x={-30}
            once={true}
          >
            <Link
              href="#lembaga-pendidikan"
              className="relative group bg-[#89302F] text-white border-2 border-[#A2A2A2] rounded-xl p-6 flex flex-col justify-between flex-1 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold uppercase tracking-wider text-white/90 mb-3">
                Lembaga Pendidikan
              </h3>

              <div>
                {/* 1. Dedicated Image Wrapper (Relative + Height + Rounded) */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden mb-10 border border-white/20 my-2">
                  <Image
                    src="/tentang-kami-kelas.png"
                    alt="Kegiatan Belajar Santri YPIIS"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* 2. Description text directly attached below */}
                <p className="text-xs sm:text-sm 2xl:text-base text-white/90 font-medium leading-relaxed mt-2">
                  Membawahi lembaga pendidikan non formal, formal dasar dan
                  menengah.
                </p>
              </div>

              {/* 3. Full Card Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center p-2 text-center pointer-events-none">
                <span className="text-sm sm:text-base font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
                  Klik untuk lihat selengkapnya &rarr;
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>

        {/* COLUMN 2: MISI & BERDIRI SEJAK (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Misi Kami (Top Tall Light Box) */}
          <FadeIn
            className="flex-1 flex flex-col"
            delay={0.8}
            duration={1}
            x={30}
            once={true}
          >
            <div className="bg-[#F8F7F3] border-2 border-[#A2A2A2] rounded-xl p-6 shadow-sm flex-1 flex flex-col hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl 2xl:text-3xl font-black text-[#1B1B1B] uppercase mb-6">
                Misi Kami
              </h3>
              <ol className="space-y-4 text-sm sm:text-base 2xl:text-lg font-medium text-[#1B1B1B] list-none">
                {MISSION_POINTS.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2.5 items-start leading-relaxed"
                  >
                    <span className="font-bold text-[#89302F] shrink-0">
                      {index + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Berdiri Sejak (Bottom Gold Box) */}
          <FadeIn delay={1.0} duration={1} y={30} once={true}>
            <div className="bg-[#C29B1D] text-[#FFF7DA] border-2 border-[#A2A2A2] rounded-xl p-6 flex items-end justify-between shadow-sm hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col justify-between h-full space-y-6">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold uppercase tracking-wide">
                  Berdiri Sejak
                </h3>
                <p className="text-xs sm:text-sm 2xl:text-base text-white font-medium max-w-[180px] leading-snug">
                  YPIIS telah mengajarkan ilmu syar'i sejak tahun 2006.
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-5xl sm:text-6xl 2xl:text-7xl font-black leading-none block">
                  15+
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white block mt-1">
                  Tahun Berdiri
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* COLUMN 3: CLASSROOM PHOTO (4 Cols) */}
        <FadeIn
          className="lg:col-span-4 flex"
          delay={1.2}
          duration={1}
          y={30}
          once={true}
        >
          <div className="w-full h-full min-h-[300px] lg:min-h-[480px] relative border-2 border-[#A2A2A2] rounded-xl shadow-sm hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 group overflow-hidden">
            <Image
              src="/tentang-kami-award.jpg"
              alt="Kegiatan Belajar Santri YPIIS"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
