import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mas Bagja", // Ganti dengan nama atasan/rekan asli
    role: "Owner, Bagja College",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&q=80", // Ganti foto jika ada, atau pakai avatar inisial
    text: "Gilar memiliki dedikasi tinggi dalam manajemen administrasi dan konten. Kemampuannya beradaptasi dengan teknologi baru sangat membantu operasional lembaga kami.",
    rating: 5
  },
  {
    name: "Mas Alvin",
    role: "Senior Mechanic / Colleague",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&q=80",
    text: "Sangat teliti dalam pendataan stok sparepart dan administrasi bengkel. Sistem yang dikelola Gilar membuat pekerjaan tim mekanik jadi lebih terorganisir.",
    rating: 5
  },
  // Tambahkan satu lagi jika ada, misal Dosen atau Mentor
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="testimonials">
      
      {/* Background Ornament */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-cream/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">05. / TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            Trusted by <span className="text-brand-blue-dark">Professionals</span>
          </h2>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:border-brand-cream/30 transition-colors"
            >
              {/* Quote Icon Besar di background */}
              <Quote className="absolute top-8 right-8 text-white/5 rotate-180" size={60} />

              {/* Bintang Rating */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Isi Testimoni */}
              <p className="text-brand-cream/80 leading-relaxed mb-8 relative z-10 italic">
                "{testi.text}"
              </p>

              {/* Profil Pemberi Testimoni */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-blue-light/50">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-brand-cream font-bold text-sm">{testi.name}</h4>
                  <p className="text-brand-blue-light text-xs">{testi.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;