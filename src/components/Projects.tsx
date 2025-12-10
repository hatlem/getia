"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CookieMonster",
    category: "Privacy Tech",
    color: "#8b5cf6",
  },
  {
    title: "RoomManager",
    category: "PropTech",
    color: "#06b6d4",
  },
  {
    title: "Customer Insights",
    category: "Analytics",
    color: "#10b981",
  },
  {
    title: "Lead Bidding",
    category: "AdTech",
    color: "#f59e0b",
  },
  {
    title: "Creator Platform",
    category: "Creator Economy",
    color: "#ec4899",
  },
  {
    title: "TravelBuddy",
    category: "Travel Tech",
    color: "#6366f1",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label mb-6 block"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="headline"
            >
              Selected <span className="serif-accent">Work</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg max-w-md lg:text-right"
          >
            Products we&apos;ve built from the ground up, each solving real problems at scale.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card group"
            >
              {/* Background with gradient */}
              <div
                className="project-card-bg"
                style={{
                  background: `radial-gradient(circle at 30% 70%, ${project.color}20 0%, transparent 60%)`,
                }}
              />

              {/* Arrow icon */}
              <div className="project-card-arrow">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>

              {/* Content */}
              <div className="project-card-inner">
                <span className="project-card-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="project-card-content">
                  <p className="project-card-category">{project.category}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
