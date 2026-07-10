import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export const Achievements = () => (
  <section id="achievements" className="px-6 lg:px-12 py-32 border-y border-[#E0D2C2]" style={{ background: "linear-gradient(180deg, #EDE2D4 0%, #F3EBDF 50%, #F1EADC 100%)" }} data-testid="achievements-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A7B5C] mb-4">( Milestones )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#2E2318]">Achievements</h2>
        </div>
        <p className="font-serif-sig italic text-[#9A7B5C] max-w-xs text-base">Moments that made the late nights worth it.</p>
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
              <div className="group h-full bg-[#FBF7F0] border border-[#E3D5C8] rounded-lg p-10 hover:-translate-y-1 hover:border-[#C4A883] transition-[transform,border-color] duration-500" data-testid={`achievement-card-${a.num}`}>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-display font-black text-4xl text-transparent"
                    style={{ WebkitTextStroke: "1.5px #B08D5F" }}
                  >
                    {a.num}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-[#EDE0CE] text-[#8A6A3F]">{a.year}</span>
                    <span className="w-10 h-10 rounded-full bg-[#EDE0CE] flex items-center justify-center group-hover:bg-[#C7A87C] transition-colors duration-500">
                      <Trophy size={16} className="text-[#8A6A3F] group-hover:text-[#FBF7F0] transition-colors duration-500" />
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight text-[#2E2318] mb-3">{a.title}</h3>
                <p className="text-sm text-[#9A7B5C] leading-relaxed">{a.detail}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
