"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "investor",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              Let&apos;s build something extraordinary
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Whether you&apos;re an investor looking for the next big opportunity,
              a founder seeking a strategic partner, or talent wanting to join
              our mission — we want to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@getia.no"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                    hello@getia.no
                  </div>
                  <div className="text-zinc-500 text-sm">Email us anytime</div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 ml-auto group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Oslo, Norway</div>
                  <div className="text-zinc-500 text-sm">Building for the world</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">I am a...</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["investor", "founder", "talent"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors capitalize ${
                          formState.type === type
                            ? "bg-indigo-500 text-white"
                            : "bg-white/5 text-zinc-400 hover:bg-white/10"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell us about yourself and what you're looking for..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
