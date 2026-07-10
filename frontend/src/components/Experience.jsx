import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../data";

export const Experience = () => (
  <section id="experience" className="px-6 lg:px-12 py-20 md:py-32 border-y border-[#EBD9C3]" style={{ background: "linear-gradient(180deg, #FAF0E3 0%, #F4E4CE 100%)" }} data-testid="experience-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#B07E45] mb-4">( Journey )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#2E2214]">Experience</h2>
        </div>
        <p className="font-serif-sig italic text-[#B07E45] max-w-xs text-base">Every role a lesson, every lesson a level up.</p>
      </motion.div>
      <div className="relative">
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-[#E0C9A8]" aria-hidden />
        <div className="space-y-12">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 ? "md:flex-row-reverse" : ""}`}
              data-testid={`experience-item-${e.num}`}
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                <span className="w-10 h-10 rounded-full bg-[#C98A4B] border-4 border-[#FAF0E3] flex items-center justify-center">
                  <Briefcase size={15} className="text-[#FAF0E3]" />
                </span>
              </div>
              <div className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="group bg-[#FDF8F0] border border-[#EBD9C3] rounded-lg p-8 hover:-translate-y-1 hover:border-[#C98A4B] transition-[transform,border-color] duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-transparent" style={{ WebkitTextStroke: "1.5px #C98A4B" }}>{e.num}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-[#F3E3CB] text-[#96602A]">{e.period}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-tight text-[#2E2214]">{e.role}</h3>
                  <p className="text-sm font-medium text-[#B07E45] mt-1 mb-4">{e.org}</p>
                  <p className="text-sm text-[#8A6A45] leading-relaxed mb-5">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-[#F3E3CB] text-[#96602A]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
