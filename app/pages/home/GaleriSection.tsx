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
    title: "Judul 1",
    description: "Deskripsi 1",
    imageSrc: "/images/galeri-1.jpg",
  },
  {
    id: "2",
    title: "Judul 2",
    description: "Deskripsi 2",
    imageSrc: "/images/galeri-2.jpg",
  },
  {
    id: "3",
    title: "Judul 3",
    description: "Deskripsi 3",
    imageSrc: "/images/galeri-3.jpg",
  },
  {
    id: "4",
    title: "Judul 4",
    description: "Deskripsi 4",
    imageSrc: "/images/galeri-4.jpg",
  },
  {
    id: "5",
    title: "Judul 5",
    description: "Deskripsi 5",
    imageSrc: "/images/galeri-5.jpg",
  },
];

const ROW_2: GalleryItem[] = [
  {
    id: "6",
    title: "Judul 6",
    description: "Deskripsi 6",
    imageSrc: "/images/galeri-6.jpg",
  },
  {
    id: "7",
    title: "Judul 7",
    description: "Deskripsi 7",
    imageSrc: "/images/galeri-7.jpg",
  },
  {
    id: "8",
    title: "Judul 8",
    description: "Deskripsi 8",
    imageSrc: "/images/galeri-8.jpg",
  },
  {
    id: "9",
    title: "Judul 9",
    description: "Deskripsi 9",
    imageSrc: "/images/galeri-9.jpg",
  },
  {
    id: "10",
    title: "Judul 10",
    description: "Deskripsi 10",
    imageSrc: "/images/galeri-10.jpg",
  },
];

const ROW_3: GalleryItem[] = [
  {
    id: "11",
    title: "Judul 11",
    description: "Deskripsi 11",
    imageSrc: "/images/galeri-11.jpg",
  },
  {
    id: "12",
    title: "Judul 12",
    description: "Deskripsi 12",
    imageSrc: "/images/galeri-12.jpg",
  },
  {
    id: "13",
    title: "Judul 13",
    description: "Deskripsi 13",
    imageSrc: "/images/galeri-13.jpg",
  },
  {
    id: "14",
    title: "Judul 14",
    description: "Deskripsi 14",
    imageSrc: "/images/galeri-14.jpg",
  },
  {
    id: "15",
    title: "Judul 15",
    description: "Deskripsi 15",
    imageSrc: "/images/galeri-15.jpg",
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
    <div className="group relative w-[220px] sm:w-[280px] lg:w-[320px] 2xl:w-[380px] h-36 sm:h-44 lg:h-52 2xl:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm cursor-pointer shrink-0 border-2 border-[#A2A2A2]">
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
        <div className="w-full h-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:12px_12px] bg-gray-100" />
      )}

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#772524]/80 via-[#772524]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

      {/* Hover Text Content Wrapper */}
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out z-10 w-full min-w-0">
        {/* Title: Truncated to 2 lines max & forced line-wrapping */}
        <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white tracking-wide mb-1 line-clamp-2 break-words w-full">
          {item.title}
        </h3>

        {/* Description: Truncated to 2 lines max & protected from pushing layout */}
        <p className="text-xs sm:text-sm 2xl:text-base text-gray-200 font-medium line-clamp-2 break-words w-full">
          {item.description}
        </p>
      </div>
    </div>
  );
}
