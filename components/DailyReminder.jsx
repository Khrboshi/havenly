"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";

export default function DailyReminder() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("reminder_last_shown");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      const timer = setTimeout(() => setVisible(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("reminder_last_shown", new Date().toDateString());
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
          className="fixed bottom-5 right-5 z-50 max-w-sm w-[90%] sm:w-80
                     bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900
                     border border-slate-200 dark:border-slate-700
                     shadow-lg backdrop-blur-md rounded-2xl p-4 flex items-start gap-3"
        >
          <Bell className="text-blue-500 dark:text-blue-400 w-5 h-5 mt-1 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Take a mindful moment
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pause for one deep breath, and write one line about what you’re grateful for today.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            aria-label="Close reminder"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
