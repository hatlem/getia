"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Vercel",
  "Stripe",
  "OpenAI",
  "TailwindCSS",
  "Prisma",
];

export default function Marquee() {
  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-2xl md:text-4xl font-bold text-zinc-800 hover:text-zinc-600 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
