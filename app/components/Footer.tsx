"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import FadeIn from "./animation/FadeIn";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* 1. Hero / CTA Section */}
      <div className="relative w-full h-[600px] 2xl:h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image - Replace with your own image path */}
        <Image
          src="/gedung-fasilitas-dummy.png"
          alt="YPIIS Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay for Content Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Giant Bold Title */}
          <FadeIn delay={0} duration={1} y={-50} once={true}>
            <h1 className="text-9xl 2xl:text-9xl font-black text-white uppercase tracking-wider select-none mb-6">
              ADMISSION
            </h1>
          </FadeIn>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Daftar Button */}
            <FadeIn delay={0.8} duration={1} y={50} once={true}>
              <Link
                href={"#"}
                className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 [--hover-bg:#7D2828]
                  bg-[#1B1B1B] text-white text-base 2xl:text-lg border border-[#A2A2A2] font-medium px-6 py-2.5 2xl:px-6 2xl:py-2.5 rounded-xs"
              >
                <svg
                  className="w-4 h-4"
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
                <span>Daftar</span>
              </Link>
            </FadeIn>

            {/* Donasi Button */}
            <FadeIn delay={0.9} duration={1} y={50} once={true}>
              <Link
                href={"#"}
                className="btn-expand-center relative overflow-hidden inline-flex items-center gap-3 [--hover-bg:#7D2828]
                  bg-[#1B1B1B] text-white text-base 2xl:text-lg border border-[#A2A2A2] font-medium px-6 py-2.5 2xl:px-6 2xl:py-2.5 rounded-xs"
              >
                <svg
                  className="w-4 h-4"
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
                <span>Donasi</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 2. Bottom White Bar (Contact & Social Links) */}
      <div className="w-full bg-white border-t border-gray-200 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          {/* Campus Details & Address */}
          <div className="text-xs sm:text-sm text-gray-700 flex flex-wrap items-center justify-center lg:justify-start gap-1 font-medium">
            <span className="text-[#8A3635] font-bold">(+62) 811-540-5834</span>
            <span className="text-gray-400 font-normal">|</span>
            <span className="font-bold text-gray-900">Main Office</span>
            <span>- Jl. Pulau Panjang Gg. Karomah No.RT 23, Berau</span>
            <span className="text-gray-400 font-normal hidden sm:inline">
              |
            </span>
            <span className="font-bold text-gray-900">Made by YPIIS </span>
            <span>Copyright © 2026. All Rights Reserved.</span>
          </div>

          {/* Social Media Circular Buttons */}
          <div className="flex items-center gap-2">
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
              X
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
