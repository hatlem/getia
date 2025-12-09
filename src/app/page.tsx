import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Investors from "@/components/Investors";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Investors />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
