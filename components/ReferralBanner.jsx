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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center mt-6">
      <p className="mb-2">Invite a friend to join Havenly.</p>
      <button onClick={copyLink} className="btn-primary">
        {copied ? "Copied!" : "Copy Invite Link"}
      </button>
    </div>
  );
}
