"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CookieMonster",
    category: "Privacy Tech",
    description: "Intelligent cookie consent management. GDPR-compliant, user-friendly.",
    stats: { users: "10K+", mrr: "$12K" },
    span: "col-span-12 md:col-span-7",
    featured: true,
  },
  {
    id: 2,
    title: "RoomManager",
    category: "PropTech",
    description: "End-to-end property management for short-term rentals.",
    stats: { properties: "500+", revenue: "$800K" },
    span: "col-span-12 md:col-span-5",
    featured: false,
  },
  {
    id: 3,
    title: "Customer Insights",
    category: "Analytics",
    description: "AI-powered customer intelligence platform.",
    stats: { analyzed: "1M+", accuracy: "94%" },
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: 4,
    title: "Lead Bidding",
    category: "AdTech",
    description: "Real-time lead marketplace connecting buyers and sellers.",
    stats: { leads: "50K+", value: "$2M" },
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: 5,
    title: "Creator Platform",
    category: "Creator Economy",
    description: "Monetization infrastructure for digital creators.",
    stats: { creators: "2K+", payouts: "$500K" },
    span: "col-span-12 md:col-span-4",
    featured: false,
  },
  {
    id: 6,
    title: "TravelBuddy",
    category: "Travel Tech",
    description: "AI travel companion for perfect trip planning.",
    stats: { trips: "15K+", savings: "30%" },
    span: "col-span-12 md:col-span-6",
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${project.span} group`}
    >
      <a href="#" className="block card h-full p-6 md:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <span className="tag">{project.category}</span>
          <motion.div
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className={`${project.featured ? 'display-md' : 'text-2xl font-medium'} mb-3 group-hover:gradient-text transition-all duration-300`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-dim text-sm leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-auto pt-6 border-t border-white/5">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-xl font-medium">{value}</div>
              <div className="text-muted text-xs uppercase tracking-wider mt-1">{key}</div>
            </div>
          ))}
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-muted text-sm tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="display-lg">Selected Work</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-dim hover:text-white transition-colors group">
            <span className="text-sm">View all</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
