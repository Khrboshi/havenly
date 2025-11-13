"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const links = [
    { href: "/rooms", label: "Spaces" },
    { href: "/community", label: "Community" },
    { href: "/history", label: "My Reflections" },
    { href: "/progress", label: "Progress" },
    { href: "/premium", label: "Premium" },
    { href: "/privacy", label: "Privacy" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Havenly logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-semibold text-slate-800">Havenly</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-slate-600 text-sm sm:text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-slide-in">
          <nav className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
