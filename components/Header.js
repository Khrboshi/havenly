import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Havenly logo"
            width={36}
            height={36}
            priority
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-semibold text-slate-800">
            Havenly
          </span>
        </Link>

        <nav className="flex gap-6 text-slate-600 text-sm sm:text-base">
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
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/privacy" className="hover:text-blue-600 transition">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
