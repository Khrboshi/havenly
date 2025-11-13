"use client";

import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Link from "next/link";

export default function About() {
  return (
    <>
      <SEO
        title="About Havenly — A Space for Mindful Reflection"
        description="Learn about Havenly’s mission to make calm, mindful reflection accessible to everyone through beautiful, private digital spaces."
      />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 text-center bg-gradient-to-b from-blue-50 to-white"
      >
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6">
          About Havenly
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          Havenly was created with a simple idea: to offer a quiet, beautiful digital space
          where anyone can pause, breathe, and reconnect with themselves — free from noise,
          judgment, or distraction.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-left"
      >
        <div>
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We believe that mental clarity and emotional wellbeing begin with reflection.
            Havenly is designed to make mindfulness feel natural — not as a productivity tool,
            but as a human practice. By combining guided journaling with calming design,
            Havenly helps you slow down and rediscover calm in the digital world.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Why It Matters
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Most of our daily lives are full of noise — notifications, endless content,
            and performance pressure. We built Havenly as a quiet alternative: an app that
            doesn’t ask for likes, followers, or algorithms. Just you and your thoughts,
            in a safe, private space that helps you grow at your own pace.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Our Philosophy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We focus on three principles:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-slate-600">
            <li><strong>Privacy:</strong> Your reflections are stored locally — only for you.</li>
            <li><strong>Simplicity:</strong> Every feature is designed to be intuitive, gentle, and purposeful.</li>
            <li><strong>Mindfulness:</strong> Havenly helps you stay present, not perform.</li>
          </ul>
        </div>

        <div className="text-center pt-12">
          <p className="text-slate-600 mb-6">
            Havenly is still evolving — and we’re grateful you’re part of this journey.
          </p>
          <Link href="/unpack" className="btn-primary inline-block">
            Start Reflecting
          </Link>
        </div>
      </motion.section>
    </>
  );
}
