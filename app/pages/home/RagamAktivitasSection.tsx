"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import FadeIn from "../../components/animation/FadeIn";

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

const ACTIVITY_COLUMNS: ColumnPair[] = [
  {
    id: "col-1",
    top: {
      id: "act-1",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-aktivitas-dummy-1.png",
      theme: "image",
    },
    bottom: {
      id: "act-2",
      category: "RIHLAH",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Program pengetesan hafalan Al-Qur'an secara sekaligus di hadapan para penguji dan santri.",
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
        "Program pengetesan hafalan Al-Qur'an secara sekaligus di hadapan para penguji dan santri.",
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
        "Program pengetesan hafalan Al-Qur'an secara sekaligus di hadapan para penguji dan santri.",
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
        "Program pengetesan hafalan Al-Qur'an secara sekaligus di hadapan para penguji dan santri.",
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
      title: "Kunjungan Edukatif Santri",
      description:
        "Kegiatan pembelajaran di luar kelas untuk memperluas wawasan para santri.",
      imageSrc: "",
      theme: "gold",
    },
  },
  {
    id: "col-6",
    top: {
      id: "act-11",
      category: "RIHLAH",
      title: "Rihlah Alam & Karakter",
      description:
        "Menanamkan nilai kemandirian dan kebersamaan melalui kegiatan di alam terbuka.",
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
];

export default function RagamAktivitasSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstChild = container.querySelector(
      ".activity-col",
    ) as HTMLElement | null;
    const itemWidth = firstChild
      ? firstChild.offsetWidth
      : container.clientWidth / 2;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    let targetScroll =
      direction === "left"
        ? currentScroll - itemWidth
        : currentScroll + itemWidth;

    if (targetScroll <= 0) {
      targetScroll = 0;
    } else if (targetScroll >= maxScroll - 10) {
      targetScroll = maxScroll;
    }

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-[#faf8f500] relative overflow-hidden">
      {/* 1. HEADER CONTAINER */}
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto text-center px-4 sm:px-6 mb-10 lg:mb-14">
        <FadeIn delay={0.2} duration={1} y={40} once={true}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black uppercase text-[#8A3635] leading-tight tracking-tight max-w-3xl 2xl:max-w-5xl mx-auto mb-4">
            Ragam Aktivitas &amp; Kegiatan Siswa Yayasan
          </h2>
        </FadeIn>

        <FadeIn delay={0.35} duration={0.8} y={20} once={true}>
          <div className="w-16 h-1 bg-[#937A25] rounded-full mb-6 mx-auto" />
        </FadeIn>

        <FadeIn delay={0.5} duration={1} y={30} once={true}>
          <p className="text-[#1B1B1B] text-sm sm:text-base md:text-lg 2xl:text-xl font-normal leading-relaxed max-w-2xl 2xl:max-w-4xl mx-auto">
            Kami percaya bahwa belajar tidak terbatas di dalam ruang kelas.
            Melalui berbagai{" "}
            <span className="font-semibold text-[#937A25]">
              program intrakurikuler
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-[#937A25]">
              ekstrakurikuler
            </span>
            , kami memfasilitasi siswa untuk{" "}
            <span className="font-semibold text-[#937A25]">
              mengeksplorasi minat
            </span>
            ,{" "}
            <span className="font-semibold text-[#937A25]">mengasah bakat</span>
            , dan{" "}
            <span className="font-semibold text-[#937A25]">
              membangun karakter pemimpin masa depan
            </span>{" "}
            yang berwawasan luas.
          </p>
        </FadeIn>
      </div>

      {/* 2. CAROUSEL WRAPPER WITH NAVIGATION ARROWS */}
      <div className="relative mx-auto group">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
          type="button"
          className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 z-30 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/60 text-white items-center justify-center hover:bg-black/80 transition-colors shadow-lg active:scale-95"
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
          className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 z-30 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/60 text-white items-center justify-center hover:bg-black/80 transition-colors shadow-lg active:scale-95"
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

        {/* Scrollable Horizontal Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ACTIVITY_COLUMNS.map((col, index) => {
            const isLast = index === ACTIVITY_COLUMNS.length - 1;
            return (
              <div
                key={col.id}
                className={`activity-col flex-none w-1/2 lg:w-1/3 2xl:w-1/4 flex flex-col shrink-0 ${
                  isLast ? "snap-end" : "snap-start"
                }`}
              >
                <CardBox item={col.top} />
                <CardBox item={col.bottom} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CardBox({ item }: { item: ActivityItem }) {
  if (item.theme === "image") {
    return (
      <div className="relative h-72 sm:h-80 2xl:h-96 w-full overflow-hidden group/card">
        <Image
          src={item.imageSrc}
          alt="Aktivitas Santri YPIIS"
          fill
          sizes="(max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      </div>
    );
  }

  const bgColor = item.theme === "maroon" ? "bg-[#7C3131]" : "bg-[#BFA124]";

  const buttonBgColor =
    item.theme === "maroon"
      ? "bg-[#582121] group-hover/card:bg-[#431919]"
      : "bg-[#8A7418] group-hover/card:bg-[#6D5B12]";

  return (
    <div
      className={`h-72 sm:h-80 2xl:h-96 w-full ${bgColor} text-white p-6 flex flex-col justify-between relative group/card cursor-pointer transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-center text-center my-auto">
        {/* Category Header with lines */}
        <div className="flex items-center justify-center gap-3 mb-4 w-full">
          <span className="w-4 h-px bg-white/50" />
          <span className="text-xs 2xl:text-sm font-extrabold uppercase tracking-widest text-white/90">
            {item.category}
          </span>
          <span className="w-4 h-px bg-white/50" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mb-3 leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xs mx-auto line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Circle Icon Button at Bottom Center */}
      <div className="flex justify-center pt-2">
        <div
          className={`w-10 h-10 rounded-full ${buttonBgColor} text-white flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110`}
        >
          <FiArrowUpRight size={22} />
        </div>
      </div>
    </div>
  );
}
