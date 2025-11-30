import { motion } from "framer-motion";

const Preloader = () => {
  const text = "Gilar Wahiditya"; // Teks yang ingin diketik
  
  // Konfigurasi animasi container (untuk stagger/urutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda antar huruf (makin kecil makin cepat ngetiknya)
        delayChildren: 0.2,   // Nunggu sebentar sebelum mulai ngetik
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  // Konfigurasi animasi per huruf
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.1 } // Kecepatan muncul huruf
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-brand-black/80 backdrop-blur-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" // Animasi saat preloader dibuang
    >
      <div className="flex items-center">
        {/* Render setiap huruf */}
        <h1 className="text-4xl md:text-6xl font-bold text-brand-cream font-mono flex overflow-hidden">
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char} {/* Handle spasi */}
            </motion.span>
          ))}
        </h1>

        {/* Kursor Kedip-kedip (Blinking Cursor) */}
        <motion.div
          className="w-1 h-8 md:h-12 bg-brand-blue-light ml-2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;