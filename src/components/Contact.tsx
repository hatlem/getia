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
      {/* Accent blur */}
      <div
        className="gradient-blur bg-[#c8ff00]"
        style={{ bottom: '-20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.08 }}
      />

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
            <h2 className="headline mb-8">
              Let&apos;s build
              <br />
              <span className="serif-accent">together</span>
            </h2>
            <p className="body-lg mb-12 max-w-md">
              Whether you&apos;re an investor, founder, or talent — we want to hear from you.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@getia.no" className="contact-block flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#c8ff00]" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-[#c8ff00] transition-colors">
                    hello@getia.no
                  </p>
                  <p className="body-sm">Email us anytime</p>
                </div>
              </a>

              <div className="contact-block flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
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
            <form onSubmit={handleSubmit} className="card-glass p-8">
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
                  <div className="grid grid-cols-3 gap-2">
                    {["investor", "founder", "talent"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`py-3 px-4 rounded-xl text-sm font-medium capitalize transition-all ${
                          formState.type === type
                            ? "bg-[#c8ff00] text-black"
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

                <button type="submit" className="btn btn-primary w-full hover-glow">
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
