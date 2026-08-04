"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import FadeIn from "../animation/FadeIn";

interface UnitPendidikan {
  id: string;
  shortLabel: string;
  title: string;
  descriptionParagraph1: React.ReactNode;
  descriptionParagraph2: React.ReactNode;
  href: string;
}

const EDUCATION_PROGRAMS: UnitPendidikan[] = [
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
    href: "/program/taud",
  },
  {
    id: "tk-kb",
    shortLabel: "TK - KB",
    title: "Taman Kanak-Kanak & KELOMPOK BERMAIN",
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
    href: "/program/tk-kb",
  },
  {
    id: "sd",
    shortLabel: "SD",
    title: "SEKOLAH DASAR",
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
    href: "/program/sd",
  },
  {
    id: "smp",
    shortLabel: "SMP",
    title: "SEKOLAH MENENGAH PERTAMA",
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
    href: "/program/smp",
  },
  {
    id: "sma",
    shortLabel: "SMA",
    title: "SEKOLAH MENENGAH ATAS",
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
    href: "/program/sma",
  },
];

// Motion Variants for Staggered Tab Sequence
const tabContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Stagger delay between each button
    },
  },
};

const tabItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function UnitPendidikanSection() {
  const [activeTabId, setActiveTabId] = useState<string>("sd");
  const activeProgram =
    EDUCATION_PROGRAMS.find((program) => program.id === activeTabId) ||
    EDUCATION_PROGRAMS[0];

  return (
    <section className="container mx-auto px-16 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-start">
        {/* 1. LEFT SECTION (Tab List with In-View Stagger Animation) */}
        <motion.div
          variants={tabContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="col-start-2 mt-16 col-span-2 flex flex-row md:flex-col gap-2 items-start overflow-x-auto md:overflow-visible pb-4 md:pb-0"
        >
          {EDUCATION_PROGRAMS.map((program) => {
            const isActive = program.id === activeTabId;

            return (
              <div key={program.id} className="flex items-center gap-2">
                <div className="w-20 shrink-0">
                  <motion.button
                    variants={tabItemVariants}
                    onClick={() => setActiveTabId(program.id)}
                    className={`text-lg cursor-pointer font-extrabold transition-colors duration-300 text-left whitespace-nowrap ${
                      isActive
                        ? "text-[#8A3635]"
                        : "text-[#D9D9D9] hover:text-[#A2A2A2]"
                    }`}
                  >
                    {program.shortLabel}
                  </motion.button>
                </div>

                {/* Horizontal Indicator Line for Active Tab */}
                <span
                  className={`hidden md:block w-8 h-[2.5px] bg-[#8A3635] origin-left transition-transform duration-300 ease-in-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            );
          })}
        </motion.div>

        {/* 2. RIGHT SECTION */}
        <div className="col-span-9 space-y-3 min-h-120 px-0">
          <FadeIn delay={0} duration={1} x={50} once={true}>
            <h3 className="text-lg 2xl:text-xl font-black text-[#8C2C2C] uppercase tracking-wider">
              Unit Pendidikan
            </h3>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FadeIn delay={0.2} duration={1} x={50} once={true}>
                <h2 className="text-5xl 2xl:text-7xl font-black text-[#1B1B1B] max-w-4xl uppercase mb-8 tracking-wide">
                  {activeProgram.title}
                </h2>
              </FadeIn>
              <FadeIn delay={0.4} duration={1} x={50} once={true}>
                <p className="text-lg 2xl:text-xl text-[#1B1B1B] mb-5 max-w-2xl 2xl:max-w-3xl font-medium leading-relaxed">
                  {activeProgram.descriptionParagraph1}
                </p>
              </FadeIn>
              <FadeIn delay={0.6} duration={1} x={50} once={true}>
                <p className="text-lg 2xl:text-xl text-[#1B1B1B] max-w-2xl 2xl:max-w-3xl font-medium leading-relaxed">
                  {activeProgram.descriptionParagraph2}
                </p>
              </FadeIn>

              <FadeIn
                className="pt-14"
                delay={0.8}
                duration={1}
                x={50}
                once={true}
              >
                <Link
                  href={activeProgram.href}
                  className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 
                  bg-[#8A3635] text-white text-base 2xl:text-lg font-medium px-12 py-4 2xl:px-16 2xl:py-6 rounded-sm"
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
              </FadeIn>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
