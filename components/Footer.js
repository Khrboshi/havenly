export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-200 text-center">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} Havenly. All rights reserved.
      </p>
    </footer>
  );
}
