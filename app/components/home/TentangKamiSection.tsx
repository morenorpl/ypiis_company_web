import Image from "next/image";

const MISSION_POINTS = [
  "Membina generasi penghafal Al-Qur'an dan memahami serta mengamalkan kandungannya",
  "Mengajarkan ilmu syar'i yang diamalkan sesuai sunnah,",
  "Meneladani akhlak Nabi ﷺ dan para Sahabat dalam kehidupan sehari-hari,",
  "Melahirkan generasi Islami yang cerdas, mandiri, dan berdakwah dengan ilmu berlandaskan la quran dan hadits yang sesuai dengan pemahaman para sahabat.",
];

export default function TentangKamiSection() {
  return (
    <section className="container mx-auto px-10 py-8">
      {/* 1. SECTION HEADER */}
      <div className="mb-12 space-y-6 max-w-3xl px-8">
        <h2 className="text-5xl font-extrabold text-[#8C2C2C] uppercase tracking-wide">
          Tentang Kami
        </h2>
        <p className="text-md  text-[#1B1B1B]  font-medium leading-relaxed">
          Sebuah yayasan di kabupaten Berau, Kalimantan Timur yang bergerak di
          bidang pendidikan Islam, pengabdian masyarakat, dan sosial.
        </p>
      </div>

      {/* 2. THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* COLUMN 1: VISI & ZAKAT (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
          {/* Visi Kami (Top Light Box) */}
          <div className="bg-[#FDFDFB] border-2 border-[#A2A2A2] flex justify-start flex-col rounded-sm px-4 py-4">
            <h3 className="text-3xl font-extrabold text-black uppercase mb-12">
              Visi Kami
            </h3>
            <div className="max-w-90">
              <p className="text-sm text-[#1B1B1B] font-medium leading-relaxed">
                Mewujudkan umat yang kembali kepada Al-Qur'an dan As-Sunnah
                dengan pemahaman para Sahabat
              </p>
            </div>
          </div>

          {/* Zakat Tersalurkan (Bottom Maroon Box) */}
          <div className="bg-[#89302F] text-white border-2 border-[#A2A2A2] rounded-sm px-4 py-4 flex flex-col justify-between flex-1 min-h-55">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-40 text-white/90">
              Zakat Tersalurkan
            </h3>
            <div className="mt-8">
              <span className="text-8xl font-extrabold tracking-tight block">
                150+
              </span>

              <div className="max-w-90">
                <p className="text-sm text-white font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer semper urna e.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: MISI & BERDIRI SEJAK (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
          {/* Misi Kami (Top Tall Light Box) */}
          <div className="bg-[#FDFDFB] border-2 border-[#A2A2A2] rounded-sm p-4 shadow-sm flex-1">
            <h3 className="text-3xl font-extrabold text-black uppercase mb-10">
              Misi Kami
            </h3>
            <ol className="space-y-5 text-sm font-medium text-[#1B1B1B] list-none">
              {MISSION_POINTS.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-start leading-relaxed"
                >
                  <span className="font-semibold text-gray-800 shrink-0">
                    {index + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Berdiri Sejak (Bottom Gold Box) */}
          <div className="bg-[#C29B1D] text-white border-2 border-[#A2A2A2] rounded-sm p-4 flex items-end justify-between min-h-27.5">
            <div className="space-y-1">
              <h3 className="text-3xl font-extrabold mb-20 uppercase tracking-wide">
                Berdiri Sejak
              </h3>
              <p className="text-sm text-white font-medium mb-3 max-w-60 leading-tight">
                YPIIS telah mengajarkan ilmu syar'i sejak tahun 2011.
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-7xl font-extrabold leading-none block">
                15
              </span>
              <span className="text-md font-bold uppercase tracking-wider text-white block">
                Tahun Berdiri
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN 3: PHOTO (4 Cols) */}
        <div className="lg:col-span-4 relative min-h-87.5 lg:min-h-full border-2 border-[#A2A2A2] rounded-sm overflow-hidden shadow-sm">
          <Image
            src="/tentang-kami-classroom.png" // Place your classroom photo in public/tentang-kami-classroom.jpg
            alt="Kegiatan Belajar Santri YPIIS"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
