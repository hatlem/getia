"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  "Product Strategy",
  "UI/UX Design",
  "Full-Stack Development",
  "Growth Marketing",
  "Data Analytics",
  "Infrastructure",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-muted text-sm tracking-widest uppercase mb-6 block">
              About
            </span>
            <h2 className="display-lg mb-8">
              We don&apos;t just invest.
              <br />
              <span className="gradient-text">We build.</span>
            </h2>
            <div className="space-y-6 text-dim leading-relaxed">
              <p>
                Getia is a venture studio based in Oslo. We identify market opportunities,
                assemble world-class teams, and create products that capture significant market share.
              </p>
              <p>
                Unlike traditional VCs, we roll up our sleeves and build alongside our founders.
                Our hands-on approach has resulted in a portfolio of high-growth companies across
                fintech, proptech, AI, and the creator economy.
              </p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm text-muted tracking-widest uppercase mb-6">Capabilities</h3>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="tag"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
