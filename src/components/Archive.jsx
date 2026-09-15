import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Code,
  Palette,
  X,
  Maximize2,
  ArrowUp,
  Sparkles,
  Search,
} from "lucide-react";
import { devProjects, designProjects } from "../data/projectData";
import { latestProjects } from "../data/latestProjects";
import { useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectTranslations";

const allDevelopmentProjects = [...latestProjects, ...devProjects].sort((a, b) => {
  const featuredDiff = Number(Boolean(b.featuredCaseStudy)) - Number(Boolean(a.featuredCaseStudy));
  if (featuredDiff !== 0) return featuredDiff;

  const newDiff = Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
  if (newDiff !== 0) return newDiff;

  return Number(b.year) - Number(a.year);
});

const Archive = () => {
  const navigate = useNavigate();
  const { language, isId } = useLanguage();
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [query, setQuery] = useState("");

  const copy = isId
    ? {
        back: "Kembali ke Projects",
        title: "Arsip",
        intro: "Case study development unggulan tampil lebih dulu. Cari seluruh koleksi development dan design berdasarkan project, teknologi, atau topik.",
        development: "Development",
        design: "Design",
        searchDev: "Cari React, AI, Finance...",
        searchDesign: "Cari Canva, poster, banner...",
        result: "hasil",
        results: "hasil",
        featured: "Case Study Unggulan",
        newest: "Project Baru",
        emptyTitle: "Project tidak ditemukan.",
        emptyText: "Coba nama project, teknologi, atau kata kunci lain.",
        clear: "Hapus pencarian",
        footer: "Semua project dibuat dan dikembangkan dengan perhatian pada detail.",
      }
    : {
        back: "Back to Projects",
        title: "Archive",
        intro: "Featured development case studies appear first. Search the full development and design collection by project, technology, or topic.",
        development: "Development",
        design: "Design",
        searchDev: "Search React, AI, Finance...",
        searchDesign: "Search Canva, poster, banner...",
        result: "result",
        results: "results",
        featured: "Featured Case Study",
        newest: "New Project",
        emptyTitle: "No projects found.",
        emptyText: "Try a different project name, technology, or keyword.",
        clear: "Clear search",
        footer: "All projects are crafted with care.",
      };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const localizedProjects = useMemo(() => {
    const baseProjects = activeTab === "dev" ? allDevelopmentProjects : designProjects;
    return baseProjects.map((project) => localizeProject(project, language));
  }, [activeTab, language]);

  const projectsToDisplay = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return localizedProjects;

    return localizedProjects.filter((project) => {
      const searchableText = [
        project.title,
        project.desc,
        project.caseStudy?.summary,
        project.caseStudy?.eyebrow,
        ...(project.tech || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [localizedProjects, query]);

  return (
    <section className="min-h-screen bg-[#050505] text-slate-200 py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-sans relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div>
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {copy.back}
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {copy.title}<span className="text-indigo-500">.</span>
            </h1>
            <p className="text-slate-500 mt-3 max-w-xl">{copy.intro}</p>
          </div>

          <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-4">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm self-start md:self-auto">
              <button
                onClick={() => setActiveTab("dev")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "dev" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}
              >
                <Code size={16} /> {copy.development}
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === "design" ? "bg-purple-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}
              >
                <Palette size={16} /> {copy.design}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={activeTab === "dev" ? copy.searchDev : copy.searchDesign}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-colors"
            />
          </label>

          <p className="text-xs sm:text-sm text-slate-600 font-mono">
            {projectsToDisplay.length} {projectsToDisplay.length === 1 ? copy.result : copy.results}
          </p>
        </div>

        {projectsToDisplay.length > 0 ? (
          <motion.div
            key={`${activeTab}-${query}-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsToDisplay.map((project, index) => {
              const isDesignMode = activeTab === "design";

              return (
                <motion.div
                  key={`${activeTab}-${project.slug || project.title}-${project.image || "no-image"}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.2), duration: 0.45 }}
                  viewport={{ once: true, margin: "100px" }}
                  className="group h-full [content-visibility:auto] [contain-intrinsic-size:420px]"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (isDesignMode) {
                        if (project.image) setSelectedImage(project.image);
                      } else {
                        navigate(`/projects/${project.slug}`);
                      }
                    }}
                    className={`w-full text-left flex flex-col h-full bg-[#0F0F0F] rounded-2xl overflow-hidden border transition-all duration-300 relative hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${
                      project.featuredCaseStudy && !isDesignMode
                        ? "border-indigo-500/25 hover:border-indigo-400/50"
                        : project.isNew && !isDesignMode
                          ? "border-emerald-500/20 hover:border-emerald-400/40"
                          : "border-white/5 hover:border-white/10"
                    } ${isDesignMode && project.image ? "cursor-zoom-in" : "cursor-pointer"}`}
                  >
                    <div className="p-2 shrink-0 w-full">
                      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/50 border border-white/5">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://placehold.co/600x400/1e1e1e/FFF?text=No+Preview";
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_20%,rgba(79,70,229,0.22),transparent_45%),linear-gradient(135deg,#111114,#08080a)] text-center px-6">
                            <div className="h-14 w-14 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 flex items-center justify-center text-indigo-300">
                              <Code size={27} />
                            </div>
                            <p className="text-lg font-bold text-white">{project.title}</p>
                            <p className="text-xs font-mono text-slate-600">LIVE PRODUCT / {project.year}</p>
                          </div>
                        )}

                        {!isDesignMode && project.featuredCaseStudy && (
                          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-indigo-600/90 backdrop-blur-md border border-indigo-300/20 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider text-white">
                            <Sparkles size={12} /> {copy.featured}
                          </div>
                        )}

                        {!isDesignMode && project.isNew && !project.featuredCaseStudy && (
                          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-md border border-emerald-300/20 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider text-white">
                            <Sparkles size={12} /> {copy.newest}
                          </div>
                        )}

                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md text-[10px] font-mono text-white">
                          {project.year}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-2 flex flex-col flex-1 w-full">
                      <div className="flex justify-between items-center mb-3 gap-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        {isDesignMode ? (
                          <Maximize2 size={18} className="text-purple-500 shrink-0" />
                        ) : (
                          <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white shrink-0" />
                        )}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                        {project.caseStudy?.summary || project.desc}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
            <Search size={28} className="mx-auto text-slate-600 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">{copy.emptyTitle}</h2>
            <p className="text-slate-500 text-sm mb-6">{copy.emptyText}</p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {copy.clear}
            </button>
          </div>
        )}

        <div className="mt-20 text-center border-t border-white/5 pt-8 pb-8">
          <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Gilar Wahiditya. {copy.footer}</p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:scale-110 transition-all ${
              activeTab === "dev" ? "hover:bg-indigo-600" : "hover:bg-purple-600"
            }`}
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 z-50"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Design project preview"
              decoding="async"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Archive;
