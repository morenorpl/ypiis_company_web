import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import TentangKamiSection from "./components/home/TentangKamiSection";
import UnitPendidikanSection from "./components/home/UnitPendidikanSection";
import RagamAktivitasSection from "./components/home/RagamAktivitasSection";
import GedungFasilitasSection from "./components/home/GedungFasilitasSection";
import DonasiBantuSection from "./components/home/DonasiBantuSection";
import GaleriSection from "./components/home/GaleriSection";
import PetaLokasiSection from "./components/home/PetaLokasiSection";

export default function HomePage() {
  return (
    <div className="space-y-24 2xl:space-y-40  pb-46">
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
