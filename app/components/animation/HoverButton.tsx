"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function HoverButton() {
  return (
    <motion.a
      href="#pendaftaran"
      initial="initial"
      whileHover="hover"
      className="group relative flex items-center justify-between gap-10 rounded-full border-2 border-[#802324] bg-[#802324]  pl-10 p-2 px-2.5 transition-colors duration-300 overflow-hidden"
    >
      {/* Expanding White Background Circle */}
      <motion.span
        variants={{
          initial: { scale: 1 },
          hover: { scale: 15 }, // Expands to cover the whole button
        }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-2 h-12 w-12 rounded-full bg-white origin-center z-0 pointer-events-none"
      />

      {/* Button Text */}
      <motion.span
        variants={{
          initial: { color: "#FFFFFF" },
          hover: { color: "#802324" }, // Swaps to red text on hover
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 text-lg font-semibold"
      >
        Daftar Sekarang
      </motion.span>

      {/* Arrow Icon Circle */}
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full">
        <motion.span
          variants={{
            initial: { color: "#802324" },
            hover: { color: "#802324" },
          }}
          className="text-xl font-bold"
        >
          <FiArrowUpRight size={25} color="#8C2C2C" />
        </motion.span>
      </div>
    </motion.a>
  );
}
