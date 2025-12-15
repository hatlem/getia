import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Privacy Policy - Getia",
  description: "How Getia collects, uses, and protects your data",
}

export default function PrivacyPage() {
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
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: December 2024</p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Getia AS (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data Controller</h2>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <p className="font-medium text-white">Getia AS</p>
                <p>(Org. nr: 926 610 198)</p>
                <p>At Mesh, Møllergata 6</p>
                <p>0179 Oslo, Norway</p>
                <p className="mt-3">
                  <a href="mailto:privacy@getia.no" className="text-blue-400 hover:underline">privacy@getia.no</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect information when you interact with our websites and services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email) when you reach out to us</li>
                <li>Technical data (IP address, browser type) for website functionality</li>
                <li>Usage data to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and provide support</li>
                <li>To improve our websites and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights (GDPR)</h2>
              <p className="leading-relaxed mb-4">
                Under GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-white">Erasure:</strong> Request deletion of your data</li>
                <li><strong className="text-white">Portability:</strong> Request transfer of your data</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@getia.no.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                For privacy-related questions, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <p className="font-medium text-white">Getia AS</p>
                <p>(Org. nr: 926 610 198)</p>
                <p>At Mesh, Møllergata 6</p>
                <p>0179 Oslo, Norway</p>
                <p className="mt-3">
                  <a href="mailto:privacy@getia.no" className="text-blue-400 hover:underline">privacy@getia.no</a>
                </p>
              </div>
            </section>
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
