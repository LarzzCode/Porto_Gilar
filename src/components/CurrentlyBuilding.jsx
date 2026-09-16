import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowUpRight, ExternalLink, Github, GitCommitHorizontal, Radar } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const DAY_MS = 86_400_000;

const getAgeInDays = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return Math.max(0, Math.floor((Date.now() - date.getTime()) / DAY_MS));
};

const formatRelativeDate = (dateString, isId) => {
  const diffDays = getAgeInDays(dateString);
  if (diffDays === null) return null;
  const date = new Date(dateString);

  if (isId) {
    if (diffDays === 0) return "hari ini";
    if (diffDays === 1) return "kemarin";
    if (diffDays < 7) return `${diffDays} hari lalu`;
    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks < 5) return `${diffWeeks} minggu lalu`;
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: date.getFullYear() === new Date().getFullYear() ? undefined : "numeric" }).format(date);
  }

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
  return new Intl.DateTimeFormat("en", { month: "short", year: date.getFullYear() === new Date().getFullYear() ? undefined : "numeric", day: "numeric" }).format(date);
};

const getAutoStatus = (pushedAt, isId) => {
  const days = getAgeInDays(pushedAt);

  if (days === null) {
    return {
      key: "syncing",
      label: isId ? "Mengecek aktivitas" : "Checking activity",
      active: false,
      badge: "border-white/10 bg-white/5 text-slate-400",
    };
  }

  if (days <= 7) {
    return {
      key: "active",
      label: isId ? "Aktif sekarang" : "Active now",
      active: true,
      badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    };
  }

  if (days <= 30) {
    return {
      key: "recent",
      label: isId ? "Baru diperbarui" : "Recently updated",
      active: false,
      badge: "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
    };
  }

  return {
    key: "stable",
    label: isId ? "Stabil" : "Stable",
    active: false,
    badge: "border-slate-400/15 bg-slate-400/5 text-slate-400",
  };
};

