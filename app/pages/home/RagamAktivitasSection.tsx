"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import FadeIn from "../../components/animation/FadeIn";

interface ActivityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageSrc: string;
  additionalImages?: string[];
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
      imageSrc: "/ragam-marketday.jpeg",
      theme: "image",
    },
    bottom: {
      id: "act-2",
      category: "TAUD & TK-KB IMAM SYAFI'I",
      title: "Acara Kewirausahaan Marketday",
      description:
        "Kegiatan Marketday yang diadakan untuk melatih jiwa kewirausahaan dan keterampilan berbisnis para santri.",
      fullDescription:
        "Kegiatan Jum'at Sehat dirancang untuk menjaga stamina, kesehatan, dan semangat para santri di tengah rutinitas belajar. Diawali dengan markerday mengelilingi area lingkungan sekolah dan dilanjutkan dengan senam kesegaran jasmani bersama para ustadz dan pengasuh.",
      imageSrc: "/ragam-marketday.jpeg",
      additionalImages: [
        "/ragam-add-marketday1.jpeg",
        "/ragam-add-marketday2.jpeg",
      ],
      theme: "gold",
    },
  },
  {
    id: "col-2",
    top: {
      id: "act-3",
      category: "TAUD & TK-KB IMAM SYAFI'I",
      title: "Ujian Tasmi' untuk Kenaikan Juz",
      description:
        "Program pengetesan hafalan Al-Qur'an secara sekaligus di hadapan para penguji dan santri.",
      fullDescription:
        "Ujian Tasmi' merupakan momen krusial di mana santri memperdengarkan hafalan Al-Qur'an satu juz penuh tanpa terputus di hadapan penguji dan rekan-rekan santri. Program ini bertujuan melatih mental, ketelitian hafalan, serta menjaga kualitas tajwid para santri.",
      imageSrc: "/ragam-sholat.jpeg",
      additionalImages: ["/ragam-add-sholat1.jpeg", "/ragam-add-sholat2.jpeg"],
      theme: "maroon",
    },
    bottom: {
      id: "act-4",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-sholat.jpeg",
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
      imageSrc: "/ragam-berenang.jpg",
      theme: "image",
    },
    bottom: {
      id: "act-6",
      category: "SD IBNU KATSIR",
      title: "Ekstrakurikuler Berenang",
      description:
        "Kegiatan ekstrakurikuler berenang untuk membekali santri dengan keterampilan dasar keselamatan di air.",
      fullDescription:
        "Mengenal kebudayaan nusantara secara mendalam melalui pertunjukan seni, pakaian adat, serta pameran kuliner tradisional khas dari berbagai daerah di Indonesia. Dikelola langsung oleh organisasi santri untuk memupuk kebhinekaan dan toleransi.",
      imageSrc: "/ragam-berenang.jpg",
      additionalImages: [
        "/ragam-add-berenang1.jpg",
        "/ragam-add-berenang2.jpg",
      ],
      theme: "maroon",
    },
  },
  {
    id: "col-4",
    top: {
      id: "act-7",
      category: "SD IBNU KATSIR",
      title: "Ekstrakurikuler Panahan",
      description:
        "Kegiatan ekstrakurikuler panahan untuk membekali santri dengan keterampilan dasar olahraga panahan.",
      fullDescription:
        "Kegiatan classmeet diisi dengan kompetisi seru antar jenjang kelas. Tarik tambang menjadi salah satu cabang terfavorit yang menguji kekompakan, strategi tim, dan daya juang fisik antarsantri dalam suasana penuh kegembiraan.",
      imageSrc: "/ragam-panah.jpg",
      additionalImages: ["/ragam-add-panah1.jpg", "/ragam-add-panah2.jpg"],
      theme: "gold",
    },
    bottom: {
      id: "act-8",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-panah.jpg",
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
      imageSrc: "/ragam-minisoccer.jpeg",
      theme: "image",
    },
    bottom: {
      id: "act-10",
      category: "SMP IKBS",
      title: "Classmeeting Fun Mini Soccer",
      description:
        "menyalurkan bakat sepak bola para santri dalam suasana yang seru dan penuh kebersamaan.",
      fullDescription:
        "Kegiatan Classmeeting Fun MiniSoccer merupakan agenda rutin paska-ujian yang dirancang untuk menyegarkan kembali pikiran para santri. Melalui pertandingan antarkelas yang kompetitif namun tetap bernuansa kekeluargaan, para santri belajar pentingnya kerja sama tim, menjunjung tinggi sportivitas, serta menjaga kebugaran fisik.",
      imageSrc: "/ragam-minisoccer.jpeg",
      additionalImages: ["/ragam-minisoccer.jpeg", "/ragam-minisoccer.jpeg"],
      theme: "gold",
    },
  },
  {
    id: "col-6",
    top: {
      id: "act-11",
      category: "SMP IKBS",
      title: "Test Tasmi Satu Juz Sekali Duduk",
      description:
        "Ujian kelancaran hafalan Al-Qur'an secara memperdengarkan bacaan 1 juz penuh.",
      fullDescription:
        "Kegiatan Test Tasmi' 1 Juz Sekali Duduk merupakan wadah evaluasi berkala untuk menguji kualitas, kelancaran, dan ketepatan tajwid hafalan Al-Qur'an santri. Dalam ujian ini, santri memperdengarkan hafalan 1 juz penuh secara langsung dalam satu sesi tanpa terputus di hadapan penguji dan rekan-rekan santri.",
      imageSrc: "/ragam-tasmisejuz.jpeg",
      additionalImages: ["/ragam-tasmisejuz.jpeg", "/ragam-tasmisejuz.jpeg"],
      theme: "maroon",
    },
    bottom: {
      id: "act-12",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-tasmisejuz.jpeg",
      theme: "image",
    },
  },
  {
    id: "col-7",
    top: {
      id: "act-13",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-badminton.jpeg",
      theme: "image",
    },
    bottom: {
      id: "act-14",
      category: "SMA IKBS",
      title: "Classmeeting Lomba Badminton",
      description:
        "Turnamen bulu tangkis antarkelas untuk mengasah kelincahan dan semangat kebersamaan antar santri.",
      fullDescription:
        "Kegiatan Classmeeting Lomba Badminton menjadi ajang kompetisi olahraga yang sangat dinantikan santri SMA IKBS. Mempertandingkan kategori tunggal dan ganda.",
      imageSrc: "/ragam-badminton.jpeg",
      additionalImages: ["/ragam-badminton.jpeg", "/ragam-badminton.jpeg"],
      theme: "maroon",
    },
  },
  {
    id: "col-8",
    top: {
      id: "act-15",
      category: "SMA IKBS",
      title: "Pelatihan Ceramah di Depan Jama'ah",
      description:
        "Wadah pelatihan dan pembekalan teknik public speaking untuk keterampilan berdakwah.",
      fullDescription:
        "Kegiatan Pelatihan Praktik Ceramah merupakan program pembekalan dakwah yang dirancang untuk mengasah keberanian, rasa percaya diri, dan keterampilan public speaking para santri. Dalam pelatihan ini, santri dibimbing mulai dari penyusunan materi ceramah yang sistematis, penguasaan intonasi dan gestur tubuh, hingga teknik menyampaikan pesan-pesan kebaikan secara persuasif di hadapan jamaah.",
      imageSrc: "/ragam-ceramah.jpeg",
      additionalImages: ["/ragam-ceramah.jpeg", "/ragam-ceramah.jpeg"],
      theme: "gold",
    },
    bottom: {
      id: "act-16",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-ceramah.jpeg",
      theme: "image",
    },
  },
  {
    id: "col-9",
    top: {
      id: "act-17",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-peskil.jpg",
      theme: "image",
    },
    bottom: {
      id: "act-18",
      category: "SMP-SMA IBNU KATSIR PUTRI",
      title: "Pesantren Kilat di Bulan Ramadhan",
      description:
        "Intensifikasi ibadah dan pendalaman ilmu syar'i selama bulan suci Ramadhan.",
      fullDescription:
        "Program intensif bulan Ramadhan yang diisi dengan kajian kitab kuning, halaqah tahfizh, iktikaf, serta kegiatan bakti sosial pembagian sembako dan takjil gratis bagi masyarakat sekitar.",
      imageSrc: "/ragam-peskil.jpg",
      additionalImages: ["/ragam-add-peskil1.jpg", "/ragam-add-peskil2.jpeg"],
      theme: "maroon",
    },
  },
  {
    id: "col-10",
    top: {
      id: "act-19",
      category: "SMP-SMA IBNU KATSIR PUTRI",
      title: "Pelatihan Praktek Pengurusan Jenazah",
      description:
        "Pembekalan Fardhu Kifayah mencakup tatacara memandikan hingga menyalatkan jenazah.",
      fullDescription:
        "Pembekalan fardhu kifayah mendasar bagi santri agar siap terjun di masyarakat. Santri dibimbing secara rinci mengenai tata cara memandikan, mengkafani, menyalatkan, hingga memakamkan sesuai sunnah.",
      imageSrc: "/ragam-jenazah.jpeg",
      additionalImages: ["/galeri-4.jpeg", "/ragam-add-jenazah1.jpeg"],
      theme: "gold",
    },
    bottom: {
      id: "act-20",
      category: "",
      title: "",
      description: "",
      imageSrc: "/ragam-jenazah.jpeg",
      theme: "image",
    },
  },
];

