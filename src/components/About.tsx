"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Product Strategy",
  "UI/UX Design",
  "Full-Stack Dev",
  "Growth Marketing",
  "Data Analytics",
  "Infrastructure",
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Accent blur */}
      <div
        className="gradient-blur bg-[#c8ff00]"
        style={{ bottom: '0%', left: '-20%', opacity: 0.06 }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label mb-6 block"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="headline mb-10"
            >
              We don&apos;t just invest.
              <br />
              <span className="serif-accent">We build.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="body-lg">
                Getia is a venture studio based in Oslo. We identify market opportunities,
                assemble world-class teams, and create products that capture significant market share.
              </p>
              <p className="body">
                Unlike traditional VCs, we roll up our sleeves and build alongside our founders.
                Our hands-on approach has resulted in a portfolio of high-growth companies across
                fintech, proptech, AI, and the creator economy.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pt-24"
          >
            <h3 className="label mb-8">Our Capabilities</h3>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="card p-5 hover-lift"
                >
                  <span className="text-sm font-medium text-gray-200">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
