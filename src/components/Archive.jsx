import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Code, Palette, X, Maximize2, ArrowUp } from "lucide-react";
import { devProjects, designProjects } from "../data/projectData";

const Archive = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const projectsToDisplay = activeTab === "dev" ? devProjects : designProjects;

  return (
    <section className="min-h-screen bg-[#050505] text-slate-200 py-24 px-6 font-sans relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
          <div>
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Archive<span className="text-indigo-500">.</span>
            </h1>
            <p className="text-slate-500 mt-3 max-w-xl">
              Development projects open into a dedicated case-study page. Design work can be previewed directly here.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("dev")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "dev" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}
              >
                <Code size={16} /> Development
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "design" ? "bg-purple-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}
              >
                <Palette size={16} /> Design
              </button>
            </div>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsToDisplay.map((project, index) => {
            const isDesignMode = activeTab === "design";

            return (
              <motion.div
                key={`${activeTab}-${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.5 }}
                viewport={{ once: true, margin: "100px" }}
                className="group h-full [content-visibility:auto] [contain-intrinsic-size:420px]"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isDesignMode) {
                      setSelectedImage(project.image);
                    } else {
                      navigate(`/projects/${project.slug}`);
                    }
                  }}
                  className={`w-full text-left flex flex-col h-full bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 relative hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${
                    isDesignMode ? "cursor-zoom-in" : "cursor-pointer"
                  }`}
                >
                  <div className="p-2 shrink-0 w-full">
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/50 border border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/600x400/1e1e1e/FFF?text=No+Preview";
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md text-[10px] font-mono text-white">
                        {project.year}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-2 flex flex-col flex-1 w-full">
                    <div className="flex justify-between items-center mb-3 gap-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {isDesignMode ? (
                        <Maximize2 size={18} className="text-purple-500 shrink-0" />
                      ) : (
                        <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white shrink-0" />
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">{project.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-20 text-center border-t border-white/5 pt-8 pb-8">
          <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Gilar Wahiditya. All projects are crafted with passion.</p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:scale-110 transition-all ${
              activeTab === "dev" ? "hover:bg-indigo-600" : "hover:bg-purple-600"
            }`}
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 z-50"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Design project preview"
              decoding="async"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Archive;
