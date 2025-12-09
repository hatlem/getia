"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-tight">
            Getia
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-dim hover:text-white transition-colors"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Getia
          </p>
        </div>
      </div>
    </footer>
  );
}
