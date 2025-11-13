"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PremiumNudge() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reflections = JSON.parse(localStorage.getItem("reflections") || "[]");
    const hasSeenNudge = localStorage.getItem("premiumNudgeSeen");

    // Show nudge after 3 reflections, and only once
    if (reflections.length >= 3 && !hasSeenNudge) {
      setTimeout(() => setShow(true), 1500);
      localStorage.setItem("premiumNudgeSeen", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-2 text-slate-800">
          Keep Going — You’re Growing 🌱
        </h2>
        <p className="text-slate-600 mb-6">
          You’ve written several reflections! Havenly Premium helps you go deeper
          with guided themes and voice reflections.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShow(false)}
            className="btn-secondary"
          >
            Maybe Later
          </button>

          <Link
            href="/premium"
            className="btn-primary"
            onClick={() => setShow(false)}
          >
            Explore Premium
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
