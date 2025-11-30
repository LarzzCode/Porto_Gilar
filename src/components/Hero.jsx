import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll"; // Import Link dari react-scroll untuk tombol "Lihat Projek"

const Hero = () => {
  // DATA SOSIAL MEDIA (EDIT DISINI)
  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/larzzCode", // Ganti dengan link Github Anda
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/gilarwdy", // Ganti dengan link LinkedIn Anda
    },
    {
      Icon: Mail,
      href: "mailto:wahidityagilar6@gmail.com", // Sudah saya sesuaikan dengan screenshot Anda
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 md:pt-0 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* BAGIAN KIRI */}
        <motion.div 
          className="w-full md:w-1/2 order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="text-brand-blue-light font-mono text-lg mb-4 block">
            Hi, my name is
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-brand-cream">
            Gilar Wahiditya <br />
            Eka Putra.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-brand-cream/70 text-base md:text-lg mb-8 leading-relaxed max-w-xl text-justify md:text-left">
            My name is Gilar Wahiditya Eka Putra, with one year of experience at a tutoring institution, specializing in multidisciplinary skills including administration, graphic design, and video production.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
            
            {/* Tombol "Lihat Projek" -> Scroll ke Section Projects */}
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-brand-cream text-brand-black px-8 py-3 rounded-full font-semibold flex items-center gap-3 shadow-[0_0_15px_rgba(239,236,227,0.3)] hover:shadow-[0_0_25px_rgba(239,236,227,0.5)] transition-all duration-300"
              >
                Lihat Projek
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            {/* Social Icons (Looping dari data socialLinks di atas) */}
            <div className="flex gap-6 items-center">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}         // Link tujuan
                  target="_blank"            // Buka di tab baru
                  rel="noopener noreferrer"  // Keamanan standar web
                  whileHover={{ y: -5, color: "#8FABD4" }}
                  className="text-brand-cream/60 transition-colors cursor-pointer"
                >
                  <social.Icon size={24} />
                </motion.a>
              ))}
            </div>

          </motion.div>
        </motion.div>

        {/* BAGIAN KANAN: Foto & Badge (Tetap sama, tidak berubah) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            
            {/* Foto Bouncing */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/10 shadow-2xl relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="src\assets\Photo.jpg" 
                alt="Gilar Wahiditya" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Badge Bouncing */}
            <motion.div 
              className="absolute bottom-0 right-0 md:bottom-4 md:-right-4 z-20"
              animate={{ x: [0, -25, 0] }}
              transition={{ duration:3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="bg-brand-black/80 backdrop-blur-md border border-white/10 py-3 px-5 rounded-full flex items-center gap-3 shadow-xl cursor-default hover:scale-105 transition-transform duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-brand-cream font-medium text-sm whitespace-nowrap">
                  Available for hire
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;