"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { logEvent } from "@/utils/analytics";
import prompts from "@/data/prompts.json"; // ensure this file exists

export default function DailyPrompt() {
  const [prompt, setPrompt] = useState("");

  // Pick a unique prompt per day
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const stored = localStorage.getItem("promptDate");
    const storedPrompt = localStorage.getItem("promptText");

    if (stored === today && storedPrompt) {
      setPrompt(storedPrompt);
      return;
    }

    // Randomly select one from your prompts list
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    localStorage.setItem("promptDate", today);
    localStorage.setItem("promptText", newPrompt);
    setPrompt(newPrompt);
  }, []);

  if (!prompt) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mt-20 mb-12 px-6 py-10 rounded-2xl shadow-soft border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur text-center"
    >
      <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
        Today’s Reflection Prompt
      </h2>

      <p className="text-lg italic text-slate-600 dark:text-slate-300 mb-6">
        “{prompt}”
      </p>

      <Link
        href="/reflect"
        className="btn-primary inline-flex items-center gap-2"
        onClick={() => logEvent("daily_prompt_click")}
      >
        Start Writing
      </Link>

      <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
        A new prompt arrives every day to inspire your calm journey.
      </p>
    </motion.section>
  );
}
