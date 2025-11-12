// /components/ReferralBanner.jsx
export default function ReferralBanner() {
  const link = `${window.location.origin}?ref=${btoa(Date.now())}`;
  const copyLink = () => navigator.clipboard.writeText(link);

  return (
    <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl mt-4 text-center">
      <p className="mb-2">
        Love Havenly? Invite a friend and help spread mindfulness.
      </p>
      <button
        onClick={copyLink}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Copy Invite Link
      </button>
    </div>
  );
}
