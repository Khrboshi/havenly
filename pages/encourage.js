"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "You’re doing better than you think.",
  "Small steps still move you forward.",
  "Rest is productive too.",
  "Progress, not perfection."
];

export default function Encourage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % quotes.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Encourage — Havenly</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-text-muted max-w-xl"
          >
            “{quotes[index]}”
          </motion.p>
        </AnimatePresence>
      </div>
    </>
  );
}