export default function RagamAktivitasSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(
    null,
  );

  // States to handle entry & exit transitions smoothly
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle open modal with transition
  const handleOpenModal = (item: ActivityItem) => {
    setSelectedActivity(item);
    setIsMounted(true);
    // Request animation frame ensures DOM mounting before applying active transition classes
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  };

  // Handle close modal with transition
  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
      setSelectedActivity(null);
    }, 300); // 300ms matches the transition duration
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMounted]);

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
                <CardBox item={col.top} onSelect={handleOpenModal} />
                <CardBox item={col.bottom} onSelect={handleOpenModal} />
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. FLOATING SCROLLABLE MODAL WITH TRANSITIONS */}
      {isMounted && selectedActivity && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 ease-out ${
            isOpen
              ? "bg-black/70 backdrop-blur-sm"
              : "bg-black/0 backdrop-blur-none pointer-events-none"
          }`}
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={handleCloseModal} />

          {/* Modal Card */}
          <div
            className={`relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] transition-all duration-300 ease-out ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            {/* Sticky Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-20">
              <span className="text-xs font-bold uppercase tracking-widest text-[#937A25]">
                {selectedActivity.category}
              </span>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors active:scale-95"
                aria-label="Close modal"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Title & Text */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#8A3635] mb-3 leading-snug">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedActivity.fullDescription ||
                    selectedActivity.description}
                </p>
              </div>

              {/* Image Gallery Showcase */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Dokumentasi Kegiatan
                </h4>

                {/* Main Large Image */}
                <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-gray-100 shadow-inner group/img">
                  <Image
                    src={selectedActivity.imageSrc || "/ragam-jogging.jpg"}
                    alt={selectedActivity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>

                {/* Secondary Images Grid */}
                {selectedActivity.additionalImages &&
                  selectedActivity.additionalImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {selectedActivity.additionalImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm group/thumb"
                        >
                          <Image
                            src={img}
                            alt={`${selectedActivity.title} detail ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CardBox({
  item,
  onSelect,
}: {
  item: ActivityItem;
  onSelect: (item: ActivityItem) => void;
}) {
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
      onClick={() => onSelect(item)}
      className={`h-72 sm:h-80 2xl:h-96 w-full ${bgColor} text-white p-6 flex flex-col justify-between relative group/card cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.99]`}
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
