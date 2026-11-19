import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { isId } = useLanguage();

  return (
    <footer className="bg-brand-black border-t border-white/10 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-slate-300 text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-brand-cream font-semibold">Gilar Wahiditya</span>.{" "}
          {isId ? "Seluruh hak cipta dilindungi." : "All rights reserved."}
        </div>

        <nav
          aria-label={isId ? "Tautan footer" : "Footer links"}
          className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-slate-300"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/archive" className="hover:text-white transition-colors">
            Archive
          </Link>
          <Link to="/resume" className="hover:text-white transition-colors">
            Resume
          </Link>
          <a
            href="https://github.com/LarzzCode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gilarwdy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
