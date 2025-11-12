import Head from "next/head";

export default function Community() {
  const posts = [
    { id: 1, text: "I took 10 minutes to breathe today — it really helped." },
    { id: 2, text: "Learning to pause before reacting changed my week." },
    { id: 3, text: "I finally wrote down my goals again after a hard season." },
  ];

  return (
    <>
      <Head>
        <title>Community — Havenly</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-8 text-center">Community Reflections</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-border rounded-2xl shadow-soft p-6 hover:shadow-md transition"
          >
            <p className="text-text-muted italic">“{p.text}”</p>
          </div>
        ))}
      </div>
    </>
  );
}
