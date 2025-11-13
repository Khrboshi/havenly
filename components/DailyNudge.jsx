// /components/DailyNudge.jsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DailyNudge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastReflectionDate");
    const today = new Date().toDateString();
    if (lastVisit !== today) {
      const timeout = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-5 right-5 sm:right-8 z-50"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg p-5 w-[90vw] sm:w-80 backdrop-blur-md relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-3 text-white/70 hover:text-white text-lg leading-none"
              aria-label="Close reminder"
            >
              ×
            </button>

            <h4 className="text-lg font-semibold mb-1">Pause and Reflect</h4>
            <p className="text-sm mb-4 text-white/90">
              Haven’t written today? Take two minutes to capture one thought —
              even a few words matter.
            </p>
            <Link
              href="/reflect"
              className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition"
              onClick={() => setShow(false)}
            >
              Start Reflection
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
