import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    // Hapus bg-dark karena sudah di-set di body, tambahkan text-brand-cream
    <section className="min-h-screen flex items-center px-6 pt-20 md:pt-0 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* BAGIAN KIRI */}
        <motion.div 
          className="w-full md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Warna Aksen Soft Blue */}
          <span className="text-brand-blue-light font-mono text-lg mb-4 block">
            Hi, my name is
          </span>
          
          {/* Warna Judul Cream */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-brand-cream">
            Gilar Wahiditya.
          </h1>
          
          {/* Warna Sub-judul Biru Gelap/Deep */}
          <h2 className="text-2xl md:text-4xl font-bold text-brand-blue-dark mb-6">
            I build things for the web.
          </h2>
          
          {/* Warna Deskripsi Cream dengan opacity agar tidak terlalu menohok */}
          <p className="text-brand-cream/80 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            Seorang pengembang web yang fokus menciptakan pengalaman digital yang *clean*, *responsive*, dan *user-friendly*. Saat ini sedang mendalami ekosistem React dan Modern Web Tech.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* Tombol: Background Blue Dark -> Hover Blue Light, Text Black agar kontras */}
            <button className="bg-brand-blue-dark hover:bg-brand-blue-light text-white hover:text-brand-black px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
              Lihat Projek 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Social Icons */}
            <div className="flex gap-4 items-center ml-2">
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all text-brand-blue-light hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all text-brand-blue-light hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all text-brand-blue-light hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* BAGIAN KANAN: Foto */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            {/* Border Effect diganti menjadi Blue Dark */}
            <div className="absolute inset-0 rounded-full translate-x-4 translate-y-4 opacity-50"></div>
            
            {/* Foto Container dengan Border Cream */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-brand-cream/20 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                alt="Gilar Wahiditya" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;