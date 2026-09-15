import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home, User, Briefcase, Mail, Award, Clock, ChevronLeft
} from "lucide-react";

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "timelines", label: "Timeline", icon: Clock },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isTouching) {
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }

    return () => clearTimeout(timerRef.current);
  }, [isOpen, isTouching]);

  const handleInteractionStart = () => {
    setIsTouching(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleInteractionEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <div className="md:hidden">
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
                aria-label="Open navigation"
              >
                <ChevronLeft size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              />

              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 30) setIsOpen(false);
                }}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
                className="fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-black/80 backdrop-blur-xl border-l border-t border-b border-white/10 rounded-l-2xl p-2 shadow-2xl flex flex-col gap-2 min-w-[60px] items-center"
              >
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
                      aria-label={`Go to ${item.label}`}
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
