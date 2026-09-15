import { motion } from "framer-motion";
import { Briefcase, GraduationCap, School } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Timeline = () => {
  const { isId } = useLanguage();

  const experiences = isId
    ? [
        {
          year: "Juli 2025 - Juli 2026",
          title: "Administrator",
          company: "VR-Auto Service",
          desc: "Mengelola sistem database pelanggan dan inventaris bengkel, menganalisis kebutuhan stok fast-moving, serta memastikan dokumentasi teknis dan transaksi tercatat secara digital dan akurat.",
          icon: <Briefcase size={20} />,
          color: "bg-blue-500",
        },
        {
          year: "2025 - 2029",
          title: "Mahasiswa Sistem Informasi",
          company: "Universitas Terbuka",
          desc: "Menjalani pendidikan dengan metode belajar mandiri yang membangun disiplin dan manajemen waktu. Secara aktif mengembangkan kemampuan programming di luar kurikulum akademik agar tetap relevan dengan industri.",
          icon: <GraduationCap size={20} />,
          color: "bg-yellow-500",
        },
        {
          year: "Mei 2024 - Juni 2025",
          title: "Administrator & Social Media Specialist",
          company: "Bagja College",
          desc: "Mengelola administrasi operasional dan database, sekaligus merancang strategi, memproduksi dan menjadwalkan konten digital untuk promosi institusi serta mengoptimalkan website.",
          icon: <Briefcase size={20} />,
          color: "bg-purple-500",
        },
        {
          year: "2021 - 2024",
          title: "Rekayasa Perangkat Lunak",
          company: "SMKN 1 Kertajati",
          desc: "Lulus dengan fokus Rekayasa Perangkat Lunak dan mempelajari dasar algoritma, HTML, CSS, serta PHP native.",
          icon: <School size={20} />,
          color: "bg-green-500",
        },
      ]
    : [
        {
          year: "Jul 2025 - Jul 2026",
          title: "Administrator",
          company: "VR-Auto Service",
          desc: "Managed customer database systems and workshop inventory, analyzed fast-moving stock requirements, and ensured technical documentation and transactions were recorded digitally and accurately.",
          icon: <Briefcase size={20} />,
          color: "bg-blue-500",
        },
        {
          year: "2025 - 2029",
          title: "Information Systems Student",
          company: "Universitas Terbuka",
          desc: "Pursuing a self-directed degree path that builds discipline and time management while actively developing programming skills beyond the academic curriculum.",
          icon: <GraduationCap size={20} />,
          color: "bg-yellow-500",
        },
        {
          year: "May 2024 - Jun 2025",
          title: "Administrator & Social Media Specialist",
          company: "Bagja College",
          desc: "Managed operational administration and databases while producing and scheduling digital content for institutional promotion and supporting website optimization.",
          icon: <Briefcase size={20} />,
          color: "bg-purple-500",
        },
        {
          year: "2021 - 2024",
          title: "Software Engineering",
          company: "SMKN 1 Kertajati",
          desc: "Graduated with a Software Engineering focus and learned the foundations of algorithms, HTML, CSS, and native PHP.",
          icon: <School size={20} />,
          color: "bg-green-500",
        },
      ];

  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="timelines">
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">{isId ? "02. / PERJALANAN SAYA" : "02. / MY JOURNEY"}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            {isId ? "Timeline " : "Experience "}<span className="text-brand-blue-dark">{isId ? "Pengalaman" : "Timeline"}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.year}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <div className={`bg-brand-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-brand-blue-light/50 transition-colors text-left ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-black border border-white/10 text-brand-blue-light text-xs font-mono mb-3">{exp.year}</span>
                    <h3 className="text-xl font-bold text-brand-cream">{exp.title}</h3>
                    <h4 className="text-brand-cream/60 font-medium mb-3">{exp.company}</h4>
                    <p className="text-sm text-brand-cream/50 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 border-brand-black flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] z-10 ${exp.color}`}>
                    {exp.icon}
                  </div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
