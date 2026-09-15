import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import ProjectDetail from "./components/ProjectDetail";
import Resume from "./components/Resume";
import Preloader from "./components/Preloader";
import CommandPalette from "./components/CommandPalette";
import LanguageToggle from "./components/LanguageToggle";
import { LanguageProvider } from "./i18n/LanguageContext";

const SectionJumpHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (location.pathname !== "/" || !target) return undefined;

    const timer = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 140);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state]);

  return null;
};

const Home = ({ showScrollBtn, scrollToTop }) => (
  <>
    <Navbar />

    <main className="pb-[calc(env(safe-area-inset-bottom)+7rem)] xl:pb-0">
      <Hero />
      <About />
      <Timeline />
      <Projects />

      <section className="bg-[#050505] px-4 md:px-6" aria-label="Currently building">
        <div className="max-w-7xl mx-auto">
          <CurrentlyBuilding />
        </div>
      </section>

      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </main>

    <AnimatePresence>
      {showScrollBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+6.75rem)] right-4 sm:right-6 xl:bottom-8 xl:right-8 z-40 xl:z-50 p-3 rounded-full bg-[#151515]/90 backdrop-blur-md border border-white/20 text-white shadow-xl hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  </>
);

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Router>
        <SectionJumpHandler />
        <LanguageToggle />
        <CommandPalette />

        <Routes>
          <Route
            path="/"
            element={<Home showScrollBtn={showScrollBtn} scrollToTop={scrollToTop} />}
          />
          <Route path="/archive" element={<Archive />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
