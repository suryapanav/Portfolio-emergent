import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Identity",
    text: "I'm Surya Panav — a final-year computer science student pursuing honours in CSE, passionate about where design meets engineering. I turn design-informed ideas into robust implementations that reduce time-to-market.",
  },
  {
    num: "02",
    title: "Vision",
    text: "To begin my professional journey in a supportive and challenging environment where I can contribute sincerely while learning and growing.",
  },
  {
    num: "03",
    title: "Now",
    text: "Accelerating my expertise in AI, Machine Learning, and Blockchain technologies through rigorous open-source contributions and advanced coursework. I maintain a high-velocity development pace—shipping production-ready micro-projects weekly while architecting one high-impact, long-term technical solution each semester.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } }),
};

export const About = () => (
  <section id="about" className="px-6 lg:px-12 py-20 md:py-32 border-y border-[#D9E0D2]" style={{ background: "linear-gradient(180deg, #EEF2E9 0%, #E5ECDE 100%)" }} data-testid="about-section">
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-16"
      >
        ( About — Manifesto )
      </motion.p>
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:sticky md:top-28 rounded-lg overflow-hidden border border-black/5 max-w-sm mx-auto md:max-w-none"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_surya-showcase-1/artifacts/7ugvdog0_AI%20PIC.png"
              alt="Surya Panav portrait"
              className="w-full h-[400px] sm:h-[460px] md:h-[520px] object-cover object-top"
              data-testid="about-portrait"
            />
          </motion.div>
        </div>
        <div className="md:col-span-8 space-y-12 md:space-y-20">
          {chapters.map((c, i) => (
            <motion.div
              key={c.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              className="grid grid-cols-12 gap-6 border-t border-[#CDD8C4] pt-8"
              data-testid={`about-chapter-${c.num}`}
            >
              <span className="col-span-2 font-display font-black text-3xl text-[#7C9873]">{c.num}</span>
              <div className="col-span-10">
                <h2 className="font-display font-bold text-lg md:text-lg tracking-tight mb-4">{c.title}</h2>
                <p className="text-[#5C5C5C] leading-relaxed max-w-xl">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
