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
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer-link"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Getia
          </p>
        </div>
      </div>
    </footer>
  );
}
