"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 lg:py-12 border-t border-gray-900">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-xl font-medium tracking-tight">
            Getia
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/terms" className="footer-link">Terms</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </nav>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Getia
          </p>
        </div>
      </div>
    </footer>
  );
}
