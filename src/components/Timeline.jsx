import { motion } from "framer-motion";
import { Briefcase, GraduationCap, School, Star } from "lucide-react";

const experiences = [
  {
    year: "2025 - Present",
    title: "Administrator",
    company: "VR-Auto Service",
    desc: "Manage customer database systems and workshop inventory. Analyze fast-moving stock requirements and ensure all technical documentation and transactions are digitally and accurately recorded.",
    icon: <Briefcase size={20} />,
    color: "bg-blue-500"
  },
  {
    year: "2025 - 2029",
    title: "Information Systems Student",
    company: "Universitas Terbuka",
    desc: "Pursue an education using a self-study method that fosters discipline and strong time management. Actively develop programming skills outside the academic curriculum to stay relevant to the industry.",
    icon: <GraduationCap size={20} />,
    color: "bg-yellow-500"
  },
  {
    year: "Mei 2024 - Juni 2025",
    title: "Administrator & Social Media Specialist",
    company: "Bagja College",
    desc: "Manage operational administration, inventory database, and create strategies, produce and schedule digital content for institutional promotions, and optimize the institutional website.",
    icon: <Briefcase size={20} />,
    color: "bg-purple-500"
  },
  {
    year: "2021 - 2024",
    title: "Rekayasa Perangkat Lunak",
    company: "SMKN 1 Kertajati",
    desc: "Graduate with a focus on Software Engineering. Learn the basics of algorithms, HTML, CSS, and native PHP.",
    icon: <School size={20} />,
    color: "bg-green-500"
  }
];

const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-brand-black relative" id="experience">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            Experience <span className="text-brand-blue-dark">Timeline</span>
          </h2>
        </motion.div>

        {/* Garis Tengah Vertikal */}
        <div className="relative">
          {/* Garis Putih Panjang */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

          {/* Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "" // Selang-seling Kiri/Kanan
                }`}
              >
                
                {/* 1. KONTEN (Card) */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <div className={`bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-brand-blue-light/50 transition-colors text-left ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-black border border-white/10 text-brand-blue-light text-xs font-mono mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-brand-cream">{exp.title}</h3>
                    <h4 className="text-brand-cream/60 font-medium mb-3">{exp.company}</h4>
                    <p className="text-sm text-brand-cream/50 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* 2. TITIK TENGAH (Icon) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 border-brand-black flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] z-10 ${exp.color}`}>
                    {exp.icon}
                  </div>
                </div>

                {/* 3. Spacer Kosong (Untuk menyeimbangkan flexbox) */}
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