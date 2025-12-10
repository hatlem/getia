"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Andreas Hatlem",
    role: "Founder & CEO",
    bio: "Serial entrepreneur building digital products for over a decade.",
    color: "#c8ff00",
  },
  {
    name: "Tech Lead",
    role: "CTO",
    bio: "Full-stack architect scaling systems to millions of users.",
    color: "#06b6d4",
  },
  {
    name: "Growth Partner",
    role: "Head of Growth",
    bio: "Growth expert driving acquisition for multiple unicorns.",
    color: "#8b5cf6",
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
          <h2 className="headline">
            Built by <span className="serif-accent">operators</span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="team-card group"
            >
              {/* Avatar */}
              <div
                className="team-avatar"
                style={{ backgroundColor: member.color }}
              >
                {member.name.charAt(0)}
              </div>

              <h3 className="text-lg font-medium text-white mb-1 group-hover:text-[#c8ff00] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-4">{member.role}</p>
              <p className="body-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
