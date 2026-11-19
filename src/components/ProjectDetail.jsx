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
import Footer from "./Footer";

const allProjects = [...latestProjects, ...devProjects];

const InfoBlock = ({ icon: Icon, label, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    className="grid md:grid-cols-[0.72fr_1.28fr] gap-6 md:gap-14 py-10 md:py-14 border-t border-white/10"
  >
    <div>
      <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs md:text-sm uppercase tracking-wider mb-3">
        <Icon size={16} aria-hidden="true" /> {label}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h2>
    </div>
    <div className="text-slate-300 text-base md:text-lg leading-relaxed">{children}</div>
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
        snapshotText:
          "Buka implementasi live untuk melihat antarmuka, alur interaksi, dan pengalaman produk versi saat ini secara langsung.",
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
        snapshotText:
          "Explore the live implementation to see the current interface, interaction flow, and product experience directly.",
        openLive: "Open live implementation",
        next: "Next Project",
      };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (project) {
      document.title = `${project.title} | Gilar Wahiditya`;
    }

    return () => {
      document.title = "Gilar Wahiditya | Web Developer & Information Systems";
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#050505] text-white">
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <p className="text-indigo-300 font-mono mb-4">{copy.notFoundCode}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{copy.notFoundTitle}</h1>
            <p className="text-slate-300 mb-8">{copy.notFoundText}</p>
            <button
              type="button"
              onClick={() => navigate("/archive")}
              className="min-h-[46px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold"
            >
              <ArrowLeft size={18} aria-hidden="true" /> {copy.backArchive}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nextRawProject = allProjects[(projectIndex + 1) % allProjects.length];
  const nextProject = localizeProject(nextRawProject, language);
  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-200 overflow-hidden">
      <main className="flex-1 relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-20">
        <button
          type="button"
          onClick={() => navigate("/archive")}
          className="group min-h-[44px] inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft
            size={18}
            aria-hidden="true"
            className="group-hover:-translate-x-1 transition-transform"
          />
          {copy.backArchive}
        </button>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-end mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-indigo-300 font-mono text-sm tracking-wider">
                {caseStudy ? copy.featured : copy.detail}
              </span>
              {caseStudy?.eyebrow && (
                <span className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/15 text-xs text-slate-200">
                  {caseStudy.eyebrow}
                </span>
              )}
              {project.isNew && (
                <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-xs text-emerald-300">
                  {isId ? "PROJECT BARU" : "NEW PROJECT"}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.06] mb-5">
              {project.title}
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {caseStudy?.summary || project.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-end gap-3 lg:justify-end">
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/10 text-white font-semibold transition-all"
              >
                <Github size={18} aria-hidden="true" /> {copy.source}
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all"
            >
              {copy.live} <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#0D0D10] shadow-2xl mb-10">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              width="1200"
              height="675"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x675/111827/FFFFFF?text=Project+Preview";
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#111116] text-center px-8">
              <div className="h-20 w-20 rounded-2xl border border-indigo-400/30 bg-indigo-500/15 flex items-center justify-center text-indigo-300">
                <Code2 size={36} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold text-white">{project.title}</p>
                <p className="mt-2 font-mono text-xs md:text-sm text-slate-300">
                  LIVE PRODUCT / {project.year}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12 md:mb-16">
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wider mb-3">
              <Calendar size={15} aria-hidden="true" /> {copy.year}
            </div>
            <p className="text-white font-semibold text-lg">{project.year}</p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wider mb-3">
              <Layers3 size={15} aria-hidden="true" /> {copy.tech}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-white/[0.06] border border-white/15 text-sm text-slate-200"
                >
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
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {caseStudy.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-4"
                  >
                    <CheckCircle2
                      size={17}
                      aria-hidden="true"
                      className="text-indigo-300 shrink-0 mt-0.5"
                    />
                    <span className="text-sm md:text-base text-slate-200 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoBlock>

            <InfoBlock icon={Wrench} label={copy.labels.challenge} title={copy.titles.challenge}>
              <p>{caseStudy.challenge}</p>
            </InfoBlock>

            <InfoBlock icon={Trophy} label={copy.labels.outcome} title={copy.titles.outcome}>
              <p>{caseStudy.outcome}</p>
              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 text-indigo-300 hover:text-white font-semibold transition-colors"
                >
                  {copy.explore} <ExternalLink size={16} aria-hidden="true" />
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold transition-colors"
                  >
                    {copy.inspect} <Github size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </InfoBlock>
          </div>
        ) : (
          <section className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 py-12 border-y border-white/10">
            <div>
              <span className="text-indigo-300 font-mono text-sm">{copy.snapshot}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">{copy.built}</h2>
            </div>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed">
              <p>{project.desc}</p>
              <p className="mt-5 text-sm md:text-base text-slate-300">{copy.snapshotText}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 mt-6 text-indigo-300 hover:text-white font-semibold transition-colors"
              >
                {copy.openLive} <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        )}

        <GitHubChangelog source={project.source} />

        <button
          type="button"
          onClick={() => navigate(`/projects/${nextProject.slug}`)}
          className="group w-full mt-12 p-6 md:p-8 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] hover:border-indigo-400/40 transition-all text-left flex items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-400 block mb-2">
              {copy.next}
            </span>
            <span className="text-xl md:text-2xl font-bold text-white">{nextProject.title}</span>
          </div>
          <ArrowRight
            aria-hidden="true"
            className="text-indigo-300 group-hover:translate-x-2 transition-transform shrink-0"
          />
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
