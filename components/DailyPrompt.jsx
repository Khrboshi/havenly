"use client";
import { useState, useEffect } from "react";
import prompts from "@/data/prompts.json";
import { motion } from "framer-motion";

export default function DailyPrompt() {
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const stored = JSON.parse(localStorage.getItem("dailyPrompt") || "{}");

    if (stored.date === today && stored.prompt) {
      setPrompt(stored.prompt);
    } else {
      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      setPrompt(randomPrompt);
      localStorage.setItem(
        "dailyPrompt",
        JSON.stringify({ date: today, prompt: randomPrompt })
      );
    }
  }, []);

  if (!prompt) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-6 mt-12"
    >
      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Today’s Reflection
      </h2>
      <p className="text-slate-600 text-lg">{prompt}</p>
    </motion.div>
  );
}
