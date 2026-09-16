import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Award,
  Clock,
  Monitor,
  Search,
  Languages,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const mobileSectionMap = {
  timelines: "about",
};

const Navbar = () => {
  const { isId, language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { id: "home", label: "Home", icon: Home },
      { id: "about", label: isId ? "Tentang" : "About", icon: User },
      { id: "timelines", label: isId ? "Perjalanan" : "Timeline", icon: Clock },
      { id: "projects", label: isId ? "Project" : "Projects", icon: Briefcase },
      { id: "services", label: isId ? "Layanan" : "Services", icon: Monitor },
      { id: "certificates", label: isId ? "Sertifikat" : "Certificates", icon: Award },
      { id: "contact", label: isId ? "Kontak" : "Contact", icon: Mail },
    ],
    [isId],
  );

  const mobileLinks = useMemo(
    () => [
      { id: "home", label: "Home", icon: Home },
      { id: "about", label: isId ? "Tentang" : "About", icon: User },
      { id: "projects", label: isId ? "Karya" : "Work", icon: Briefcase },
      { id: "services", label: isId ? "Jasa" : "Services", icon: Monitor },
      { id: "certificates", label: isId ? "Sertif" : "Certs", icon: Award },
      { id: "contact", label: isId ? "Kontak" : "Contact", icon: Mail },
    ],
    [isId],
  );

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const focusY = viewportHeight * 0.42;
      const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);

      const sectionAtFocus = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= focusY && rect.bottom > focusY;
      });

      if (sectionAtFocus) {
        setActiveSection(sectionAtFocus.id);
        ticking = false;
        return;
      }

      const visibleSections = sections
        .map((section) => ({ section, rect: section.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > 0 && rect.top < viewportHeight);

      if (visibleSections.length > 0) {
        const closest = visibleSections.reduce((best, current) => {
          const bestDistance = Math.abs(best.rect.top - focusY);
          const currentDistance = Math.abs(current.rect.top - focusY);
          return currentDistance < bestDistance ? current : best;
        });
        setActiveSection(closest.section.id);
      } else if (window.scrollY <= 8) {
        setActiveSection("home");
      }

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    window.visualViewport?.addEventListener("resize", requestUpdate, { passive: true });
    window.visualViewport?.addEventListener("scroll", requestUpdate, { passive: true });
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.visualViewport?.removeEventListener("resize", requestUpdate);
      window.visualViewport?.removeEventListener("scroll", requestUpdate);
    };
  }, [navLinks]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("portfolio:command-palette"));
  };

  const mobileActiveSection = mobileSectionMap[activeSection] || activeSection;

  return (
    <>
      <div className="hidden xl:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]">
        <nav
          aria-label={isId ? "Navigasi utama" : "Primary navigation"}
          className="flex items-center gap-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl ring-1 ring-white/5 whitespace-nowrap"
        >
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
                  layoutId="activeDesktopTab"
                  className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}

          <span className="mx-1 h-5 w-px bg-white/10" />

          <button
            type="button"
            onClick={openCommandPalette}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={isId ? "Cari di portfolio" : "Search portfolio"}
            title="Ctrl / ⌘ + K"
          >
            <Search size={15} />
            <span className="hidden 2xl:inline">{isId ? "Cari" : "Search"}</span>
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={language === "en" ? "Switch to Indonesian" : "Ganti ke bahasa Inggris"}
          >
            <Languages size={15} /> {language.toUpperCase()}
          </button>
        </nav>
      </div>

      <nav
        aria-label={isId ? "Navigasi mobile dan tablet" : "Mobile and tablet navigation"}
        className="xl:hidden fixed left-3 right-3 sm:left-6 sm:right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[min(680px,calc(100vw-3rem))] bottom-[calc(env(safe-area-inset-bottom)+12px)] z-50 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl shadow-black/40 p-1.5"
      >
        <div className="grid grid-cols-6 gap-0.5 sm:gap-1">
          {mobileLinks.map((item) => {
            const Icon = item.icon;
            const isActive = mobileActiveSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`${isId ? "Ke" : "Go to"} ${item.label}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative min-w-0 rounded-xl py-2.5 px-0.5 sm:px-1 flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive ? "text-white" : "text-slate-500 active:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeMobileTab"
                    className="absolute inset-0 bg-indigo-600/90 rounded-xl -z-10 shadow-lg shadow-indigo-600/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <Icon size={17} strokeWidth={isActive ? 2.4 : 2} />
                <span className="text-[9px] min-[390px]:text-[10px] sm:text-[11px] font-medium leading-none truncate max-w-full">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
