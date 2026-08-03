"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface ActivityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  theme: "maroon" | "gold" | "image";
}

interface ColumnPair {
  id: string;
  top: ActivityItem;
  bottom: ActivityItem;
}

// 1. Data organized into column pairs (top box & bottom box per column)
const ACTIVITY_COLUMNS: ColumnPair[] = [
  {
    id: "col-1",
    top: {
      id: "act-1",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-1.png", // Replace with your image path
      theme: "image",
    },
    bottom: {
      id: "act-2",
      category: "RIHLAH",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis.",
      imageSrc: "",
      theme: "gold",
    },
  },
  {
    id: "col-2",
    top: {
      id: "act-3",
      category: "AL-QUR'AN",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis.",
      imageSrc: "",
      theme: "maroon",
    },
    bottom: {
      id: "act-4",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-2.png",
      theme: "image",
    },
  },
  {
    id: "col-3",
    top: {
      id: "act-5",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-1.png",
      theme: "image",
    },
    bottom: {
      id: "act-6",
      category: "KUNJUNGAN",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis.",
      imageSrc: "",
      theme: "maroon",
    },
  },
  {
    id: "col-4",
    top: {
      id: "act-7",
      category: "EXTERNAL",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis.",
      imageSrc: "",
      theme: "gold",
    },
    bottom: {
      id: "act-8",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-2.png",
      theme: "image",
    },
  },
  {
    id: "col-5",
    top: {
      id: "act-9",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-1.png",
      theme: "image",
    },
    bottom: {
      id: "act-10",
      category: "KUNJUNGAN",
      title: "Judul 5",
      description: "...",
      imageSrc: "",
      theme: "gold",
    },
  },
  {
    id: "col-6",
    top: {
      id: "act-11",
      category: "RIHLAH",
      title: "Judul 6",
      description: "...",
      imageSrc: "",
      theme: "maroon",
    },
    bottom: {
      id: "act-12",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-2.png",
      theme: "image",
    },
  },
  // Add more columns as needed
];

export default function RagamAktivitasSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Get width of first item
    const firstChild = container.firstElementChild as HTMLElement | null;
    const itemWidth = firstChild ? firstChild.offsetWidth : 385;

    // Calculate current scroll position aligned to columns
    const currentScroll = container.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - itemWidth
        : currentScroll + itemWidth;

    // Direct position assignment bypasses scroll-snap conflicts
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-6 bg-[#FAF8F5] relative overflow-hidden">
      {/* Header Container */}
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto text-center px-4 mb-12">
        <h2 className="text-4xl 2xl:text-5xl font-black text-[#8A3635] uppercase tracking-wide mb-8">
          RAGAM AKTIVITAS UNTUK MENGEMBANGKAN MINAT DAN BAKAT PELAJAR
        </h2>
        <p className="text-[#1B1B1B] text-base 2xl:text-lg font-medium leading-relaxed max-w-4xl 2xl:max-w-5xl mx-auto">
          Kami percaya bahwa belajar tidak terbatas di dalam ruang kelas.
          Melalui berbagai program intrakurikuler dan ekstrakurikuler, kami
          memfasilitasi siswa untuk mengeksplorasi minat, mengasah bakat, dan
          membangun karakter pemimpin masa depan yang berwawasan luas.
        </p>
      </div>

      {/* Carousel Wrapper with Floating Navigation Arrows */}
      <div className="relative mx-auto group">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
          type="button"
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
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
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll("right")}
          type="button"
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
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
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scrollable Container (CSS Snap Enabled) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-0 overflow-x-auto snap-x scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ACTIVITY_COLUMNS.map((col) => (
            <div
              key={col.id}
              className="flex-none  w-[320px] 2xl:w-96.25 flex flex-col gap-0 snap-start shrink-0"
            >
              <CardBox item={col.top} />
              <CardBox item={col.bottom} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardBox({ item }: { item: ActivityItem }) {
  if (item.theme === "image") {
    return (
      <div className="relative h-80 2xl:h-96 w-full overflow-hidden shadow-sm group/card">
        <Image
          src={item.imageSrc}
          alt="Aktivitas"
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      </div>
    );
  }

  const bgColor = item.theme === "maroon" ? "bg-[#7C3131]" : "bg-[#BFA124]";

  const buttonBgColor =
    item.theme === "maroon"
      ? "bg-[#582121] hover:bg-[#431919]"
      : "bg-[#8A7418] hover:bg-[#6D5B12]";

  const buttonTextColors =
    item.theme === "maroon" ? "text-[#ffffff] " : "text-[#FFF7DA] ";

  return (
    <div
      className={`h-80 2xl:h-96 w-full ${bgColor} ${buttonTextColors} p-6 flex flex-col justify-center shadow-sm relative group/card`}
    >
      <div>
        {/* Category Header with lines */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="w-4 h-px bg-white/60" />
          <span className="text-xs 2xl:text-sm font-extrabold uppercase tracking-wider text-white/90">
            {item.category}
          </span>
          <span className="w-4 h-px bg-white/60" />
        </div>

        {/* Title */}
        <h3 className="text-2xl 2xl:text-3xl font-bold text-center mb-3 leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs 2xl:text-sm text-center text-white/80 leading-relaxed max-w-xs mx-auto mb-10">
          {item.description}
        </p>
      </div>

      {/* Circle Icon Button at bottom center */}
      <div className="flex justify-center pt-2">
        <div
          className={`w-10 h-10 rounded-full ${buttonBgColor} flex items-center justify-center transition-colors`}
        >
          <FiArrowUpRight size={25} />
        </div>
      </div>
    </div>
  );
}
