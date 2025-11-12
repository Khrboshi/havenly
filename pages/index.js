import React, { useState, useEffect } from "react";
import Head from "next/head";
import OnboardingModal from "@/components/OnboardingModal";
import ReferralBanner from "@/components/ReferralBanner";
import UpgradeBanner from "@/components/UpgradeBanner";
import { track } from "@/utils/analytics";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      track("page_loaded", { page: "home" });
      const completed = localStorage.getItem("onboardingCompleted");
      if (!completed) {
        setShowOnboard(true);
      }
    }
  }, []);

  const handleFinishOnboarding = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("onboardingCompleted", "true");
    }
    setShowOnboard(false);
  };

  return (
    <>
      <Head>
        <title>Havenly — Mindful Reflections</title>
        <meta
          name="description"
          content="A private, minimal app for daily reflections, mindfulness and emotional wellbeing."
        />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Welcome to Havenly
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-lg mb-6">
          Take a moment. Reflect. Grow. Your thoughts are safe here.
        </p>
        <button
          onClick={() => track("start_reflection_clicked")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Start My Reflection
        </button>

        <ReferralBanner />
        <UpgradeBanner />

        <footer className="mt-10 text-gray-400 text-sm text-center">
          Havenly © {new Date().getFullYear()}
        </footer>
      </main>

      {showOnboard && <OnboardingModal onFinish={handleFinishOnboarding} />}
    </>
  );
}
