"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#7D2828] text-white">
      {/* 1. Top Decorative Pattern Bar */}
      <div className="w-full h-24 bg-[#7D2828] relative overflow-hidden flex justify-center items-center">
        {/* SVG Geometric Pattern matching your design */}
        <Image
          src="/footer-top-border-art-3.svg"
          alt="Decorative Pattern"
          fill
          className="object-cover object-right opacity-100"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-18 grid grid-cols-1 md:grid-cols-3 gap-40 items-center text-center">
        {/* Left Column Navigation */}
        <div className="flex flex-col space-y-4">
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Social
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            FAQs
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Hubungi Kami
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Donasi
          </Link>
        </div>

        {/* Center Column - Logo & Social Icons */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo Placeholder - Replace src with your actual logo asset */}
          <div className="w-24 h-24 relative flex items-center justify-center">
            <Image
              className="w-24 h-24 max-w-full max-h-full object-contain brightness-100"
              src="/YPIIS logo white.svg"
              alt="YPIIS Logo"
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold leading-tight max-w-xs">
            Yayasan Pendidikan Islam Imam Syafi’i
          </h2>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-2">
            <Link
              href="#"
              className="p-1 hover:text-[#BF9F2A] transition-all duration-400"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-1 hover:text-[#BF9F2A] transition-all duration-400"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-1 hover:text-[#BF9F2A] transition-all duration-400"
              aria-label="Email"
            >
              <IoIosMail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Column Navigation */}
        <div className="flex flex-col space-y-4">
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Tentang Kami
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Akademik
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Pendaftaran
          </Link>
          <div className="w-full border-t border-white/30" />

          <Link
            href="#"
            className="text-lg font-medium hover:text-[#BF9F2A] transition-all duration-400"
          >
            Berita
          </Link>
        </div>
      </div>

      {/* 3. Bottom Mustard Yellow Copyright Bar */}
      <div className="w-full bg-[#B89C13] py-3 text-center text-xs md:text-sm font-bold text-[#6D570F]">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>© 2026 YPIIS</span>
          <span>|</span>
          <span>All Rights Reserved</span>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
