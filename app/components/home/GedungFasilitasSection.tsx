import Image from "next/image";
import Link from "next/link";

interface GedungFasilitasItem {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  href: string;
}

const FACILITIES: GedungFasilitasItem[] = [
  {
    id: "fac-1",
    number: "01",
    title: "Gedung Aula",
    imageSrc: "/gedung-fasilitas-dummy.png", // Replace with your image path
    href: "#",
  },
  {
    id: "fac-2",
    number: "02",
    title: "Masjid",
    imageSrc: "/gedung-fasilitas-dummy.png", // Replace with your image path
    href: "#",
  },
  {
    id: "fac-3",
    number: "03",
    title: "Asrama Santri",
    imageSrc: "/gedung-fasilitas-dummy.png", // Replace with your image path
    href: "#",
  },
  {
    id: "fac-4",
    number: "04",
    title: "Laboratorium Komputer",
    imageSrc: "/gedung-fasilitas-dummy.png", // Replace with your image path
    href: "#",
  },
];

export default function GedungFasilitasSection() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
          <div>
            <span className="text-xs sm:text-base font-black uppercase tracking-wider text-[#8A3635]">
              GEDUNG DAN FASILITAS
            </span>
            <h2 className="text-3xl sm:text-6xl font-black text-[#1B1B1B] uppercase tracking-tight mt-1">
              FASILITAS YPIIS
            </h2>
          </div>
          <p className="text-[#3E3E3E] font-medium text-base max-w-md leading-relaxed md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            erat lectus, eget fringilla dolor tincidunt
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 sm:mb-16" />

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FACILITIES.map((item) => (
            <FacilityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ item }: { item: GedungFasilitasItem }) {
  return (
    <Link
      href={item.href || "#"}
      className="group bg-white p-3 sm:p-4 rounded-sm border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Area */}
      <div className="relative w-full aspect-[4/3] bg-[#E2E2E2] overflow-hidden rounded-xs mb-4">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#D1D1D1]" />
        )}
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between px-1 pb-1">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B1B1B] tracking-tight group-hover:text-[#8A3635] transition-colors">
            {item.title}
          </h3>
          <span className="text-xs sm:text-base text-[#A2A2A2] font-semibold">
            ({item.number})
          </span>
        </div>

        {/* Arrow Circle Indicator */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#A2A2A2] flex items-center justify-center text-gray-500 group-hover:border-[#A2A2A2] group-hover:bg-[#A2A2A2] group-hover:text-white transition-all duration-300">
          <svg
            className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5"
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
    </Link>
  );
}
