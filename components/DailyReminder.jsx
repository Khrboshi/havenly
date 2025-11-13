"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DailyReminder() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("reminderShown");
    const today = new Date().toDateString();
    if (lastShown !== today) {
      setTimeout(() => setVisible(true), 2500); // show gently after 2.5s
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("reminderShown", new Date().toDateString());
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-soft z-50 p-4 md:max-w-sm md:left-auto md:right-6"
        >
          <h3 className="text-base font-semibold text-slate-800 mb-1">
            Daily Check-In
          </h3>
          <p className="text-sm text-slate-600 mb-3">
            Take one mindful minute — would you like to reflect now?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={dismiss}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              Later
            </button>
            <a
              href="/unpack"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              onClick={dismiss}
            >
              Start
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
