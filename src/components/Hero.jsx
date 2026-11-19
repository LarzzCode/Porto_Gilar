import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const socialLinks = [
  { Icon: Github, href: "https://github.com/LarzzCode", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/gilarwdy", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:wahidityagilar6@gmail.com", label: "Email" },
];

const Hero = () => {
  const { isId } = useLanguage();

  const copy = isId
    ? {
        role: "Mahasiswa Sistem Informasi & Web Developer",
        headline: "GILAR WAHIDITYA",
        intro:
          "Saya Gilar Wahiditya Eka Putra, mahasiswa Sistem Informasi yang menggabungkan web development, desain antarmuka, dan pengalaman operasional langsung untuk membangun website, dashboard, serta aplikasi web yang benar-benar terpakai dalam alur kerja nyata.",
        work: "Lihat Case Study",
        together: "Diskusikan Project",
        resume: "Lihat Resume",
        connect: "Kontak Langsung",
        status: "Tersedia untuk kerja & project",
      }
    : {
        role: "Information Systems Student & Web Developer",
        headline: "GILAR WAHIDITYA",
        intro:
          "I'm Gilar Wahiditya Eka Putra, an Information Systems student combining web development, interface design, and hands-on operational experience to build websites, dashboards, and digital tools that solve real workflow problems.",
        work: "View Case Studies",
        together: "Discuss a Project",
        resume: "View Resume",
        connect: "Direct Links",
        status: "Open to work & projects",
      };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      className="relative min-h-[100svh] flex items-center px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-28 lg:pb-20 overflow-hidden scroll-mt-24"
      id="home"
    >
      <div className="absolute inset-0 z-0 w-full h-full bg-brand-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.14]" />
        <div className="absolute top-0 left-0 right-0 h-[460px] bg-brand-blue-dark/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20 py-4 md:py-8 lg:py-6">
        <motion.div
          className="w-full md:w-[58%] lg:w-[56%] order-2 md:order-1 min-w-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-brand-blue-light font-mono text-xs sm:text-sm tracking-wider uppercase mb-3"
          >
            {copy.role}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.06] text-brand-cream tracking-tight break-words"
          >
            {copy.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-2xl"
          >
            {copy.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 mb-8"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto min-h-[46px] group bg-brand-cream text-brand-black px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center justify-center gap-3 hover:bg-white active:scale-[0.98] transition-all duration-200"
            >
              {copy.work}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/15 bg-white/[0.06] text-brand-cream hover:bg-white/12 hover:border-brand-blue-light/40 active:scale-[0.98] transition-all inline-flex items-center justify-center"
            >
              {copy.together}
            </a>

            <Link
              to="/resume"
              className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 rounded-xl font-semibold text-sm border border-brand-blue-light/30 bg-brand-blue-dark/15 text-brand-blue-light hover:bg-brand-blue-dark/25 hover:border-brand-blue-light/50 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2"
            >
              <FileText size={17} aria-hidden="true" /> {copy.resume}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400 hidden sm:inline">
              {copy.connect}
            </span>
            <div className="flex gap-3 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-brand-blue-light hover:border-brand-blue-light/40 active:scale-95 transition-all"
                  aria-label={social.label}
                >
                  <social.Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-[42%] lg:w-[44%] flex justify-center order-1 md:order-2 min-w-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="w-full h-full rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white/15 relative z-10 bg-[#0d0d10]">
              <img
                src="/Photo.jpg"
                alt="Gilar Wahiditya"
                width="384"
                height="384"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-2 md:-right-2 lg:bottom-4 lg:-right-4 z-20">
              <div className="bg-[#0b0b0e] border border-white/15 py-2.5 px-4 sm:py-3 sm:px-5 rounded-full flex items-center gap-2.5 shadow-lg">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="text-brand-cream font-medium text-xs sm:text-sm whitespace-nowrap">
                  {copy.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
