import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Magnetic } from "./Magnetic";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SOCIALS = [
  { icon: Mail, label: "surya.panav@gmail.com", href: "mailto:surya.panav@gmail.com" },
  { icon: Github, label: "github.com/suryapanav", href: "https://github.com" },
  { icon: Linkedin, label: "linkedin.com/in/suryapanav", href: "https://linkedin.com" },
  { icon: Twitter, label: "@suryapanav", href: "https://twitter.com" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! Surya will get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full bg-white border border-[#E5E5DF] rounded-lg px-5 py-4 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300 placeholder:text-[#9C9C9C]";

  return (
    <section id="contact" className="px-6 lg:px-12 py-32" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#5C5C5C] mb-4">( Say Hello )</p>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Contact</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
            data-testid="contact-form"
          >
            <input className={inputCls} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="contact-input-name" />
            <input className={inputCls} type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="contact-input-email" />
            <input className={inputCls} placeholder="Subject (optional)" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} data-testid="contact-input-subject" />
            <textarea className={`${inputCls} min-h-[140px] resize-y`} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="contact-input-message" />
            <Magnetic>
              <button
                type="submit"
                disabled={sending}
                className="px-8 py-4 rounded-full bg-[#1A1A1A] text-[#F9F9F7] font-medium text-sm flex items-center gap-2 hover:bg-[#333] transition-colors duration-300 disabled:opacity-50"
                data-testid="contact-submit-button"
              >
                {sending ? "Sending..." : "Send message"} <Send size={15} />
              </button>
            </Magnetic>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-2"
          >
            <p className="font-serif-sig italic text-lg text-[#5C5C5C] mb-8 max-w-sm">
              Prefer the direct route? Reach out on any of these — I reply fast.
            </p>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 border-b border-[#E5E5DF] hover:pl-3 transition-[padding] duration-300"
                data-testid={`contact-social-${s.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
              >
                <s.icon size={18} className="text-[#5C5C5C] group-hover:text-[#D8B4E2] transition-colors duration-300" />
                <span className="text-sm font-medium">{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
