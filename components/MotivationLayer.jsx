// /components/MotivationLayer.jsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  "Every word you write brings you closer to yourself.",
  "Stillness isn’t empty — it’s full of awareness.",
  "You are growing quietly, even when you can’t see it yet.",
  "Small reflections become lasting calm.",
  "Be gentle with yourself — you’re learning to listen.",
  "Your peace begins the moment you choose to pause.",
];

export default function MotivationLayer() {
  const [visible, setVisible] = useState(false);
  const [quote, setQuote] = useState("");

  // Trigger after user pauses or completes a reflection
  useEffect(() => {
    const idleTimer = setTimeout(() => {
      setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
      setVisible(true);
    }, 45000); // 45 seconds of inactivity

    const resetTimer = () => {
      clearTimeout(idleTimer);
      setVisible(false);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-900/70 backdrop-blur-md text-center px-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg mx-auto text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-8">
              “{quote}”
            </h2>
            <button
              onClick={() => setVisible(false)}
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition"
            >
              Continue
            </button>
          </motion.div>

          {/* Floating calm animation background */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-900/40 via-indigo-800/40 to-slate-900/50"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
