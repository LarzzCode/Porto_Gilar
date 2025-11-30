import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // <-- IMPORT INI WAJIB

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

// Komponen Home
const Home = () => (
  <>
    <Navbar />
    <div id="home"><Hero /></div>
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    <div id="testimonials"><Testimonials /></div>
    
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
      
    </div>
  );
}

export default App;