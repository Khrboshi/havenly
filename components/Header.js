import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* 👇 updated path */}
          <img
            src="/assets/logo.png"
            alt="Havenly logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold text-slate-800">Havenly</span>
        </Link>
        <nav className="flex gap-6 text-slate-600 text-sm sm:text-base">
          <Link href="/rooms" className="hover:text-blue-600 transition">Spaces</Link>
          <Link href="/community" className="hover:text-blue-600 transition">Community</Link>
          <Link href="/premium" className="hover:text-blue-600 transition">Premium</Link>
          <Link href="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
