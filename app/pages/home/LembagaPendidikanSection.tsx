"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import FadeIn from "../../components/animation/FadeIn";

interface GenderLinks {
  putra: string;
  putri: string;
}

interface LembagaPendidikan {
  id: string;
  shortLabel: string;
  title: string;
  descriptionParagraph1: React.ReactNode;
  descriptionParagraph2: React.ReactNode;
  href?: string;
  genderHrefs?: GenderLinks;
}

const EDUCATION_PROGRAMS: LembagaPendidikan[] = [
  {
    id: "taud",
    shortLabel: "TAUD",
    title: "Tahfidz Anak Usia Dini",
    descriptionParagraph1: (
      <>
        <span className="font-bold text-[#937A25]">TAUD</span> fokus pada
        penanaman adab, hafalan surah-surah pendek, dan pengenalan huruf
        hijaiyah sejak usia dini dengan metode bermain yang menyenangkan.
      </>
    ),
    descriptionParagraph2: (
      <>
        Program unggulan meliputi{" "}
        <span className="font-bold text-[#937A25]">
          Hafalan Doa Sehari-hari
        </span>
        , <span className="font-bold text-[#937A25]">Adab Islami</span>, dan{" "}
        <span className="font-bold text-[#937A25]">
          Motorik Halus &amp; Kasar
        </span>
        .
      </>
    ),
    href: "https://www.instagram.com/taud_imam_syafiiberau/",
  },
  {
    id: "tk-kb",
    shortLabel: "TK - KB",
    title: "Taman Kanak-Kanak & Kelompok Bermain",
    descriptionParagraph1: (
      <>
        <span className="font-bold text-[#937A25]">Taman Kanak-Kanak</span>{" "}
        menyiapkan fondasi karakter dan kebiasaan beribadah sesuai sunnah, serta
        kesiapan dasar calistung.
      </>
    ),
    descriptionParagraph2: (
      <>
        Di antara program unggulan kami adalah{" "}
        <span className="font-bold text-[#937A25]">Tahfidz Juz 30</span>,{" "}
        <span className="font-bold text-[#937A25]">Praktek Sholat Mandiri</span>
        , dan{" "}
        <span className="font-bold text-[#937A25]">Pengenalan Bahasa Arab</span>
        .
      </>
    ),
    href: "https://www.instagram.com/tk_imam_syafii/",
  },
  {
    id: "sd",
    shortLabel: "SD",
    title: "Sekolah Dasar",
    descriptionParagraph1: (
      <>
        <span className="font-bold text-[#937A25]">Sekolah Dasar</span> adalah
        masa emas untuk{" "}
        <span className="font-bold text-[#937A25]">menghafal Al-Qur'an</span>.
        Program kami menyeimbangkan kurikulum nasional dengan target tahfidz dan
        pembentukan karakter islami yang kuat.
      </>
    ),
    descriptionParagraph2: (
      <>
        Di antara program unggulan yang kami lakukan untuk membantu siswa
        mencapai target tersebut adalah{" "}
        <span className="font-bold text-[#937A25]">Target Tahfidz 5 Juz</span>,{" "}
        <span className="font-bold text-[#937A25]">
          Bahasa Arab &amp; Inggris Dasar
        </span>
        , dan{" "}
        <span className="font-bold text-[#937A25]">Ekstrakurikuler Sunnah</span>
        .
      </>
    ),
    href: "https://www.instagram.com/sdibnukatsirberau/",
  },
  {
    id: "smp",
    shortLabel: "SMP",
    title: "Sekolah Menengah Pertama",
    descriptionParagraph1: (
      <>
        <span className="font-bold text-[#937A25]">
          Sekolah Menengah Pertama
        </span>{" "}
        memfokuskan pengembangan akidah salafus shalih, pendalaman bahasa Arab,
        serta prestasi akademik jenjang menengah.
      </>
    ),
    descriptionParagraph2: (
      <>
        Program unggulan mencakup{" "}
        <span className="font-bold text-[#937A25]">Mutun Talib al-Ilm</span>,{" "}
        <span className="font-bold text-[#937A25]">
          Pendalaman Kitab Syar'i
        </span>
        , dan <span className="font-bold text-[#937A25]">Tahfidz Lanjutan</span>
        .
      </>
    ),
    genderHrefs: {
      putra: "https://www.instagram.com/smpibnukatsir/",
      putri: "https://www.instagram.com/smpik.putri/",
    },
  },
  {
    id: "sma",
    shortLabel: "SMA",
    title: "Sekolah Menengah Atas",
    descriptionParagraph1: (
      <>
        <span className="font-bold text-[#937A25]">Sekolah Menengah Atas</span>{" "}
        membekali santri untuk siap melanjutkan ke jenjang perguruan tinggi
        negeri, swasta, maupun universitas di Timur Tengah.
      </>
    ),
    descriptionParagraph2: (
      <>
        Fokus utama meliputi{" "}
        <span className="font-bold text-[#937A25]">
          Bimbingan SNBT &amp; Timur Tengah
        </span>
        ,{" "}
        <span className="font-bold text-[#937A25]">
          Kemampuan Bahasa Arab Aktif
        </span>
        , dan{" "}
        <span className="font-bold text-[#937A25]">
          Karya Tulis Ilmiah Islami
        </span>
        .
      </>
    ),
    genderHrefs: {
      putra: "https://www.instagram.com/smaikbsberau/",
      putri: "https://www.instagram.com/smaik.putri/",
    },
  },
];

