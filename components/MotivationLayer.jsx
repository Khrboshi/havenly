"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Peace begins the moment you choose to breathe.",
  "Little by little, you are becoming who you were meant to be.",
  "You are not behind — you are unfolding.",
  "Each reflection is a conversation with your soul.",
  "Growth is quiet, steady, and beautiful.",
  "Breathe. This moment is enough.",
  "Every day you write — you heal a little more."
];

export default function MotivationLayer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 7000); // rotate every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center py-12 select-none">
      {/* ✨ Background breathing pulse */}
      <motion.div
        className="absolute inset-0 mx-auto w-48 h-48 bg-blue-100 dark:bg-blue-900/40 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* ✨ Rotating quote */}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 max-w-2xl leading-relaxed"
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
