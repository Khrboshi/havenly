import React from "react";
import { isPremium, upgrade } from "@/utils/premium";

export default function UpgradeBanner() {
  if (typeof window !== "undefined" && isPremium()) return null;

  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-lg text-center mt-8 max-w-lg mx-auto">
      <p className="mb-2 font-medium">
        Upgrade to Havenly Premium for advanced reflection themes and additional features.
      </p>
      <button
        onClick={upgrade}
        className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
      >
        Go Premium
      </button>
    </div>
  );
}
