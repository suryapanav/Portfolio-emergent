import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Identity",
    text: "I'm Surya Panav — a computer science student obsessed with the space where design meets engineering. I treat every project like a lab: hypothesize, build, break, learn.",
  },
  {
    num: "02",
    title: "Vision",
    text: "The web should feel alive. I chase interfaces that respond to touch, motion, and curiosity — software that surprises people the way a good magic trick does.",
  },
  {
    num: "03",
    title: "Now",
    text: "Currently deep in open-source, hackathons, and machine learning coursework. Shipping small things weekly, and one ambitious thing every semester.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } }),
};

export const About = () => (
  <section id="about" className="px-6 lg:px-12 py-32" data-testid="about-section">
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
            className="sticky top-28 rounded-lg overflow-hidden border border-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
              alt="Surya Panav portrait"
              className="w-full h-[420px] object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
              data-testid="about-portrait"
            />
          </motion.div>
        </div>
        <div className="md:col-span-8 space-y-20">
          {chapters.map((c, i) => (
            <motion.div
              key={c.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              className="grid grid-cols-12 gap-6 border-t border-[#E5E5DF] pt-8"
              data-testid={`about-chapter-${c.num}`}
            >
              <span className="col-span-2 font-display font-black text-3xl text-[#D8B4E2]">{c.num}</span>
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
