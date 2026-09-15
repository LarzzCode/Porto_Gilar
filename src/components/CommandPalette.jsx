import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Code2,
  FileText,
  Folder,
  Github,
  Home,
  Linkedin,
  Mail,
  Monitor,
  Search,
  User,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const commands = [
  {
    id: "home",
    label: "Home",
    description: "Back to the hero section",
    keywords: "start top hero landing",
    icon: Home,
    type: "section",
    target: "home",
  },
  {
    id: "about",
    label: "About Gilar",
    description: "Background, mindset, and multidisciplinary experience",
    keywords: "profile about journey biography",
    icon: User,
    type: "section",
    target: "about",
  },
  {
    id: "projects",
    label: "Selected Case Studies",
    description: "Explore featured development work",
    keywords: "work projects portfolio case study",
    icon: Briefcase,
    type: "section",
    target: "projects",
  },
  {
    id: "services",
    label: "Services",
    description: "See what I can build for clients and teams",
    keywords: "service freelance website dashboard design",
    icon: Monitor,
    type: "section",
    target: "services",
  },
  {
    id: "certificates",
    label: "Certificates",
    description: "Browse certifications and learning milestones",
    keywords: "certificate certs learning credential",
    icon: Award,
    type: "section",
    target: "certificates",
  },
  {
    id: "contact",
    label: "Contact Me",
    description: "Start a conversation or project",
    keywords: "contact email hire collaborate work together",
    icon: Mail,
    type: "section",
    target: "contact",
  },
  {
    id: "archive",
    label: "All Projects",
    description: "Open the complete development and design archive",
    keywords: "archive all projects design development",
    icon: Folder,
    type: "route",
    target: "/archive",
  },
  {
    id: "resume",
    label: "View Resume",
    description: "Experience, education, and core skills",
    keywords: "resume cv experience education skills",
    icon: FileText,
    type: "route",
    target: "/resume",
  },
  {
    id: "bagja",
    label: "Bagja College Case Study",
    description: "Education workflow and digital access project",
    keywords: "bagja college education case study",
    icon: Code2,
    type: "route",
    target: "/projects/bagja-college",
  },
  {
    id: "finance",
    label: "Lar-Finance Case Study",
    description: "Personal finance platform with budgeting and insights",
    keywords: "finance money budget case study lar finance",
    icon: Code2,
    type: "route",
    target: "/projects/lar-finance",
  },
  {
    id: "ai",
    label: "Lar-Ai Case Study",
    description: "AI assistant interface powered by Gemini",
    keywords: "ai gemini assistant case study lar ai",
    icon: Code2,
    type: "route",
    target: "/projects/lar-ai",
  },
  {
    id: "github",
    label: "GitHub",
    description: "Open LarzzCode on GitHub",
    keywords: "github code repositories source",
    icon: Github,
    type: "external",
    target: "https://github.com/LarzzCode",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Open Gilar's LinkedIn profile",
    keywords: "linkedin professional profile network",
    icon: Linkedin,
    type: "external",
    target: "https://linkedin.com/in/gilarwdy",
  },
];

const CommandPalette = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;

    return commands.filter((command) =>
      `${command.label} ${command.description} ${command.keywords}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

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
      window.setTimeout(() => {
        document.getElementById(command.target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 60);
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

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) =>
          filteredCommands.length ? (current + 1) % filteredCommands.length : 0,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) =>
          filteredCommands.length
            ? (current - 1 + filteredCommands.length) % filteredCommands.length
            : 0,
        );
        return;
      }

      if (event.key === "Enter" && filteredCommands.length) {
        event.preventDefault();
        runCommand(filteredCommands[activeIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredCommands, location.pathname, open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+6.75rem)] left-4 sm:left-6 xl:bottom-8 xl:left-8 z-40 xl:z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#151515]/90 px-3.5 py-3 text-slate-200 shadow-xl backdrop-blur-md transition-all hover:border-indigo-400/40 hover:bg-[#1a1a1f] hover:text-white"
        aria-label="Open portfolio command palette"
      >
        <Search size={19} />
        <span className="hidden sm:inline text-xs font-semibold">Search</span>
        <kbd className="hidden xl:inline rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/70 px-3 pt-[8vh] sm:px-6 sm:pt-[12vh] backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePalette();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] shadow-2xl shadow-black/60"
              role="dialog"
              aria-modal="true"
              aria-label="Portfolio command palette"
            >
              <div className="flex items-center gap-3 border-b border-white/8 px-4 sm:px-5">
                <Search size={20} className="shrink-0 text-indigo-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search portfolio…"
                  className="h-14 sm:h-16 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-600"
                  aria-label="Search portfolio commands"
                />
                <button
                  type="button"
                  onClick={closePalette}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="Close command palette"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[58vh] overflow-y-auto p-2 sm:p-3">
                {filteredCommands.length ? (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={command.id}
                        type="button"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => runCommand(command)}
                        className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${
                          isActive
                            ? "bg-indigo-600/15 text-white ring-1 ring-indigo-500/25"
                            : "text-slate-300 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                              isActive
                                ? "border-indigo-400/25 bg-indigo-500/15 text-indigo-300"
                                : "border-white/8 bg-white/[0.03] text-slate-500"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">{command.label}</p>
                            <p className="mt-0.5 truncate text-xs text-slate-500">
                              {command.description}
                            </p>
                          </div>
                          <span className="hidden sm:block text-[10px] uppercase tracking-[0.14em] text-slate-600">
                            {command.type === "external"
                              ? "Open"
                              : command.type === "route"
                                ? "Page"
                                : "Jump"}
                          </span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="px-4 py-12 text-center">
                    <Search size={24} className="mx-auto mb-3 text-slate-700" />
                    <p className="text-sm font-medium text-slate-400">No matching command</p>
                    <p className="mt-1 text-xs text-slate-600">Try “finance”, “resume”, “services”, or “contact”.</p>
                  </div>
                )}
              </div>

              <div className="hidden sm:flex items-center justify-between border-t border-white/8 px-5 py-3 text-[10px] font-mono text-slate-600">
                <span>↑ ↓ Navigate · Enter Open · Esc Close</span>
                <span>Ctrl / ⌘ + K</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
