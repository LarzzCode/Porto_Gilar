import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Home, User, Briefcase, Mail, Award, Zap, Clock, Menu, X 
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State mobile menu

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "timelines", label: "Timeline", icon: Clock },
    { id: "services", label: "Services", icon: Zap },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "certificate", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // Logic Scroll Spy (Biar active state pindah sendiri saat discroll)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; // Offset biar ga terlalu mepet

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break; // Stop loop once found
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

  return (
    <>
      {/* =======================================
          1. DESKTOP VIEW (ULTRA MODERN)
          Floating "Island" Style
      ======================================= */}
      
      {/* A. LOGO (Floating Independent di Kiri Atas) */}
 

      {/* B. NAVIGATION (Floating Capsule di Tengah Atas) */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex gap-1 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl ring-1 ring-white/5">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeSection === item.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {/* Animasi Background Berjalan (The "Magic" Part) */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Text Label */}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* =======================================
          2. MOBILE VIEW (Approved Style)
          Hamburger + Vertical Icons
      ======================================= */}
      <div className="md:hidden fixed top-5 right-5 z-50 flex flex-col items-end gap-3">
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 bg-black/90 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl"
            >
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group p-3 rounded-xl transition-all flex items-center justify-center ${
                      activeSection === item.id 
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                        : "text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};

export default Navbar;