const CurrentlyBuilding = () => {
  const { isId } = useLanguage();
  const [repoActivity, setRepoActivity] = useState({});
  const [activityState, setActivityState] = useState("loading");

  const builds = useMemo(
    () => [
      {
        repo: "Porto_Gilar",
        title: "Portfolio Evolution",
        description: isId
          ? "Mengembangkan portfolio ini menjadi produk yang lebih kuat untuk recruiter dan client melalui case study, responsive UX, analytics, bilingual content, dan jalur conversion yang lebih jelas."
          : "Evolving this portfolio into a stronger recruiter and client-facing product through case studies, responsive UX, analytics, bilingual content, and clearer conversion paths.",
        focus: ["Case Studies", "Responsive UX", "Vercel Analytics"],
        repoUrl: "https://github.com/LarzzCode/Porto_Gilar",
        liveUrl: "https://portogilar.vercel.app/",
      },
      {
        repo: "college-command-center",
        title: "College Command Center",
        description: isId
          ? "Dashboard belajar pribadi untuk Universitas Terbuka dengan aktivitas Tuton, tracking mata kuliah, target, pengaturan tema, penyimpanan lokal, dan pengalaman PWA."
          : "A personal study dashboard for Universitas Terbuka with Tuton activity generation, course tracking, targets, theme controls, local persistence, and installable PWA behavior.",
        focus: ["React", "TypeScript", "PWA"],
        repoUrl: "https://github.com/LarzzCode/college-command-center",
        liveUrl: "https://college-command-center-lar.vercel.app/",
      },
      {
        repo: "ap-tools",
        title: "Ditya Tools",
        description: isId
          ? "Kumpulan utility bebas iklan untuk kebutuhan sehari-hari, dibangun dengan antarmuka React modern dan workflow yang berfokus pada browser."
          : "An ad-free personal utility suite built around practical everyday tools, with a modern React interface and browser-first workflows.",
        focus: ["React", "TypeScript", "Utility Tools"],
        repoUrl: "https://github.com/LarzzCode/ap-tools",
        liveUrl: "https://ditya-tools.vercel.app/",
      },
    ],
    [isId],
  );

  const copy = isId
    ? {
        label: "SEKARANG / BUILD LOG",
        titleA: "Yang sedang saya ",
        titleB: "bangun.",
        intro: "Status di bawah dihitung otomatis dari aktivitas push GitHub terbaru: aktif ≤7 hari, baru diperbarui 8–30 hari, dan stabil setelahnya.",
        active: "build aktif",
        github: "GitHub",
        connected: "terhubung",
        syncing: "sinkronisasi",
        fallback: "fallback",
        updated: "GitHub diperbarui",
        checking: "Memeriksa aktivitas GitHub terbaru…",
        available: "Repository publik tersedia",
      }
    : {
        label: "NOW / BUILD LOG",
        titleA: "What I'm ",
        titleB: "building now.",
        intro: "Status is calculated automatically from recent GitHub pushes: active within 7 days, recently updated within 30 days, then stable.",
        active: "active build",
        github: "GitHub",
        connected: "connected",
        syncing: "syncing",
        fallback: "fallback",
        updated: "GitHub updated",
        checking: "Checking latest GitHub activity…",
        available: "Public repository available",
      };

  useEffect(() => {
    const controller = new AbortController();

    const loadActivity = async () => {
      try {
        const response = await fetch("https://api.github.com/users/LarzzCode/repos?sort=pushed&per_page=100", {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);

        const repos = await response.json();
        const activity = Object.fromEntries(
          repos
            .filter((repo) => builds.some((build) => build.repo === repo.name))
            .map((repo) => [repo.name, { pushedAt: repo.pushed_at, language: repo.language }]),
        );

        setRepoActivity(activity);
        setActivityState("ready");
      } catch (error) {
        if (error.name !== "AbortError") setActivityState("fallback");
      }
    };

    loadActivity();
    return () => controller.abort();
  }, [builds]);

  const buildsWithStatus = useMemo(
    () => builds.map((build) => ({
      ...build,
      status: getAutoStatus(repoActivity[build.repo]?.pushedAt, isId),
    })),
    [builds, repoActivity, isId],
  );

  const activeCount = useMemo(
    () => buildsWithStatus.filter((build) => build.status.active).length,
    [buildsWithStatus],
  );

  return (
    <div className="mt-20 md:mt-28 border-t border-white/5 pt-14 md:pt-20">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
          <div className="inline-flex items-center gap-2 text-emerald-300/90 font-mono text-xs md:text-sm tracking-wider mb-3"><Radar size={15} /> {copy.label}</div>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{copy.titleA}<span className="text-indigo-400">{copy.titleB}</span></h3>
          <p className="text-slate-500 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">{copy.intro}</p>
        </motion.div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-emerald-300/80">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {activeCount} {copy.active}
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
            <Activity size={14} /> {copy.github} {activityState === "ready" ? copy.connected : activityState === "loading" ? copy.syncing : copy.fallback}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 md:gap-5">
        {buildsWithStatus.map((build, index) => {
          const activity = repoActivity[build.repo];
          const updated = formatRelativeDate(activity?.pushedAt, isId);

          return (
            <motion.article key={build.repo} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0d0d0f] p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/25 hover:bg-[#101014]">
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${build.status.badge}`}>{build.status.label}</span>
                  <h4 className="mt-3 text-xl md:text-2xl font-bold text-white">{build.title}</h4>
                </div>
                <Github className="shrink-0 text-slate-600 transition-colors group-hover:text-indigo-300" size={22} />
              </div>

              <p className="relative text-sm leading-relaxed text-slate-400 mb-6">{build.description}</p>
              <div className="relative flex flex-wrap gap-2 mb-6">{build.focus.map((item) => <span key={item} className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">{item}</span>)}</div>

              <div className="relative mt-auto border-t border-white/5 pt-4">
                <div className="flex min-h-5 items-center gap-2 text-xs text-slate-500 mb-4">
                  <GitCommitHorizontal size={14} />
                  {updated ? <span>{copy.updated} {updated}</span> : activityState === "loading" ? <span>{copy.checking}</span> : <span>{copy.available}</span>}
                  {activity?.language && <span className="ml-auto text-slate-600">{activity.language}</span>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a href={build.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white">GitHub <ArrowUpRight size={14} /></a>
                  <a href={build.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500">Live <ExternalLink size={13} /></a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
