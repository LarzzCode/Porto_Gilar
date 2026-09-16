import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Briefcase, Code2, FileText, Folder, Github, Home, Linkedin, Mail, Monitor, Search, User, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const CommandPalette = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isId } = useLanguage();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = useMemo(
    () => [
      { id: "home", label: "Home", description: isId ? "Kembali ke bagian utama" : "Back to the hero section", keywords: "start top hero landing home", icon: Home, type: "section", target: "home" },
      { id: "about", label: isId ? "Tentang Gilar" : "About Gilar", description: isId ? "Latar belakang, pola pikir, dan pengalaman" : "Background, mindset, and multidisciplinary experience", keywords: "profile about journey biography tentang profil", icon: User, type: "section", target: "about" },
      { id: "projects", label: isId ? "Case Study Pilihan" : "Selected Case Studies", description: isId ? "Lihat karya development unggulan" : "Explore featured development work", keywords: "work projects portfolio case study karya project", icon: Briefcase, type: "section", target: "projects" },
      { id: "services", label: isId ? "Layanan" : "Services", description: isId ? "Lihat yang bisa saya bangun untuk client dan tim" : "See what I can build for clients and teams", keywords: "service freelance website dashboard design jasa layanan", icon: Monitor, type: "section", target: "services" },
      { id: "certificates", label: isId ? "Sertifikat" : "Certificates", description: isId ? "Lihat sertifikasi dan milestone belajar" : "Browse certifications and learning milestones", keywords: "certificate certs learning credential sertifikat", icon: Award, type: "section", target: "certificates" },
      { id: "contact", label: isId ? "Hubungi Saya" : "Contact Me", description: isId ? "Mulai percakapan atau project" : "Start a conversation or project", keywords: "contact email hire collaborate work together kontak", icon: Mail, type: "section", target: "contact" },
      { id: "archive", label: isId ? "Semua Project" : "All Projects", description: isId ? "Buka seluruh archive development dan design" : "Open the complete development and design archive", keywords: "archive all projects design development arsip", icon: Folder, type: "route", target: "/archive" },
      { id: "resume", label: isId ? "Lihat Resume" : "View Resume", description: isId ? "Pengalaman, pendidikan, dan skill utama" : "Experience, education, and core skills", keywords: "resume cv experience education skills pengalaman", icon: FileText, type: "route", target: "/resume" },
      { id: "bagja", label: "Bagja College Case Study", description: isId ? "Workflow pendidikan dan project akses digital" : "Education workflow and digital access project", keywords: "bagja college education case study", icon: Code2, type: "route", target: "/projects/bagja-college" },
      { id: "finance", label: "Lar-Finance Case Study", description: isId ? "Platform keuangan pribadi dengan budgeting dan insight" : "Personal finance platform with budgeting and insights", keywords: "finance money budget case study lar finance keuangan", icon: Code2, type: "route", target: "/projects/lar-finance" },
      { id: "ai", label: "Lar-Ai Case Study", description: isId ? "Antarmuka asisten AI berbasis Gemini" : "AI assistant interface powered by Gemini", keywords: "ai gemini assistant case study lar ai", icon: Code2, type: "route", target: "/projects/lar-ai" },
      { id: "college", label: "College Command Center", description: isId ? "Dashboard Tuton dan produktivitas kuliah UT" : "UT Tuton and study productivity dashboard", keywords: "college command center tuton ut study", icon: Code2, type: "route", target: "/projects/college-command-center" },
      { id: "tools", label: "Ditya Tools", description: isId ? "Kumpulan utility browser bebas iklan" : "Ad-free browser utility suite", keywords: "ditya tools utility pdf qr compressor", icon: Code2, type: "route", target: "/projects/ditya-tools" },
      { id: "github", label: "GitHub", description: isId ? "Buka akun LarzzCode di GitHub" : "Open LarzzCode on GitHub", keywords: "github code repositories source", icon: Github, type: "external", target: "https://github.com/LarzzCode" },
      { id: "linkedin", label: "LinkedIn", description: isId ? "Buka profil LinkedIn Gilar" : "Open Gilar's LinkedIn profile", keywords: "linkedin professional profile network", icon: Linkedin, type: "external", target: "https://linkedin.com/in/gilarwdy" },
    ],
    [isId],
  );

  const copy = isId
    ? { placeholder: "Cari portfolio…", close: "Tutup command palette", noMatch: "Perintah tidak ditemukan", try: "Coba ‘finance’, ‘resume’, ‘layanan’, atau ‘kontak’.", open: "Buka", page: "Halaman", jump: "Lompat", footer: "↑ ↓ Navigasi · Enter Buka · Esc Tutup" }
    : { placeholder: "Search portfolio…", close: "Close command palette", noMatch: "No matching command", try: "Try ‘finance’, ‘resume’, ‘services’, or ‘contact’.", open: "Open", page: "Page", jump: "Jump", footer: "↑ ↓ Navigate · Enter Open · Esc Close" };

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) => `${command.label} ${command.description} ${command.keywords}`.toLowerCase().includes(normalized));
  }, [commands, query]);

  useEffect(() => {
    const openPalette = () => setOpen(true);
    window.addEventListener("portfolio:command-palette", openPalette);
    return () => window.removeEventListener("portfolio:command-palette", openPalette);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => setActiveIndex(0), [query, open]);

  const closePalette = () => {
    setOpen(false);
    setQuery("");
  };

  const runCommand = (command) => {
    if (!command) return;
    closePalette();

    if (command.type === "external") {
      const newWindow = window.open(command.target, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
      return;
    }
    if (command.type === "route") {
      navigate(command.target);
      return;
    }
    if (location.pathname === "/") {
      window.setTimeout(() => document.getElementById(command.target)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      return;
    }
    navigate("/", { state: { scrollTo: command.target } });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }
      if (!open) return;
      if (event.key === "Escape") { event.preventDefault(); closePalette(); return; }
      if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((current) => filteredCommands.length ? (current + 1) % filteredCommands.length : 0); return; }
      if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((current) => filteredCommands.length ? (current - 1 + filteredCommands.length) % filteredCommands.length : 0); return; }
      if (event.key === "Enter" && filteredCommands.length) { event.preventDefault(); runCommand(filteredCommands[activeIndex]); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredCommands, location.pathname, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] bg-black/70 px-3 pt-[8vh] sm:px-6 sm:pt-[12vh] backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) closePalette(); }}>
          <motion.div initial={{ opacity: 0, y: -16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.18 }} className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] shadow-2xl shadow-black/60" role="dialog" aria-modal="true" aria-label="Portfolio command palette">
            <div className="flex items-center gap-3 border-b border-white/8 px-4 sm:px-5">
              <Search size={20} className="shrink-0 text-indigo-400" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} className="h-14 sm:h-16 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-600" aria-label={copy.placeholder} />
              <button type="button" onClick={closePalette} className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-white" aria-label={copy.close}><X size={18} /></button>
            </div>

            <div className="max-h-[58vh] overflow-y-auto p-2 sm:p-3">
              {filteredCommands.length ? filteredCommands.map((command, index) => {
                const Icon = command.icon;
                const isActive = index === activeIndex;
                return (
                  <button key={command.id} type="button" onMouseEnter={() => setActiveIndex(index)} onClick={() => runCommand(command)} className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${isActive ? "bg-indigo-600/15 text-white ring-1 ring-indigo-500/25" : "text-slate-300 hover:bg-white/[0.04]"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${isActive ? "border-indigo-400/25 bg-indigo-500/15 text-indigo-300" : "border-white/8 bg-white/[0.03] text-slate-500"}`}><Icon size={18} /></div>
                      <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{command.label}</p><p className="mt-0.5 truncate text-xs text-slate-500">{command.description}</p></div>
                      <span className="hidden sm:block text-[10px] uppercase tracking-[0.14em] text-slate-600">{command.type === "external" ? copy.open : command.type === "route" ? copy.page : copy.jump}</span>
                    </div>
                  </button>
                );
              }) : (
                <div className="px-4 py-12 text-center"><Search size={24} className="mx-auto mb-3 text-slate-700" /><p className="text-sm font-medium text-slate-400">{copy.noMatch}</p><p className="mt-1 text-xs text-slate-600">{copy.try}</p></div>
              )}
            </div>

            <div className="hidden sm:flex items-center justify-between border-t border-white/8 px-5 py-3 text-[10px] font-mono text-slate-600"><span>{copy.footer}</span><span>Ctrl / ⌘ + K</span></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
