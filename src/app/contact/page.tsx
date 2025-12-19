"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "general",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try emailing us directly at hello@getia.no")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 border-b border-gray-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/logo/getia-logo.svg" alt="Getia" width={80} height={28} className="invert" />
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition">Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-400">
              Have a project in mind? Let&apos;s talk about how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-gray-400 mb-2">Email</h3>
                  <a href="mailto:hello@getia.no" className="text-xl text-blue-400 hover:underline">
                    hello@getia.no
                  </a>
                </div>

                <div>
                  <h3 className="font-medium text-gray-400 mb-2">Office</h3>
                  <div className="text-lg">
                    <p className="font-medium">Getia AS</p>
                    <p className="text-gray-400">(Org. nr: 926 610 198)</p>
                    <p className="text-gray-400">At Mesh, Møllergata 6</p>
                    <p className="text-gray-400">0179 Oslo, Norway</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 transition"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/">
              <Image src="/logo/getia-logo.svg" alt="Getia" width={80} height={28} className="invert" />
            </Link>
            <nav className="flex items-center gap-8">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition">Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</Link>
            </nav>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Getia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
