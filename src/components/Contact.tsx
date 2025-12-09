"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";

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
    console.log(formState);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-muted text-sm tracking-widest uppercase mb-6 block">
              Contact
            </span>
            <h2 className="display-lg mb-8">
              Let&apos;s build
              <br />
              <span className="gradient-text">together</span>
            </h2>
            <p className="text-dim text-lg leading-relaxed mb-12 max-w-md">
              Whether you&apos;re an investor, founder, or talent — we want to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@getia.no"
                className="card p-6 flex items-center justify-between group"
              >
                <div>
                  <div className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                    hello@getia.no
                  </div>
                  <div className="text-muted text-sm">Email us anytime</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-dim group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="card p-6">
                <div className="text-white font-medium">Oslo, Norway</div>
                <div className="text-muted text-sm">Building for the world</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-dim mb-3">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-dim mb-3">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm text-dim mb-3">I am a...</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["investor", "founder", "talent"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                          formState.type === type
                            ? "bg-white text-black"
                            : "bg-white/5 border border-white/10 text-dim hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-dim mb-3">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
