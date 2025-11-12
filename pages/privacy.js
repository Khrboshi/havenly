import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Havenly</title>
      </Head>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold mb-4 text-center">Privacy Policy</h1>
        <p className="text-text-muted">
          Havenly values your privacy. All your reflections are stored locally in
          your own browser; nothing is uploaded or shared. We do not track or
          collect any personal information.
        </p>
        <p className="text-text-muted">
          If you choose to use the optional referral or premium features, you may
          interact with third-party payment or analytics services. Any data shared
          with those services is handled under their respective privacy policies.
        </p>
        <p className="text-text-muted">
          By using Havenly, you agree to our terms of mindfulness — keep it gentle,
          honest, and kind to yourself.
        </p>
      </div>
    </>
  );
}
