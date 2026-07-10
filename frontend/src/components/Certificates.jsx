import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATES } from "../data";

export const Certificates = () => (
  <section id="certificates" className="px-6 lg:px-12 py-32" data-testid="certificates-section">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-4">( Credentials )</p>
        <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Certificates</h2>
      </motion.div>
      <div className="border-t border-[#E5E5DF]">
        {CERTIFICATES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group grid grid-cols-12 items-center gap-4 py-8 border-b border-[#E5E5DF] hover:bg-white/70 hover:px-4 transition-[padding,background-color] duration-500"
            data-testid={`certificate-row-${i}`}
          >
            <span className="col-span-2 md:col-span-1 font-display font-bold text-[#D8B4E2]">{c.year}</span>
            <div className="col-span-9 md:col-span-10">
              <h3 className="font-display font-bold text-base md:text-lg tracking-tight">{c.title}</h3>
              <p className="text-sm text-[#5C5C5C] mt-1">{c.org}</p>
            </div>
            <Award size={22} className="col-span-1 justify-self-end text-[#5C5C5C] group-hover:text-[#D8B4E2] group-hover:scale-125 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
