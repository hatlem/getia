"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CookieMonster",
    category: "Privacy Tech",
    description: "Intelligent cookie consent management for the modern web. GDPR-compliant, user-friendly, and conversion-optimized.",
    image: "/projects/cookiemonster.jpg",
    color: "#6366f1",
    stats: { users: "10K+", mrr: "$12K" },
    tags: ["SaaS", "Privacy", "B2B"],
  },
  {
    id: 2,
    title: "RoomManager",
    category: "PropTech",
    description: "End-to-end property management platform for short-term rentals. Automate operations, maximize occupancy.",
    image: "/projects/roommanager.jpg",
    color: "#a855f7",
    stats: { properties: "500+", revenue: "$800K" },
    tags: ["Platform", "Hospitality", "Automation"],
  },
  {
    id: 3,
    title: "Customer Insights",
    category: "Analytics",
    description: "AI-powered customer intelligence. Transform feedback into actionable growth strategies.",
    image: "/projects/insights.jpg",
    color: "#ec4899",
    stats: { analyzed: "1M+", accuracy: "94%" },
    tags: ["AI", "Analytics", "Enterprise"],
  },
  {
    id: 4,
    title: "Lead Bidding",
    category: "AdTech",
    description: "Real-time lead marketplace. Connect qualified buyers with high-intent sellers.",
    image: "/projects/leadbidding.jpg",
    color: "#14b8a6",
    stats: { leads: "50K+", value: "$2M" },
    tags: ["Marketplace", "B2B", "Fintech"],
  },
  {
    id: 5,
    title: "Creator Platform",
    category: "Creator Economy",
    description: "Monetization infrastructure for digital creators. Subscriptions, tips, and exclusive content.",
    image: "/projects/creator.jpg",
    color: "#f59e0b",
    stats: { creators: "2K+", payouts: "$500K" },
    tags: ["Creator", "Payments", "Community"],
  },
  {
    id: 6,
    title: "TravelBuddy",
    category: "Travel Tech",
    description: "AI travel companion that plans, books, and optimizes your perfect trip.",
    image: "/projects/travel.jpg",
    color: "#3b82f6",
    stats: { trips: "15K+", savings: "30%" },
    tags: ["AI", "Consumer", "Travel"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass h-full">
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${project.color}20, transparent)`,
          }}
        />

        {/* Image placeholder */}
        <div
          className="aspect-video w-full relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
          }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-6xl font-bold opacity-10">{project.title.charAt(0)}</span>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white">
            {project.category}
          </div>

          {/* External link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute top-4 right-4"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-black" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs bg-white/5 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-lg font-semibold text-white">{value}</div>
                <div className="text-xs text-zinc-500 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Products that define markets
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Each venture is built with precision, scaled with purpose, and designed to capture outsized returns.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
