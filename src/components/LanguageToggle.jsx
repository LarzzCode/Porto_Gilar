import { Languages } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch language to Indonesian" : "Ganti bahasa ke Inggris"}
      title={language === "en" ? "Bahasa Indonesia" : "English"}
      className="fixed top-[calc(env(safe-area-inset-top)+12px)] right-3 sm:right-6 xl:top-7 xl:right-7 z-[70] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113]/85 px-3 py-2 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-xl transition-all hover:border-indigo-400/40 hover:bg-[#17171b] hover:text-white"
    >
      <Languages size={16} />
      <span>{language === "en" ? "EN" : "ID"}</span>
      <span className="text-slate-600">/</span>
      <span className="text-slate-500">{language === "en" ? "ID" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;
