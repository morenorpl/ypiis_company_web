"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import FadeIn from "../../components/animation/FadeIn";

interface GedungFasilitasItem {
  id: string;
  number: string;
  title: string;
  description?: string;
  fullDescription?: string;
  imageSrc: string;
  additionalImages?: string[];
  href: string;
}

const FACILITIES: GedungFasilitasItem[] = [
  {
    id: "fac-1",
    number: "01",
    title: "Gedung Sekolah",
    description:
      "Fasilitas ruang belajar mengajar yang nyaman, modern, dan kondusif bagi para santri.",
    fullDescription:
      "Gedung sekolah dirancang khusus untuk menciptakan suasana belajar mengajar yang efektif dan representatif. Dilengkapi dengan pencahayaan alami yang baik, pendingin ruangan, fasilitas multimedia terintegrasi, serta meja-kursi ergonomis guna mendukung konsentrasi dan kenyamanan santri selama proses akademik.",
    imageSrc: "/gedung-kelas.png",
    additionalImages: [
      "/fasilitas-add-kelas1.png",
      "/fasilitas-add-kelas2.png",
    ],
    href: "#",
  },
  {
    id: "fac-2",
    number: "02",
    title: "Masjid Utama",
    description:
      "Pusat kegiatan ibadah, tahfizh Al-Qur'an, dan pembinaan spiritual seluruh warga yayasan.",
    fullDescription:
      "Masjid Utama menjadi jantung keagamaan dan kegiatan spiritual di lingkungan yayasan. Selain sebagai tempat shalat berjamaah lima waktu, masjid ini dimanfaatkan untuk halaqah tahfizh Al-Qur'an, kajian rutin kitab kuning, iktikaf, serta pembentukan karakter dan adab santri.",
    imageSrc: "/fasilitas-masjid.png",
    additionalImages: ["/hero-banner.png", "/fasilitas-add-masjid1.png"],
    href: "#",
  },
];

export default function GedungFasilitasSection() {
  const [selectedFacility, setSelectedFacility] =
    useState<GedungFasilitasItem | null>(null);

  // States to handle modal entry & exit transitions smoothly
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle open modal
  const handleOpenModal = (item: GedungFasilitasItem) => {
    setSelectedFacility(item);
    setIsMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
      setSelectedFacility(null);
    }, 300); // 300ms transition duration
  };

  // Lock background body scroll when modal is active
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

  return (
    <section className="py-6 bg-[#faf8f500] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
          <div>
            <FadeIn delay={0.2} duration={1} x={-50} once={true}>
              <span className="text-sm 2xl:text-base font-black uppercase tracking-wider text-[#8A3635]">
                GEDUNG DAN FASILITAS
              </span>
            </FadeIn>
            <FadeIn delay={0.5} duration={1} x={-50} once={true}>
              <h2 className="text-5xl 2xl:text-6xl font-black text-[#1B1B1B] uppercase tracking-tight mt-1">
                FASILITAS YAYASAN
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.8} duration={1} x={50} once={true}>
            <p className="text-[#3E3E3E] font-medium text-sm 2xl:text-base max-w-md leading-relaxed md:text-right">
              Fasilitas untuk mendukung kegiatan akademik, peribadatan, serta
              kenyamanan tumbuh kembang para santri.
            </p>
          </FadeIn>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 sm:mb-16" />

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {FACILITIES.map((item) => (
            <FacilityCard
              key={item.id}
              item={item}
              onSelect={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* FLOATING SCROLLABLE MODAL WITH TRANSITIONS */}
      {isMounted && selectedFacility && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 ease-out ${
            isOpen
              ? "bg-black/70 backdrop-blur-sm"
              : "bg-black/0 backdrop-blur-none pointer-events-none"
          }`}
        >
          {/* Backdrop Overlay Click */}
          <div className="absolute inset-0" onClick={handleCloseModal} />

          {/* Modal Container */}
          <div
            className={`relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] transition-all duration-300 ease-out ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            {/* Sticky Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#8A3635]">
                  ({selectedFacility.number})
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#937A25]">
                  Gedung &amp; Fasilitas
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors active:scale-95"
                aria-label="Close modal"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Title & Detailed Paragraph */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B1B1B] mb-3 leading-snug">
                  {selectedFacility.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedFacility.fullDescription ||
                    selectedFacility.description}
                </p>
              </div>

              {/* Gallery Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Foto Fasilitas
                </h4>

                {/* Primary Main Image */}
                <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-gray-100 shadow-inner group/img">
                  <Image
                    src={selectedFacility.imageSrc}
                    alt={selectedFacility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>

                {/* Secondary Gallery Images */}
                {selectedFacility.additionalImages &&
                  selectedFacility.additionalImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {selectedFacility.additionalImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm group/thumb"
                        >
                          <Image
                            src={img}
                            alt={`${selectedFacility.title} detail ${idx + 1}`}
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

function FacilityCard({
  item,
  onSelect,
}: {
  item: GedungFasilitasItem;
  onSelect: (item: GedungFasilitasItem) => void;
}) {
  return (
    <FadeIn delay={0.2} duration={1} y={50} once={true}>
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="group text-left w-full bg-white p-3 sm:p-4 rounded-sm border border-gray-200/80 shadow-xs hover:shadow-md hover:-rotate-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
      >
        {/* Image Area */}
        <div className="relative w-full aspect-4/3 bg-[#E2E2E2] overflow-hidden rounded-xs mb-4 shrink-0">
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#D1D1D1]" />
          )}
        </div>

        {/* Footer Info Row */}
        <div className="flex items-end justify-between gap-2 sm:gap-3 px-1 pb-1 w-full min-w-0">
          {/* Left Container: Title + Number */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 min-w-0 flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold text-[#1B1B1B] tracking-tight group-hover:text-[#8A3635] transition-colors leading-snug line-clamp-2 break-words min-w-0">
              {item.title}
            </h3>
            <span className="text-xs sm:text-sm lg:text-base text-[#A2A2A2] font-semibold shrink-0">
              ({item.number})
            </span>
          </div>

          {/* Right Container: Arrow Button (Preserved styling) */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full border border-[#A2A2A2] flex items-center justify-center text-gray-500 group-hover:border-[#A2A2A2] group-hover:bg-[#A2A2A2] group-hover:text-white transition-all duration-300 shrink-0 self-end mb-0.5">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </button>
    </FadeIn>
  );
}
