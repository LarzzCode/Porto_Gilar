import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder } from "lucide-react";

// Data Dummy (Nanti bisa dipisah ke file sendiri)
const projectsData = [
  {
    id: 1,
    title: "E-Katalog Dashboard",
    category: "Web Development",
    desc: "Sistem manajemen inventaris modern dengan fitur real-time tracking dan pelaporan otomatis.",
    tech: ["Laravel", "React", "MySQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Euro Car Service",
    category: "System Administration",
    desc: "Aplikasi administrasi bengkel mobil Eropa untuk mencatat riwayat servis dan stok sparepart.",
    tech: ["PHP", "Bootstrap", "Javascript"],
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2500&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Portfolio v1",
    category: "Personal Branding",
    desc: "Website portofolio personal yang dibangun dengan performa tinggi dan animasi interaktif.",
    tech: ["Vite", "React", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    link: "#",
    github: "#"
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
            <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">02. / MY WORKS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
              Featured <span className="text-brand-blue-dark">Projects</span>
            </h2>
          </div>
          <p className="text-brand-cream/60 mt-4 md:mt-0 max-w-sm text-sm md:text-base">
            Beberapa projek pilihan yang telah saya kerjakan, mulai dari sistem administrasi hingga web aplikasi modern.
          </p>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
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
          ))}
        </div>
        
        {/* Tombol Lihat Semua (Opsional) */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-brand-cream/20 text-brand-cream hover:bg-brand-cream hover:text-brand-black transition-all font-medium flex items-center gap-2 mx-auto">
            <Folder size={18} />
            Lihat Arsip Lengkap
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;