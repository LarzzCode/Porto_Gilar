import { ArrowLeft, Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import Footer from "./Footer";

const NotFound = () => {
  const navigate = useNavigate();
  const { isId } = useLanguage();

  const copy = isId
    ? {
        code: "404 / HALAMAN TIDAK DITEMUKAN",
        title: "Halaman tidak ditemukan.",
        text: "URL ini tidak tersedia atau sudah dipindahkan. Kembali ke halaman utama portfolio atau buka arsip project untuk melanjutkan.",
        home: "Kembali ke Home",
        archive: "Lihat Semua Project",
        back: "Kembali ke Halaman Sebelumnya",
      }
    : {
        code: "404 / PAGE NOT FOUND",
        title: "Page not found.",
        text: "This URL does not exist or has moved. Return to the portfolio home page or browse the project archive to continue.",
        home: "Back to Home",
        archive: "Browse Projects",
        back: "Go Back",
      };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-200">
      <main className="relative flex-1 flex items-center justify-center px-6 py-16 overflow-hidden">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-indigo-400/25 bg-indigo-500/15 px-3.5 py-1.5 font-mono text-xs tracking-[0.14em] text-indigo-200">
            <Search size={14} aria-hidden="true" /> {copy.code}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {copy.text}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              <Home size={17} aria-hidden="true" /> {copy.home}
            </button>
            <button
              type="button"
              onClick={() => navigate("/archive")}
              className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 font-semibold text-slate-200 transition-colors hover:bg-white/12 hover:text-white"
            >
              {copy.archive}
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-6 min-h-[44px] inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} aria-hidden="true" /> {copy.back}
          </button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
