import React from "react";

export default function ReferralBanner() {
  if (typeof window === "undefined") return null;
  const link = `${window.location.origin}?ref=${btoa(Date.now())}`;

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Referral link copied! 🎉");
  };

  return (
    <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl mt-8 text-center max-w-lg mx-auto">
      <p className="mb-2 font-medium">
        Love Havenly? Invite a friend and help us grow.
      </p>
      <button
        onClick={copyLink}
        className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Copy Invite Link
      </button>
    </div>
  );
}
