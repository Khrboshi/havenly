// /components/MilestoneToast.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function MilestoneToast({ message, show, onClose }) {
  // Auto-close after 4 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl px-5 py-3 backdrop-blur-md">
            <Sparkles className="text-yellow-400 w-6 h-6 animate-pulse" />
            <p className="text-slate-800 dark:text-slate-100 font-medium text-sm">
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
