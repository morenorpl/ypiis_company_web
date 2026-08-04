"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide header when scrolling down after 150px, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        hidden: { y: -100 },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={
        "fixed top-0 left-0 w-full bg-[#F8F7F3] z-50 " +
        (isScrolled ? "bg-white" : "bg-[#89302F]")
      }
    >
      <div className="container w-full mx-auto px-4 py-3 flex items-center justify-center">
        {/* Logo Section */}
        {/* Simple Text Navigation */}
        <nav className="flex w-full items-center gap-12 2xl:gap-20 text-base text-center justify-center text-[#8F918F] font-semibold">
          <Link
            href="/tentang-kami"
            className="w-full max-w-30 nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] py-2 px-1"
          >
            Tentang Kami
          </Link>
          <Link
            href="/akademik"
            className="w-full max-w-30 nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] py-2 px-1"
          >
            Akademik
          </Link>

          <div className="flex items-center justify-center mx-[15%]">
            <Image
              className="w-10 h-10 object-contain"
              src="/YPIIS logo.svg"
              alt="YPIIS Logo"
              width={40}
              height={40}
            />
          </div>

          <Link
            href="/pendaftaran"
            className="w-full max-w-30 nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] py-2 px-1"
          >
            Pendaftaran
          </Link>
          <Link
            href="/berita"
            className="w-full max-w-30 nav-link-underline transition-all text-gray-800 hover:text-[#8A3635] py-2 px-1"
          >
            Berita
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
