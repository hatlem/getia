"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Andreas Hatlem",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with 10+ years building digital products. Previously founded 3 successful exits.",
    image: "/team/andreas.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Tech Lead",
    role: "CTO",
    bio: "Full-stack architect with experience scaling systems to millions of users.",
    image: "/team/cto.jpg",
    socials: { linkedin: "#" },
  },
  {
    name: "Growth Partner",
    role: "Head of Growth",
    bio: "Growth hacker who has driven user acquisition for multiple unicorns.",
    image: "/team/growth.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-4 block">
            The Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Built by operators
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We&apos;ve been in the trenches. Our team combines deep technical expertise with proven business acumen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl glass">
                {/* Avatar placeholder */}
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold opacity-20">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6"
                  >
                    <div className="flex gap-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
