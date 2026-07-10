import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { List, X, Sparkle, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data";
import { Magnetic } from "./Magnetic";

const NAV_COLORS = ["#7C9873", "#C98A4B", "#C9AE5A", "#A385C2", "#6E93B8", "#5FA79D", "#C98A8A"];

export const Header = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${scrolled ? "bg-[#F9F9F7]/85 border-black/10 shadow-[0_4px_30px_rgba(26,26,26,0.05)]" : "bg-[#F9F9F7]/60 border-black/5"}`}
      data-testid="site-header"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] origin-left"
        data-testid="scroll-progress-bar"
      >
        <div className="w-full h-full" style={{ background: "linear-gradient(90deg, #D8B4E2, #A7C7E7, #C7A87C, #A8C6A1)" }} />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        <button onClick={() => go("#top")} className="group flex items-center gap-3" data-testid="header-logo">
          <span className="relative w-10 h-10 rounded-full bg-[#1A1A1A] text-[#F9F9F7] font-display font-black text-sm flex items-center justify-center overflow-hidden">
            <span className="group-hover:-translate-y-8 transition-transform duration-300 absolute">SP</span>
            <span className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300 absolute text-[#D8B4E2]">
              <Sparkle size={16} />
            </span>
          </span>
          <span className="hidden sm:flex flex-col items-start leading-none">
            <span className="font-display font-extrabold tracking-tighter text-base">SURYA PANAV</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#5C5C5C]">Student · AI Creator</span>
          </span>
        </button>
        <nav className="hidden lg:flex items-center gap-7" data-testid="header-nav">
          {NAV_LINKS.map((l, i) => (
            <Magnetic key={l.href} strength={0.25}>
              <button
                onClick={() => go(l.href)}
                className="group flex items-baseline gap-1.5 text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors duration-300"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                <span className="text-[9px] font-display font-black text-[#C9A5D6] group-hover:text-[#A66BB8] transition-colors duration-300">0{i + 1}</span>
                <span className="link-underline">{l.label}</span>
              </button>
            </Magnetic>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Magnetic strength={0.3}>
            <button
              onClick={() => go("#contact")}
              className="hidden md:flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-[#1A1A1A] text-[#F9F9F7] text-xs font-semibold tracking-wide hover:bg-[#333] transition-colors duration-300"
              data-testid="header-hire-cta"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8C6A1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7FB069]" />
              </span>
              Open to work
            </button>
          </Magnetic>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden backdrop-blur-xl bg-[#F9F9F7]/95 border-b border-black/5"
            data-testid="mobile-nav"
          >
            <div className="px-6 py-6 flex flex-col gap-1 relative">
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #D8B4E2, #A7C7E7, #C7A87C, #A8C6A1)" }} aria-hidden />
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(l.href)}
                  className="group flex items-center justify-between py-3.5 border-b border-black/5 active:bg-black/[0.03] rounded-md px-2"
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                >
                  <span className="flex items-center gap-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: NAV_COLORS[i % NAV_COLORS.length] }} />
                    <span className="font-display text-2xl font-bold tracking-tighter">{l.label}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-display font-black text-xs" style={{ color: NAV_COLORS[i % NAV_COLORS.length] }}>0{i + 1}</span>
                    <ArrowUpRight size={17} className="text-[#B5B5AD] group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + NAV_LINKS.length * 0.06, duration: 0.45 }}
                onClick={() => go("#contact")}
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#1A1A1A] text-[#F9F9F7] text-sm font-semibold"
                data-testid="mobile-hire-cta"
              >
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8C6A1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7FB069]" />
                </span>
                Open to work — Contact me
              </motion.button>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 text-center font-serif-sig italic text-sm text-[#8A8A82]"
              >
                Surya Panav — Student · AI Creator
              </motion.p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
