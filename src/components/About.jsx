import { motion } from "framer-motion";
import { Cpu, BookOpen } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const techStack = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MS Word", icon: "https://img.icons8.com/color/48/microsoft-word-2019--v2.png" },
  { name: "MS Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
  { name: "PowerPoint", icon: "https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png" },
];

const About = () => {
  const { isId } = useLanguage();

  const copy = isId
    ? {
        eyebrow: "01. / SIAPA SAYA?",
        titleA: "Lebih Dari Sekadar ",
        titleB: "Code.",
        journey: "Perjalanan Saya",
        paragraph1: "Saya Gilar Wahiditya Eka Putra. Latar belakang saya menggabungkan administrasi, konten digital, desain grafis, dan pengalaman langsung mendukung operasional harian di sektor pendidikan serta otomotif.",
        paragraph2: "Saat ini, sebagai mahasiswa Sistem Informasi di Universitas Terbuka, saya menggunakan perspektif operasional tersebut untuk membangun solusi digital yang praktis—menghubungkan kebutuhan bisnis, antarmuka yang jelas, dan teknologi web.",
        status: "Status:",
        open: "Terbuka untuk Kerja",
        education: "Pendidikan",
        interest: "Minat",
        interestText: "Mengeksplorasi bagaimana AI dapat merampingkan alur kerja berulang dan membuat aplikasi web menjadi lebih berguna, responsif, dan cerdas.",
        strengths: [
          { label: "Pola Pikir Operasional", text: "Saya memahami workflow dari pengalaman administrasi langsung, bukan hanya dari sisi kode." },
          { label: "Komunikasi Visual", text: "Pengalaman desain dan konten membantu saya membuat antarmuka yang jelas, praktis, dan mudah didekati." },
          { label: "Produk Digital", text: "Saya mengubah masalah sehari-hari menjadi website, dashboard, dan tools yang benar-benar bisa digunakan." },
        ],
      }
    : {
        eyebrow: "01. / WHO AM I?",
        titleA: "More Than Just ",
        titleB: "Code.",
        journey: "The Journey",
        paragraph1: "I'm Gilar Wahiditya Eka Putra. My background combines administration, digital content, graphic design, and hands-on experience supporting day-to-day operations in the education and automotive sectors.",
        paragraph2: "Today, as an Information Systems student at Universitas Terbuka, I use that operational perspective to build practical digital solutions—connecting business needs, clear interfaces, and web technology.",
        status: "Status:",
        open: "Open to Work",
        education: "Education",
        interest: "Interest",
        interestText: "Exploring how AI can streamline repetitive workflows and make web applications more useful, responsive, and intelligent.",
        strengths: [
          { label: "Operations Mindset", text: "I understand workflows from hands-on administrative experience, not only from code." },
          { label: "Visual Communication", text: "Design and content experience help me keep interfaces clear, practical, and approachable." },
          { label: "Digital Products", text: "I turn everyday problems into websites, dashboards, and tools people can actually use." },
        ],
      };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden scroll-mt-24" id="about">
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-brand-blue-dark/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-xs sm:text-sm md:text-base">{copy.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
            {copy.titleA}<span className="text-brand-blue-dark">{copy.titleB}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-14 sm:mb-20"
        >
          <motion.div variants={itemVariants} className="md:col-span-8 bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-brand-blue-light/30 transition-colors">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-cream mb-4">{copy.journey}</h3>

            <div className="space-y-4 text-brand-cream/70 text-sm sm:text-base leading-7 sm:leading-relaxed">
              <p>{copy.paragraph1}</p>
              <p>{copy.paragraph2}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {copy.strengths.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-brand-blue-light text-xs font-mono uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-brand-cream/55 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 relative group overflow-hidden rounded-2xl border border-white/10 h-72 sm:h-80 md:h-auto min-h-0">
            <div className="absolute inset-0 bg-brand-blue-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src="/AboutPhoto.jpg"
              alt="Gilar Wahiditya"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-brand-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <span className="text-brand-blue-light text-xs font-mono">{copy.status}</span>
              <p className="text-brand-cream text-sm font-bold">{copy.open}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-6 bg-brand-blue-dark/10 border border-brand-blue-dark/20 p-5 sm:p-6 rounded-2xl flex items-start sm:items-center gap-4">
            <div className="p-3 bg-brand-blue-dark/20 rounded-lg text-brand-blue-light shrink-0"><BookOpen size={24} /></div>
            <div className="min-w-0">
              <span className="text-brand-cream/50 text-xs uppercase tracking-wider">{copy.education}</span>
              <h4 className="text-base sm:text-lg font-bold text-brand-cream">Universitas Terbuka</h4>
              <p className="text-sm text-brand-cream/70">{isId ? "Sistem Informasi" : "Information Systems"}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-6 bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-brand-cream/10 rounded-lg text-brand-cream shrink-0"><Cpu size={24}/></div>
            <div className="min-w-0">
              <span className="text-brand-cream/50 text-xs uppercase tracking-wider">{copy.interest}</span>
              <h4 className="text-base sm:text-lg font-bold text-brand-cream">Artificial Intelligence (AI)</h4>
              <p className="text-sm text-brand-cream/70 leading-relaxed mt-1">{copy.interestText}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative w-full overflow-hidden py-8 sm:py-10 border-t border-white/5">
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
          <motion.div
            className="flex w-max"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-3 group-hover:border-brand-blue-light/50 group-hover:bg-brand-blue-dark/10 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-brand-cream/50 group-hover:text-brand-blue-light transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
