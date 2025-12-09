"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Getia
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Work", href: "#work" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary text-sm py-3 px-6">
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
