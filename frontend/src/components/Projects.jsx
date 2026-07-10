import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";

export const Projects = () => (
  <section id="projects" className="px-6 lg:px-12 py-20 md:py-32 border-y border-[#D4E0E8]" style={{ background: "linear-gradient(180deg, #EBF1F5 0%, #E1EAF1 100%)" }} data-testid="projects-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-4">( Selected Work )</p>
        <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Projects</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.15} glareColor="#D8B4E2" scale={1.02} transitionSpeed={900} className="h-full">
              <div className="group h-full bg-white border border-black/5 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-500" data-testid={`project-card-${p.id}`}>
                <div className="overflow-hidden h-56">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-display font-black text-xl text-[#6E93B8]">{p.id}</span>
                    <ArrowUpRight size={20} className="text-[#5C5C5C] group-hover:text-[#1A1A1A] group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-[#5C5C5C] mb-2">{p.tag}</p>
                  <h3 className="font-display font-bold text-lg tracking-tight mb-3">{p.title}</h3>
                  <p className="text-sm text-[#5C5C5C] leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="px-3 py-1 text-xs rounded-full bg-[#E1EAF1] text-[#3B5568]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
