"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, PenLine } from "lucide-react";

export default function DailyNudge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const last = localStorage.getItem("lastReflectionDate");
    if (!last) return setShow(true); // never reflected before

    const diff = Date.now() - new Date(last).getTime();
    if (diff > 24 * 60 * 60 * 1000) setShow(true); // more than 24h
  }, []);

  const dismiss = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-3 bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl w-[90%] max-w-md"
        >
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
            <PenLine className="text-blue-500" size={20} />
            <p className="text-sm md:text-base">
              It’s been a while since your last reflection. Want to write now?
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/reflect"
              className="btn-primary text-sm px-4 py-2"
              onClick={() => {
                localStorage.setItem("lastReflectionDate", new Date().toISOString());
                setShow(false);
              }}
            >
              Yes
            </Link>
            <button
              onClick={dismiss}
              aria-label="Dismiss nudge"
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
