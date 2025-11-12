import Link from "next/link";

export default function UpgradeBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 text-blue-800 p-6 rounded-xl text-center mt-8">
      <h3 className="font-semibold text-lg mb-2">Go Premium</h3>
      <p className="text-sm mb-4 text-text-muted">
        Unlock deeper reflection themes and support Havenly.
      </p>
      <Link href="/premium" className="btn-primary">Upgrade</Link>
    </div>
  );
}
