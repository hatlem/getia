import Link from "next/link"

export const metadata = {
  title: "Terms of Service - Getia",
  description: "Terms and conditions for Getia services",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 border-b border-gray-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-medium tracking-tight">Getia</Link>
            <nav className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: December 2024</p>

          <div className="space-y-10 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                These Terms of Service govern your use of services provided by Getia AS.
                By engaging with our services, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Our Services</h2>
              <p className="leading-relaxed">
                Getia AS is a technology company that builds and operates digital products and services.
                We create innovative solutions across various domains including marketing technology,
                hospitality, and consumer insights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, products, and services developed by Getia are protected by intellectual property laws.
                Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Getia AS shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Norway.
                Any disputes shall be resolved in the courts of Oslo, Norway.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact</h2>
              <p className="leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <p className="font-medium text-white">Getia AS</p>
                <p>(Org. nr: 926 610 198)</p>
                <p>At Mesh, Møllergata 6</p>
                <p>0179 Oslo, Norway</p>
                <p className="mt-3">
                  <a href="mailto:hello@getia.no" className="text-blue-400 hover:underline">hello@getia.no</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-xl font-medium tracking-tight">Getia</Link>
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
