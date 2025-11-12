"use client";
import Head from "next/head";
import { useState } from "react";

export default function Reflect() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  const saveReflection = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todayReflection", text);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>Reflect — Havenly</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4 text-center">Today’s Reflection</h1>
      <div className="max-w-xl mx-auto">
        <textarea
          className="w-full border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none min-h-[150px]"
          placeholder="Write what’s on your mind..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="text-right mt-4">
          <button onClick={saveReflection} className="btn-primary">
            Save Reflection
          </button>
        </div>
        {saved && (
          <p className="text-green-600 mt-2 text-right text-sm">
            Saved locally. You’re doing great.
          </p>
        )}
      </div>
    </>
  );
}
