// /components/Footer.js
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 dark:from-slate-800/40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation shortcuts */}
        <nav className="flex flex-wrap justify-center gap-5 text-sm font-medium">
          <Link href="/about" className="hover:text-primary underline-hover">
            About
          </Link>
          <Link href="/community" className="hover:text-primary underline-hover">
            Community
          </Link>
          <Link href="/reflect" className="hover:text-primary underline-hover">
            Reflect
          </Link>
          <Link href="/progress" className="hover:text-primary underline-hover">
            Progress
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
          © {new Date().getFullYear()} Havenly — Built for mindful reflection
        </p>
      </div>
    </footer>
  );
}
