import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award, ArrowUpRight } from "lucide-react";
import { CERTIFICATES } from "../data";

export const Certificates = () => (
  <section id="certificates" className="px-6 lg:px-12 py-32 border-y border-[#E8DFC0]" style={{ background: "linear-gradient(180deg, #F9F4E3 0%, #F3EACD 60%, #EEE2BC 100%)" }} data-testid="certificates-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#A08838] mb-4">( Credentials )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-[#2E2A16]">Certificates</h2>
        </div>
        <p className="font-serif-sig italic text-[#A08838] max-w-xs text-base">Paper trails of curiosity — earned, not collected.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={800} className="h-full">
              <div className="group h-full bg-[#FCF9EE] border border-[#E8DFC0] rounded-lg p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-[#CBB768] transition-[transform,border-color] duration-500" data-testid={`certificate-card-${i}`}>
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-11 h-11 rounded-full bg-[#F0E7C4] flex items-center justify-center group-hover:bg-[#C9AE5A] transition-colors duration-500">
                      <Award size={18} className="text-[#8F7A2E] group-hover:text-[#FCF9EE] transition-colors duration-500" />
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-[#F0E7C4] text-[#8F7A2E]">{c.year}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-tight text-[#2E2A16] mb-2">{c.title}</h3>
                  <p className="text-sm text-[#A08838]">{c.org}</p>
                </div>
                <div className="mt-8 pt-5 border-t border-[#E8DFC0] flex items-center justify-between text-xs tracking-widest uppercase text-[#B7A45E]">
                  Verified credential
                  <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
