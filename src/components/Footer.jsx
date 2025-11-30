import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-8 px-6 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Kiri: Copyright */}
        <div className="text-brand-cream/60 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-brand-cream font-semibold">Gilar Wahiditya</span>. All rights reserved.
        </div>

        {/* Kanan: Tech Stack Statement */}
        <div className="flex items-center gap-2 text-sm text-brand-cream/40">
          <p>Built with</p>
          <span className="text-brand-blue-light font-medium">React</span>
          <span className="w-1 h-1 rounded-full bg-brand-cream/20"></span>
          <span className="text-brand-blue-light font-medium">Tailwind</span>
          <span className="w-1 h-1 rounded-full bg-brand-cream/20"></span>
          <span className="flex items-center gap-1">
            Crafted with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;