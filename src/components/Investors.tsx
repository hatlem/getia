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
    color: "#6366f1",
  },
  {
    icon: PieChart,
    title: "Diversified Portfolio",
    value: "12+ Products",
    description: "Risk mitigation through multiple bets",
    color: "#a855f7",
  },
  {
    icon: Clock,
    title: "Fast Validation",
    value: "< 90 Days",
    description: "Concept to market-validated MVP",
    color: "#ec4899",
  },
  {
    icon: Users,
    title: "Active Users",
    value: "50K+",
    description: "Across all portfolio companies",
    color: "#14b8a6",
  },
  {
    icon: DollarSign,
    title: "Revenue Run Rate",
    value: "$2M+",
    description: "And growing 15% month-over-month",
    color: "#f59e0b",
  },
  {
    icon: BarChart3,
    title: "Capital Efficiency",
    value: "4x LTV/CAC",
    description: "Unit economics that scale",
    color: "#3b82f6",
  },
];

export default function Investors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.03) 50%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400 font-semibold tracking-wider uppercase mb-4 block">
            For Investors
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
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
              className="p-6 rounded-2xl group transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(25, 25, 30, 0.95), rgba(15, 15, 20, 0.98))',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${highlight.color}20` }}
              >
                <highlight.icon className="w-6 h-6" style={{ color: highlight.color }} />
              </div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: highlight.color }}
              >
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
          style={{
            background: 'linear-gradient(145deg, rgba(30, 30, 40, 0.95), rgba(20, 20, 30, 0.98))',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            boxShadow: '0 0 60px rgba(99, 102, 241, 0.1)',
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.2), transparent 50%)'
            }}
          />

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
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Minimum check: $50K
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Pro-rata rights for follow-on rounds
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    Quarterly investor updates and metrics
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right mb-6">
                  <div className="text-sm text-zinc-400 mb-2">Round Size</div>
                  <div className="text-6xl font-bold gradient-text-accent">$5M</div>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
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
