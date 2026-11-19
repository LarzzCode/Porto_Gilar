import { motion } from "framer-motion";

const Preloader = () => {
  const text = "Gilar Wahiditya";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-center">
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-brand-cream font-mono flex overflow-hidden">
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} aria-hidden="true">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
        <span className="w-1 h-8 md:h-12 bg-brand-blue-light ml-2" aria-hidden="true" />
      </div>
    </motion.div>
  );
};

export default Preloader;
