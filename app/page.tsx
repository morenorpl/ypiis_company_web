import Image from 'next/image';
import HeroSection from './components/home/HeroSection';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section (Image and Title) */}
      <HeroSection />
      
      {/* Additional sections (Logos, Sponsorship, etc.) can follow here */}

    </div>
  );
}
