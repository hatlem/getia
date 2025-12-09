"use client";

import { motion } from "framer-motion";
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <motion.span
            className="text-xl font-medium tracking-tight"
            whileHover={{ opacity: 0.7 }}
          >
            Getia
          </motion.span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: "Work", href: "#work" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm text-dim hover:text-white transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="btn btn-primary text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Let&apos;s Talk
        </motion.a>
      </nav>
    </motion.header>
  );
}
