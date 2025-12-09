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
    console.log(formState);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99, 102, 241, 0.06), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-indigo-400 font-semibold tracking-wider uppercase mb-4 block">
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
                className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(145deg, rgba(25, 25, 30, 0.95), rgba(15, 15, 20, 0.98))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(99, 102, 241, 0.2)' }}
                >
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                    hello@getia.no
                  </div>
                  <div className="text-zinc-500 text-sm">Email us anytime</div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(25, 25, 30, 0.95), rgba(15, 15, 20, 0.98))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(168, 85, 247, 0.2)' }}
                >
                  <MapPin className="w-5 h-5 text-purple-400" />
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
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(25, 25, 30, 0.95), rgba(15, 15, 20, 0.98))',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-zinc-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-zinc-500 focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-zinc-500 focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm text-zinc-300 mb-2 font-medium">I am a...</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["investor", "founder", "talent"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize"
                        style={{
                          background: formState.type === type
                            ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                            : 'rgba(255, 255, 255, 0.05)',
                          border: formState.type === type
                            ? '1px solid transparent'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          color: formState.type === type ? 'white' : '#a1a1aa',
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-zinc-300 mb-2 font-medium">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    placeholder="Tell us about yourself and what you're looking for..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                  }}
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
