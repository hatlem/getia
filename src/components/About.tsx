"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Product Strategy",
  "UI/UX Design",
  "Full-Stack Development",
  "Growth Marketing",
  "Data Analytics",
  "Infrastructure",
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-6 block">About Us</span>
            <h2 className="section-title mb-8">
              We don&apos;t just invest.
              <br />
              <span className="gradient-text">We build.</span>
            </h2>
            <div className="space-y-6 body-lg">
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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-20"
          >
            <h3 className="label mb-8">Our Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="solid-card p-5"
                >
                  <span className="text-white font-medium">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
