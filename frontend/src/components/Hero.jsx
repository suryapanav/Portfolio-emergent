import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowDown, Sparkle } from "lucide-react";
import { Magnetic } from "./Magnetic";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATS = [
  { value: "15+", label: "Projects shipped" },
  { value: "800+", label: "GitHub stars" },
  { value: "2×", label: "Hackathon winner" },
];

export const Hero = ({ onNavigate }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F9F9F7 0%, #F3F1EC 100%)" }}
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{ backgroundImage: "radial-gradient(circle, #D6D2C6 1px, transparent 1px)", backgroundSize: "34px 34px" }}
        aria-hidden
      />
      <motion.div style={{ y: orbY }} className="absolute -right-40 -top-10 w-[560px] h-[560px] rounded-full pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full opacity-70" style={{ background: "radial-gradient(circle at 35% 35%, #E9D5F0 0%, #C9DEED 55%, transparent 75%)", filter: "blur(4px)" }} />
      </motion.div>
      <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-50" style={{ background: "radial-gradient(circle at 60% 40%, #EFE0C8 0%, #DDE9D8 60%, transparent 78%)", filter: "blur(6px)" }} aria-hidden />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y, opacity }} className="lg:col-span-7">
          <span className="hero-mask">
            <motion.span variants={lineReveal} initial="hidden" animate="show" custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 text-xs font-semibold tracking-[0.25em] uppercase text-[#5C5C5C] mb-8">
              <Sparkle size={13} className="text-[#C9A5D6]" /> Historical anchor — Oct 14. 2005
            </motion.span>
          </span>
          <h1 className="font-display font-black tracking-tighter leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-[7.6rem]" data-testid="hero-name">
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
              A final-year Honours in CSE student who builds, breaks, and rebuilds the web — one curious experiment at a time.
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
              <button onClick={() => onNavigate("#contact")} className="link-underline text-sm font-medium" data-testid="hero-cta-contact">
                Get in touch
              </button>
            </Magnetic>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-14 flex gap-10 border-t border-black/10 pt-8 max-w-md"
            data-testid="hero-stats"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display font-black text-2xl md:text-3xl tracking-tight">{s.value}</p>
                <p className="text-xs text-[#5C5C5C] mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: photoY }}
          className="hidden lg:block lg:col-span-5 relative"
          data-testid="hero-photo"
        >
          <div className="absolute -top-10 -left-10 z-20 animate-[spin_14s_linear_infinite]">
            <svg viewBox="0 0 120 120" className="w-28 h-28">
              <defs>
                <path id="circlePath" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
              </defs>
              <text className="font-display" style={{ fontSize: 10.5, letterSpacing: "2.5px", fill: "#8A6FA8", fontWeight: 700 }}>
                <textPath href="#circlePath">OPEN TO WORK • STUDENT DEVELOPER •</textPath>
              </text>
            </svg>
          </div>
          <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} scale={1.02} transitionSpeed={900}>
            <div className="relative rounded-2xl overflow-hidden border border-black/10 rotate-2 shadow-[0_30px_60px_-20px_rgba(26,26,26,0.25)]">
              <img
                src="https://customer-assets.emergentagent.com/job_surya-showcase-1/artifacts/7ugvdog0_AI%20PIC.png"
                alt="Surya Panav"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 px-5 py-3 flex items-center justify-between">
                <span className="font-display font-bold text-sm tracking-tight">Surya Panav</span>
                <span className="text-xs text-[#5C5C5C]">CSE Honours '26</span>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 text-[#5C5C5C] text-xs tracking-widest uppercase"
      >
        <ArrowDown size={14} className="animate-bounce" /> Scroll to explore
      </motion.div>
    </section>
  );
};
