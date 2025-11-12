import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-900 text-white shadow">
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="Havenly Logo" className="h-8 w-auto" />
        <span className="text-xl font-semibold">Havenly</span>
      </div>
      <nav className="flex space-x-6 mt-2 sm:mt-0">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        <Link href="/community" className="hover:text-blue-400 transition">Community</Link>
        <Link href="/premium" className="hover:text-blue-400 transition">Premium</Link>
      </nav>
    </header>
  );
}
