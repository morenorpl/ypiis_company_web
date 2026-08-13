"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import FadeIn from "../components/animation/FadeIn";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer id="pendaftaran" className="w-full">
        {/* 1. Hero / CTA Section */}
        <div className="relative w-full min-h-112.5 sm:min-h-137.5 lg:h-150 2xl:h-175 flex flex-col items-center justify-center overflow-hidden py-12 px-4">
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
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black text-white uppercase tracking-wider select-none mb-6 sm:mb-12 leading-none">
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
                <button
                  onClick={() => setShowModal(true)}
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
                </button>
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
                  target="_blank"
                  href={"https://wa.me/628115405834"}
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
                <span className="font-bold text-gray-900">
                  Made by YPIIS Berau
                </span>
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

      {/* 3. Floating Modal Notification */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <FadeIn
            delay={0}
            duration={0.3}
            y={20}
            once={true}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden border-t-4 border-[#8A3635]">
              {/* Close Button (X) */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Tutup"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Alert Icon */}
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-[#8A3635]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              {/* Message */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Pendaftaran Ditutup
              </h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
                Mohon maaf, pendaftaran saat ini sedang ditutup. Silakan kembali
                lagi dan coba mendaftar pada awal tahun ajaran berikutnya.
              </p>

              {/* Action Button */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-[#8A3635] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#6b2929] transition-colors focus:ring-4 focus:ring-red-100"
              >
                Mengerti
              </button>
            </div>
          </FadeIn>
        </div>
      )}
    </>
  );
}
