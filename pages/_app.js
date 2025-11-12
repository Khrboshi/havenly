import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Havenly — A quiet place to check in with yourself</title>
        <meta name="description" content="Private mindful reflections to help you slow down and reconnect with yourself." />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
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
