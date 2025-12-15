"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Access to high-growth market opportunities",
  "Pro-rata rights for follow-on investments",
  "Quarterly investor updates and metrics",
  "Direct line to founding teams",
];

export default function Investors() {
  return (
    <section className="section section-border">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-5 block"
          >
            For Investors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="headline mb-5"
          >
            Investment <span className="serif-accent">Thesis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="body-lg max-w-xl mx-auto"
          >
            We&apos;re raising our Series A to accelerate growth across our portfolio of
            market-defining products.
          </motion.p>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="card-glass relative overflow-hidden"
        >
          {/* Accent blur */}
          <div
            className="gradient-blur bg-[#c8ff00] z-0"
            style={{ top: '-30%', right: '-10%', opacity: 0.12 }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="title text-white mb-5">Join Our Cap Table</h3>
              <p className="body mb-8">
                We&apos;re selectively partnering with investors who bring more than capital.
                Strategic LPs with industry expertise receive priority allocation.
              </p>

              <div className="space-y-1">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="benefit-item"
                  >
                    <Check className="benefit-icon" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <a
                href="#contact"
                className="btn btn-primary text-base py-4 px-8 hover-glow"
              >
                Request Investor Deck
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
