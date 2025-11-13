"use client";

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Premium() {
  const tiers = [
    {
      name: "Free Plan",
      description: "For those starting their mindful journey",
      features: [
        "Daily reflection prompt",
        "Private local journal storage",
        "Access to all free spaces",
      ],
      price: "Free",
      highlight: false,
    },
    {
      name: "Havenly Premium",
      description: "For deeper growth and guided reflection",
      features: [
        "Guided themes and multi-day journeys",
        "Voice reflections and emotion tagging",
        "Unlock soundscapes and focus timer",
        "Early access to new reflection modes",
        "Cloud sync (coming soon)",
      ],
      price: "$3.99 / month",
      highlight: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Havenly Premium — Deepen Your Mindful Practice</title>
        <meta
          name="description"
          content="Upgrade to Havenly Premium for guided themes, voice reflections, and deeper journaling tools to enrich your daily mindfulness."
        />
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 text-center bg-gradient-to-b from-blue-50 to-white"
      >
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
          Deepen Your Reflection Practice
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          You’ve already started your journey toward mindfulness.  
          Havenly Premium helps you explore it further — with guided experiences and exclusive tools designed to support your calm.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`rounded-2xl shadow-md border p-8 ${
                tier.highlight
                  ? "bg-white border-blue-300 ring-2 ring-blue-200"
                  : "bg-white/80 border-slate-200"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 text-slate-800">
                {tier.name}
              </h2>
              <p className="text-slate-600 mb-6">{tier.description}</p>
              <ul className="space-y-2 mb-8">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="text-blue-600">•</span> {f}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-4 text-slate-800">
                {tier.price}
              </p>

              {tier.highlight ? (
                <Link
                  href="#"
                  onClick={() => alert("Coming soon — Premium subscriptions.")}
                  className="btn-primary block text-center"
                >
                  Upgrade to Premium
                </Link>
              ) : (
                <Link href="/unpack" className="btn-secondary block text-center">
                  Continue Free
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-slate-500 mt-12">
          Havenly Premium is fully optional — your reflections remain private and local.
        </p>
      </motion.section>
    </>
  );
}
