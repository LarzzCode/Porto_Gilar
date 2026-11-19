import { motion } from "framer-motion";
import { Cpu, BookOpen, Code2, Wrench } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const devStack = [
  { name: "JavaScript (ES6+)", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },
  { name: "PHP", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Supabase", category: "BaaS" },
  { name: "Firebase", category: "BaaS" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "Vite", category: "Tooling" },
];

const workflowTools = [
  "Canva Visual Design",
  "Google Workspace & Forms",
  "E-Katalog Procurement",
  "Microsoft Excel Data Management",
];

const About = () => {
  const { isId } = useLanguage();

  const copy = isId
    ? {
        eyebrow: "01. / SIAPA SAYA?",
        titleA: "Lebih Dari Sekadar ",
        titleB: "Code.",
        journey: "Perjalanan Saya",
        paragraph1:
          "Saya Gilar Wahiditya Eka Putra. Latar belakang saya menggabungkan administrasi, konten digital, desain grafis, dan pengalaman langsung mendukung operasional harian di sektor pendidikan serta otomotif.",
        paragraph2:
          "Saat ini, sebagai mahasiswa Sistem Informasi di Universitas Terbuka, saya menggunakan perspektif operasional tersebut untuk membangun solusi digital yang praktis: menghubungkan kebutuhan bisnis, antarmuka yang jelas, dan teknologi web.",
        status: "Status:",
        open: "Terbuka untuk Kerja",
        education: "Pendidikan",
        interest: "Fokus Eksplorasi",
        interestText:
          "Mengintegrasikan AI ke dalam aplikasi web untuk merampingkan alur kerja berulang dan membantu pengguna mengambil keputusan berbasis data.",
        stackTitle: "Teknologi & Perangkat Kerja",
        devLabel: "Web Development Stack",
        opsLabel: "Operasional & Desain Digital",
        strengths: [
          {
            label: "Pola Pikir Operasional",
            text: "Saya memahami workflow dari pengalaman administrasi langsung, bukan hanya dari sisi kode.",
          },
          {
            label: "Komunikasi Visual",
            text: "Pengalaman desain dan konten membantu saya membuat antarmuka yang jelas, praktis, dan mudah dipahami.",
          },
          {
            label: "Produk Digital",
            text: "Saya mengubah masalah sehari-hari menjadi website, dashboard, dan tools yang benar-benar bisa digunakan.",
          },
        ],
      }
    : {
        eyebrow: "01. / WHO AM I?",
        titleA: "More Than Just ",
        titleB: "Code.",
        journey: "The Journey",
        paragraph1:
          "I'm Gilar Wahiditya Eka Putra. My background combines administration, digital content, graphic design, and hands-on experience supporting day-to-day operations in the education and automotive sectors.",
        paragraph2:
          "Today, as an Information Systems student at Universitas Terbuka, I use that operational perspective to build practical digital solutions: connecting business needs, clear interfaces, and web technology.",
        status: "Status:",
        open: "Open to Work",
        education: "Education",
        interest: "Exploration Focus",
        interestText:
          "Integrating AI into web applications to streamline repetitive workflows and help users make data-informed decisions.",
        stackTitle: "Technologies & Workflow Tools",
        devLabel: "Web Development Stack",
        opsLabel: "Operations & Digital Design",
        strengths: [
          {
            label: "Operations Mindset",
            text: "I understand workflows from hands-on administrative experience, not only from code.",
          },
          {
            label: "Visual Communication",
            text: "Design and content experience help me keep interfaces clear, practical, and approachable.",
          },
          {
            label: "Digital Products",
            text: "I turn everyday problems into websites, dashboards, and tools people can actually use.",
          },
        ],
      };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden scroll-mt-24"
      id="about"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-xs sm:text-sm md:text-base">
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
            {copy.titleA}
            <span className="text-brand-blue-light">{copy.titleB}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 bg-white/[0.04] border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-brand-blue-light/30 transition-colors"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-brand-cream mb-4">{copy.journey}</h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-7 sm:leading-relaxed">
              <p>{copy.paragraph1}</p>
              <p>{copy.paragraph2}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              {copy.strengths.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-brand-blue-light text-xs font-mono uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 relative group overflow-hidden rounded-2xl border border-white/10 h-72 sm:h-80 md:h-auto min-h-[280px] bg-[#0d0d10]"
          >
            <img
              src="/AboutPhoto.jpg"
              alt="Gilar Wahiditya"
              width="600"
              height="720"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-[#050505]/90 px-4 py-2 rounded-lg border border-white/15">
              <span className="text-brand-blue-light text-xs font-mono">{copy.status}</span>
              <p className="text-brand-cream text-sm font-bold">{copy.open}</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bg-brand-blue-dark/10 border border-brand-blue-light/20 p-5 sm:p-6 rounded-2xl flex items-start sm:items-center gap-4"
          >
            <div className="p-3 bg-brand-blue-dark/20 rounded-lg text-brand-blue-light shrink-0">
              <BookOpen size={24} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-slate-400 text-xs uppercase tracking-wider">{copy.education}</span>
              <h4 className="text-base sm:text-lg font-bold text-brand-cream">Universitas Terbuka</h4>
              <p className="text-sm text-slate-300">
                {isId ? "S1 Sistem Informasi" : "Bachelor of Information Systems"}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bg-white/[0.04] border border-white/10 p-5 sm:p-6 rounded-2xl flex items-start gap-4"
          >
            <div className="p-3 bg-white/10 rounded-lg text-brand-cream shrink-0">
              <Cpu size={24} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-slate-400 text-xs uppercase tracking-wider">{copy.interest}</span>
              <h4 className="text-base sm:text-lg font-bold text-brand-cream">
                Applied AI & Workflow Automation
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mt-1">{copy.interestText}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-brand-blue-light font-mono text-xs uppercase tracking-wider mb-4">
                <Code2 size={16} aria-hidden="true" />
                <span>{copy.devLabel}</span>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5" role="list">
                {devStack.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 flex flex-col justify-between hover:border-brand-blue-light/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-brand-cream">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {item.category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-brand-blue-light font-mono text-xs uppercase tracking-wider mb-4">
                <Wrench size={16} aria-hidden="true" />
                <span>{copy.opsLabel}</span>
              </div>
              <ul className="space-y-2.5" role="list">
                {workflowTools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-300"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
