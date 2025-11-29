import { motion } from "framer-motion";
import { Code2, Globe, Cpu, BookOpen } from "lucide-react";

const About = () => {
  // Variabel animasi untuk "Stagger Effect" (muncul berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar elemen
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="about">
      {/* Background Ornament (Bulatan Blur Halus di pojok) */}
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

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >

          {/* 1. Main Description (Lebar: 8 kolom) */}
          <motion.div variants={itemVariants} className="md:col-span-8 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-brand-blue-light/30 transition-colors">
            <h3 className="text-2xl font-bold text-brand-cream mb-4">The Journey</h3>
            <p className="text-brand-cream/70 leading-relaxed mb-4">
              Halo! Saya Gilar Wahiditya. Perjalanan saya di dunia teknologi cukup unik. Berawal dari pengalaman sebagai 
              <span className="text-brand-blue-light font-semibold"> Administrator</span> di sebuah bengkel mobil Eropa, saya belajar bahwa sistem yang efisien adalah kunci produktivitas.
            </p>
            <p className="text-brand-cream/70 leading-relaxed">
              Ketertarikan itu membawa saya terjun ke dunia pemrograman. Saat ini, saya adalah mahasiswa <span className="text-brand-blue-light font-semibold">Sistem Informasi di Universitas Terbuka</span>. Saya menggabungkan logika bisnis yang saya pelajari di pekerjaan dengan kemampuan teknis modern (React & Laravel) untuk membangun solusi web yang tidak hanya canggih, tapi juga memecahkan masalah nyata.
            </p>
          </motion.div>

          {/* 2. Photo / Visual Card (Lebar: 4 kolom) */}
          <motion.div variants={itemVariants} className="md:col-span-4 relative group overflow-hidden rounded-2xl border border-white/10 h-64 md:h-auto">
             <div className="absolute inset-0 bg-brand-blue-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
               alt="Coding Workspace" 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
             />
             {/* Floating Badge */}
             <div className="absolute bottom-4 left-4 z-20 bg-brand-black/80 backdrop-blur md px-4 py-2 rounded-lg border border-white/10">
               <span className="text-brand-blue-light text-xs font-mono">Status:</span>
               <p className="text-brand-cream text-sm font-bold">Open to Work</p>
             </div>
          </motion.div>

          {/* 3. Interest / Stats Cards (Baris Kedua) */}
          
          {/* Card: Education */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-brand-blue-dark/10 border border-brand-blue-dark/20 p-6 rounded-2xl flex flex-col justify-between hover:bg-brand-blue-dark/20 transition-colors">
            <BookOpen className="text-brand-blue-light mb-4" size={32} />
            <div>
              <span className="text-brand-cream/50 text-xs uppercase tracking-wider">Education</span>
              <h4 className="text-xl font-bold text-brand-cream mt-1">Universitas Terbuka</h4>
              <p className="text-sm text-brand-cream/70">Information Systems</p>
            </div>
          </motion.div>

          {/* Card: Tech Focus */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-brand-cream/10 rounded-lg text-brand-cream"><Code2 size={20}/></div>
               <h4 className="text-lg font-bold text-brand-cream">Tech Focus</h4>
             </div>
             <div className="flex flex-wrap gap-2">
               {["React JS", "Laravel", "Tailwind", "Vite"].map(tech => (
                 <span key={tech} className="text-xs font-mono bg-brand-black border border-white/10 px-2 py-1 rounded text-brand-blue-light">
                   {tech}
                 </span>
               ))}
             </div>
          </motion.div>

          {/* Card: Other Interest (Automotive) */}
          <motion.div variants={itemVariants} className="md:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-brand-cream/10 rounded-lg text-brand-cream"><Cpu size={20}/></div>
               <h4 className="text-lg font-bold text-brand-cream">Interests</h4>
             </div>
             <p className="text-sm text-brand-cream/60 leading-relaxed">
               Selain ngoding, saya antusias dengan dunia <span className="text-brand-cream">Otomotif</span>, khususnya perkembangan mobil listrik (EV) & LCGC di Indonesia.
             </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;