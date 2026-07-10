import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data";

export const Skills = () => (
  <section id="skills" className="px-6 lg:px-12 py-32 border-y border-[#DFD3C0]" style={{ background: "linear-gradient(180deg, #F1EADC 0%, #EAE0CE 100%)" }} data-testid="skills-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7154] mb-4">( Toolkit )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#2B2115]">Skills</h2>
        </div>
        <p className="font-serif-sig italic text-[#8A7154] max-w-xs text-base">Sharpened through late nights, hackathons and stubborn bugs.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: gi * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F7F1E5] border border-[#DFD3C0] rounded-lg p-8 hover:-translate-y-1 transition-transform duration-500"
            data-testid={`skill-group-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display font-black text-2xl text-[#B08D5F]">0{gi + 1}</span>
              <h3 className="font-display font-bold text-lg tracking-tight text-[#2B2115]">{group.label}</h3>
            </div>
            <div className="space-y-6">
              {group.items.map((s, i) => (
                <div key={s.name} className="group" data-testid={`skill-item-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-semibold text-[#3D3020] group-hover:text-[#8A6A3F] transition-colors duration-300">{s.name}</span>
                    <span className="text-xs text-[#A08B6E]">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#E4D8C3] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #C7A87C, #A9825A)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
