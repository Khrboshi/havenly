import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* --- Viewport (Enables Zoom & Pan) --- */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
        />

        {/* --- Basic Metadata --- */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Havenly — A calm space for mindful reflection. Write, breathe, and grow through guided prompts and private journaling."
        />
        <meta
          name="keywords"
          content="mindfulness, journaling, reflection, calm, wellbeing, mental health, self-care"
        />
        <meta name="theme-color" content="#2563eb" />

        {/* --- Favicon & Icons --- */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Havenly" />
        <meta property="og:title" content="Havenly — Mindful Reflection Journal" />
        <meta
          property="og:description"
          content="A private, guided journaling space designed to help you slow down, reflect, and rediscover calm."
        />
        <meta property="og:url" content="https://havenly.vercel.app/" />
        <meta property="og:image" content="https://havenly.vercel.app/og-image.png" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@havenlyapp" />
        <meta name="twitter:title" content="Havenly — Mindful Reflection Journal" />
        <meta
          name="twitter:description"
          content="A peaceful daily reflection space for better self-awareness and calm."
        />
        <meta name="twitter:image" content="https://havenly.vercel.app/og-image.png" />

        {/* --- Schema.org Structured Data --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Havenly",
              url: "https://havenly.vercel.app",
              description:
                "A calm digital journaling space for mindful reflection and emotional wellbeing.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "3.99",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Havenly",
              },
            }),
          }}
        />
      </Head>

      <body className="bg-slate-50 text-slate-800 font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
