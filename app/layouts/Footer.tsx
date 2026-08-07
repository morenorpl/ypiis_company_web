"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import FadeIn from "../components/animation/FadeIn";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* 1. Hero / CTA Section */}
      <div className="relative w-full min-h-[450px] sm:min-h-[550px] lg:h-[600px] 2xl:h-[700px] flex flex-col items-center justify-center overflow-hidden py-12 px-4">
        {/* Background Image */}
        <Image
          src="/gedung-kelas.png"
          alt="YPIIS Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay for Content Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
          {/* Giant Bold Title */}
          <FadeIn delay={0} duration={1} y={-30} once={true}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black text-white uppercase tracking-wider select-none mb-6 sm:mb-8 leading-none">
              PENDAFTARAN
            </h1>
          </FadeIn>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Isi Formulir Button */}
            <FadeIn
              delay={0.3}
              duration={1}
              y={30}
              once={true}
              className="w-full sm:w-auto"
            >
              <Link
                href={"#"}
                className="btn-expand-center relative overflow-hidden inline-flex items-center justify-center gap-3 [--hover-bg:#7D2828]
                  bg-[#1B1B1B] text-white text-sm sm:text-base 2xl:text-lg border border-[#A2A2A2] font-medium w-full sm:w-auto px-6 py-3 rounded-lg transition-all"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Isi Formulir</span>
              </Link>
            </FadeIn>

            {/* Konsultasi Button */}
            <FadeIn
              delay={0.4}
              duration={1}
              y={30}
              once={true}
              className="w-full sm:w-auto"
            >
              <Link
                href={"#"}
                className="btn-expand-center relative overflow-hidden inline-flex items-center justify-center gap-3 [--hover-bg:#7D2828]
                  bg-[#1B1B1B] text-white text-sm sm:text-base 2xl:text-lg border border-[#A2A2A2] font-medium w-full sm:w-auto px-6 py-3 rounded-lg transition-all"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Konsultasi</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 2. Bottom White Bar (Contact & Social Links) */}
      <div className="w-full bg-white border-t border-gray-200 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          {/* Campus Details & Address */}
          <div className="text-xs sm:text-sm text-gray-700 flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-2 font-medium">
            <span className="text-[#8A3635] font-bold shrink-0">
              (+62) 811-540-5834
            </span>
            <span className="text-gray-300 font-normal hidden sm:inline">
              |
            </span>

            <span className="font-bold text-gray-900 shrink-0">
              Main Office
            </span>
            <span className="text-gray-600">
              - Jl. Pulau Panjang Gg. Karomah No.RT 23, Berau
            </span>
            <span className="text-gray-300 font-normal hidden md:inline">
              |
            </span>

            <div className="w-full md:w-auto flex items-center justify-center gap-1.5 text-gray-500">
              <span className="font-bold text-gray-900">Made by YPIIS</span>
              <span>•</span>
              <span>Copyright © 2026. All Rights Reserved.</span>
            </div>
          </div>

          {/* Social Media Circular Buttons */}
          <div className="flex items-center justify-center gap-2 shrink-0">
            {/* YouTube */}
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#8A3635] text-white flex items-center justify-center hover:bg-[#1B1B1B] transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#8A3635] text-white flex items-center justify-center hover:bg-[#1B1B1B] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </Link>

            {/* Facebook */}
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#8A3635] text-white flex items-center justify-center hover:bg-[#1B1B1B] transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </Link>

            {/* X / Twitter */}
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#8A3635] text-white flex items-center justify-center font-bold text-xs hover:bg-[#1B1B1B] transition-all duration-300"
              aria-label="X"
            >
              <FaXTwitter className="w-3.5 h-3.5" />
            </Link>

            {/* Instagram */}
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#8A3635] text-white flex items-center justify-center hover:bg-[#1B1B1B] transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
