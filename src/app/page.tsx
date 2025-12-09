import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Investors from "@/components/Investors";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
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
