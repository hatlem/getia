"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Andreas Hatlem",
    role: "Founder & CEO",
    bio: "Serial entrepreneur building digital products for over a decade.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "Tech Lead",
    role: "CTO",
    bio: "Full-stack architect scaling systems to millions of users.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Growth Partner",
    role: "Head of Growth",
    bio: "Growth expert driving acquisition for multiple unicorns.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label mb-6 block">The Team</span>
          <h2 className="section-title">
            Built by <span className="gradient-text">operators</span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="solid-card p-8 group"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} mb-6 flex items-center justify-center`}>
                <span className="text-3xl font-semibold text-white/80">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-medium text-white mb-1 group-hover:text-purple-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-purple-400 text-sm mb-4">{member.role}</p>
              <p className="body-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
