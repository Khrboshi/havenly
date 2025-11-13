"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Havenly logo"
            width={32}
            height={32}
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-semibold text-slate-800">Havenly</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-slate-600 text-sm sm:text-base">
          <Link href="/rooms" className="hover:text-blue-600 transition">
            Spaces
          </Link>
          <Link href="/community" className="hover:text-blue-600 transition">
            Community
          </Link>
          <Link href="/history" className="hover:text-blue-600 transition">
            My Reflections
          </Link>
          <Link href="/progress" className="hover:text-blue-600 transition">
            Progress
          </Link>
          <Link href="/premium" className="hover:text-blue-600 transition">
            Premium
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700 hover:text-blue-600 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Slide-in Drawer for Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden">
          <div className="absolute right-0 top-0 w-3/4 h-full bg-white shadow-xl p-6 flex flex-col gap-4 animate-slide-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-2 text-slate-500 hover:text-slate-700"
            >
              <X size={24} />
            </button>
            <Link href="/rooms" onClick={() => setMenuOpen(false)}>Spaces</Link>
            <Link href="/community" onClick={() => setMenuOpen(false)}>Community</Link>
            <Link href="/history" onClick={() => setMenuOpen(false)}>My Reflections</Link>
            <Link href="/progress" onClick={() => setMenuOpen(false)}>Progress</Link>
            <Link href="/premium" onClick={() => setMenuOpen(false)}>Premium</Link>
            <Link href="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          </div>
        </div>
      )}
    </header>
  );
}
