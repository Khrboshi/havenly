import Head from "next/head";
import { useState, useEffect } from "react";

export default function Reset() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => !a), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Reset — Havenly</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div
          className={`h-48 w-48 rounded-full bg-blue-200 transition-all duration-1000 ${
            active ? "scale-110 opacity-80" : "scale-90 opacity-60"
          }`}
        />
        <p className="mt-8 text-text-muted">
          Breathe in… and out. Repeat slowly and mindfully.
        </p>
      </div>
    </>
  );
}
