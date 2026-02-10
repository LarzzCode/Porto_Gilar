import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
// Import data
import { devProjects } from "../data/projectData"; 

const Projects = ({ onViewArchive }) => {
  const allProjects = devProjects; 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Saya perlambat jadi 5 detik biar user sempat baca di HP
    return () => clearInterval(timer);
  }, [currentIndex]);

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
    <section className="py-20 md:py-24 px-4 md:px-6 bg-[#050505] relative overflow-hidden" id="projects">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-mono mb-2 block tracking-wider text-sm md:text-base">03. / FEATURED WORKS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Selected <span className="text-indigo-500">Projects</span>
            </h2>
          </motion.div>

          <button
            onClick={onViewArchive} 
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs md:text-sm font-bold tracking-widest uppercase border-b border-white/10 hover:border-white pb-2"
          >
            View All Archives <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- IMMERSIVE SLIDER (RESPONSIVE FIX) --- */}
        {/* Tinggi: 550px di HP (biar muat teks), 500px di Desktop */}
        <div className="relative w-full h-[580px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F0F0F]">
          
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
              {/* 1. BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover opacity-70 md:opacity-60" // Opacity lebih gelap di HP
                  onError={(e) => { e.target.src = "https://placehold.co/800x600/1e1e1e/FFF?text=No+Image"; }}
                />
                
                {/* Gradient Khusus HP (Lebih Gelap di Bawah) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent md:via-[#050505]/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-transparent hidden md:block" />
              </div>

              {/* 2. CONTENT */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end md:justify-center items-start w-full md:w-2/3">
                
                {/* Badge Tahun */}
                <motion.span 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="text-indigo-400 font-mono mb-3 md:mb-4 bg-indigo-500/10 px-2 py-1 md:px-3 rounded border border-indigo-500/20 text-xs md:text-sm"
                >
                  {currentProject.year}
                </motion.span>

                {/* Judul (Ukuran Responsif) */}
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-3xl md:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight"
                >
                  {currentProject.title}
                </motion.h3>
                
                {/* Deskripsi (Line Clamp di HP) */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                  className="text-slate-300 text-sm md:text-lg mb-6 md:mb-8 max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none"
                >
                  {currentProject.desc}
                </motion.p>

                {/* Tech Stack (Grid/Wrap di HP) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 pr-16 md:pr-0" // pr-16 biar gak nabrak tombol arrow di HP
                >
                  {currentProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium border border-white/10 text-white">
                      {t}
                    </span>
                  ))}
                </motion.div>

                {/* Link Button (Full Width di HP) */}
                <motion.a 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto text-center px-6 py-3 md:px-8 md:py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl md:rounded-full font-bold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group text-sm md:text-base"
                >
                  View Live Project <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </motion.a>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS (Posisi disesuaikan untuk HP) */}
          <div className="absolute bottom-28 md:bottom-8 right-6 md:right-8 flex flex-col md:flex-row gap-3 md:gap-4 z-20">
            <button 
              onClick={() => paginate(1)} // Tombol Next di Atas untuk jempol kanan (HP)
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all md:order-2"
            >
              <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => paginate(-1)} // Tombol Prev
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all md:order-1"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* PROGRESS BAR */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <motion.div
              key={currentIndex} 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }} // 5 detik sesuai interval
              className="h-full bg-indigo-500"
            />
          </div>

        </div>

        {/* Indikator Angka */}
        <div className="flex justify-end mt-4 font-mono text-slate-500 text-xs md:text-sm">
          {currentIndex + 1} / {allProjects.length}
        </div>

      </div>
    </section>
  );
};

export default Projects;