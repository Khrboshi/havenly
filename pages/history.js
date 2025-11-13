"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function History() {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container py-12"
      >
        <h1 className="text-4xl font-semibold mb-10 text-center text-slate-800">
          My Reflections
        </h1>

        {reflections.length === 0 ? (
          <div className="text-center text-slate-500 space-y-4">
            <p>No reflections saved yet.</p>
            <Link
              href="/unpack"
              className="btn-primary inline-block mt-4"
            >
              Write Your First Reflection
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {reflections.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {new Date(r.date).toLocaleString()}
                </p>
                <p className="text-slate-700 whitespace-pre-line">{r.text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.main>
    </>
  );
}
