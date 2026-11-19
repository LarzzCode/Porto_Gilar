import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const certificates = [
  {
    id: 1,
    title: "Basic English",
    issuer: "MySkill",
    date: "2025",
    image: "/Certi_BasicEnglish.jpg",
    link: "https://drive.google.com/file/d/1-KmBbFW57rKHVUCi8pYJHB1lJc6vd4tJ/view?usp=sharing",
  },
  {
    id: 2,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2025",
    image: "/Certi_DasarAi.jpg",
    link: "https://drive.google.com/file/d/1dR1CQA_PaW-nrTi0DGyLHrSzD0QkjmBV/view?usp=sharing",
  },
  {
    id: 3,
    title: "OSMB Universitas Terbuka",
    issuer: "Universitas Terbuka",
    date: "2025",
    image: "/Certi_OSMB.jpg",
    link: "https://drive.google.com/file/d/1K4CQa7pSs-vadIkZUUY_1nNDAMAzblrW/view?usp=sharing",
  },
  {
    id: 4,
    title: "Data Driven Thinking and Decision Making",
    issuer: "Universitas Terbuka",
    date: "2025",
    image: "/Certi_DataDriven.jpg",
    link: "https://drive.google.com/file/d/11bodrO_63SY21DisfDIHzkbu5gGJN-l-/view?usp=sharing",
  },
];

const Certificates = () => {
  const { isId } = useLanguage();

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative" id="certificates">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-xs sm:text-sm md:text-base">
            {isId ? "05. / PENCAPAIAN" : "05. / ACHIEVEMENTS"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream">
            {isId ? "Sertifikasi & " : "Certifications & "}
            <span className="text-brand-blue-light">
              {isId ? "Kredensial" : "Credentials"}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-blue-light/45 transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-[16/11] bg-[#0c0c10] p-2 overflow-hidden border-b border-white/10">
                <img
                  src={cert.image}
                  alt={`${cert.title} - ${cert.issuer}`}
                  width="600"
                  height="420"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-lg transform group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-[#050505]/85 p-2 rounded-lg border border-white/15 z-10 text-brand-blue-light">
                  <Award size={18} aria-hidden="true" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-brand-blue-light bg-brand-blue-dark/20 border border-brand-blue-light/20 px-2.5 py-1 rounded">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-slate-300 text-xs font-mono shrink-0">
                    <Calendar size={12} aria-hidden="true" /> {cert.date}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-brand-cream mb-4 group-hover:text-brand-blue-light transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${isId ? "Lihat kredensial" : "View credential"}: ${cert.title} (${cert.issuer})`}
                  className="mt-auto min-h-[44px] inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors border-t border-white/10 pt-3.5"
                >
                  <span>{isId ? "Lihat Kredensial" : "View Credential"}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
