import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitCommitHorizontal, Github, History, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const parseGitHubRepo = (source) => {
  if (!source) return null;

  try {
    const url = new URL(source);
    if (url.hostname !== "github.com") return null;

    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;

    return {
      owner: parts[0],
      repo: parts[1].replace(/\.git$/i, ""),
    };
  } catch {
    return null;
  }
};

const formatRelativeDate = (dateString, isId) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  const diffDays = Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));

  if (isId) {
    if (diffDays === 0) return "hari ini";
    if (diffDays === 1) return "kemarin";
    if (diffDays < 7) return `${diffDays} hari lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(date);
  }

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(date);
};

const cleanCommitMessage = (message = "") => message.split("\n")[0].trim();

const GitHubChangelog = ({ source }) => {
  const { isId } = useLanguage();
  const repoInfo = useMemo(() => parseGitHubRepo(source), [source]);
  const [commits, setCommits] = useState([]);
  const [state, setState] = useState(repoInfo ? "loading" : "hidden");

  const copy = isId
    ? {
        eyebrow: "LIVE / GITHUB CHANGELOG",
        titleA: "Update development ",
        titleB: "terbaru.",
        intro: "Commit terbaru dibaca langsung dari repository GitHub publik project ini. Saat code baru di-push, daftar ini ikut berubah otomatis.",
        loading: "Mengambil commit terbaru dari GitHub…",
        unavailable: "Changelog GitHub sementara tidak tersedia.",
        unavailableHint: "Repository tetap bisa dibuka langsung melalui GitHub.",
        history: "Lihat seluruh riwayat commit",
        commit: "commit",
      }
    : {
        eyebrow: "LIVE / GITHUB CHANGELOG",
        titleA: "Latest development ",
        titleB: "updates.",
        intro: "Recent commits are read directly from this project's public GitHub repository. New pushes automatically appear here.",
        loading: "Fetching the latest commits from GitHub…",
        unavailable: "GitHub changelog is temporarily unavailable.",
        unavailableHint: "You can still open the repository directly on GitHub.",
        history: "View full commit history",
        commit: "commit",
      };

  useEffect(() => {
    if (!repoInfo) {
      setState("hidden");
      return undefined;
    }

    const controller = new AbortController();
    setState("loading");

    const loadCommits = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/commits?per_page=4`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          },
        );

        if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);

        const data = await response.json();
        const normalized = data.map((item) => ({
          sha: item.sha,
          shortSha: item.sha.slice(0, 7),
          message: cleanCommitMessage(item.commit?.message),
          date: item.commit?.author?.date || item.commit?.committer?.date,
          url: item.html_url,
          author: item.commit?.author?.name || item.author?.login || "GitHub",
        }));

        setCommits(normalized);
        setState("ready");
      } catch (error) {
        if (error.name !== "AbortError") setState("error");
      }
    };

    loadCommits();
    return () => controller.abort();
  }, [repoInfo]);

  if (!repoInfo || state === "hidden") return null;

  const historyUrl = `https://github.com/${repoInfo.owner}/${repoInfo.repo}/commits`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mt-12 md:mt-16 rounded-3xl border border-white/10 bg-[#0c0c0f] overflow-hidden"
      aria-label="GitHub changelog"
    >
      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
        <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.16),transparent_40%)]">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs md:text-sm tracking-wider mb-4">
            <History size={15} /> {copy.eyebrow}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {copy.titleA}<span className="text-indigo-400">{copy.titleB}</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-500">{copy.intro}</p>

          <a
            href={historyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Github size={17} /> {copy.history} <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          {state === "loading" && (
            <div className="min-h-52 flex items-center justify-center text-slate-500 text-sm gap-3">
              <Loader2 size={18} className="animate-spin text-indigo-400" /> {copy.loading}
            </div>
          )}

          {state === "error" && (
            <div className="min-h-52 flex flex-col items-center justify-center text-center px-6">
              <Github size={28} className="text-slate-700 mb-3" />
              <p className="text-slate-300 font-medium">{copy.unavailable}</p>
              <p className="text-slate-600 text-sm mt-1">{copy.unavailableHint}</p>
            </div>
          )}

          {state === "ready" && (
            <div className="divide-y divide-white/[0.07]">
              {commits.map((commit, index) => (
                <a
                  key={commit.sha}
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 sm:gap-4 py-4 first:pt-1 last:pb-1 rounded-xl hover:bg-white/[0.025] px-2 -mx-2 transition-colors"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-indigo-400/15 bg-indigo-500/10 text-indigo-300">
                    <GitCommitHorizontal size={15} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                      <p className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white leading-relaxed break-words">
                        {commit.message || `${copy.commit} ${commit.shortSha}`}
                      </p>
                      <span className="shrink-0 text-[11px] text-slate-600 font-mono">
                        {formatRelativeDate(commit.date, isId)}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-slate-600">
                      <span className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-slate-500">
                        {commit.shortSha}
                      </span>
                      <span className="truncate">{commit.author}</span>
                      {index === 0 && (
                        <span className="ml-auto text-emerald-400/70 uppercase tracking-wider">latest</span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubChangelog;
