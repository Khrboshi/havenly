// /components/PageLoader.js
"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      aria-label="Page loading"
    >
      <motion.div
        className="w-16 h-16 rounded-full border-[3px] border-blue-300 border-t-blue-600 dark:border-slate-600 dark:border-t-blue-400"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <span className="sr-only">Loading...</span>
    </motion.div>
  );
}
