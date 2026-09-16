import { ArrowLeft, Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { isId } = useLanguage();

  const copy = isId
    ? {
        code: "404 / HALAMAN TIDAK DITEMUKAN",
        title: "Sepertinya kamu keluar jalur.",
        text: "URL ini tidak tersedia atau mungkin sudah berubah. Kembali ke portfolio atau buka arsip project untuk melanjutkan.",
        home: "Kembali ke Home",
        archive: "Lihat Semua Project",
        back: "Kembali",
      }
    : {
        code: "404 / PAGE NOT FOUND",
        title: "Looks like you took a wrong turn.",
        text: "This URL does not exist or may have moved. Head back to the portfolio or browse the project archive to continue.",
        home: "Back to Home",
        archive: "Browse Projects",
        back: "Go Back",
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 text-slate-200">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-indigo-500/10 px-4 py-2 font-mono text-xs tracking-[0.16em] text-indigo-300">
          <Search size={14} /> {copy.code}
        </div>

        <div className="mb-5 text-[clamp(5rem,18vw,10rem)] font-black leading-none tracking-tighter text-white/5">404</div>

        <h1 className="-mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          {copy.text}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            <Home size={17} /> {copy.home}
          </button>
          <button
            onClick={() => navigate("/archive")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copy.archive}
          </button>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-300"
        >
          <ArrowLeft size={15} /> {copy.back}
        </button>
      </motion.section>
    </main>
  );
};

export default NotFound;
