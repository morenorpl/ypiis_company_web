"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <span className="font-bold text-[#3E3E3E]">menghafal Al-Qur'an</span>.
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

export default function UnitPendidikanSection() {
  const [activeTabId, setActiveTabId] = useState<string>("sd");
  const activeProgram =
    EDUCATION_PROGRAMS.find((program) => program.id === activeTabId) ||
    EDUCATION_PROGRAMS[0];

  return (
    <section className="container mx-auto px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-start">
        {/* 1. LEFT SECTION */}
        <div className="col-start-2 mt-16 col-span-2 flex flex-row md:flex-col gap-2 items-start overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {EDUCATION_PROGRAMS.map((program) => {
            const isActive = program.id === activeTabId;

            return (
              <div key={program.id} className="flex items-center gap-2">
                <div className="w-20 shrink-0">
                  <button
                    onClick={() => setActiveTabId(program.id)}
                    className={`text-lg cursor-pointer font-extrabold transition-colors duration-300 text-left whitespace-nowrap ${
                      isActive
                        ? "text-[#8A3635]"
                        : "text-[#D9D9D9] hover:text-[#A2A2A2]"
                    }`}
                  >
                    {program.shortLabel}
                  </button>
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
        </div>

        {/* 2. RIGHT SECTION */}
        <div className="mb-12 col-span-9 space-y-3 min-h-125 px-0">
          <h3 className="text-xl font-black text-[#8C2C2C] uppercase tracking-wider">
            Unit Pendidikan
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-7xl font-black text-[#1B1B1B] max-w-4xl uppercase mb-8 tracking-wide">
                {activeProgram.title}
              </h2>
              <p className="text-xl text-[#3E3E3E] mb-5 max-w-3xl font-semibold leading-relaxed">
                {activeProgram.descriptionParagraph1}
              </p>
              <p className="text-xl text-[#3E3E3E] max-w-3xl font-semibold leading-relaxed">
                {activeProgram.descriptionParagraph2}
              </p>

              <div className="pt-14">
                <Link
                  href={activeProgram.href}
                  className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 
                  bg-[#8A3635] text-white text-lg font-medium px-16 py-6 rounded-sm"
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
