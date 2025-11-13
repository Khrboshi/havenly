"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { logEvent } from "@/utils/analytics";

export default function History() {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    logEvent("history_page_view");

    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
      // Show newest first
      setReflections(stored.reverse());
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Reflections — Havenly</title>
        <meta
          name="description"
          content="Browse your past reflections saved locally in your private Havenly space."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto py-16 px-6"
      >
        <h1 className="text-4xl font-semibold mb-10 text-center text-slate-800">
          My Reflections
        </h1>

        {reflections.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-slate-500 space-y-4"
          >
            <p>No reflections saved yet.</p>
            <Link href="/unpack" className="btn-primary inline-block mt-2">
              Write Your First Reflection
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {reflections.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-6"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {new Date(r.date).toLocaleString()}
                </p>
                <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {r.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <p className="text-center text-slate-400 text-sm mt-12">
          Your reflections are stored locally and never leave your device.
        </p>
      </motion.main>
    </>
  );
}
