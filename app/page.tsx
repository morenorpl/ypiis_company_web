import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import TentangKamiSection from "./components/home/TentangKamiSection";
import UnitPendidikanSection from "./components/home/UnitPendidikanSection";

export default function HomePage() {
  return (
    <div className="space-y-40 pb-16">
      {/* 1. Hero Section (Image and Title) */}
      <HeroSection />

      {/* 2. Tentang Kami Section (Image and Title) */}
      <TentangKamiSection />

      {/* 3. Unit Pendidikan Section (Image and Title) */}
      <UnitPendidikanSection />
    </div>
  );
}
