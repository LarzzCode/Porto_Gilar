import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder } from "lucide-react";
import { Link } from "react-router-dom";

// Data Dummy (Nanti bisa dipisah ke file sendiri)
const projectsData = [
  {
    id: 1,
    title: "Lar-Movies",
    category: "Web Application", 
    desc: "Aplikasi eksplorasi film berbasis React yang memanfaatkan TMDB API untuk menampilkan film trending dan fitur pencarian real-time dengan UI modern.",
    tech: ["Next JS", "Vite", "Tailwind", "TMDB API"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop", // Ganti dengan Screenshot asli web Anda nanti
    link: "https://lar-movies.vercel.app/", // Link Live
    github: "https://github.com/USERNAME_ANDA/lar-movies" // Link Repo
  },
  {
    id: 2,
    title: "Lar-Calculator",
    category: "Utility Tool",
    desc: "Kalkulator web responsif dengan logika aritmatika presisi. Mendukung operasi dasar, fitur history sementara, dan tampilan modern berbasis Grid Layout.",
    tech: ["Html", "Css", "JS Logic"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee1f620?q=80&w=2000&auto=format&fit=crop", // SEMENTARA (Saran: Ganti dengan Screenshot Asli)
    link: "https://calculator-lar.vercel.app/", 
    github: "https://github.com/USERNAME_ANDA/calculator-lar" // Ganti link repo
  },
  {
    id: 3,
    title: "Bagja College",
    category: "Company Profile", // Atau "Education Platform" 
    // Deskripsi (Saya gabungkan agar terdengar full-stack):
    desc: "Website resmi lembaga pendidikan yang menyajikan informasi program dan pendaftaran. Saya berkontribusi dalam pengelolaan konten digital dan memastikan aksesibilitas informasi bagi calon siswa.",   
    // Sesuaikan teknologi asli webnya (Contoh jika pakai WordPress):
    tech: ["CMS / WordPress", "CodeIgniter", "MySQL"], 
    // PENTING: Gunakan screenshot asli website Bagja College agar terlihat profesional
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",  
    link: "https://bagjacollege.com/", 
    // Karena ini web perusahaan, mungkin tidak ada repo publik. 
    // Opsional: Ganti jadi link kosong atau hapus tombol github di kodenya nanti jika string kosong.
    github: ""
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-brand-black" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">03. / MY WORKS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
              Featured <span className="text-brand-blue-dark">Projects</span>
            </h2>
          </div>
          
        </motion.div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="block" // Agar area klik luas
            >
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue-light/50 transition-all duration-300"
            >
              
              {/* Gambar Project */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Konten Card */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-brand-blue-light mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-brand-cream group-hover:text-brand-blue-light transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.link} className="p-2 bg-white/5 rounded-full hover:bg-brand-blue-dark hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="text-brand-cream/60 text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-blue-dark/20 text-brand-blue-light border border-brand-blue-dark/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </motion.div>
            </a>
          ))}
        </div>
        
        {/* Tombol Lihat Semua (Opsional) */}
        {/* Tombol Lihat Semua (Sudah Aktif) */}
        <div className="mt-16 text-center">
          <Link to="/archive">
            <button className="px-8 py-3 rounded-full border border-brand-cream/20 text-brand-cream hover:bg-brand-cream hover:text-brand-black transition-all font-medium flex items-center gap-2 mx-auto group">
              <Folder size={18} />
              Lihat Arsip Lengkap
              {/* Sedikit animasi panah saat hover */}
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;