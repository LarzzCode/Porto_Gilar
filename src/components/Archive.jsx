import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Code, Palette, X, Maximize2, ArrowUp } from "lucide-react";

const Archive = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false); // State untuk tombol Scroll

  // --- 1. LOGIC SCROLL TO TOP ---
  useEffect(() => {
    const handleScroll = () => {
      // Tombol muncul jika scroll lebih dari 300px
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DATA 1: DEVELOPMENT
  const devProjects = [
    { 
      year: "2025", title: "Lar-CoffeShop", tech: ["React JS", "Tailwind"], 
      link: "https://landing-page-coffe-shop.vercel.app/", image: "Project_CoffeShop.jpg",
      desc: "Landing page coffe shop."
    },
    { 
      year: "2024", title: "Lar-Movie", tech: ["Next JS", "Tailwind"], 
      link: "https://lar-movies.vercel.app/", image: "Project_Movie.jpg",
      desc: "Platform pencarian film sinematik dengan fitur dark mode dan integrasi API TMDB real-time."
    },
    { 
      year: "2024", title: "Lar-Calculator", tech: ["HTML", "CSS", "JS"], 
      link: "https://calculator-lar.vercel.app/", image: "Project_Calculator.jpg",
      desc: "Tools kalkulasi digital dengan antarmuka neumorphism yang responsif."
    },
    { 
      year: "2024", title: "Bagja College", tech: ["WordPress", "MySQL"], 
      link: "https://bagjacollege.com", image: "Project_BC.jpg",
      desc: "Portal akademik resmi dan sistem informasi untuk lembaga pendidikan Bagja College."
    },
    { 
      year: "2024", title: "Lar-Todo", tech: ["React", "Vite"], 
      link: "https://todo-app-lar.vercel.app/", image: "Project_Todo.jpg",
      desc: "Aplikasi produktivitas manajemen tugas dengan persistensi data lokal."
    },
    { 
      year: "2025", title: "Lar-Finance", tech: ["React", "Supabase"], 
      link: "https://larfinance.vercel.app/", image: "Project_Finance.jpg",
      desc: "Dashboard finansial pribadi dengan visualisasi data pengeluaran dan pemasukan."
    },
    { 
      year: "2025", title: "Lar-Ai", tech: ["React", "Gemini API"], 
      link: "https://lar-ai.vercel.app/", image: "Project_Ai.jpg",
      desc: "Asisten virtual cerdas berbasis AI yang memanfaatkan model Google Gemini."
    },
    { 
      year: "2025", title: "Lar-Garage", tech: ["React", "Supabase"], 
      link: "https://lar-garage.vercel.app/", image: "Project_Garage.jpg",
      desc: "Sistem manajemen operasional bengkel terintegrasi untuk tracking servis."
    },
    { 
      year: "2025", title: "Lar-EnglishStory", tech: ["React", "Storage"], 
      link: "https://lar-story.vercel.app/", image: "Project_EnglishStory.jpg",
      desc: "Platform literasi digital bahasa Inggris dengan koleksi cerita interaktif."
    },
    { 
      year: "2025", title: "Lar-Inventory", tech: ["React", "Firebase"], 
      link: "https://lar-inventory-stok.vercel.app/", image: "Project_Inventory.jpg",
      desc: "Sistem kontrol stok barang real-time berbasis cloud database."
    },
  ];

  // DATA 2: DESIGN
  const designProjects = [
    { 
      year: "2023", title: "Poster Hari Kemerdekaan", tech: ["Canva"], 
      image: "Project_Poster.png", 
      desc: "Lomba Membuat Poster di SMKN 1 Kertajati"
    },
    { 
      year: "2024", title: "Poster Super Camp BC", tech: ["Canva"], 
      image: "Project_Poster.jpg", 
      desc: "Poster Super Camp Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (1).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (2).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (3).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (4).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (5).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (6).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (7).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (8).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (9).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (10).jpg", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Feeds Instagram", tech: ["Canva"], 
      image: "Project_Feeds (1).png", 
      desc: "Project Feeds Intagram Bagja College"
    },
    { 
      year: "2024", title: "Brosur Penerimaan Siswa Baru", tech: ["Canva"], 
      image: "Project_Brosur (1).png", 
      desc: "Project Brosur PPDB Bagja College"
    },
    { 
      year: "2024", title: "Brosur Penerimaan Siswa Baru", tech: ["Canva"], 
      image: "Project_Brosur (2).png", 
      desc: "Project Brosur PPDB Bagja College"
    },
    { 
      year: "2024", title: "Brosur Penerimaan Siswa Baru", tech: ["Canva"], 
      image: "Project_Brosur (3).png", 
      desc: "Project Brosur PPDB Bagja College"
    },
    { 
      year: "2024", title: "Brosur Penerimaan Siswa Baru", tech: ["Canva"], 
      image: "Project_Brosur (4).png", 
      desc: "Project Brosur PPDB Bagja College"
    },
    { 
      year: "2024", title: "Banner", tech: ["Canva"], 
      image: "Project_Banner (1).png", 
      desc: "Project Banner PPDB Bagja College"
    },
    { 
      year: "2024", title: "Banner", tech: ["Canva"], 
      image: "Project_Banner (3).png", 
      desc: "Project Banner PPDB Bagja College"
    },
    { 
      year: "2024", title: "Banner", tech: ["Canva"], 
      image: "Project_Banner (2).png", 
      desc: "Project Banner SuperCamp Bagja College"
    },
  ];

  const projectsToDisplay = activeTab === "dev" ? devProjects : designProjects;

  return (
    <section className="min-h-screen bg-[#050505] text-slate-200 py-24 px-6 font-sans relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div>
            <button 
              onClick={onBack} 
              className="group flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> 
              Back
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Archive<span className="text-indigo-500">.</span>
              <p className="text-2xl font-light"></p>
            </h1>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            {/* TAB SWITCHER */}
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("dev")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "dev" 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Code size={16} /> Code
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "design" 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Palette size={16} /> Design
              </button>
            </div>
          </div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsToDisplay.map((project, index) => {
            // Tentukan apakah ini Mode Design (Zoom) atau Mode Dev (Link)
            const isDesignMode = activeTab === "design";
            
            // Komponen Wrapper: Jika Design pakai 'div' (Button), jika Dev pakai 'a' (Link)
            const CardWrapper = isDesignMode ? "div" : "a";
            const wrapperProps = isDesignMode 
              ? { onClick: () => setSelectedImage(project.image), className: "cursor-zoom-in" } // Props untuk Design
              : { href: project.link, target: "_blank", rel: "noreferrer", className: "cursor-pointer" }; // Props untuk Dev

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <CardWrapper 
                  {...wrapperProps}
                  className={`flex flex-col h-full bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 relative hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${wrapperProps.className}`}
                >
                  {/* 1. Image Area */}
                  <div className="p-2 shrink-0">
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/50 border border-white/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://placehold.co/600x400/1e1e1e/FFF?text=No+Preview"; 
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md text-[10px] font-mono text-white">
                        {project.year}
                      </div>
                    </div>
                  </div>

                  {/* 2. Content Area */}
                  <div className="p-5 pt-2 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {/* Icon berubah sesuai mode: Panah Link atau Zoom */}
                      {isDesignMode ? (
                        <Maximize2 size={18} className="text-purple-500/70 group-hover:text-purple-400 transition-colors" />
                      ) : (
                        <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
                      )}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                      {project.desc}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5 transition-all ${
                            activeTab === 'dev' 
                            ? "group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10 group-hover:text-indigo-300"
                            : "group-hover:border-purple-500/20 group-hover:bg-purple-500/10 group-hover:text-purple-300"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-20 text-center border-t border-white/5 pt-8 pb-8">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Gilar Wahiditya. All projects are crafted with passion.
          </p>
        </div>

      </div>

      {/* =======================================================
          SCROLL TO TOP BUTTON (FLOATING)
      ======================================================= */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg shadow-black/50 hover:scale-110 transition-all duration-300 group ${
              activeTab === 'dev' ? "hover:bg-indigo-600 hover:border-indigo-500" : "hover:bg-purple-600 hover:border-purple-500"
            }`}
          >
            <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* =======================================================
          MODAL / LIGHTBOX (Hanya Muncul Jika Gambar Dipilih)
      ======================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Klik background untuk tutup
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          >
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
            >
              <X size={24} />
            </button>

            {/* Gambar Besar */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Supaya klik gambar tidak menutup modal
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Archive;