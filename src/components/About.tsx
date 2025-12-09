"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed to Market",
    description: "We ship fast. Our lean methodology means products go from concept to revenue in weeks, not years.",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Every decision backed by metrics. We obsess over unit economics and sustainable growth.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Built for billions from day one. Our infrastructure handles exponential growth effortlessly.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Diversified portfolio approach. Multiple bets, validated markets, proven execution.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-indigo-500/5 blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-4 block">
              About Getia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              We build companies that matter
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Getia is a venture studio based in Norway. We identify market opportunities,
              assemble world-class teams, and build products that capture significant market share.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Unlike traditional VCs, we don&apos;t just write checks. We roll up our sleeves and
              build alongside our founders. Our hands-on approach has resulted in a portfolio
              of high-growth companies across fintech, proptech, AI, and creator economy.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl glass">
                <div className="text-4xl font-bold gradient-text-accent mb-2">92%</div>
                <div className="text-sm text-zinc-400">Success Rate</div>
              </div>
              <div className="p-6 rounded-xl glass">
                <div className="text-4xl font-bold gradient-text-accent mb-2">3.2x</div>
                <div className="text-sm text-zinc-400">Avg. ROI</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-xl glass hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
