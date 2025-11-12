<link rel="manifest" href="/manifest.json" />
import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Havenly — A quiet place to check in with yourself</title>
        <meta
          name="description"
          content="Private mindful reflections to help you slow down and reconnect with yourself."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:title" content="Havenly — Mindful Reflections" />
        <meta
          property="og:description"
          content="Your safe, calm space for daily mindfulness and self-reflection."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Havenly — Mindful Reflections" />
        <meta
          name="twitter:description"
          content="A quiet, private digital space for mindfulness and growth."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1 container max-w-5xl py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
