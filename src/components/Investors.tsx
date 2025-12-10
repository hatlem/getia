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
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6 block"
          >
            For Investors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="headline mb-6"
          >
            Investment <span className="serif-accent">Thesis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg max-w-2xl mx-auto"
          >
            We&apos;re raising our Series A to accelerate growth across our portfolio of
            market-defining products.
          </motion.p>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-glass p-8 md:p-12 relative overflow-hidden"
        >
          {/* Accent blur */}
          <div
            className="gradient-blur bg-[#c8ff00]"
            style={{ top: '-30%', right: '-10%', opacity: 0.15 }}
          />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="title text-white mb-6">Join Our Cap Table</h3>
              <p className="body mb-8">
                We&apos;re selectively partnering with investors who bring more than capital.
                Strategic LPs with industry expertise receive priority allocation.
              </p>

              <div className="space-y-1">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="benefit-item"
                  >
                    <Check className="benefit-icon" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
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
