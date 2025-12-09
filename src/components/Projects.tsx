"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CookieMonster",
    category: "Privacy Tech",
    description: "Intelligent cookie consent management for the modern web.",
    gradient: "from-violet-600/20 to-purple-600/20",
  },
  {
    title: "RoomManager",
    category: "PropTech",
    description: "End-to-end property management for short-term rentals.",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Customer Insights",
    category: "Analytics",
    description: "AI-powered customer intelligence platform.",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Lead Bidding",
    category: "AdTech",
    description: "Real-time lead marketplace connecting buyers and sellers.",
    gradient: "from-orange-600/20 to-amber-600/20",
  },
  {
    title: "Creator Platform",
    category: "Creator Economy",
    description: "Monetization infrastructure for digital creators.",
    gradient: "from-pink-600/20 to-rose-600/20",
  },
  {
    title: "TravelBuddy",
    category: "Travel Tech",
    description: "AI travel companion for perfect trip planning.",
    gradient: "from-indigo-600/20 to-blue-600/20",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="label mb-4 block">Portfolio</span>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <p className="body-lg max-w-md">
            Products we&apos;ve built from the ground up, each solving real problems at scale.
          </p>
        </div>

        {/* Projects grid */}
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="project-card group"
            >
              {/* Background */}
              <div className={`project-card-bg bg-gradient-to-br ${project.gradient}`}>
                {/* Large letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[200px] font-bold text-white/5 select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="project-card-icon">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="project-card-content">
                <span className="tag mb-3 w-fit">{project.category}</span>
                <h3 className="card-title text-white mb-2">{project.title}</h3>
                <p className="body-sm text-gray-400">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
