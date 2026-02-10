import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
// Import data
import { devProjects } from "../data/projectData"; 

const Projects = ({ onViewArchive }) => {
  // 1. GUNAKAN SEMUA DATA (Hapus slice)
  const allProjects = devProjects; 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Untuk arah animasi slide

  // Logic Next/Prev
  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1));
    }
  };

  // Auto Slide 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000); // 4000ms = 4 detik
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Animasi Slide Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentProject = allProjects[currentIndex];

  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden" id="projects">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-mono mb-2 block tracking-wider">03. / FEATURED WORKS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Selected <span className="text-indigo-500">Projects</span>
            </h2>
          </motion.div>

          {/* TOMBOL SEE FULL ARCHIVE */}
          <button
            onClick={onViewArchive} 
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase border-b border-white/10 hover:border-white pb-2"
          >
            View All Archives <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- IMMERSIVE SLIDER --- */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F0F0F]">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* 1. BACKGROUND IMAGE (FULL) */}
              <div className="absolute inset-0">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => { e.target.src = "https://placehold.co/800x600/1e1e1e/FFF?text=No+Image"; }}
                />
                {/* Overlay Gradient agar teks terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-transparent" />
              </div>

              {/* 2. CONTENT (Floating on top) */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end md:justify-center items-start md:w-2/3">
                
                {/* Badge Tahun */}
                <motion.span 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="text-indigo-400 font-mono mb-4 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20"
                >
                  {currentProject.year}
                </motion.span>

                {/* Judul Besar */}
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {currentProject.title}
                </motion.h3>
                
                {/* Deskripsi */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                  className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed"
                >
                  {currentProject.desc}
                </motion.p>

                {/* Tech Stack */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 mb-10"
                >
                  {currentProject.tech.map((t, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 text-white">
                      {t}
                    </span>
                  ))}
                </motion.div>

                {/* Link Button */}
                <motion.a 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2 group"
                >
                  View Live Project <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </motion.a>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS (Prev/Next Button) */}
          <div className="absolute bottom-8 right-8 flex gap-4 z-20">
            <button 
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* PROGRESS BAR (Indikator Waktu) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <motion.div
              key={currentIndex} // Reset animasi setiap ganti slide
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-indigo-500"
            />
          </div>

        </div>

        {/* Indikator Angka (Opsional) */}
        <div className="flex justify-end mt-4 text-mono text-slate-500 text-sm">
          {currentIndex + 1} / {allProjects.length}
        </div>

      </div>
    </section>
  );
};

export default Projects;