"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number; // e.g. 0.5 (seconds)
  delay?: number; // e.g. 0.2 (seconds)
  y?: number; // e.g. 20 (moves up) or -20 (moves down)
  x?: number; // e.g. -20 (moves from left) or 20 (moves from right)
  once?: boolean; // If true, animation occurs only once when in view
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 0,
  x = 0,
  once = false,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
