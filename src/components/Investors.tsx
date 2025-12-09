"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, PieChart, Clock, Users, DollarSign, BarChart3 } from "lucide-react";

const investmentHighlights = [
  {
    icon: TrendingUp,
    title: "High Growth Markets",
    value: "40%+ CAGR",
    description: "We target sectors with proven tailwinds",
  },
  {
    icon: PieChart,
    title: "Diversified Portfolio",
    value: "12+ Products",
    description: "Risk mitigation through multiple bets",
  },
  {
    icon: Clock,
    title: "Fast Validation",
    value: "< 90 Days",
    description: "Concept to market-validated MVP",
  },
  {
    icon: Users,
    title: "Active Users",
    value: "50K+",
    description: "Across all portfolio companies",
  },
  {
    icon: DollarSign,
    title: "Revenue Run Rate",
    value: "$2M+",
    description: "And growing 15% month-over-month",
  },
  {
    icon: BarChart3,
    title: "Capital Efficiency",
    value: "4x LTV/CAC",
    description: "Unit economics that scale",
  },
];

export default function Investors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-4 block">
            For Investors
          </span>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Investment Thesis
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            We&apos;re raising our Series A to accelerate growth across our portfolio.
            Here&apos;s why smart money is paying attention.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {investmentHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-3xl font-bold gradient-text-accent mb-2">
                {highlight.value}
              </div>
              <div className="text-white font-medium mb-1">{highlight.title}</div>
              <div className="text-zinc-500 text-sm">{highlight.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Investment opportunity card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="absolute inset-0 glass" />

          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Join Our Cap Table
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  We&apos;re selectively partnering with investors who bring more than capital.
                  Strategic LPs with industry expertise and networks receive priority allocation.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Minimum check: $50K
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Pro-rata rights for follow-on rounds
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    Quarterly investor updates and metrics
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right mb-6">
                  <div className="text-sm text-zinc-400 mb-1">Round Size</div>
                  <div className="text-5xl font-bold gradient-text-accent">$5M</div>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                >
                  Request Deck
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
