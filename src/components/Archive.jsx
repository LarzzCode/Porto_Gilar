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
  Search,
} from "lucide-react";
import { devProjects, designProjects } from "../data/projectData";
import { latestProjects } from "../data/latestProjects";
import { useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectTranslations";
import Footer from "./Footer";

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
        back: "Kembali ke Portfolio",
        title: "Arsip Project",
        intro:
          "Case study development unggulan tampil lebih dulu. Cari seluruh koleksi development dan design berdasarkan nama project, teknologi, atau topik.",
        development: "Development",
        design: "Design",
        searchLabel: "Cari project di arsip",
        searchDev: "Cari React, AI, Finance...",
        searchDesign: "Cari Canva, poster, banner...",
        result: "hasil",
        results: "hasil",
        featured: "Case Study Unggulan",
        newest: "Project Baru",
        emptyTitle: "Project tidak ditemukan.",
        emptyText: "Coba gunakan kata kunci nama project, bahasa pemrograman, atau topik lain.",
        clear: "Reset Pencarian",
      }
    : {
        back: "Back to Portfolio",
        title: "Project Archive",
        intro:
          "Featured development case studies appear first. Search the full development and design collection by project name, technology, or topic.",
        development: "Development",
        design: "Design",
        searchLabel: "Search projects in archive",
        searchDev: "Search React, AI, Finance...",
        searchDesign: "Search Canva, poster, banner...",
        result: "result",
        results: "results",
        featured: "Featured Case Study",
        newest: "New Project",
        emptyTitle: "No matching projects found.",
        emptyText: "Try searching by another project title, framework, or topic keyword.",
        clear: "Reset Search",
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

  useEffect(() => {
    if (!selectedImage) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
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
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-200 font-sans relative overflow-x-hidden">
      <main className="flex-1 py-14 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
            <div>
              <button
                type="button"
                onClick={handleBack}
                className="group min-h-[44px] inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4 transition-colors text-sm font-medium"
              >
                <ArrowLeft
                  size={16}
                  aria-hidden="true"
                  className="group-hover:-translate-x-1 transition-transform"
                />
                {copy.back}
              </button>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                {copy.title}
                <span className="text-indigo-400">.</span>
              </h1>
              <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">{copy.intro}</p>
            </div>

            <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-4">
              <div
                role="tablist"
                aria-label="Project categories"
                className="flex bg-white/[0.04] p-1 rounded-xl border border-white/15 self-start md:self-auto"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "dev"}
                  onClick={() => setActiveTab("dev")}
                  className={`min-h-[44px] flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === "dev"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Code size={16} aria-hidden="true" /> {copy.development}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "design"}
                  onClick={() => setActiveTab("design")}
                  className={`min-h-[44px] flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === "design"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Palette size={16} aria-hidden="true" /> {copy.design}
                </button>
              </div>
            </div>
          </div>

          <search className="mb-8 flex flex-col sm:flex-row sm:items-end gap-3 sm:justify-between">
            <div className="w-full sm:max-w-md flex flex-col gap-1.5">
              <label htmlFor="archive-search" className="text-xs font-medium text-slate-300">
                {copy.searchLabel}
              </label>
              <div className="relative">
                <Search
                  size={18}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  id="archive-search"
                  name="q"
                  type="search"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={activeTab === "dev" ? copy.searchDev : copy.searchDesign}
                  className="w-full min-h-[48px] rounded-xl border border-white/15 bg-white/[0.04] pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white/[0.06] transition-colors"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-mono" role="status" aria-live="polite">
              {projectsToDisplay.length}{" "}
              {projectsToDisplay.length === 1 ? copy.result : copy.results}
            </p>
          </search>

          {projectsToDisplay.length > 0 ? (
            <motion.div
              key={`${activeTab}-${query}-${language}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectsToDisplay.map((project, index) => {
                const isDesignMode = activeTab === "design";

                return (
                  <motion.div
                    key={`${activeTab}-${project.slug || project.title}-${project.image || "no-image"}-${index}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.15), duration: 0.35 }}
                    viewport={{ once: true, margin: "80px" }}
                    className="group h-full"
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
                      className={`w-full text-left flex flex-col h-full bg-[#0D0D10] rounded-2xl overflow-hidden border transition-all duration-200 relative hover:-translate-y-1 ${
                        project.featuredCaseStudy && !isDesignMode
                          ? "border-indigo-400/35 hover:border-indigo-400/60"
                          : project.isNew && !isDesignMode
                            ? "border-emerald-400/30 hover:border-emerald-400/55"
                            : "border-white/10 hover:border-white/25"
                      } ${isDesignMode && project.image ? "cursor-zoom-in" : "cursor-pointer"}`}
                    >
                      <div className="p-2 shrink-0 w-full">
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              width="800"
                              height="450"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                  "https://placehold.co/600x400/1e1e1e/FFF?text=No+Preview";
                              }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#111116] text-center px-6">
                              <div className="h-12 w-12 rounded-xl border border-indigo-400/30 bg-indigo-500/15 flex items-center justify-center text-indigo-300">
                                <Code size={24} aria-hidden="true" />
                              </div>
                              <p className="text-base font-bold text-white">{project.title}</p>
                              <p className="text-xs font-mono text-slate-400">
                                LIVE PRODUCT / {project.year}
                              </p>
                            </div>
                          )}

                          {!isDesignMode && project.featuredCaseStudy && (
                            <div className="absolute top-3 left-3 inline-flex items-center bg-indigo-600 border border-indigo-300/30 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider text-white">
                              {copy.featured}
                            </div>
                          )}

                          {!isDesignMode && project.isNew && !project.featuredCaseStudy && (
                            <div className="absolute top-3 left-3 inline-flex items-center bg-emerald-700 border border-emerald-300/30 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider text-white">
                              {copy.newest}
                            </div>
                          )}

                          <div className="absolute top-3 right-3 bg-black/85 border border-white/15 px-2.5 py-1 rounded-md text-[11px] font-mono text-white">
                            {project.year}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-3 flex flex-col flex-1 w-full">
                        <div className="flex justify-between items-center mb-2.5 gap-3">
                          <h2 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {project.title}
                          </h2>
                          {isDesignMode ? (
                            <Maximize2
                              size={17}
                              aria-hidden="true"
                              className="text-indigo-400 shrink-0"
                            />
                          ) : (
                            <ArrowUpRight
                              size={18}
                              aria-hidden="true"
                              className="text-slate-400 group-hover:text-white shrink-0"
                            />
                          )}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-5">
                          {project.caseStudy?.summary || project.desc}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-200 border border-white/10"
                            >
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
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] px-6 py-16 text-center">
              <Search size={28} aria-hidden="true" className="mx-auto text-slate-400 mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">{copy.emptyTitle}</h2>
              <p className="text-slate-300 text-sm mb-6">{copy.emptyText}</p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-white hover:bg-white/15 transition-colors"
              >
                {copy.clear}
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-[#151515]/95 border border-white/20 text-white shadow-lg hover:bg-indigo-600 transition-all"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Design preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-5 right-5 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white/15 rounded-full text-white hover:bg-white/25 z-50"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={selectedImage}
              alt="Design project preview"
              width="1200"
              height="900"
              decoding="async"
              className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl border border-white/15"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Archive;
