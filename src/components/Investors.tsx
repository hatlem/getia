"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label mb-6 block">For Investors</span>
          <h2 className="section-title mb-6">Investment Thesis</h2>
          <p className="body-lg max-w-2xl mx-auto">
            We&apos;re raising our Series A to accelerate growth across our portfolio of
            market-defining products.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[100px]" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="card-title text-white mb-6">Join Our Cap Table</h3>
              <p className="body-lg mb-8">
                We&apos;re selectively partnering with investors who bring more than capital.
                Strategic LPs with industry expertise receive priority allocation.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="#contact"
                className="btn btn-primary text-lg py-4 px-8 glow"
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
