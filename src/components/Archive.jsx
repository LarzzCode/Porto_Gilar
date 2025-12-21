import React from "react";
// Kita pakai ExternalLink saja karena lebih aman/umum
import { ArrowLeft, ExternalLink } from "lucide-react";

const Archive = ({ onBack }) => {
  
  const allProjects = [
    { year: "2024", title: "Lar-Movie", tech: ["Next JS", "Tailwind"], link: "https://lar-movies.vercel.app/" },
    { year: "2024", title: "Lar-Calculator", tech: ["HTML", "CSS", "JS"], link: "https://calculator-lar.vercel.app/" },
    { year: "2024", title: "Bagja College", tech: ["WordPress", "MySQL"], link: "https://bagjacollege.com" },
    { year: "2024", title: "Lar-Todo", tech: ["React", "Tailwind", "Vite"], link: "https://todo-app-lar.vercel.app/" },
    { year: "2025", title: "Lar-Finance", tech: ["React", "Tailwind", "Supabase"], link: "https://larfinance.vercel.app/" },
    { year: "2025", title: "Lar-Ai", tech: ["React", "Tailwind", "Gemini API"], link: "https://lar-ai.vercel.app/" },
    { year: "2025", title: "Lar-Garage", tech: ["React", "Tailwind", "Supabase"], link: "https://lar-garage.vercel.app/" },
    { year: "2025", title: "Lar-EnglishStory", tech: ["React", "Tailwind", "Browser Storage"], link: "https://lar-story.vercel.app/" },
    { year: "2025", title: "Lar-Inventory", tech: ["React", "Tailwind", "Firebase"], link: "https://lar-inventory-stok.vercel.app/" },
  ];

  return (
    <section className="min-h-screen bg-brand-black text-brand-cream py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* HEADER */}
        <div className="mb-12">
          <button 
            onClick={onBack} 
            className="relative z-50 cursor-pointer group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors font-bold"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> 
            Back to Projects
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">Project Archive</h1>
          <p className="text-slate-400 mt-4">Daftar lengkap hal-hal yang pernah saya kerjakan.</p>
        </div>

        {/* TABEL */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-sm uppercase tracking-wider">
                <th className="py-4 pr-4 font-mono">Year</th>
                <th className="py-4 pr-4 font-bold text-slate-200">Title</th>
                <th className="py-4 pr-4 hidden md:table-cell">Stack</th>
                <th className="py-4 pr-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/50 transition-colors group">
                  <td className="py-4 pr-4 text-indigo-400 font-mono text-sm">{project.year}</td>
                  <td className="py-4 pr-4 font-bold text-white text-lg">{project.title}</td>
                  <td className="py-4 pr-4 hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-500 group-hover:text-indigo-400 transition-colors flex items-center gap-1"
                    >
                      {/* Kita ganti ArrowUpRight jadi ExternalLink biar aman */}
                      View <ExternalLink size={16} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Archive;