import React, { useState, useEffect } from "react";
import OnboardingModal from "@/components/OnboardingModal";
import Head from "next/head";

/**
 * Main landing page for Havenly
 * - Shows onboarding once for new users
 * - Displays main content after onboarding
 */
export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  // Show onboarding only the first time
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasCompleted = localStorage.getItem("onboardingCompleted");
      if (!hasCompleted) setShowOnboard(true);
    }
  }, []);

  const handleFinishOnboarding = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
  };

  return (
    <>
      <Head>
        <title>Havenly — Mindful Reflections</title>
        <meta
          name="description"
          content="A private, minimal, and calming app for daily reflections, mindfulness, and emotional wellbeing."
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Welcome to Havenly
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-lg mb-6">
          Take a moment to breathe, reflect, and write down what’s on your mind.
          Your reflections stay private and secure on your device.
        </p>
        <button
          onClick={() => alert('Reflection feature coming soon!')}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Start My Reflection
        </button>

        <footer className="mt-10 text-gray-400 text-sm text-center">
          Havenly © {new Date().getFullYear()} — Built for mindful living
        </footer>
      </main>

      {showOnboard && <OnboardingModal onFinish={handleFinishOnboarding} />}
    </>
  );
}
