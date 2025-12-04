import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Archive = () => {
  // Data Dummy (Bisa ditambah sebanyak mungkin)
  const allProjects = [
    { year: "2024", title: "Lar-Movie", tech: ["Next JS", "Tailwind", "TMDB API"], link: "https://lar-movies.vercel.app/", mobile: false },
    { year: "2024", title: "Lar-Calculator", tech: ["Html", "Css", "JS Logic"], link: "https://calculator-lar.vercel.app/", mobile: false },
    { year: "2024", title: "Bagja College", tech: ["CMS / WordPress", "CodeIgniter", "MySQL"], link: "bagjacollege.com", mobile: true },
    { year: "2024", title: "Lar-Todo", tech: ["React", "Vite", "Tailwind"], link: "https://todo-app-lar.vercel.app/", mobile: false },
    { year: "2025", title: "Lar-Finance", tech: ["React", "Vite", "Tailwind", "Supabase"], link: "https://larfinance.vercel.app/", mobile: false },
    { year: "2025", title: "Lar-Ai", tech: ["React", "Vite", "Tailwind", "Gemini/OpenAI API"], link: "https://lar-ai.vercel.app/", mobile: false },
  ];

  return (
    <section className="min-h-screen bg-brand-black text-brand-cream py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Back Button */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-blue-light hover:text-brand-cream mb-6 transition-colors">
            <ArrowLeft size={20} /> Kembali ke Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Archive</h1>
          <p className="text-brand-cream/60 mt-4">Daftar lengkap hal-hal yang pernah saya kerjakan.</p>
        </div>

        {/* Table Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-brand-cream/50">
                <th className="py-4 pr-4 font-mono text-sm">Year</th>
                <th className="py-4 pr-4 font-bold text-brand-cream">Title</th>
                <th className="py-4 pr-4 hidden md:table-cell">Built with</th>
                <th className="py-4 pr-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 pr-4 text-brand-blue-light font-mono text-sm">{project.year}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-cream text-lg">{project.title}</td>
                  <td className="py-4 pr-4 hidden md:table-cell">
                    <div className="flex gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-brand-blue-dark/20 text-brand-blue-light px-2 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <a href={project.link} className="text-brand-cream/50 group-hover:text-brand-blue-light transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default Archive;