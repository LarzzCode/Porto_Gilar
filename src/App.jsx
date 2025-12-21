import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// 👇 Import motion & AnimatePresence untuk animasi tombol
import { AnimatePresence, motion } from "framer-motion";
// 👇 Import icon ArrowUp
import { MessageCircle, ArrowUp } from "lucide-react";

// Import Komponen
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Preloader from "./components/Preloader"; 
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";

// Komponen Home
const Home = ({ onOpenArchive }) => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="timelines"><Timeline /></div> 
    <div id="services"><Services /></div>
    <div><Projects onOpenArchive={onOpenArchive} /></div>
    <div id="certificate"><Certificates /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </>
);

function App() {
  const [view, setView] = useState("home");
  const [loading, setLoading] = useState(true);
  
  // 👇 State untuk menyimpan status apakah tombol Back to Top muncul atau tidak
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // --- USE EFFECT: Loading Preloader ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // --- USE EFFECT: Deteksi Scroll untuk Tombol Back to Top ---
  useEffect(() => {
    const handleScroll = () => {
      // Tombol muncul jika scroll lebih dari 300px ke bawah
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- FUNGSI: Scroll ke Paling Atas ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Gerakan halus
    });
  };

  const handleBackToProjects = () => {
    setView("home");
    // Retry Logic scroll
    const tryScroll = (count = 0) => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (count < 20) {
        setTimeout(() => tryScroll(count + 1), 50);
      }
    };
    tryScroll();
  };

  if (view === "archive") {
    return <Archive onBack={handleBackToProjects} />;
  }

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <Routes>
            <Route 
               path="/" 
               element={<Home onOpenArchive={() => setView("archive")} />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      )}

      {/* =======================================================
          FLOATING BUTTONS (WhatsApp & Go To Top)
          Pojok Kanan Bawah
      ======================================================== */}
      
      {/* 1. Tombol GO TO TOP (Muncul di ATAS tombol WA) */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }} // Mulai dari kecil & transparan
            animate={{ opacity: 1, scale: 1, y: 0 }}  // Muncul normal
            exit={{ opacity: 0, scale: 0, y: 20 }}    // Hilang mengecil
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all duration-300 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

    
    </div>
  );
}

export default App;