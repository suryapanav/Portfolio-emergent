import { motion } from "framer-motion";
import { SKILLS } from "../data";

export const Skills = () => (
  <section id="skills" className="px-6 lg:px-12 py-32 bg-[#EBEBE5]/40 border-y border-[#E5E5DF]" data-testid="skills-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-4">( Toolkit )</p>
        <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Skills</h2>
      </motion.div>
      <div className="flex flex-wrap gap-4">
        {SKILLS.map((s, i) => (
          <motion.span
            key={s.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08, rotate: (i % 2 ? 1 : -1) * 2 }}
            className="px-6 py-3 rounded-full bg-white border border-black/5 font-display font-bold text-base md:text-lg tracking-tight cursor-default select-none flex items-center gap-3"
            data-testid={`skill-badge-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            {s.name}
            <span className="text-xs font-normal font-sans text-[#5C5C5C]">{s.level}</span>
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);
