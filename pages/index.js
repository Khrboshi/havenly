"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import OnboardingModal from "@/components/OnboardingModal";
import ReferralBanner from "@/components/ReferralBanner";
import UpgradeBanner from "@/components/UpgradeBanner";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem("onboardingCompleted");
      if (!done) setShowOnboard(true);
    }
  }, []);

  const finishOnboard = () => {
    localStorage.setItem("onboardingCompleted", "true");
    setShowOnboard(false);
  };

  return (
    <>
      <Head>
        <title>Havenly — Home</title>
      </Head>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Havenly</h1>
        <p className="text-text-muted max-w-xl mx-auto mb-6">
          Your private space for daily mindfulness and gentle reflection.
        </p>
        <Link href="/rooms" className="btn-primary">
          Start My Reflection
        </Link>
      </section>

      <ReferralBanner />
      <UpgradeBanner />

      {showOnboard && <OnboardingModal onFinish={finishOnboard} />}
    </>
  );
}
