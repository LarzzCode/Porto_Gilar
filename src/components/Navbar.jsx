import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const email = "wahidityagilar6@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
    >
      <div className="bg-brand-black/90 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-2 py-2 flex items-center justify-between md:gap-2 shadow-2xl">
        
        {/* LOGO */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer mr-4">
          <div className="bg-brand-cream w-10 h-10 rounded-full flex items-center justify-center text-brand-black hover:scale-110 transition-transform">
            <Terminal size={20} />
          </div>
        </Link>

        {/* MENU TENGAH */}
        <ul className="hidden md:flex bg-brand-black/50 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                spy={true}          // WAJIB: Mengaktifkan deteksi scroll
                smooth={true}
                duration={500}
                offset={-100}       // Mengatur titik potong agar tidak tertutup navbar
                activeClass="nav-item-active" // NAMA CLASS YANG KITA BUAT DI CSS TADI
                className="px-6 py-2 rounded-full text-sm font-medium text-brand-cream/60 hover:text-brand-cream hover:bg-white/5 cursor-pointer transition-all duration-300 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* EMAIL BUTTON */}
        <div 
          onClick={handleCopy}
          className="ml-4 bg-brand-cream text-brand-black px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-white hover:text-black transition-colors flex items-center gap-2"
        >
          {copied ? (
            <> <Check size={16} /> Copied! </>
          ) : (
            <> {email} <Copy size={14} className="opacity-50" /> </>
          )}
        </div>
        
      </div>
    </motion.nav>
  );
};

export default Navbar;