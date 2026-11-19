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
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import ContactV2 from "./components/ContactV2";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import ProjectDetail from "./components/ProjectDetail";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";
import Preloader from "./components/Preloader";
import CommandPalette from "./components/CommandPalette";
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
    }, 180);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state]);

  return null;
};

const Home = ({ showScrollBtn, scrollToTop }) => (
  <>
    <Navbar />

    <main id="main-content" className="pb-[calc(env(safe-area-inset-bottom)+7rem)] xl:pb-0">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Services />
      <Certificates />
      <ContactV2 />
    </main>

    <Footer />

    <AnimatePresence>
      {showScrollBtn && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+6.75rem)] right-4 sm:right-6 xl:bottom-8 xl:right-8 z-40 xl:z-50 p-3.5 rounded-full bg-[#151515]/95 border border-white/20 text-white shadow-xl hover:bg-indigo-600 hover:border-indigo-500 active:scale-95 transition-all duration-200 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} aria-hidden="true" className="group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  </>
);

const AnimatedRoutes = ({ showScrollBtn, scrollToTop }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home showScrollBtn={showScrollBtn} scrollToTop={scrollToTop} />}
          />
          <Route path="/archive" element={<Archive />} />
          <Route path="/projects" element={<Navigate to="/archive" replace />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollBtn(window.scrollY > 360);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Router>
        <SectionJumpHandler />
        <CommandPalette />
        <AnimatedRoutes showScrollBtn={showScrollBtn} scrollToTop={scrollToTop} />
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
