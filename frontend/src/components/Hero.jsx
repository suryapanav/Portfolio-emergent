import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Magnetic } from "./Magnetic";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = ({ onNavigate }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 overflow-hidden" data-testid="hero-section">
      <motion.div
        style={{ y: orbY }}
        className="absolute -right-32 top-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full opacity-60" style={{ background: "radial-gradient(circle at 35% 35%, #E9D5F0 0%, #D2E4EE 55%, transparent 75%)", filter: "blur(2px)" }} />
      </motion.div>
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full relative z-10">
        <span className="hero-mask">
          <motion.span variants={lineReveal} initial="hidden" animate="show" custom={0} className="block text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#5C5C5C] mb-6">
            Portfolio — Est. 2026
          </motion.span>
        </span>
        <h1 className="font-display font-black tracking-tighter leading-[0.9] text-4xl sm:text-5xl lg:text-6xl xl:text-[7.5rem]" data-testid="hero-name">
          <span className="hero-mask">
            <motion.span variants={lineReveal} initial="hidden" animate="show" custom={1} className="block">
              SURYA
            </motion.span>
          </span>
          <span className="hero-mask">
            <motion.span variants={lineReveal} initial="hidden" animate="show" custom={2} className="block text-stroke">
              PANAV
            </motion.span>
          </span>
        </h1>
        <span className="hero-mask mt-8">
          <motion.span variants={lineReveal} initial="hidden" animate="show" custom={3} className="block font-serif-sig italic text-lg md:text-lg text-[#5C5C5C] max-w-xl">
            A student who builds, breaks, and rebuilds the web — one curious experiment at a time.
          </motion.span>
        </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex items-center gap-6"
        >
          <Magnetic>
            <button
              onClick={() => onNavigate("#projects")}
              className="px-8 py-4 rounded-full bg-[#1A1A1A] text-[#F9F9F7] font-medium text-sm hover:bg-[#333] transition-colors duration-300"
              data-testid="hero-cta-work"
            >
              See my work
            </button>
          </Magnetic>
          <Magnetic>
            <button
              onClick={() => onNavigate("#contact")}
              className="link-underline text-sm font-medium"
              data-testid="hero-cta-contact"
            >
              Get in touch
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-3 text-[#5C5C5C] text-xs tracking-widest uppercase"
      >
        <ArrowDown size={14} className="animate-bounce" /> Scroll to explore
      </motion.div>
    </section>
  );
};
