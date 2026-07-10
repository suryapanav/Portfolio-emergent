import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export const Achievements = () => (
  <section id="achievements" className="px-6 lg:px-12 py-20 md:py-32 border-y border-[#DCD4E6]" style={{ background: "linear-gradient(180deg, #EFEAF5 0%, #E7DFF0 100%)" }} data-testid="achievements-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A6FA8] mb-4">( Milestones )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#241D2E]">Achievements</h2>
        </div>
        <p className="font-serif-sig italic text-[#8A6FA8] max-w-xs text-base">Moments that made the late nights worth it.</p>
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
              <div className="group h-full bg-[#FAF8FC] border border-[#DCD4E6] rounded-lg p-10 hover:-translate-y-1 hover:border-[#B49BCB] transition-[transform,border-color] duration-500" data-testid={`achievement-card-${a.num}`}>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-display font-black text-4xl text-transparent"
                    style={{ WebkitTextStroke: "1.5px #A385C2" }}
                  >
                    {a.num}
                  </span>
                  <div className="flex items-center gap-3">
                    {a.year && <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-[#E9E0F2] text-[#7A5C99]">{a.year}</span>}
                    <span className="w-10 h-10 rounded-full bg-[#E9E0F2] flex items-center justify-center group-hover:bg-[#B294CC] transition-colors duration-500">
                      <Trophy size={16} className="text-[#7A5C99] group-hover:text-[#FAF8FC] transition-colors duration-500" />
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight text-[#241D2E] mb-3">{a.title}</h3>
                <p className="text-sm text-[#8A6FA8] leading-relaxed">{a.detail}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
