import Image from "next/image";
import FadeIn from "../animation/FadeIn";

const MISSION_POINTS = [
  "Membina generasi penghafal Al-Qur'an dan memahami serta mengamalkan kandungannya",
  "Mengajarkan ilmu syar'i yang diamalkan sesuai sunnah,",
  "Meneladani akhlak Nabi ﷺ dan para Sahabat dalam kehidupan sehari-hari,",
  "Melahirkan generasi Islami yang cerdas, mandiri, dan berdakwah dengan ilmu berlandaskan la quran dan hadits yang sesuai dengan pemahaman para sahabat.",
];

export default function TentangKamiSection() {
  return (
    <section className="container mx-auto px-10 py-6">
      {/* 1. SECTION HEADER */}
      <div className="mb-12 space-y-6 max-w-2xl 2xl:max-w-3xl px-8">
        <FadeIn delay={0} duration={1} x={-50} once={true}>
          <h2 className="text-5xl 2xl:text-6xl font-black text-[#8C2C2C] uppercase tracking-wide">
            Tentang Kami
          </h2>
        </FadeIn>
        <FadeIn delay={0.3} duration={1} x={-50} once={true}>
          <p className="text-base 2xl:text-lg text-[#1B1B1B] font-medium leading-relaxed">
            Sebuah yayasan di kabupaten Berau, Kalimantan Timur yang bergerak di
            bidang pendidikan Islam, pengabdian masyarakat, dan sosial.
          </p>
        </FadeIn>
      </div>

      {/* 2. THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* COLUMN 1: VISI & ZAKAT (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
          {/* Visi Kami (Top Light Box) */}
          <FadeIn delay={0.6} duration={1} y={-50} once={true}>
            <div className="bg-[#F8F7F3] border-2 border-[#A2A2A2] flex justify-start flex-col rounded-sm px-4 py-4 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-1.25">
              <h3 className="text-2xl 2xl:text-3xl font-black text-black uppercase mb-12">
                Visi Kami
              </h3>
              <div className="max-w-90">
                <p className="text-sm 2xl:text-base text-[#1B1B1B] font-medium leading-relaxed">
                  Mewujudkan umat yang kembali kepada Al-Qur'an dan As-Sunnah
                  dengan pemahaman para Sahabat
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Lembaga Pendidikan (Bottom Maroon Box) */}
          <FadeIn
            className="flex flex-1"
            delay={0.9}
            duration={1}
            x={-50}
            once={true}
          >
            <div className="bg-[#89302F] text-white border-2 border-[#A2A2A2] rounded-sm px-4 py-4 flex flex-col justify-between flex-1 min-h-55 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-1.25">
              <h3 className="text-2xl 2xl:text-3xl font-extrabold uppercase tracking-wider text-white/90">
                Lembaga Pendidikan
              </h3>
              <div className="mt-8">
                <span className="text-8xl font-black tracking-tight block">
                  10+
                </span>
                <span className="text-3xl font-black tracking-tight block uppercase mb-5">
                  Sekolah
                </span>

                <div className="max-w-70">
                  <p className="text-sm 2xl:text-base text-white font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer semper urna e.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* COLUMN 2: MISI & BERDIRI SEJAK (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
          {/* Misi Kami (Top Tall Light Box) */}
          <FadeIn delay={1.4} duration={1} x={50} once={true}>
            <div className="bg-[#F8F7F3] border-2 border-[#A2A2A2] rounded-sm p-4 shadow-sm flex-1 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-1.25">
              <h3 className="text-2xl 2xl:text-3xl font-black text-[#1B1B1B] uppercase mb-10">
                Misi Kami
              </h3>
              <ol className="space-y-5 text-sm 2xl:text-base font-medium text-[#1B1B1B] list-none">
                {MISSION_POINTS.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2 items-start leading-relaxed"
                  >
                    <span className="font-medium text-base text-[#1B1B1B] shrink-0">
                      {index + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Berdiri Sejak (Bottom Gold Box) */}
          <FadeIn delay={1.2} duration={1} y={50} once={true}>
            <div className="bg-[#C29B1D] text-[#FFF7DA] border-2 border-[#A2A2A2] rounded-sm p-4 flex items-end justify-between min-h-27.5 shadow-sm hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 hover:-translate-y-1.25">
              <div className="space-y-1">
                <h3 className="text-2xl 2xl:text-3xl font-extrabold mb-20 uppercase tracking-wide ">
                  Berdiri Sejak
                </h3>
                <p className="text-sm 2xl:text-base text-white font-medium mb-2 max-w-50 leading-tight">
                  YPIIS telah mengajarkan ilmu syar'i sejak tahun 2006.
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-7xl font-black leading-none block">
                  15+
                </span>
                <span className="text-md font-bold uppercase tracking-wider text-white block">
                  Tahun Berdiri
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* COLUMN 3: PHOTO (4 Cols) */}
        <FadeIn
          className="lg:col-span-4"
          delay={1.6}
          duration={1}
          y={-50}
          once={true}
        >
          <div className="lg:col-span-4 relative min-h-87.5 lg:min-h-full border-2 border-[#A2A2A2] rounded-sm shadow-sm hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 group overflow-hidden">
            <Image
              src="/tentang-kami-classroom.png" // Place your classroom photo in public/tentang-kami-classroom.jpg
              alt="Kegiatan Belajar Santri YPIIS"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
