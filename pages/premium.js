import Head from "next/head";
import Link from "next/link";

export default function Premium() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      features: ["Daily reflections", "Community access", "Private local storage"],
      cta: "You’re here already",
    },
    {
      name: "Premium",
      price: "$4 / month",
      features: ["Unlimited reflections", "Theme customization", "Priority support"],
      cta: "Join Premium",
    },
  ];

  return (
    <>
      <Head>
        <title>Premium — Havenly</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-8 text-center">Go Premium</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-white border border-border rounded-2xl shadow-soft p-8 text-center hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <p className="text-4xl font-bold text-primary mb-4">{tier.price}</p>
            <ul className="mb-6 text-text-muted">
              {tier.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {tier.name === "Free" ? (
              <span className="btn-ghost cursor-default">{tier.cta}</span>
            ) : (
              <Link href="/" className="btn-primary">
                {tier.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
