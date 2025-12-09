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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl h-full transition-all duration-300"
        style={{
          background: 'linear-gradient(145deg, rgba(25, 25, 30, 0.95), rgba(15, 15, 20, 0.98))',
          border: isHovered ? `1px solid ${project.color}40` : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? `0 8px 40px ${project.color}20` : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Image placeholder */}
        <div
          className="aspect-video w-full relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}40, ${project.color}15)`,
          }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="text-7xl font-bold"
              style={{ color: `${project.color}30` }}
            >
              {project.title.charAt(0)}
            </span>
          </motion.div>

          {/* Category badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
            style={{ background: `${project.color}90` }}
          >
            {project.category}
          </div>

          {/* External link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
              <ExternalLink className="w-4 h-4 text-black" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-xl font-semibold transition-colors duration-300"
              style={{ color: isHovered ? project.color : 'white' }}
            >
              {project.title}
            </h3>
            <ArrowUpRight
              className="w-5 h-5 transition-all duration-300"
              style={{
                color: isHovered ? 'white' : '#71717a',
                transform: isHovered ? 'translate(2px, -2px)' : 'none'
              }}
            />
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#a1a1aa',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-6 pt-4"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key}>
                <div
                  className="text-lg font-bold"
                  style={{ color: project.color }}
                >
                  {value}
                </div>
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
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.08), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400 font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Products that define markets
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Each venture is built with precision, scaled with purpose, and designed to capture outsized returns.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-zinc-300 hover:text-white transition-all duration-300 hover:bg-white/5"
            style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
