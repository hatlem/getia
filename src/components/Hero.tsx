"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grain overlay */}
      <div className="grain" />

      {/* Gradient blur accent */}
      <div
        className="gradient-blur bg-[#c8ff00]"
        style={{ top: '20%', right: '-10%', opacity: 0.08 }}
      />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="label">Venture Studio</span>
            <span className="mx-3 text-gray-700">—</span>
            <span className="label">Oslo, Norway</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="display"
            >
              We build
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="display"
            >
              <span className="serif-accent">digital</span> products
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-lg max-w-lg mb-12"
          >
            We transform bold ideas into market-defining companies.
            Our portfolio spans AI, SaaS, and next-generation digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#work" className="btn btn-primary hover-glow">
              View Our Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Partner With Us
            </a>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 px-6 md:px-12 lg:px-20 flex items-end justify-between"
        >
          {/* Scroll indicator */}
          <div className="scroll-indicator" />

          {/* Status */}
          <div className="hidden md:flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-pulse" />
            <span className="label">Available for new ventures</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
