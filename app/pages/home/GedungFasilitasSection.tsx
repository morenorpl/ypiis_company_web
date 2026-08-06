import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../components/animation/FadeIn";

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
    title: "Gedung Sekolah",
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
];

export default function GedungFasilitasSection() {
  return (
    <section className="py-6 bg-[#faf8f500]">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
              erat lectus, eget fringilla dolor tincidunt
            </p>
          </FadeIn>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 sm:mb-16" />

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
    <FadeIn delay={0.2} duration={1} y={50} once={true}>
      <Link
        href={item.href || "#"}
        className="group bg-white p-3 sm:p-4 rounded-sm border border-gray-200/80 shadow-xs hover:shadow-md hover:-rotate-3 transition-all duration-300 flex flex-col justify-between"
      >
        {/* Image Area */}
        <div className="relative w-full aspect-4/3 bg-[#E2E2E2] overflow-hidden rounded-xs mb-4 shrink-0">
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover"
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

          {/* Right Container: Arrow Button (STRICTLY UNTOUCHABLE) */}
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
      </Link>
    </FadeIn>
  );
}
