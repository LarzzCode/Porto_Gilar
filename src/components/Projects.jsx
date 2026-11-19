import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
} from "lucide-react";
import { devProjects } from "../data/projectData";
import CurrentlyBuilding from "./CurrentlyBuilding";
import { useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectTranslations";

const Projects = () => {
  const navigate = useNavigate();
  const { language, isId } = useLanguage();
  const allProjects = useMemo(
    () =>
      devProjects
        .filter((project) => project.featuredCaseStudy)
        .map((project) => localizeProject(project, language)),
    [language],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  });

  const copy = isId
    ? {
        eyebrow: "03. / KARYA UNGGULAN",
        titleA: "Case Study ",
        titleB: "Pilihan",
        intro:
          "Melihat lebih dekat project di mana masalah operasional, keputusan produk, dan implementasi teknis sama pentingnya dengan antarmuka akhir.",
        all: "Lihat Semua Project",
        caseStudy: "Baca Case Study",
        live: "Buka Project Live",
        footer: "3 project unggulan · koleksi lengkap ada di Archive",
        pause: "Jeda pergantian slide otomatis",
        play: "Jalankan pergantian slide otomatis",
        prev: "Project sebelumnya",
        next: "Project berikutnya",
        goTo: "Tampilkan project",
      }
    : {
        eyebrow: "03. / FEATURED WORKS",
        titleA: "Selected ",
        titleB: "Case Studies",
        intro:
          "A closer look at projects where operational problems, product decisions, and implementation matter as much as the final interface.",
        all: "View All Projects",
        caseStudy: "Read Case Study",
        live: "Open Live Project",
        footer: "3 featured projects · full collection in Archive",
        pause: "Pause automatic slide rotation",
        play: "Resume automatic slide rotation",
        prev: "Previous project",
        next: "Next project",
        goTo: "Show project",
      };

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      if (newDirection === 1) {
        setCurrentIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1));
      }
    },
    [allProjects.length],
  );

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => paginate(1), 6500);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, paginate]);

  const slideVariants = {
    enter: (newDirection) => ({ x: newDirection > 0 ? 400 : -400, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (newDirection) => ({ zIndex: 0, x: newDirection < 0 ? 400 : -400, opacity: 0 }),
  };

  const currentProject = allProjects[currentIndex];

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-[#050505] relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-sm md:text-base">
              {copy.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {copy.titleA}
              <span className="text-indigo-400">{copy.titleB}</span>
            </h2>
            <p className="text-slate-300 mt-3 max-w-2xl text-sm md:text-base">{copy.intro}</p>
          </motion.div>

          <button
            type="button"
            onClick={() => navigate("/archive")}
            className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs md:text-sm font-bold tracking-widest uppercase border-b border-white/20 hover:border-white pb-2 min-h-[44px]"
          >
            {copy.all}{" "}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="relative w-full h-[640px] md:h-[540px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B0B0E]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${currentProject.title}-${language}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover opacity-55 md:opacity-50"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/800x600/1e1e1e/FFF?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/92 to-[#050505]/45 md:via-[#050505]/75" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/85 to-[#050505]/25 hidden md:block" />
              </div>

              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end md:justify-center items-start w-full md:w-2/3">
                <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                  <span className="text-indigo-200 font-mono bg-indigo-950/90 px-3 py-1 rounded-md border border-indigo-400/30 text-xs md:text-sm">
                    {currentProject.year}
                  </span>
                  <span className="inline-flex items-center text-amber-200 bg-black/80 border border-amber-300/30 px-3 py-1 rounded-md text-xs font-medium">
                    {currentProject.caseStudy?.eyebrow ||
                      (isId ? "Case Study Unggulan" : "Featured Case Study")}
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-5 leading-tight">
                  {currentProject.title}
                </h3>

                <p className="text-slate-200 text-sm md:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed line-clamp-4 md:line-clamp-none">
                  {currentProject.caseStudy?.summary || currentProject.desc}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-2.5 mb-7 md:mb-8 pr-16 md:pr-0">
                  {currentProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#050505]/90 rounded-lg text-xs md:text-sm font-medium border border-white/20 text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => navigate(`/projects/${currentProject.slug}`)}
                    className="w-full sm:w-auto min-h-[46px] px-6 py-3 md:px-7 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
                  >
                    {copy.caseStudy}{" "}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[46px] px-6 py-3 md:px-7 bg-[#050505]/90 hover:bg-white/15 border border-white/20 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
                  >
                    {copy.live}{" "}
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-32 md:bottom-8 right-6 md:right-8 flex flex-col md:flex-row items-center gap-2.5 md:gap-3 z-20">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? copy.play : copy.pause}
              aria-pressed={isPaused}
              className="p-3 min-h-[44px] min-w-[44px] rounded-full bg-[#050505]/90 hover:bg-white/20 border border-white/20 text-white transition-all flex items-center justify-center"
            >
              {isPaused ? (
                <Play size={18} aria-hidden="true" />
              ) : (
                <Pause size={18} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label={copy.prev}
              className="p-3 min-h-[44px] min-w-[44px] rounded-full bg-[#050505]/90 hover:bg-white/20 border border-white/20 text-white transition-all flex items-center justify-center"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label={copy.next}
              className="p-3 min-h-[44px] min-w-[44px] rounded-full bg-[#050505]/90 hover:bg-white/20 border border-white/20 text-white transition-all flex items-center justify-center"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            {!isPaused && (
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6.5, ease: "linear" }}
                className="h-full bg-indigo-500"
              />
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 mt-4 font-mono text-slate-400 text-xs md:text-sm">
          <span>{copy.footer}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" role="group" aria-label="Slide selector">
              {allProjects.map((proj, idx) => (
                <button
                  key={proj.slug}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`${copy.goTo} ${idx + 1}: ${proj.title}`}
                  aria-current={idx === currentIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-7 bg-indigo-400"
                      : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            <span>
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(allProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <CurrentlyBuilding />
      </div>
    </section>
  );
};

export default Projects;
