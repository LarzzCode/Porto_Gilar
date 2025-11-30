import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Import Komponen
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Preloader from "./components/Preloader"; // Import Preloader baru
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";

// Komponen Home
const Home = () => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="timelines"><Timeline /></div>
    <div id="services"><Services /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2.5 detik (sesuaikan dengan panjang teks Anda)
    // Kalau teksnya panjang, tambah waktunya biar kebaca semua
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-blue-light selection:text-brand-black">
      {/* Logic Preloader dengan AnimatePresence */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Router / Konten Utama */}
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </Router>
      )}
      <a
        href="https://wa.me/6285174388765?text=Halo%20Gilar,%20saya%20tertarik%20dengan%20Anda." // Ganti Nomor HP
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} fill="white" />
        
        {/* Tooltip (Muncul saat hover) */}
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat via WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;