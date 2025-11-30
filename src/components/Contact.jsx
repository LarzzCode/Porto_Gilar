import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // GANTI DENGAN KREDENSIAL EMAILJS ANDA NANTI
    emailjs
      .sendForm(
        "service_0jp7xrp",   // Ganti dengan Service ID
        "template_8nd08mz",  // Ganti dengan Template ID
        formRef.current,
        "jMin7PgsQEjecrLAl"    // Ganti dengan Public Key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset(); // Kosongkan form setelah kirim
          setTimeout(() => setStatus(""), 5000); // Hilangkan pesan sukses setelah 5 detik
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="contact">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-dark/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">04. / GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            Let's build something <span className="text-brand-blue-dark">amazing.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Informasi Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-cream/70 leading-relaxed mb-8 text-lg">
              Saya selalu terbuka untuk diskusi mengenai peluang kerja, proyek freelance, atau sekadar berdiskusi tentang teknologi otomotif & web development.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light group-hover:bg-brand-blue-dark group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-cream/50 uppercase tracking-wider">Email Me</p>
                  <p className="text-brand-cream font-medium">wahidityagilar6@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light group-hover:bg-brand-blue-dark group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-cream/50 uppercase tracking-wider">Location</p>
                  <p className="text-brand-cream font-medium">Tangerang Selatan, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light group-hover:bg-brand-blue-dark group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-cream/50 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-brand-cream font-medium">+62 851-7438-8765</p>
                </div>
              </div>
            </div>

          
          </motion.div>


          {/* KOLOM KANAN: Form Email */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              {/* Input Nama */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  placeholder="Nama Lengkap"
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all"
                />
              </div>

              {/* Input Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  placeholder="Alamat Email"
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all"
                />
              </div>

              {/* Input Pesan */}
              <div className="relative group">
                <textarea 
                  name="message" 
                  required
                  rows="4"
                  placeholder="Tulis pesan Anda disini..."
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all resize-none"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-blue-dark hover:bg-brand-blue-light text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  "Mengirim..."
                ) : (
                  <>
                    Kirim Pesan <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Pesan Status (Sukses/Gagal) */}
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm"
                >
                  Pesan berhasil terkirim! Saya akan segera membalasnya.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm"
                >
                  Maaf, terjadi kesalahan. Silakan coba lagi nanti.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;