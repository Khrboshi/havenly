import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Havenly</title>
        <meta
          name="description"
          content="Havenly is a private, minimal, and calming app for daily reflections, mindfulness, and emotional wellbeing."
        />
      </Head>
      <main className="max-w-2xl mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">About Havenly</h1>
        <p className="mb-4">
          Havenly helps you cultivate mindfulness through simple daily reflections. No cloud storage, no third-party tracking — your data stays on your device.
        </p>
        <p>
          Built with care, for you. Join our growing community and make reflection a daily habit.
        </p>
      </main>
    </>
  );
}
