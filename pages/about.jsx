"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About Havenly — Mindful Reflection for Modern Life</title>
        <meta
          name="description"
          content="Havenly helps you slow down, reflect, and rediscover calm through guided mindfulness prompts and journaling tools."
        />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 py-16 text-center"
      >
        <h1 className="text-4xl font-semibold mb-6 text-slate-800">
          About Havenly
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Havenly was created to be a quiet corner of the internet — a space to
          breathe, reflect, and reconnect with yourself through mindful writing.
          Every reflection you write stays private in your own browser, helping
          you build awareness without pressure or noise.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left text-slate-700">
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              We believe digital tools can support inner calm. Havenly encourages
              daily reflection that helps users grow mindfulness and gratitude.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
            <p>
              Your reflections never leave your device. Everything you write is
              stored locally — no accounts, no tracking, no cloud uploads.
            </p>
          </div>
        </div>

        <p className="text-slate-500 text-sm mt-12">
          Built with care using Next.js, Tailwind CSS, and Framer Motion.  
          Havenly © {new Date().getFullYear()}
        </p>
      </motion.main>
    </>
  );
}
