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
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen flex flex-col bg-background text-text">
        <Header />
        <main className="flex-1 container py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
