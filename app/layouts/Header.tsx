"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Akademik", href: "/akademik" },
  { name: "Pendaftaran", href: "/pendaftaran" },
  { name: "Berita", href: "/berita" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Track scroll state for background styling if needed
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide header when scrolling down after 150px, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          hidden: { y: "-100%" },
          visible: { y: "0%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#F8F7F3]/95 backdrop-blur-md shadow-sm"
            : "bg-[#F8F7F3]"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          {/* MOBILE & TABLET HEADER (< lg) */}
          <div className="flex lg:hidden items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="w-9 h-9 object-contain"
                src="/YPIIS logo.svg"
                alt="YPIIS Logo"
                width={36}
                height={36}
                priority
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B1B1B] hover:text-[#8A3635] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>

          {/* DESKTOP NAVBAR (lg, xl, 2xl) */}
          <nav className="hidden lg:flex items-center justify-center w-full">
            <div className="flex items-center justify-between w-full max-w-4xl 2xl:max-w-7xl">
              {/* Left Link Group */}
              <div className="flex items-center gap-10 xl:gap-14 2xl:gap-20">
                <Link
                  href="/tentang-kami"
                  className="nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] font-semibold text-base 2xl:text-lg py-2 px-1 whitespace-nowrap"
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/akademik"
                  className="nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] font-semibold text-base 2xl:text-lg py-2 px-1 whitespace-nowrap"
                >
                  Akademik
                </Link>
              </div>

              {/* Centered Logo */}
              <Link
                href="/"
                className="flex items-center justify-center shrink-0 mx-0"
              >
                <Image
                  className="w-10 h-10 2xl:w-12 2xl:h-12 object-contain hover:scale-105 transition-transform"
                  src="/YPIIS logo.svg"
                  alt="YPIIS Logo"
                  width={48}
                  height={48}
                  priority
                />
              </Link>

              {/* Right Link Group */}
              <div className="flex items-center gap-10 xl:gap-14 2xl:gap-20">
                <Link
                  href="/pendaftaran"
                  className="nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] font-semibold text-base 2xl:text-lg py-2 px-1 whitespace-nowrap"
                >
                  Pendaftaran
                </Link>
                <Link
                  href="/berita"
                  className="nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] font-semibold text-base 2xl:text-lg py-2 px-1 whitespace-nowrap"
                >
                  Berita
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          >
            {/* MOBILE MENU CONTAINER */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-16 left-0 w-full bg-[#FAF8F5] shadow-xl border-b border-gray-200/80 px-6 py-8 flex flex-col gap-5 z-50"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-800 hover:text-[#8A3635] py-2 border-b border-gray-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
