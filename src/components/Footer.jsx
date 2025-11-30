import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-8 px-6 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Kiri: Copyright */}
        <div className="text-brand-cream/60 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-brand-cream font-semibold">Gilar Wahiditya</span>. All rights reserved.
        </div>


      </div>
    </footer>
  );
};

export default Footer;