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
        style={{ top: '15%', right: '-5%', opacity: 0.06 }}
      />

      <div className="container relative z-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 lg:mb-12"
          >
            <span className="label">Venture Studio</span>
            <span className="mx-4 text-gray-800">—</span>
            <span className="label">Oslo, Norway</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="display"
            >
              We build
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10 lg:mb-14">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="display"
            >
              <span className="serif-accent">digital</span> products
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="body-lg max-w-md mb-10 lg:mb-12"
          >
            We transform bold ideas into market-defining companies.
            Our portfolio spans AI, SaaS, and next-generation digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
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
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 flex items-end justify-between"
        >
          {/* Scroll indicator */}
          <div className="scroll-indicator" />

          {/* Status */}
          <div className="status-indicator">
            <span className="status-dot" />
            <span>Available for new ventures</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
