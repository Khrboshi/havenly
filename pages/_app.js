import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Havenly — Mindful Reflections</title>
        <meta
          name="description"
          content="Private mindfulness reflections and gentle daily prompts."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
