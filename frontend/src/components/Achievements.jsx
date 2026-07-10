import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ACHIEVEMENTS } from "../data";

export const Achievements = () => (
  <section id="achievements" className="px-6 lg:px-12 py-32 bg-[#EBEBE5]/40 border-y border-[#E5E5DF]" data-testid="achievements-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-4">( Milestones )</p>
        <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Achievements</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={800} className="h-full">
              <div className="h-full bg-white border border-black/5 rounded-lg p-10 hover:-translate-y-1 transition-transform duration-500" data-testid={`achievement-card-${a.num}`}>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display font-black text-4xl text-stroke">{a.num}</span>
                  <span className="text-xs tracking-widest text-[#5C5C5C]">{a.year}</span>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight mb-3">{a.title}</h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">{a.detail}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
