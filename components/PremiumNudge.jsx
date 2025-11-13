"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";

export default function PremiumNudge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastDismissed = localStorage.getItem("premium_nudge_dismissed");
    if (!lastDismissed) {
      const timer = setTimeout(() => setVisible(true), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("premium_nudge_dismissed", Date.now());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40
                     max-w-lg w-[90%] sm:w-auto
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     text-white shadow-2xl rounded-2xl p-4 sm:p-5 flex items-center gap-4 backdrop-blur-lg"
        >
          <Sparkles className="w-6 h-6 text-yellow-300 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-base sm:text-lg">Try Havenly Premium</h3>
            <p className="text-sm text-blue-100">
              Unlock guided journeys, voice reflections, and soothing soundscapes.
            </p>
          </div>
          <Link
            href="/premium"
            className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition"
          >
            Explore
          </Link>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white ml-1"
            aria-label="Dismiss premium nudge"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
