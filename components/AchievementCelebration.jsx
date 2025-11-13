// /components/AchievementCelebration.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AchievementCelebration({ streak, total }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (streak && streak % 3 === 0) {
      setMessage(`🔥 ${streak}-day streak! Keep your calm growing.`);
      setShow(true);
    } else if (total && total % 10 === 0) {
      setMessage(`✨ You’ve completed ${total} reflections!`);
      setShow(true);
    }
  }, [streak, total]);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg px-6 py-4 text-center w-[90vw] sm:w-auto"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {message}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Take a deep breath — you’re doing great.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
