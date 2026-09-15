import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Layers3 } from "lucide-react";
import { devProjects } from "../data/projectData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projectIndex = devProjects.findIndex((item) => item.slug === slug);
  const project = devProjects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (project) {
      document.title = `${project.title} | Gilar Wahiditya`;
    }

    return () => {
      document.title = "Gilar Wahiditya | Portfolio";
    };
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-indigo-400 font-mono mb-4">404 / PROJECT NOT FOUND</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project tidak ditemukan.</h1>
          <p className="text-slate-400 mb-8">Project yang kamu cari mungkin sudah dipindahkan atau URL-nya tidak valid.</p>
          <button
            onClick={() => navigate("/archive")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold"
          >
            <ArrowLeft size={18} /> Back to Archive
          </button>
        </div>
      </main>
    );
  }

  const nextProject = devProjects[(projectIndex + 1) % devProjects.length];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 overflow-hidden">
      <div className="fixed inset-x-0 top-0 h-[520px] bg-indigo-900/10 blur-[140px] rounded-full -translate-y-1/2 pointer-events-none" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-10 md:pt-16 pb-24">
        <button
          onClick={() => navigate("/archive")}
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end mb-12"
        >
          <div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider block mb-4">PROJECT / CASE STUDY</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              {project.title}
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
              {project.desc}
            </p>
          </div>

          <div className="flex lg:justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
            >
              View Live Project <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0F0F0F] shadow-2xl mb-10"
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/1200x675/111827/FFFFFF?text=Project+Preview";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider mb-3">
              <Calendar size={15} /> Year
            </div>
            <p className="text-white font-semibold text-lg">{project.year}</p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider mb-3">
              <Layers3 size={15} /> Technology
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 py-12 border-y border-white/10">
          <div>
            <span className="text-indigo-400 font-mono text-sm">PROJECT SNAPSHOT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">What this project is.</h2>
          </div>
          <div className="text-slate-400 text-base md:text-lg leading-relaxed">
            <p>{project.desc}</p>
            <p className="mt-5 text-sm text-slate-500">
              Detail problem, process, keputusan teknis, dan hasil akan ditambahkan ketika case study project ini dilengkapi dengan dokumentasi yang terverifikasi.
            </p>
          </div>
        </section>

        <button
          onClick={() => navigate(`/projects/${nextProject.slug}`)}
          className="group w-full mt-12 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all text-left flex items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2">Next Project</span>
            <span className="text-xl md:text-2xl font-bold text-white">{nextProject.title}</span>
          </div>
          <ArrowRight className="text-indigo-400 group-hover:translate-x-2 transition-transform shrink-0" />
        </button>
      </section>
    </main>
  );
};

export default ProjectDetail;
