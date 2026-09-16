import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Lightbulb,
  Target,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";
import { devProjects } from "../data/projectData";
import { latestProjects } from "../data/latestProjects";
import { useLanguage } from "../i18n/LanguageContext";
import { localizeProject } from "../i18n/projectTranslations";
import GitHubChangelog from "./GitHubChangelog";

const allProjects = [...latestProjects, ...devProjects];

const InfoBlock = ({ icon: Icon, label, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    className="grid md:grid-cols-[0.72fr_1.28fr] gap-6 md:gap-14 py-10 md:py-14 border-t border-white/10"
  >
    <div>
      <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs md:text-sm uppercase tracking-wider mb-3">
        <Icon size={16} /> {label}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h2>
    </div>
    <div className="text-slate-400 text-base md:text-lg leading-relaxed">{children}</div>
  </motion.div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, isId } = useLanguage();
  const projectIndex = allProjects.findIndex((item) => item.slug === slug);
  const rawProject = allProjects[projectIndex];
  const project = rawProject ? localizeProject(rawProject, language) : null;

  const copy = isId
    ? {
        notFoundCode: "404 / PROJECT TIDAK DITEMUKAN",
        notFoundTitle: "Project tidak ditemukan.",
        notFoundText: "Project mungkin dipindahkan atau URL sudah tidak berlaku.",
        backArchive: "Kembali ke Archive",
        featured: "UNGGULAN / CASE STUDY",
        detail: "PROJECT / DETAIL",
        source: "Source Code",
        live: "Lihat Project Live",
        year: "Tahun",
        tech: "Teknologi",
        labels: {
          problem: "01 / Masalah",
          solution: "02 / Solusi",
          role: "03 / Peran Saya",
          features: "04 / Fitur Utama",
          challenge: "05 / Tantangan",
          outcome: "06 / Hasil",
        },
        titles: {
          problem: "Masalah yang ingin saya selesaikan.",
          solution: "Mengubah masalah menjadi sebuah produk.",
          role: "Bagian yang menjadi tanggung jawab saya.",
          features: "Pengalaman inti yang saya bangun.",
          challenge: "Tantangan desain dan teknis utama.",
          outcome: "Hasil yang dicapai project.",
        },
        explore: "Buka project live",
        inspect: "Lihat source code",
        snapshot: "RINGKASAN PROJECT",
        built: "Dibangun sebagai produk yang benar-benar berjalan.",
        snapshotText: "Buka implementasi live untuk melihat antarmuka, alur interaksi, dan pengalaman produk versi saat ini secara langsung.",
        openLive: "Buka implementasi live",
        next: "Project Berikutnya",
      }
    : {
        notFoundCode: "404 / PROJECT NOT FOUND",
        notFoundTitle: "Project not found.",
        notFoundText: "The project may have moved or the URL is no longer valid.",
        backArchive: "Back to Archive",
        featured: "FEATURED / CASE STUDY",
        detail: "PROJECT / DETAIL",
        source: "Source Code",
        live: "View Live Project",
        year: "Year",
        tech: "Technology",
        labels: {
          problem: "01 / Problem",
          solution: "02 / Solution",
          role: "03 / My Role",
          features: "04 / Key Features",
          challenge: "05 / Challenge",
          outcome: "06 / Outcome",
        },
        titles: {
          problem: "The problem I wanted to solve.",
          solution: "Turning the problem into a product.",
          role: "What I was responsible for.",
          features: "The core experience I built.",
          challenge: "The main design and technical challenge.",
          outcome: "What the project achieved.",
        },
        explore: "Explore live project",
        inspect: "Inspect source code",
        snapshot: "PROJECT SNAPSHOT",
        built: "Built as a working product.",
        snapshotText: "Explore the live implementation to see the current interface, interaction flow, and product experience directly.",
        openLive: "Open live implementation",
        next: "Next Project",
      };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (project) {
      document.title = `${project.title} | Gilar Wahiditya`;
    }

    return () => {
      document.title = "Gilar Wahiditya | Portfolio";
    };
  }, [project?.title]);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-indigo-400 font-mono mb-4">{copy.notFoundCode}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{copy.notFoundTitle}</h1>
          <p className="text-slate-400 mb-8">{copy.notFoundText}</p>
          <button
            onClick={() => navigate("/archive")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold"
          >
            <ArrowLeft size={18} /> {copy.backArchive}
          </button>
        </div>
      </main>
    );
  }

  const nextRawProject = allProjects[(projectIndex + 1) % allProjects.length];
  const nextProject = localizeProject(nextRawProject, language);
  const caseStudy = project.caseStudy;

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 overflow-hidden">
      <div className="fixed inset-x-0 top-0 h-[520px] bg-indigo-900/10 blur-[140px] rounded-full -translate-y-1/2 pointer-events-none" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-10 md:pt-16 pb-24">
        <button
          onClick={() => navigate("/archive")}
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {copy.backArchive}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end mb-12"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-indigo-400 font-mono text-sm tracking-wider">
                {caseStudy ? copy.featured : copy.detail}
              </span>
              {caseStudy?.eyebrow && (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                  {caseStudy.eyebrow}
                </span>
              )}
              {project.isNew && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs text-emerald-300">
                  {isId ? "PROJECT BARU" : "NEW PROJECT"}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              {project.title}
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
              {caseStudy?.summary || project.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-end gap-3 lg:justify-end">
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all"
              >
                <Github size={18} /> {copy.source}
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
            >
              {copy.live} <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0F0F0F] shadow-2xl mb-10"
        >
          {project.image ? (
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
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_50%_20%,rgba(79,70,229,0.25),transparent_40%),linear-gradient(135deg,#111114,#070709)] text-center px-8">
              <div className="h-20 w-20 rounded-3xl border border-indigo-400/20 bg-indigo-500/10 flex items-center justify-center text-indigo-300 shadow-2xl shadow-indigo-500/10">
                <Code2 size={38} />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-white">{project.title}</p>
                <p className="mt-2 font-mono text-xs md:text-sm text-slate-600">LIVE PRODUCT / {project.year}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-12 md:mb-16">
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider mb-3">
              <Calendar size={15} /> {copy.year}
            </div>
            <p className="text-white font-semibold text-lg">{project.year}</p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider mb-3">
              <Layers3 size={15} /> {copy.tech}
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

        {caseStudy ? (
          <div className="border-b border-white/10">
            <InfoBlock icon={Target} label={copy.labels.problem} title={copy.titles.problem}>
              <p>{caseStudy.problem}</p>
            </InfoBlock>

            <InfoBlock icon={Lightbulb} label={copy.labels.solution} title={copy.titles.solution}>
              <p>{caseStudy.solution}</p>
            </InfoBlock>

            <InfoBlock icon={UserRound} label={copy.labels.role} title={copy.titles.role}>
              <p>{caseStudy.role}</p>
            </InfoBlock>

            <InfoBlock icon={CheckCircle2} label={copy.labels.features} title={copy.titles.features}>
              <div className="grid sm:grid-cols-2 gap-3">
                {caseStudy.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
                    <CheckCircle2 size={17} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-slate-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </InfoBlock>

            <InfoBlock icon={Wrench} label={copy.labels.challenge} title={copy.titles.challenge}>
              <p>{caseStudy.challenge}</p>
            </InfoBlock>

            <InfoBlock icon={Trophy} label={copy.labels.outcome} title={copy.titles.outcome}>
              <p>{caseStudy.outcome}</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                >
                  {copy.explore} <ExternalLink size={16} />
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors"
                  >
                    {copy.inspect} <Github size={16} />
                  </a>
                )}
              </div>
            </InfoBlock>
          </div>
        ) : (
          <section className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 py-12 border-y border-white/10">
            <div>
              <span className="text-indigo-400 font-mono text-sm">{copy.snapshot}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{copy.built}</h2>
            </div>
            <div className="text-slate-400 text-base md:text-lg leading-relaxed">
              <p>{project.desc}</p>
              <p className="mt-5 text-sm md:text-base text-slate-500">{copy.snapshotText}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                {copy.openLive} <ExternalLink size={16} />
              </a>
            </div>
          </section>
        )}

        <GitHubChangelog source={project.source} />

        <button
          onClick={() => navigate(`/projects/${nextProject.slug}`)}
          className="group w-full mt-12 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all text-left flex items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2">{copy.next}</span>
            <span className="text-xl md:text-2xl font-bold text-white">{nextProject.title}</span>
          </div>
          <ArrowRight className="text-indigo-400 group-hover:translate-x-2 transition-transform shrink-0" />
        </button>
      </section>
    </main>
  );
};

export default ProjectDetail;
