"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-6 block">Contact</span>
            <h2 className="section-title mb-8">
              Let&apos;s build
              <br />
              <span className="gradient-text">together</span>
            </h2>
            <p className="body-lg mb-12">
              Whether you&apos;re an investor, founder, or talent — we want to hear from you.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@getia.no" className="solid-card p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    hello@getia.no
                  </p>
                  <p className="body-sm">Email us anytime</p>
                </div>
              </a>

              <div className="solid-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Oslo, Norway</p>
                  <p className="body-sm">Building for the world</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <label className="label mb-3 block">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="label mb-3 block">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="label mb-3 block">I am a...</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["investor", "founder", "talent"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`py-3 px-4 rounded-xl text-sm font-medium capitalize transition-all ${
                          formState.type === type
                            ? "bg-white text-black"
                            : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label mb-3 block">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
