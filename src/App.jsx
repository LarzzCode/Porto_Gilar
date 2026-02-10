import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

// --- IMPORT KOMPONEN ---
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";      // ✅ Sudah Timeline
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"; // ✅ Sudah Certificates
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Preloader from "./components/Preloader"; 

// --- KOMPONEN HOME (Wrapper untuk Satu Halaman) ---
const Home = ({ onViewArchive }) => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="timelines"><Timeline /></div> 
    
    {/* 👇 PENTING: ID="projects" agar scroll back berfungsi */}
    <div id="projects">
      {/* Prop disesuaikan jadi onViewArchive agar cocok dengan Projects.jsx */}
      <Projects onViewArchive={onViewArchive} />
    </div>

    <div id="certificate"><Certificates /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
);

function App() {
  const [view, setView] = useState("home"); // home | archive
  const [loading, setLoading] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // --- 1. PRELOADER ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // --- 2. SCROLL BUTTON VISIBILITY ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 3. LOGIC SCROLL TO TOP (Floating Button) ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --- 4. LOGIC BACK DARI ARCHIVE KE PROJECTS ---
  const handleBackFromArchive = () => {
    // Kembalikan view ke home
    setView("home");
    
    // Tunggu 100ms agar halaman Home render dulu, baru scroll
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // --- 5. RENDER ARCHIVE JIKA VIEW == 'archive' ---
  if (view === "archive") {
    return <Archive onBack={handleBackFromArchive} />;
  }

  // --- 6. MAIN RENDER (HOME) ---
  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Konten Utama */}
      {!loading && (
        <Router>
          <Routes>
            <Route 
               path="/" 
               element={<Home onViewArchive={() => setView("archive")} />} 
            />
            {/* Redirect sembarang URL ke Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      )}

      {/* Floating Button Scroll Up */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0, y: 20 }}    
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all duration-300 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;