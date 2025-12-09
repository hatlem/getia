"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Investors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-muted text-sm tracking-widest uppercase mb-6 block">
            For Investors
          </span>
          <h2 className="display-lg mb-6">Investment Thesis</h2>
          <p className="text-dim max-w-2xl mx-auto text-lg">
            We&apos;re raising our Series A to accelerate growth across our portfolio.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="display-md mb-6">Join Our Cap Table</h3>
              <p className="text-dim leading-relaxed mb-8">
                We&apos;re selectively partnering with investors who bring more than capital.
                Strategic LPs with industry expertise receive priority allocation.
              </p>
              <div className="space-y-3 text-dim">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-sm">High-growth market opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-sm">Pro-rata rights for follow-on</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-sm">Quarterly investor updates</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <motion.a
                href="#contact"
                className="btn btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Deck
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
