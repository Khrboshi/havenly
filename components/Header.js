import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface shadow-soft sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Havenly logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">Havenly</span>
        </Link>
        <nav className="flex gap-6 text-text-muted">
          <Link href="/rooms" className="hover:text-primary">Spaces</Link>
          <Link href="/community" className="hover:text-primary">Community</Link>
          <Link href="/premium" className="hover:text-primary">Premium</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
