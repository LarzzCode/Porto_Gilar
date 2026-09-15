import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Linkedin, Github, ArrowUpRight, FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const socials = [
  { label: "GitHub", href: "https://github.com/LarzzCode", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/gilarwdy", icon: Linkedin },
];

const ContactV2 = () => {
  const navigate = useNavigate();
  const { isId } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copy = isId
    ? {
        eyebrow: "06. / HUBUNGI SAYA",
        titleA: "Punya ide? ",
        titleB: "Mari kita bangun.",
        intro: "Saya terbuka untuk project freelance, kolaborasi, dan peluang kerja terkait web development, produk digital, dan workflow berbasis teknologi.",
        email: "Email Saya",
        location: "Lokasi",
        resume: "Lihat Resume",
        online: "Temukan saya online",
        messageLabel: "KIRIM PESAN",
        messageTitle: "Ceritakan apa yang ingin Anda bangun.",
        name: "Nama Lengkap",
        messagePlaceholder: "Ceritakan tentang project, tujuan, atau peluangnya...",
        send: "Buka Draft Email",
        note: "Form ini membuka aplikasi email Anda dengan pesan yang sudah terisi—tanpa menyimpan data di website.",
      }
    : {
        eyebrow: "06. / GET IN TOUCH",
        titleA: "Have an idea? ",
        titleB: "Let's build it.",
        intro: "I'm open to freelance projects, collaboration, and job opportunities related to web development, digital products, and technology-driven workflows.",
        email: "Email Me",
        location: "Location",
        resume: "View Resume",
        online: "Find me online",
        messageLabel: "SEND A MESSAGE",
        messageTitle: "Tell me what you want to build.",
        name: "Full Name",
        messagePlaceholder: "Tell me about the project, goal, or opportunity...",
        send: "Open Email Draft",
        note: "This form opens your email app with the message pre-filled—no form data is stored on this website.",
      };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${isId ? "Pesan dari portfolio" : "Portfolio inquiry"} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${isId ? "Dari" : "From"}: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:wahidityagilar6@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden scroll-mt-24" id="contact">
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16 text-center md:text-left">
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-sm md:text-base">{copy.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">{copy.titleA}<span className="text-brand-blue-dark">{copy.titleB}</span></h2>
          <p className="text-brand-cream/60 mt-5 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">{copy.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-4 mb-8">
              <a href="mailto:wahidityagilar6@gmail.com" className="flex items-center gap-4 group rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-brand-blue-light/30 transition-all">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light"><Mail size={20} /></div>
                <div className="min-w-0 flex-1"><p className="text-xs text-brand-cream/50 uppercase tracking-wider">{copy.email}</p><p className="text-brand-cream font-medium truncate">wahidityagilar6@gmail.com</p></div>
                <ArrowUpRight size={18} className="text-brand-cream/30" />
              </a>

              <a href="https://wa.me/6285174388765" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-brand-blue-light/30 transition-all">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light"><Phone size={20} /></div>
                <div className="min-w-0 flex-1"><p className="text-xs text-brand-cream/50 uppercase tracking-wider">WhatsApp</p><p className="text-brand-cream font-medium">+62 851-7438-8765</p></div>
                <ArrowUpRight size={18} className="text-brand-cream/30" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light"><MapPin size={20} /></div>
                <div><p className="text-xs text-brand-cream/50 uppercase tracking-wider">{copy.location}</p><p className="text-brand-cream font-medium">Kertajati, Majalengka, Indonesia</p></div>
              </div>
            </div>

            <button type="button" onClick={() => navigate("/resume")} className="w-full mb-8 inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-blue-light/20 bg-brand-blue-dark/10 px-5 py-4 text-brand-blue-light font-semibold hover:bg-brand-blue-dark/20 hover:border-brand-blue-light/40 transition-all"><FileText size={18} /> {copy.resume}</button>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-cream/40 mb-4">{copy.online}</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-brand-cream/70 hover:text-white hover:border-brand-blue-light/40 transition-all"><Icon size={17} /> {social.label}</a>;
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 rounded-3xl backdrop-blur-sm">
            <div className="mb-6"><p className="text-sm font-mono text-brand-blue-light mb-2">{copy.messageLabel}</p><h3 className="text-2xl font-bold text-brand-cream">{copy.messageTitle}</h3></div>
            <form onSubmit={submit} className="space-y-5">
              <input value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} type="text" required placeholder={copy.name} className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light" />
              <input value={form.email} onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))} type="email" required placeholder="Email" className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light" />
              <textarea value={form.message} onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))} required rows="5" placeholder={copy.messagePlaceholder} className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light resize-none" />
              <button type="submit" className="w-full bg-brand-blue-dark hover:bg-brand-blue-light text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">{copy.send} <Send size={18} className="group-hover:translate-x-1 transition-transform" /></button>
              <p className="text-xs text-brand-cream/35 leading-relaxed text-center">{copy.note}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;
