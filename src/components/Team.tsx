"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Andreas Hatlem",
    role: "Founder & CEO",
    bio: "Serial entrepreneur building digital products for over a decade.",
  },
  {
    name: "Tech Lead",
    role: "CTO",
    bio: "Full-stack architect scaling systems to millions of users.",
  },
  {
    name: "Growth Partner",
    role: "Head of Growth",
    bio: "Growth expert driving acquisition for multiple unicorns.",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-muted text-sm tracking-widest uppercase mb-6 block">
            Team
          </span>
          <h2 className="display-lg">
            Built by <span className="gradient-text">operators</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="card p-8 group"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 mb-6 flex items-center justify-center">
                <span className="text-2xl font-light text-white/30">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-medium mb-1 group-hover:gradient-text transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-muted text-sm mb-4">{member.role}</p>
              <p className="text-dim text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
