import Head from "next/head";
import Link from "next/link";

export default function Rooms() {
  const rooms = [
    { title: "Reset", desc: "Short breathing pause to calm the mind.", path: "/reset" },
    { title: "Unpack", desc: "Reflect and process daily experiences.", path: "/unpack" },
    { title: "Encourage", desc: "Read and share uplifting thoughts.", path: "/encourage" },
  ];

  return (
    <>
      <Head>
        <title>Havenly — Spaces</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-8 text-center">Your Reflection Spaces</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((r) => (
          <Link
            key={r.path}
            href={r.path}
            className="bg-white border border-border p-6 rounded-2xl shadow-soft hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
            <p className="text-text-muted text-sm">{r.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
