import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data";

export const Skills = () => (
  <section id="skills" className="px-6 lg:px-12 py-20 md:py-32 border-y border-[#C9E0DB]" style={{ background: "linear-gradient(180deg, #E9F3F1 0%, #DCEDE9 100%)" }} data-testid="skills-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#4F8E86] mb-4">( Toolkit )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#1C2E2B]">Skills</h2>
        </div>
        <p className="font-serif-sig italic text-[#4F8E86] max-w-xs text-base">Sharpened through late nights, hackathons and stubborn bugs.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: gi * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F3FAF8] border border-[#C9E0DB] rounded-lg p-8 hover:-translate-y-1 transition-transform duration-500"
            data-testid={`skill-group-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-display font-black text-2xl text-[#5FA79D]">0{gi + 1}</span>
              <h3 className="font-display font-bold text-lg tracking-tight text-[#1C2E2B]">{group.label}</h3>
            </div>
            <div className="space-y-6">
              {group.items.map((s, i) => (
                <div key={s.name} className="group" data-testid={`skill-item-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-semibold text-[#24403C] group-hover:text-[#3A7A72] transition-colors duration-300">{s.name}</span>
                    <span className="text-xs text-[#7FA39D]">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#D3E7E2] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #7FBBB2, #4F8E86)" }}
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
