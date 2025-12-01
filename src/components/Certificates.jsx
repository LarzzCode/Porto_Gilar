import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import CSS Swiper (Wajib ada)
import "swiper/css";
import "swiper/css/pagination";

// Data Dummy Sertifikat (Ganti dengan data asli Anda nanti)
const certificates = [
  {
    id: 1,
    title: "BASIC ENGLISH",
    issuer: "MySkill",
    date: "2025",
    image: "/Certi_BasicEnglish.jpg", // Ganti dengan foto sertifikat asli
    link: "https://drive.google.com/file/d/1-KmBbFW57rKHVUCi8pYJHB1lJc6vd4tJ/view?usp=sharing"
  },
  {
    id: 2,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2025",
    image: "/Certi_DasarAi.jpg",
    link: "https://drive.google.com/file/d/1dR1CQA_PaW-nrTi0DGyLHrSzD0QkjmBV/view?usp=sharing"
  },
  {
    id: 3,
    title: "OSMB UT",
    issuer: "Universitas Terbuka",
    date: "2025",
    image: "/Certi_OSMB.jpg",
    link: "https://drive.google.com/file/d/1K4CQa7pSs-vadIkZUUY_1nNDAMAzblrW/view?usp=sharing"
  },
  {
    id: 4,
    title: "Data Driven Thinking and Decision Making",
    issuer: "Universitas Terbuka",
    date: "2025",
    image: "/Certi_DataDriven.jpg",
    link: "https://drive.google.com/file/d/11bodrO_63SY21DisfDIHzkbu5gGJN-l-/view?usp=sharing"
  },
];

const Certificates = () => {
  return (
    <section className="py-24 px-6 bg-brand-black relative" id="certificates">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">05. / ACHIEVEMENTS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            Certifications & <span className="text-brand-blue-dark">Awards</span>
          </h2>
        </motion.div>

        {/* SWIPER SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30} // Jarak antar kartu
            slidesPerView={1} // Default 1 kartu (Mobile)
            pagination={{ clickable: true, dynamicBullets: true }} // Titik navigasi di bawah
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll tiap 3 detik
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 }, // Tablet: 2 Kartu
              1024: { slidesPerView: 3 }, // Desktop: 3 Kartu
            }}
            className="pb-16 cursor-grab active:cursor-grabbing" // Padding bawah untuk tempat titik pagination
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-blue-light/50 transition-all duration-300 h-full flex flex-col">
                  
                  {/* Gambar Sertifikat */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge Icon Award */}
                    <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur p-2 rounded-lg border border-white/10 z-20 text-brand-blue-light">
                      <Award size={20} />
                    </div>
                  </div>

                  {/* Konten Teks */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-brand-blue-light bg-brand-blue-dark/20 px-2 py-1 rounded">
                        {cert.issuer}
                      </span>
                      <div className="flex items-center gap-1 text-brand-cream/50 text-xs">
                        <Calendar size={12} /> {cert.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-brand-cream mb-4 group-hover:text-brand-blue-light transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Tombol Lihat Kredensial (Optional) */}
                    <a 
                      href={cert.link} 
                      className="mt-auto inline-flex items-center gap-2 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors border-t border-white/10 pt-4"
                    >
                      Lihat Kredensial <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
      
      {/* CSS Override untuk Pagination Dots agar warnanya sesuai tema */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #8FABD4 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #EFECE3 !important; /* Warna Cream saat aktif */
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>

    </section>
  );
};

export default Certificates;