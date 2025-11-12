import React, { useState, useEffect } from "react";
import OnboardingModal from "@/components/OnboardingModal";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem("onboardingCompleted");
      if (!done) setShowOnboard(true);
    }
  }, []);

  const finish = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
  };

  return (
    <>
      <Head>
        <title>Havenly — Mindful Reflections</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-blue-50 to-white text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Havenly</h1>
        <p className="text-gray-600 max-w-lg mb-6">
          Pause, breathe, and reflect. Your thoughts stay safe with you.
        </p>
        <Link href="/rooms" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Start My Reflection
        </Link>
      </section>

      {showOnboard && <OnboardingModal onFinish={finish} />}
    </>
  );
}
