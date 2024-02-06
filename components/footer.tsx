import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Sylvain Costes. Tout droit réservé.
      </small>
      <p className="text-xs">
        <span className="font-semibold">A propos du site:</span> Build avec
        <a href="React.com">React</a> & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, own VPS hosting solution (contabo).
      </p>
    </footer>
  );
}
