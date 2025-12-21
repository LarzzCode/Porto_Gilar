import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder } from "lucide-react";
import { Link } from "react-router-dom";

// Data Dummy (Nanti bisa dipisah ke file sendiri)
const projectsData = [
  {
    id: 1,
    title: "Lar-Movies",
    category: "Web Application", 
    desc: "A React-based movie exploration app that leverages TMDB API to display trending movies and real-time search features with a modern UI.",
    tech: ["Next JS", "Vite", "Tailwind", "TMDB API"],
    image: "/Project_Movie.jpg", // Ganti dengan Screenshot asli web Anda nanti
    link: "https://lar-movies.vercel.app/", // Link Live
    github: "https://github.com/USERNAME_ANDA/lar-movies" // Link Repo
  },
  {
    id: 2,
    title: "Lar-Finance",
    category: "Finance App",
    desc: "Aplikasi pencatat keuangan pribadi dengan fitur dashboard visual, manajemen kategori pengeluaran, dan laporan arus kas real-time.",
    tech: ["React JS", "Tailwind", "Supabase"],
    image: "/Project_Finance.jpg", // SEMENTARA (Saran: Ganti dengan Screenshot Asli)
    link: "https://larfinance.vercel.app/", 
    github: "https://github.com/USERNAME_ANDA/calculator-lar" // Ganti link repo
  },
  {
    id: 3,
    title: "Bagja College",
    category: "Company Profile", // Atau "Education Platform" 
    // Deskripsi (Saya gabungkan agar terdengar full-stack):
    desc: "The official website of an educational institution providing program and registration information. I contribute to digital content management and ensure accessibility of information for prospective students.",   
    // Sesuaikan teknologi asli webnya (Contoh jika pakai WordPress):
    tech: ["CMS / WordPress", "CodeIgniter", "MySQL"], 
    // PENTING: Gunakan screenshot asli website Bagja College agar terlihat profesional
    image: "/Project_BC.jpg",  
    link: "https://bagjacollege.com/", 
    // Karena ini web perusahaan, mungkin tidak ada repo publik. 
    // Opsional: Ganti jadi link kosong atau hapus tombol github di kodenya nanti jika string kosong.
    github: ""
  },
];

const Projects = ({ onOpenArchive }) => {
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
            <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">04. / MY WORKS</span>
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
            <button onClick={onOpenArchive} className="px-8 py-3 rounded-full border border-brand-cream/20 text-brand-cream hover:bg-brand-cream hover:text-brand-black transition-all font-medium flex items-center gap-2 mx-auto group">
              <Folder size={18} />
                See Full Archives
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