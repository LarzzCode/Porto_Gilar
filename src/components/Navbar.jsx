import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Home, User, Briefcase, Mail, Award, Zap, Clock, ChevronLeft 
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); 
  const [isTouching, setIsTouching] = useState(false); 
  const timerRef = useRef(null); 

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "timelines", label: "Timeline", icon: Clock },
    { id: "services", label: "Services", icon: Zap },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "certificate", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // 1. LOGIKA AUTO HIDE (3 DETIK)
  useEffect(() => {
    if (isOpen && !isTouching) {
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [isOpen, isTouching]);

  // 2. LOGIKA SCROLL SPY (Desktop)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break; 
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInteractionStart = () => {
    setIsTouching(true);
    if (timerRef.current) clearTimeout(timerRef.current); 
  };

  const handleInteractionEnd = () => {
    setIsTouching(false);
  };

  return (
    <>
      {/* =======================================
          1. DESKTOP VIEW (Floating Capsule)
      ======================================= */}
      <div className="hidden md:flex fixed top-6 left-10 z-50">
         <div 
            className="text-2xl font-bold tracking-tighter text-white cursor-pointer hover:opacity-80 transition-opacity drop-shadow-lg" 
            onClick={() => scrollToSection('home')}
          >
            Gilar<span className="text-indigo-500">.</span>
          </div>
      </div>

      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex gap-1 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl ring-1 ring-white/5">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeSection === item.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* =======================================
          2. MOBILE VIEW (Bubble Drawer + Blur)
      ======================================= */}
      <div className="md:hidden">
        
        {/* A. HANDLE KECIL (Lingkaran Melayang) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              className="fixed top-1/2 -translate-y-1/2 right-2 z-50"
            >
              <motion.button
                onClick={() => setIsOpen(true)}
                animate={{ x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                className="w-10 h-10 bg-indigo-600/90 backdrop-blur-md rounded-full text-white shadow-lg border border-white/20 flex items-center justify-center active:scale-90 transition-transform"
              >
                <ChevronLeft size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* B. OVERLAY BLUR & MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* 1. LAYER BACKGROUND BLUR (Muncul Pelan-pelan) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)} // Klik background untuk tutup
                // 👇 CLASS KUNCI: backdrop-blur-sm (Blur) + bg-black/20 (Gelap Dikit)
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              />

              {/* 2. MENU DRAWER */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} 
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                   if (info.offset.x > 30) setIsOpen(false); 
                }}
                
                initial={{ x: "100%" }} 
                animate={{ x: "0%" }} 
                exit={{ x: "100%" }} // Animasi keluar saat unmount
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}

                className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-black/80 backdrop-blur-xl border-l border-t border-b border-white/10 rounded-l-2xl p-2 shadow-2xl flex flex-col gap-2 min-w-[60px] items-center"
              >
                {/* Garis Indikator */}
                <div className="w-1 h-8 bg-white/20 rounded-full mb-1" />

                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative group p-2 rounded-xl transition-all flex items-center justify-center w-full aspect-square ${
                        activeSection === item.id 
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105" 
                          : "text-slate-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon size={20} />
                    </button>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

export default Navbar;