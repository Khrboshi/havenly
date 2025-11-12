"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function History() {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("reflections") || "[]");
      setReflections(stored.reverse());
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Reflections — Havenly</title>
        <meta
          name="description"
          content="Browse your past reflections saved locally in your private Havenly space."
        />
      </Head>

      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          My Reflections
        </h1>

        {reflections.length === 0 ? (
          <div className="text-center text-slate-500">
            <p>No reflections saved yet.</p>
            <p className="mt-4">
              <Link
                href="/unpack"
                className="text-blue-600 hover:underline font-semibold"
              >
                Write your first reflection
              </Link>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reflections.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {new Date(r.date).toLocaleString()}
                </p>
                <p className="text-slate-700 whitespace-pre-line">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
