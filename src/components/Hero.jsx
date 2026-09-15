import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Link } from "react-scroll";

const socialLinks = [
  { Icon: Github, href: "https://github.com/LarzzCode", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/gilarwdy", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:wahidityagilar6@gmail.com", label: "Email" },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 md:pt-0 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 w-full h-full bg-brand-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-brand-blue-dark/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 py-12 md:py-0">
        <motion.div
          className="w-full md:w-[56%] order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue-light/20 bg-brand-blue-dark/10 px-3 py-1.5 mb-5"
          >
            <Sparkles size={14} className="text-brand-blue-light" />
            <span className="text-brand-blue-light font-mono text-xs md:text-sm tracking-wide">
              INFORMATION SYSTEMS • WEB DEVELOPMENT • DIGITAL SOLUTIONS
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] text-brand-cream tracking-tight"
          >
            I turn real-world workflows into
            <span className="text-brand-blue-light"> practical digital products.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-brand-cream/65 text-base md:text-lg mb-8 leading-relaxed max-w-2xl"
          >
            I'm Gilar Wahiditya Eka Putra, an Information Systems student who combines web development, design, and hands-on operational experience to build websites, dashboards, and digital tools that are useful—not just visually impressive.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
            <Link to="projects" smooth={true} duration={500} offset={-50} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto group bg-brand-cream text-brand-black px-7 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(239,236,227,0.4)] hover:shadow-[0_0_40px_-10px_rgba(239,236,227,0.7)] transition-all duration-300"
              >
                Explore My Work
                <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            <Link to="contact" smooth={true} duration={500} offset={-50} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-brand-cream hover:bg-white/10 hover:border-brand-blue-light/30 transition-all"
              >
                Let's Work Together
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-cream/35 hidden sm:inline">Connect</span>
            <div className="flex gap-5 items-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  whileHover={{ y: -4, color: "#8FABD4" }}
                  className="text-brand-cream/55 transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.Icon size={23} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-[44%] flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-4 rounded-full bg-brand-blue-dark/20 blur-3xl" />
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/10 shadow-2xl relative z-10"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/Photo.jpg"
                alt="Gilar Wahiditya"
                width="384"
                height="384"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 md:bottom-4 md:-right-4 z-20"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="bg-brand-black/85 backdrop-blur-md border border-white/10 py-3 px-5 rounded-full flex items-center gap-3 shadow-xl cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-brand-cream font-medium text-sm whitespace-nowrap">
                  Open to work & projects
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
