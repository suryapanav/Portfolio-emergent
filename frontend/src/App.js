import { useEffect, useRef } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Cursor } from "./components/Cursor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { EditorialMarquee } from "./components/EditorialMarquee";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const navigate = (href) => {
    const el = document.querySelector(href);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -64, duration: 1.4 });
    }
  };

  return (
    <div className="App grain">
      <Cursor />
      <Toaster position="bottom-right" richColors />
      <Header onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <EditorialMarquee />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
