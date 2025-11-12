import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Havenly</title>
        <meta
          name="description"
          content="Havenly — a mindful space for daily reflections and emotional wellbeing."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.svg" alt="Havenly Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-gray-800">Havenly</span>
          </div>
        </Link>

        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-50">
        © {new Date().getFullYear()} Havenly. All rights reserved.
      </footer>
    </>
  );
}
