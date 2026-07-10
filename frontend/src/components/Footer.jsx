import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, FileText, Download } from "lucide-react";
import { NAV_LINKS } from "../data";
import { Magnetic } from "./Magnetic";

const RESUME_URL = "https://customer-assets.emergentagent.com/job_surya-showcase-1/artifacts/fe76gms9_Surya%20Resume.pdf";

const downloadResume = async () => {
  const res = await fetch(RESUME_URL);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Surya_Panav_Resume.pdf";
  a.click();
  URL.revokeObjectURL(url);
};

export const Footer = ({ onNavigate }) => (
  <footer className="bg-[#1A1A1A] text-[#F9F9F7]" data-testid="site-footer">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">( Next chapter )</p>
        <button
          onClick={() => onNavigate("#contact")}
          className="group font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl flex items-center gap-4 hover:text-[#D8B4E2] transition-colors duration-500"
          data-testid="footer-lets-talk"
        >
          Let's Talk
          <ArrowUpRight className="w-10 h-10 lg:w-16 lg:h-16 group-hover:rotate-45 transition-transform duration-500" />
        </button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 mt-24 pt-12 border-t border-white/10">
        <div>
          <p className="font-display font-extrabold text-lg tracking-tighter mb-4">SURYA PANAV<span className="text-[#D8B4E2]">.</span></p>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">Student. AI Creator. Breaker of things (intentionally). Crafting playful web experiences from a dorm room.</p>
        </div>
        <div data-testid="footer-quick-links">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Quick Links</p>
          <div className="grid grid-cols-2 gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => onNavigate(l.href)}
                className="link-underline text-left text-sm text-white/70 hover:text-white transition-colors duration-300 w-fit"
                data-testid={`footer-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </button>
            ))}
            <div className="col-span-2 mt-3 flex items-center gap-3">
              <Magnetic strength={0.25}>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#1A1A1A] text-sm font-bold hover:opacity-90 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #D8B4E2, #A7C7E7)" }}
                  data-testid="footer-link-resume"
                >
                  <FileText size={15} /> Resume
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <button
                  onClick={downloadResume}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
                  data-testid="footer-resume-download"
                  aria-label="Download resume"
                >
                  <Download size={15} />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Elsewhere</p>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/suryapanav", label: "github" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/surya-panav-938ab832a?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "linkedin" },
              { icon: Instagram, href: "https://www.instagram.com/_suryapanav_?igsh=MXRucDZ4NG0wMXB1dg==", label: "instagram" },
              { icon: Mail, href: "mailto:sunkarasuryapanav@gmail.com", label: "email" },
            ].map((s) => (
              <Magnetic key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
                  data-testid={`footer-social-${s.label}`}
                  aria-label={s.label}
                >
                  <s.icon size={17} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <span data-testid="footer-copyright">© 2026 Surya Panav. Handcrafted with curiosity.</span>
        <span>Made to be broken — refresh & play again.</span>
      </div>
    </div>
  </footer>
);
