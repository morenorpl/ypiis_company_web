import Image from "next/image";
import HeroSection from "./pages/home/HeroSection";
import TentangKamiSection from "./pages/home/TentangKamiSection";
import UnitPendidikanSection from "./pages/home/LembagaPendidikanSection";
import RagamAktivitasSection from "./pages/home/RagamAktivitasSection";
import GedungFasilitasSection from "./pages/home/GedungFasilitasSection";
import DonasiBantuSection from "./pages/home/DonasiBantuSection";
import GaleriSection from "./pages/home/GaleriSection";
import PetaLokasiSection from "./pages/home/PetaLokasiSection";

export default function HomePage() {
  return (
    <div className="relative space-y-24 2xl:space-y-40 pb-46 before:absolute before:inset-0 before:-z-10 before:opacity-5 before:bg-[url('../public/pattern.jpg')] before:bg-repeat">
      {/* 1. Hero Section (Image and Title) */}
      <HeroSection />

      {/* 2. Tentang Kami Section (Grid) */}
      <TentangKamiSection />

      {/* 3. Unit Pendidikan Section (Animated Tabs) */}
      <UnitPendidikanSection />

      {/* 4. Ragam Aktivitas Section (Grid Carousel) */}
      <RagamAktivitasSection />

      {/* 5. Gedung dan Fasilitas Section (Card Grid) */}
      <GedungFasilitasSection />

      {/* 6. Donasi Bantu Section (Horizontal Card)*/}
      <DonasiBantuSection />

      {/* 7. Galeri Section (Image Grid) */}
      <GaleriSection />

      {/* 8. Peta Lokasi Section (Embedded Map) */}
      <PetaLokasiSection />
    </div>
  );
}
