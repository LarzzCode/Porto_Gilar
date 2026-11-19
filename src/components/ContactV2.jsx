import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  FileText,
  Languages,
  Copy,
  Check,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const EMAIL_ADDRESS = "wahidityagilar6@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/LarzzCode", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/gilarwdy", icon: Linkedin },
];

const ContactV2 = () => {
  const navigate = useNavigate();
  const { isId, language, toggleLanguage } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copy = isId
    ? {
        eyebrow: "06. / HUBUNGI SAYA",
        titleA: "Punya ide? ",
        titleB: "Mari kita bangun.",
        intro:
          "Saya terbuka untuk project freelance, kolaborasi, dan peluang kerja terkait web development, produk digital, dan workflow berbasis teknologi.",
        email: "Email Saya",
        copyEmail: "Salin Email",
        copied: "Email Tersalin",
        location: "Lokasi",
        resume: "Lihat Resume",
        online: "Temukan saya online",
        language: "Bahasa",
        messageLabel: "KIRIM PESAN",
        messageTitle: "Ceritakan apa yang ingin Anda bangun.",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Contoh: Budi Santoso",
        emailLabel: "Alamat Email",
        emailPlaceholder: "nama@perusahaan.com",
        messageFieldLabel: "Detail Pesan atau Project",
        messagePlaceholder: "Ceritakan singkat tentang project, kebutuhan, atau peluang kerja...",
        send: "Buka Draft Email",
        note: "Form ini membuka aplikasi email Anda dengan pesan yang sudah terisi tanpa menyimpan data di server.",
        draftOpened:
          "Draft email telah disiapkan. Jika aplikasi email tidak terbuka otomatis, silakan salin alamat email secara langsung.",
      }
    : {
        eyebrow: "06. / GET IN TOUCH",
        titleA: "Have an idea? ",
        titleB: "Let's build it.",
        intro:
          "I'm open to freelance projects, collaboration, and job opportunities related to web development, digital products, and technology-driven workflows.",
        email: "Email Me",
        copyEmail: "Copy Email",
        copied: "Email Copied",
        location: "Location",
        resume: "View Resume",
        online: "Find me online",
        language: "Language",
        messageLabel: "SEND A MESSAGE",
        messageTitle: "Tell me what you want to build.",
        nameLabel: "Full Name",
        namePlaceholder: "e.g., Alex Pratama",
        emailLabel: "Email Address",
        emailPlaceholder: "you@company.com",
        messageFieldLabel: "Project or Opportunity Details",
        messagePlaceholder: "Share a brief overview of the project, goal, or role...",
        send: "Open Email Draft",
        note: "This form opens your email client with the message pre-filled. No form data is stored on a server.",
        draftOpened:
          "Email draft prepared. If your mail app did not open automatically, use the Copy Email button.",
      };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setStatusMessage(EMAIL_ADDRESS);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `${isId ? "Pesan dari portfolio" : "Portfolio inquiry"}: ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n${isId ? "Dari" : "From"}: ${form.name}\nEmail: ${form.email}`,
    );
    setStatusMessage(copy.draftOpened);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden scroll-mt-24"
      id="contact"
    >
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.14]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-sm md:text-base">
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
            {copy.titleA}
            <span className="text-brand-blue-light">{copy.titleB}</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
            {copy.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 group min-w-0 flex-1"
                >
                  <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-light">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{copy.email}</p>
                    <p className="text-brand-cream font-medium truncate group-hover:text-brand-blue-light transition-colors">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/50 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-400" aria-hidden="true" />
                      <span>{copy.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>{copy.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="https://wa.me/6285174388765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.07] hover:border-brand-blue-light/40 transition-all"
              >
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-light">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-brand-cream font-medium">+62 851-7438-8765</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-white" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-light">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{copy.location}</p>
                  <p className="text-brand-cream font-medium">Kertajati, Majalengka, Indonesia</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/resume")}
              className="w-full min-h-[48px] mb-8 inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-blue-light/30 bg-brand-blue-dark/15 px-5 py-4 text-brand-blue-light font-semibold hover:bg-brand-blue-dark/25 hover:border-brand-blue-light/50 transition-all"
            >
              <FileText size={18} aria-hidden="true" /> {copy.resume}
            </button>

            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{copy.online}</p>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="xl:hidden min-h-[44px] inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-brand-blue-light/40 transition-colors"
                  aria-label={
                    language === "en" ? "Switch to Indonesian" : "Ganti ke bahasa Inggris"
                  }
                >
                  <Languages size={14} aria-hidden="true" /> {copy.language}:{" "}
                  {language.toUpperCase()}
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.05] text-slate-200 hover:text-white hover:border-brand-blue-light/40 transition-all"
                    >
                      <Icon size={17} aria-hidden="true" /> {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-white/10 p-5 sm:p-6 md:p-8 rounded-3xl"
          >
            <div className="mb-6">
              <p className="text-sm font-mono text-brand-blue-light mb-2">{copy.messageLabel}</p>
              <h3 id="contact-form-heading" className="text-2xl font-bold text-brand-cream">
                {copy.messageTitle}
              </h3>
            </div>

            <form
              onSubmit={submit}
              aria-labelledby="contact-form-heading"
              className="space-y-5"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs sm:text-sm font-medium text-brand-cream"
                >
                  {copy.nameLabel} <span aria-hidden="true" className="text-brand-blue-light">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                  placeholder={copy.namePlaceholder}
                  className="w-full min-h-[48px] bg-[#050505] border border-white/15 rounded-xl px-4 py-3.5 text-brand-cream placeholder:text-slate-500 focus:border-brand-blue-light transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs sm:text-sm font-medium text-brand-cream"
                >
                  {copy.emailLabel} <span aria-hidden="true" className="text-brand-blue-light">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  required
                  value={form.email}
                  onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                  placeholder={copy.emailPlaceholder}
                  className="w-full min-h-[48px] bg-[#050505] border border-white/15 rounded-xl px-4 py-3.5 text-brand-cream placeholder:text-slate-500 focus:border-brand-blue-light transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs sm:text-sm font-medium text-brand-cream"
                >
                  {copy.messageFieldLabel}{" "}
                  <span aria-hidden="true" className="text-brand-blue-light">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                  placeholder={copy.messagePlaceholder}
                  className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-3.5 text-brand-cream placeholder:text-slate-500 focus:border-brand-blue-light transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>{copy.send}</span>
                <Send
                  size={17}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {statusMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-xs text-emerald-300 bg-emerald-950/50 border border-emerald-400/25 rounded-lg px-3.5 py-2.5 leading-relaxed"
                >
                  {statusMessage}
                </p>
              )}

              <p className="text-xs text-slate-400 leading-relaxed text-center">{copy.note}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;
