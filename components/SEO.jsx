import Head from "next/head";

export default function SEO({
  title = "Havenly — Mindful Reflection Journal",
  description = "Havenly helps you slow down and reflect through guided prompts and private journaling.",
  url = "https://havenly.vercel.app/",
  image = "https://havenly.vercel.app/og-image.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
