"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#050505]/90 backdrop-blur-xl border-b border-gray-900/50"
          : "py-5 lg:py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/logo/getia-logo.svg"
            alt="Getia"
            width={80}
            height={28}
            priority
            className="invert"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-gray-800 hover:bg-gray-900 hover:border-gray-700 transition-all"
        >
          Get in Touch
        </a>
      </nav>
    </motion.header>
  );
}
