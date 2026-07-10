import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";
import { NAV_LINKS } from "../data";
import { Magnetic } from "./Magnetic";

export const Header = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    onNavigate(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F9F9F7]/70 border-b border-black/5"
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <button onClick={() => go("#top")} className="font-display font-extrabold text-lg tracking-tighter" data-testid="header-logo">
          SP<span className="text-[#D8B4E2]">.</span>
        </button>
        <nav className="hidden md:flex items-center gap-8" data-testid="header-nav">
          {NAV_LINKS.map((l) => (
            <Magnetic key={l.href} strength={0.25}>
              <button
                onClick={() => go(l.href)}
                className="link-underline text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors duration-300"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </button>
            </Magnetic>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#F9F9F7]/95 border-b border-black/5"
            data-testid="mobile-nav"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left font-display text-2xl font-bold tracking-tighter"
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
