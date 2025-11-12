"use client";
import { useState, useEffect } from "react";

export default function ReferralBanner() {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLink(`${window.location.origin}?ref=${btoa(Date.now())}`);
    }
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-green-50 border border-green-300 text-green-800 p-4 rounded-xl mt-4 text-center max-w-md mx-auto">
      <p className="mb-2 font-medium">
        Love Havenly? Invite a friend to start reflecting.
      </p>
      <button
        onClick={copyLink}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        {copied ? "Copied!" : "Copy Invite Link"}
      </button>
    </div>
  );
}
