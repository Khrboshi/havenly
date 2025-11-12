import Head from "next/head";
import Link from "next/link";
import ReferralBanner from "@/components/ReferralBanner";
import UpgradeBanner from "@/components/UpgradeBanner";

export default function Rooms() {
  const rooms = [
    { title: "Reset", desc: "Short breathing pause to calm the mind.", path: "/reset" },
    { title: "Unpack", desc: "Reflect and process your experiences.", path: "/unpack" },
    { title: "Encourage", desc: "Read and share uplifting thoughts.", path: "/encourage" },
  ];

  return (
    <>
      <Head>
        <title>Your Reflection Spaces — Havenly</title>
        <meta
          name="description"
          content="Explore mindful reflection spaces in Havenly: Reset, Unpack, Encourage."
        />
      </Head>

      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-8 text-center">Your Reflection Spaces</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {rooms.map((r) => (
            <Link
              key={r.path}
              href={r.path}
              className="group bg-white border border-slate-200 rounded-2xl shadow-soft p-6 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Go to ${r.title}`}
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{r.title}</h3>
              <p className="text-text-muted text-sm">{r.desc}</p>
            </Link>
          ))}
        </div>

        <ReferralBanner />
        <UpgradeBanner />
      </main>
    </>
  );
}