// Motion Variants for Staggered Tab Sequence
const tabContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tabItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function LembagaPendidikanSection() {
  const [activeTabId, setActiveTabId] = useState<string>("sd");
  const [modalTarget, setModalTarget] = useState<LembagaPendidikan | null>(
    null,
  );

  const activeProgram =
    EDUCATION_PROGRAMS.find((program) => program.id === activeTabId) ||
    EDUCATION_PROGRAMS[0];

  const handleCtaClick = (program: LembagaPendidikan) => {
    if (program.genderHrefs) {
      setModalTarget(program);
    }
  };

  return (
    <section
      id="lembaga-pendidikan"
      className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* 1. LEFT SECTION (Tab Navigation) */}
        <div className="lg:col-span-3 lg:pt-12">
          {/* MOBILE & TABLET HORIZONTAL PILL TABS (< lg) */}
          <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {EDUCATION_PROGRAMS.map((program) => {
              const isActive = program.id === activeTabId;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveTabId(program.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[#8A3635] text-white shadow-md scale-105"
                      : "bg-[#EFECE6] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {program.shortLabel}
                </button>
              );
            })}
          </div>

          {/* DESKTOP VERTICAL TABS (lg+) */}
          <motion.div
            variants={tabContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:flex flex-col gap-4 items-"
          >
            {EDUCATION_PROGRAMS.map((program) => {
              const isActive = program.id === activeTabId;

              return (
                <div
                  key={program.id}
                  className="flex items-center gap-3 lg:ml-15 xl:ml-20 2xl:ml-25 w-full"
                >
                  <motion.button
                    variants={tabItemVariants}
                    onClick={() => setActiveTabId(program.id)}
                    className={`text-lg 2xl:text-xl cursor-pointer font-extrabold transition-colors duration-300 text-left whitespace-nowrap ${
                      isActive
                        ? "text-[#8A3635]"
                        : "text-[#A2A2A2] hover:text-[#3E3E3E]"
                    }`}
                  >
                    {program.shortLabel}
                  </motion.button>

                  {/* Horizontal Indicator Line for Active Tab */}
                  <span
                    className={`w-8 h-[3px] bg-[#8A3635] origin-left transition-transform duration-300 ease-in-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 2. RIGHT SECTION (Label + Active Content Display) */}
        <div className="lg:col-span-9 min-h-[360px] sm:min-h-[400px]">
          {/* SECTION LABEL */}
          <FadeIn delay={0} duration={0.8} x={30} once={true}>
            <h3 className="text-sm sm:text-base 2xl:text-xl font-black text-[#8C2C2C] uppercase tracking-wider mb-3 lg:mb-4">
              Lembaga Pendidikan
            </h3>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Program Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-[#1B1B1B] max-w-4xl uppercase tracking-wide leading-tight">
                {activeProgram.title}
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 max-w-2xl 2xl:max-w-3xl">
                <p className="text-base sm:text-lg 2xl:text-xl text-[#1B1B1B] font-medium leading-relaxed">
                  {activeProgram.descriptionParagraph1}
                </p>
                <p className="text-base sm:text-lg 2xl:text-xl text-[#1B1B1B] font-medium leading-relaxed">
                  {activeProgram.descriptionParagraph2}
                </p>
              </div>

              {/* Call to Action Link / Modal Trigger */}
              <div className="pt-6 sm:pt-8">
                {activeProgram.genderHrefs ? (
                  <button
                    onClick={() => handleCtaClick(activeProgram)}
                    className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 
                    bg-[#8A3635] text-white text-sm sm:text-base 2xl:text-lg font-semibold px-8 py-3.5 sm:px-12 sm:py-4 2xl:px-16 2xl:py-5 rounded-lg hover:shadow-lg transition-all cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
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
                    <span>Lihat Selengkapnya</span>
                  </button>
                ) : (
                  <Link
                    href={activeProgram.href || "#"}
                    target="_blank"
                    className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 
                    bg-[#8A3635] text-white text-sm sm:text-base 2xl:text-lg font-semibold px-8 py-3.5 sm:px-12 sm:py-4 2xl:px-16 2xl:py-5 rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg
                      className="w-4 h-4"
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
                    <span>Lihat Selengkapnya</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. FLOATING SELECTION MODAL (GENDER CHOICE FOR SMP & SMA) */}
      <AnimatePresence>
        {modalTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalTarget(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalTarget(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-black text-[#1B1B1B] uppercase tracking-wide mb-2">
                Pilih Kategori {modalTarget.shortLabel}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Silakan pilih kategori sekolah yang ingin Anda lihat:
              </p>

              {/* Selection Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={modalTarget.genderHrefs?.putra || "#"}
                  target="_blank"
                  onClick={() => setModalTarget(null)}
                  className="group flex flex-col items-center justify-center p-5 rounded-xl border-2 border-gray-100 hover:border-[#8A3635] bg-gray-50 hover:bg-[#8A3635]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8A3635]/10 group-hover:bg-[#8A3635] text-[#8A3635] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M311 284C312.283 284.201 312.283 284.201 313.593 284.406C344.767 289.634 372.023 303.768 394.619 325.67C395.796 326.803 396.997 327.91 398.203 329.012C418.538 348.066 431.469 376.085 437 403C437.185 403.852 437.371 404.703 437.562 405.581C439.55 416.197 439.372 426.931 439.371 437.696C439.375 441.086 439.412 444.475 439.449 447.865C439.455 450.026 439.459 452.187 439.461 454.348C439.475 455.358 439.49 456.368 439.504 457.409C439.459 464.373 439.459 464.373 437.096 467.603C433.546 469.969 431.503 470.126 427.236 470.129C426.002 470.132 424.767 470.135 423.495 470.138C422.112 470.137 420.73 470.135 419.347 470.134C417.888 470.136 416.429 470.138 414.97 470.141C410.946 470.147 406.922 470.147 402.898 470.145C398.564 470.145 394.23 470.151 389.896 470.155C381.399 470.164 372.902 470.166 364.405 470.167C357.501 470.168 350.597 470.17 343.693 470.173C324.136 470.182 304.579 470.186 285.021 470.185C283.966 470.185 282.911 470.185 281.824 470.185C280.767 470.185 279.711 470.185 278.622 470.185C261.495 470.185 244.368 470.194 227.241 470.208C209.672 470.223 192.102 470.23 174.533 470.229C164.662 470.229 154.792 470.231 144.921 470.242C136.518 470.251 128.114 470.253 119.711 470.247C115.421 470.243 111.131 470.243 106.841 470.252C102.916 470.26 98.9922 470.258 95.0679 470.25C93.6453 470.248 92.2227 470.25 90.8001 470.255C88.8718 470.262 86.9434 470.256 85.0151 470.249C83.9423 470.249 82.8695 470.249 81.7643 470.25C78.9387 469.994 77.3435 469.57 74.9999 468C72.9058 464.859 72.7436 464.096 72.7094 460.51C72.6966 459.601 72.6839 458.691 72.6707 457.754C72.6685 456.766 72.6663 455.779 72.664 454.762C72.6573 453.731 72.6506 452.699 72.6438 451.637C72.6336 449.44 72.629 447.244 72.6293 445.047C72.625 441.766 72.5889 438.486 72.5507 435.205C72.3459 397.117 84.3006 363.049 109 334C109.657 333.22 110.315 332.44 110.992 331.637C115.322 326.624 119.864 322.177 125 318C125.934 317.228 126.869 316.456 127.832 315.66C147.121 300.066 170.656 289.569 195 285C196.196 284.773 197.392 284.546 198.625 284.313C203.386 285.282 206.371 287.899 210.18 290.836C225.085 302.273 241.938 305.864 260.441 303.574C270.895 301.483 280.724 297.302 288.483 289.934C295.719 283.109 301.428 282.477 311 284ZM298.5 305.563C281.612 319.847 260.384 323.087 239 322C224.493 320.736 210.534 315.024 199.625 305.406C194.885 302.867 189.953 304.68 185.019 306.023C167.367 311.499 151.034 319.935 137 332C136.112 332.739 135.224 333.477 134.308 334.238C128.094 339.58 122.983 345.512 118 352C117.332 352.84 116.664 353.681 115.976 354.547C105.262 368.523 98.722 384.137 93.9999 401C93.8064 401.673 93.6129 402.347 93.4135 403.041C89.1619 418.654 90.8128 436.1 90.9999 452C109.81 452 128.62 452 148 452C148.026 447.787 148.051 443.575 148.078 439.234C148.11 435.873 148.145 432.512 148.184 429.15C148.223 425.603 148.255 422.056 148.271 418.509C148.289 414.438 148.339 410.368 148.391 406.297C148.392 405.027 148.393 403.757 148.394 402.449C148.414 401.268 148.434 400.087 148.454 398.87C148.467 397.311 148.467 397.311 148.481 395.721C149.135 392.289 150.245 391.094 153 389C156.753 388.531 159.038 388.469 162.375 390.312C176.663 405.15 165.639 431.405 166 452C225.4 452 284.8 452 346 452C346.33 432.86 346.66 413.72 347 394C352 389 352 389 355.562 388.438C359.592 389.097 360.529 389.833 363 393C363.519 395.721 363.519 395.721 363.546 398.87C363.566 400.051 363.585 401.232 363.606 402.449C363.607 404.354 363.607 404.354 363.609 406.297C363.626 407.601 363.642 408.905 363.659 410.248C363.703 413.707 363.723 417.166 363.738 420.625C363.758 424.158 363.799 427.69 363.84 431.223C363.917 438.149 363.958 445.073 364 452C382.81 452 401.62 452 421 452C421.786 426.782 421.786 426.782 418 402C417.683 400.738 417.366 399.476 417.039 398.176C410.791 375.096 398.389 356.029 382 339C381.431 338.368 380.863 337.737 380.277 337.086C362.021 317.382 332.457 304.21 305.891 301.707C302.289 302.072 301.13 303.122 298.5 305.563Z"
                        fill="currentColor"
                      />
                      <path
                        d="M311.731 64.0391C312.479 64.6862 313.228 65.3333 314 66C315.046 66.8469 315.046 66.8469 316.113 67.711C334.831 83.1935 345.774 107.367 348.535 131.191C349.176 138.321 349.053 145.291 348.277 152.402C348.191 153.207 348.104 154.012 348.014 154.841C346.829 165.211 345.065 175.491 343.279 185.771C342.687 189.191 342.114 192.614 341.541 196.037C337.806 217.948 332.727 237.702 318 255C317.258 255.99 316.515 256.98 315.75 258C306.356 269.005 293.099 276.284 279.75 281.375C279.125 281.614 278.5 281.852 277.857 282.098C255.457 290.175 229.629 287.472 208.27 277.684C190.496 268.531 176.749 254.805 167.688 237C167.374 236.384 167.06 235.768 166.737 235.134C161.826 225 159.277 214.447 157.457 203.387C157.243 202.133 157.029 200.879 156.809 199.587C156.248 196.292 155.696 192.995 155.148 189.697C154.589 186.346 154.017 182.996 153.447 179.647C147.568 144.964 146.088 114.32 167 84C183.273 61.6047 206.655 47.1621 234 42.6875C261.789 39.4183 290.01 45.722 311.731 64.0391ZM188 87C177.751 98.7635 170.657 112.586 168 128C168.33 128.99 168.66 129.98 169 131C169.499 130.394 169.998 129.788 170.512 129.164C185.903 111.203 207.487 99.2759 231 96C260.707 93.9732 287.516 99.447 310.766 119.012C317.249 124.781 322.473 130.729 327.434 137.875C327.951 138.576 328.467 139.278 329 140C329.33 140 329.66 140 330 140C331.44 123.357 324.407 106.091 314.438 93C313.301 91.6584 312.156 90.3246 311 89C310.505 88.3516 310.01 87.7032 309.5 87.0352C298.47 73.1092 280.167 64.1885 263 61C261.962 60.8047 261.962 60.8047 260.902 60.6055C258.929 60.3016 256.993 60.1229 255 60C254.156 59.9472 253.311 59.8943 252.441 59.8399C227.52 59.0621 205.08 68.9699 188 87ZM182.328 142.02C178.391 147.06 175.123 152.421 172 158C171.634 158.615 171.267 159.23 170.89 159.863C167.432 168.168 172.23 182.085 173.792 190.799C174.248 193.361 174.685 195.926 175.121 198.492C179.029 220.828 187.074 241.076 205.938 254.875C207.604 255.95 209.292 256.992 211 258C212.352 258.799 212.352 258.799 213.731 259.613C230.633 268.806 250.67 271.01 269.265 265.971C282.406 261.933 292.488 254.743 302 245C302.665 244.355 303.33 243.711 304.016 243.047C313.473 233.248 318.389 220.115 321 207C321.181 206.096 321.361 205.191 321.547 204.259C322.136 201.239 322.699 198.215 323.25 195.188C323.514 193.756 323.514 193.756 323.782 192.295C326.576 176.03 323.049 162.91 314 149C311.164 145.178 308.152 141.565 305 138C304.459 137.363 303.917 136.726 303.359 136.07C295.52 127.478 283.809 121.022 273 117C271.965 116.608 270.93 116.216 269.863 115.813C238.053 105.554 203.889 117.363 182.328 142.02Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="font-extrabold text-[#1B1B1B] group-hover:text-[#8A3635] text-base">
                    Sekolah Putra
                  </span>
                </Link>

                <Link
                  href={modalTarget.genderHrefs?.putri || "#"}
                  target="_blank"
                  onClick={() => setModalTarget(null)}
                  className="group flex flex-col items-center justify-center p-5 rounded-xl border-2 border-gray-100 hover:border-[#8A3635] bg-gray-50 hover:bg-[#8A3635]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8A3635]/10 group-hover:bg-[#8A3635] text-[#8A3635] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M293 36C293.745 36.2037 294.49 36.4074 295.258 36.6172C311.872 41.2347 327.6 49.1148 341 60C341.76 60.6045 341.76 60.6045 342.536 61.2212C355.099 71.2406 365.431 82.3339 374 96C374.379 96.603 374.758 97.2059 375.148 97.8272C387.424 117.693 395.086 141.085 395.14 164.561C395.145 165.636 395.145 165.636 395.149 166.733C395.158 169.112 395.16 171.491 395.161 173.871C395.166 175.586 395.171 177.302 395.176 179.018C395.189 183.665 395.196 188.313 395.2 192.96C395.203 195.871 395.207 198.783 395.212 201.694C395.225 210.827 395.235 219.959 395.239 229.092C395.243 239.59 395.261 250.088 395.29 260.586C395.312 268.729 395.322 276.871 395.323 285.013C395.324 289.863 395.33 294.712 395.348 299.562C395.364 304.134 395.366 308.705 395.358 313.277C395.357 314.94 395.361 316.603 395.371 318.267C395.541 348.354 387.191 377.708 369 402C368.153 403.178 368.153 403.178 367.289 404.379C347.829 430.17 319.676 449.074 288 456C286.936 456.239 286.936 456.239 285.85 456.483C265.658 460.823 244.125 460.543 224 456C222.953 455.767 222.953 455.767 221.884 455.528C204.742 451.518 188.074 443.539 174 433C173.215 432.435 172.43 431.871 171.621 431.289C140.769 408.01 122.615 374.337 117.281 336.392C116.486 329.617 116.584 322.805 116.612 315.994C116.608 314.277 116.602 312.56 116.596 310.842C116.582 306.237 116.587 301.632 116.597 297.026C116.605 292.17 116.598 287.314 116.593 282.458C116.587 274.308 116.595 266.158 116.609 258.008C116.625 248.632 116.62 239.256 116.603 229.88C116.59 221.78 116.588 213.68 116.596 205.58C116.6 200.764 116.601 195.949 116.591 191.133C116.582 186.602 116.589 182.071 116.606 177.54C116.61 175.893 116.609 174.246 116.602 172.599C116.547 157.721 118.252 143.141 122.687 128.875C122.941 128.049 123.194 127.222 123.456 126.371C126.102 118.116 129.73 110.528 134 103C134.499 102.117 134.499 102.117 135.009 101.215C139.375 93.5988 144.296 86.6635 150 80C150.664 79.2021 151.328 78.4041 152.012 77.582C169.556 57.1839 193.22 43.3002 219 36C219.683 35.801 220.365 35.602 221.068 35.397C243.512 29.129 270.671 29.5303 293 36ZM167.593 93.5747C147.023 117.783 138.668 147.185 138.725 178.526C138.721 180.133 138.716 181.739 138.71 183.346C138.697 187.669 138.696 191.991 138.698 196.314C138.699 199.944 138.695 203.574 138.69 207.204C138.679 215.781 138.678 224.358 138.684 232.935C138.69 241.733 138.678 250.531 138.657 259.328C138.639 266.926 138.633 274.524 138.636 282.122C138.638 286.64 138.636 291.158 138.622 295.677C138.505 336.67 143.422 371.327 173 402C174.079 403.191 174.079 403.191 175.18 404.406C194.473 425.082 224.453 435.943 252.234 437.25C277.323 437.899 302.591 430.756 323 416C324.185 415.147 324.185 415.147 325.395 414.277C351.295 394.569 367.852 366.48 372.385 334.251C373.944 320.7 373.413 306.868 373.37 293.249C373.359 288.723 373.363 284.196 373.365 279.669C373.366 272.078 373.355 264.486 373.336 256.895C373.315 248.157 373.311 239.419 373.318 230.68C373.323 222.218 373.318 213.756 373.307 205.293C373.302 201.716 373.301 198.139 373.303 194.563C373.305 190.343 373.297 186.124 373.281 181.905C373.277 180.37 373.276 178.835 373.279 177.299C373.299 164.452 372.468 151.671 368.937 139.25C368.728 138.511 368.518 137.772 368.301 137.011C363.874 122.317 356.705 108.86 347 97C346.553 96.4515 346.106 95.903 345.646 95.3379C326.228 71.9676 298.102 57.3693 268 54C229.708 51.8274 193.471 64.6072 167.593 93.5747Z"
                        fill="currentColor"
                      />{" "}
                      <path
                        d="M289.017 109.626C294.566 113.471 299.804 117.696 305 122C305.553 122.455 306.106 122.91 306.675 123.379C313.747 129.219 320.579 135.289 327.305 141.523C329.481 143.523 331.685 145.462 333.937 147.375C337.765 150.692 341.35 154.241 344.937 157.813C345.518 158.389 346.099 158.965 346.697 159.558C350.993 163.87 352.121 165.589 352.161 171.605C352.171 172.78 352.18 173.956 352.19 175.168C352.196 177.088 352.196 177.088 352.203 179.047C352.209 180.365 352.214 181.683 352.22 183.041C352.231 185.842 352.237 188.643 352.24 191.444C352.246 194.994 352.269 198.544 352.298 202.094C352.317 204.851 352.322 207.609 352.323 210.367C352.328 212.299 352.346 214.232 352.365 216.165C352.299 242.846 340.541 265.951 321.904 284.528C308.099 297.729 290.728 305.693 272 309C270.113 309.34 270.113 309.34 268.187 309.688C242.38 312.225 216.531 305.739 196.008 289.566C176.695 273.088 163.746 252.583 160 227C159.885 224.951 159.812 222.899 159.775 220.846C159.753 219.651 159.73 218.456 159.707 217.225C159.636 211.792 159.578 206.358 159.54 200.925C159.518 198.061 159.476 195.199 159.417 192.336C159.345 188.86 159.309 185.385 159.297 181.909C159.281 179.956 159.232 178.005 159.181 176.053C159.195 170.051 159.315 165.997 163.342 161.342C164.537 160.202 165.756 159.086 167 158C168.09 156.881 169.173 155.756 170.246 154.621C171.306 153.557 172.37 152.495 173.437 151.438C174.003 150.875 174.569 150.312 175.151 149.731C178.682 146.241 182.278 142.869 186.066 139.656C188.303 137.74 190.458 135.745 192.625 133.75C198.826 128.164 205.368 123.06 212 118C212.616 117.527 213.231 117.055 213.866 116.568C222.532 109.944 231.308 104.037 241 99C241.713 98.6185 242.426 98.2369 243.16 97.8438C259.595 90.3067 275.695 100.699 289.017 109.626ZM215 145C214.483 145.432 213.966 145.864 213.433 146.31C203.625 154.518 194.216 163.133 185 172C184.48 172.434 183.961 172.868 183.426 173.315C181.587 175.488 181.615 176.671 181.596 179.493C181.583 180.402 181.57 181.311 181.557 182.248C181.56 183.232 181.563 184.216 181.566 185.23C181.561 186.254 181.556 187.277 181.55 188.331C181.544 190.506 181.545 192.681 181.554 194.855C181.562 198.13 181.534 201.403 181.502 204.678C181.417 229.535 187.318 248.784 204.75 267.125C215.193 277.285 229.424 285.055 244 287C244.949 287.133 245.897 287.266 246.875 287.402C264.917 289.37 285.076 285.282 299.524 273.787C303.185 270.691 306.61 267.39 310 264C310.682 263.318 311.364 262.636 312.066 261.934C327.712 245.168 330.331 224.609 330.734 202.699C330.786 200.493 330.861 198.288 330.96 196.084C332.022 182.853 332.022 182.853 327.416 170.931C324.573 167.835 321.421 165.428 318 163C316.611 161.787 315.232 160.562 313.875 159.313C312.931 158.51 312.931 158.51 311.969 157.691C309.722 155.761 307.554 153.756 305.375 151.75C299.731 146.659 293.783 142.009 287.767 137.373C286.066 136.052 284.385 134.71 282.707 133.359C270.412 123.065 270.412 123.065 255.894 117.648C241.473 119.4 225.698 135.986 215 145Z"
                        fill="currentColor"
                      />{" "}
                      <path
                        d="M416 377C422.02 380.01 424.833 393.946 427 400C433.892 421.162 437.879 444.172 438.25 466.438C438.276 467.385 438.302 468.332 438.328 469.309C437.846 473.261 436.009 475.697 433.617 478.785C430.781 480.916 427.865 480.462 424.445 480.348C420.91 479.845 419.287 478.716 417 476C414.549 470.421 414.53 464.742 414.188 458.75C413.021 441.788 410.521 424.438 404.602 408.418C403.17 402.662 406.408 397.683 408.875 392.625C409.582 391.159 410.288 389.693 410.992 388.227C411.331 387.522 411.67 386.817 412.019 386.091C413.426 383.093 414.719 380.054 416 377Z"
                        fill="currentColor"
                      />{" "}
                      <path
                        d="M94.9999 377C98.4107 378.705 99.0522 382.716 100.375 386.125C102.085 390.513 103.716 394.659 106.289 398.617C109.468 404.903 106.425 411.424 104.625 417.875C100.742 432.349 98.648 446.379 97.8215 461.36C97.0204 473.936 97.0204 473.936 92.121 478.906C88.2171 480.919 84.2593 480.751 79.9999 480C76.6537 477.473 75.3202 475.961 73.9999 472C72.1795 439.778 80.6871 405.71 94.9999 377Z"
                        fill="currentColor"
                      />{" "}
                    </svg>
                  </div>
                  <span className="font-extrabold text-[#1B1B1B] group-hover:text-[#8A3635] text-base">
                    Sekolah Putri
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
