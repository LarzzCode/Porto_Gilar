import { motion } from "framer-motion";
import { Code2, Globe, Cpu, BookOpen } from "lucide-react";

// Data Logo Tech Stack (Menggunakan CDN Devicon agar ringan & tajam)
const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="about">
      {/* Background Ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-dark/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">01. / WHO AM I?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            More Than Just <span className="text-brand-blue-dark">Code.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20"
        >
          {/* 1. Main Description */}
          <motion.div variants={itemVariants} className="md:col-span-8 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-brand-blue-light/30 transition-colors">
            <h3 className="text-2xl font-bold text-brand-cream mb-4">The Journey</h3>
            <p className="text-brand-cream/70 leading-relaxed mb-4">
              My name is Gilar Wahiditya Ekaputra, a young professional with one year of experience in the education sector, particularly in tutoring institutions, where I have honed multidisciplinary expertise spanning administration, graphic design, and video production. With meticulous attention to detail and advanced skills, I excel at managing administrative systems efficiently, designing creative and captivating visual content, and contributing to institutional promotion through diverse media. I believe that my unique blend of organizational proficiency, technical mastery, and design aesthetics not only enhances operational efficiency but also strengthens corporate identity and branding with a professional and innovative touch. My dedication to quality and detail forms the foundation of every project I undertake, always striving to deliver added value to the growth of the institutions I serve.
            </p>
            <p className="text-brand-cream/70 leading-relaxed">
              Kini, sebagai mahasiswa <span className="text-brand-blue-light font-semibold">Sistem Informasi UT</span>, saya memadukan logika bisnis dengan kode (React & Laravel) untuk membangun solusi digital yang nyata.
            </p>
          </motion.div>

          {/* 2. Photo Card */}
          <motion.div variants={itemVariants} className="md:col-span-4 relative group overflow-hidden rounded-2xl border border-white/10 h-64 md:h-auto">
             <div className="absolute inset-0 bg-brand-blue-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="src\assets\AboutPhoto.jpg" 
               alt="GilarWahidityaPhoto" 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
             />
             <div className="absolute bottom-4 left-4 z-20 bg-brand-black/80 backdrop-blur md px-4 py-2 rounded-lg border border-white/10">
               <span className="text-brand-blue-light text-xs font-mono">Status:</span>
               <p className="text-brand-cream text-sm font-bold">Open to Work</p>
             </div>
          </motion.div>

          {/* 3. Interest Cards */}
          <motion.div variants={itemVariants} className="md:col-span-6 bg-brand-blue-dark/10 border border-brand-blue-dark/20 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-brand-blue-dark/20 rounded-lg text-brand-blue-light"><BookOpen size={24} /></div>
            <div>
              <span className="text-brand-cream/50 text-xs uppercase tracking-wider">Education</span>
              <h4 className="text-lg font-bold text-brand-cream">Universitas Terbuka</h4>
              <p className="text-sm text-brand-cream/70">Information Systems</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-6 bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-brand-cream/10 rounded-lg text-brand-cream"><Cpu size={24}/></div>
            <div>
               <span className="text-brand-cream/50 text-xs uppercase tracking-wider">Interest</span>
               <h4 className="text-lg font-bold text-brand-cream">Automotive & EV</h4>
               <p className="text-sm text-brand-cream/70">LCGC & Hybrid Tech Enthusiast</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- INFINITE SKILL MARQUEE --- */}
        <div className="relative w-full overflow-hidden py-10 border-t border-white/5">
          
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
          <motion.div
            className="flex w-max"
            animate={{ x: "-50%" }} // Bergerak ke kiri sejauh 50% (panjang 1 set data)
            transition={{
              duration: 30, // Atur kecepatan (makin kecil makin cepat)
              ease: "linear", // Wajib linear agar gerakannya konstan (tidak ngerem)
              repeat: Infinity, // Ulangi selamanya
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 group cursor-default"
              >
                {/* Container Icon */}
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-3 group-hover:border-brand-blue-light/50 group-hover:bg-brand-blue-dark/10 transition-all duration-300">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
                  />
                </div>
                {/* Nama Skill */}
                <span className="text-xs font-mono text-brand-cream/50 group-hover:text-brand-blue-light transition-colors">
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