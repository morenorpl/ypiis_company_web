"use client";

import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ROW_1: GalleryItem[] = [
  {
    id: "1",
    title: "Hafalan Qur'an",
    description: "Melatih kekuatan hafalan Al-Qur'an secara mandiri.",
    imageSrc: "/galeri-1.png",
  },
  {
    id: "2",
    title: "PPDB",
    description: "Proses penerimaan peserta didik baru bersama orang tua.",
    imageSrc: "/galeri-2.jpeg",
  },
  {
    id: "3",
    title: "Karya Hari Budaya",
    description:
      "Salah satu hasil karya santri dalam rangka memperingati Hari Budaya.",
    imageSrc: "/galeri-3.jpg",
  },
  {
    id: "4",
    title: "Teori Pengurusan Jenazah",
    description:
      "Bagian penjelasan teori dari kegiatan pembelajaran pengurusan jenazah.",
    imageSrc: "/galeri-4.jpeg",
  },
  {
    id: "5",
    title: "Keseruan Pramuka",
    description:
      "Siswa baris-berbaris untuk melatih kerapihan dan keterampilan.",
    imageSrc: "/galeri-5.jpeg",
  },
];

const ROW_2: GalleryItem[] = [
  {
    id: "6",
    title: "Pemilihan OSIS",
    description:
      "Acara pemilihan OSIS yang diikuti oleh seluruh santri dan guru.",
    imageSrc: "/galeri-6.jpg",
  },
  {
    id: "7",
    title: "Mini Soccer",
    description: "Keseruan santri-santri ikbs dalam pertandingan mini soccer",
    imageSrc: "/ragam-minisoccer.jpeg",
  },
  {
    id: "8",
    title: "belajar di Lab Komputer",
    description: "Momen siswa mengasah kemampuan untuk menggunakan computer.",
    imageSrc: "/galeri-8.png",
  },
  {
    id: "9",
    title: "Satu Juz Sekali Duduk",
    description:
      "Momen santri melaksanakan test kemampuan hafalan satu juz sekali duduk.",
    imageSrc: "/ragam-tasmisejuz.jpeg",
  },
  {
    id: "10",
    title: "MKKS",
    description:
      "Kegiatan Musyawarah Kerja Kepala Sekolah untuk membahas program pendidikan.",
    imageSrc: "/galeri-10.jpeg",
  },
];

const ROW_3: GalleryItem[] = [
  {
    id: "11",
    title: "Suasana Kelas",
    description:
      "Terdapat Pojok Kreatif, hasil dari karya-karya santri di kelas.",
    imageSrc: "/galeri-11.jpg",
  },
  {
    id: "12",
    title: "Penghargaan Kelulusan Tasmi (Putri)",
    description:
      "Penghargaan kelulusan santri yang telah menyelesaikan hafalan juz Al-Qur'an tertentu.",
    imageSrc: "/galeri-12.jpg",
  },
  {
    id: "13",
    title: "Kegiatan BK",
    description:
      "Kegiatan bimbingan konseling untuk mendukung perkembangan emosional santri.",
    imageSrc: "/galeri-13.jpg",
  },
  {
    id: "14",
    title: "Ekskul Berenang",
    description:
      "Momen keseruan dalam mempelajari cara benar untuk berenang di kolam.",
    imageSrc: "/ragam-add-berenang2.jpg",
  },
  {
    id: "15",
    title: "Belajar Sholat",
    description: "Momen anak-anak TK-KB belajar tata cara sholat yang shahih.",
    imageSrc: "/ragam-add-sholat1.png",
  },
];

export default function GaleriSection() {
  return (
    <section className="py-6 lg:py-12 bg-[#faf8f500] overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        {/* Row 1: Left Infinite Scroll */}
        <ScrollingRow items={ROW_1} direction="left" speed="35s" />

        {/* Row 2: Right Infinite Scroll */}
        <ScrollingRow items={ROW_2} direction="right" speed="40s" />

        {/* Row 3: Left Infinite Scroll */}
        <ScrollingRow items={ROW_3} direction="left" speed="35s" />
      </div>
    </section>
  );
}

function ScrollingRow({
  items,
  direction = "left",
  speed = "30s",
}: {
  items: GalleryItem[];
  direction?: "left" | "right";
  speed?: string;
}) {
  // Multiply items to ensure enough width for seamless scrolling across wide displays
  const doubleItems = [...items, ...items, ...items];

  const animationName =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-hidden flex select-none">
      <div
        className={`flex gap-3 sm:gap-4 lg:gap-6 shrink-0 hover:[animation-play-state:paused] ${animationName}`}
        style={{ animationDuration: speed }}
      >
        {doubleItems.map((item, index) => (
          <GalleryCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group relative w-55 sm:w-70 lg:w-[320px] 2xl:w-95 h-36 sm:h-44 lg:h-52 2xl:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm cursor-pointer shrink-0 border-2 border-[#A2A2A2]">
      {/* Image */}
      {item.imageSrc ? (
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, (max-width: 1536px) 320px, 380px"
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      ) : (
        <div className="w-full h-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[12px_12px] bg-gray-100" />
      )}

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-linear-to-t from-[#772524]/80 via-[#772524]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

      {/* Hover Text Content Wrapper */}
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out z-10 w-full min-w-0">
        {/* Title: Truncated to 2 lines max & forced line-wrapping */}
        <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white tracking-wide mb-1 line-clamp-2 wrap-break-word w-full">
          {item.title}
        </h3>

        {/* Description: Truncated to 2 lines max & protected from pushing layout */}
        <p className="text-xs sm:text-sm 2xl:text-base text-gray-200 font-medium line-clamp-2 wrap-break-word w-full">
          {item.description}
        </p>
      </div>
    </div>
  );
}
