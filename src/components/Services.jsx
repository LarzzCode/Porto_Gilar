import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Monitor, PenTool, Server, ArrowRight } from "lucide-react";
import { Link } from "react-scroll"; 

const services = [
  // ... data services tetap sama ...
  {
    title: "Web Development",
    icon: <Monitor size={40} />,
    desc: "Membangun website modern, cepat, dan responsif menggunakan React, Vite, dan Tailwind CSS.",
    color: "text-blue-400"
  },
  {
    title: "UI/UX Design",
    icon: <PenTool size={40} />,
    desc: "Merancang antarmuka yang estetis dan user-friendly, fokus pada pengalaman pengguna yang intuitif.",
    color: "text-purple-400"
  },
  {
    title: "System Admin",
    icon: <Server size={40} />,
    desc: "Pengelolaan data, administrasi server, dan optimasi alur kerja digital untuk efisiensi bisnis.",
    color: "text-green-400"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-brand-black relative" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header tetap sama */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">06. / WHAT I OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            My <span className="text-brand-blue-dark">Specializations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* PERBAIKAN DISINI */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                // TAMBAHKAN: rounded-3xl dan overflow-hidden DISINI
                className="h-full rounded-3xl overflow-hidden" 
              >
                <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col hover:border-brand-blue-light/50 transition-colors group">
                  
                  {/* ... isi kartu tetap sama ... */}
                  <div className={`w-16 h-16 rounded-2xl bg-brand-black border border-white/10 flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-brand-cream mb-4">{service.title}</h3>
                  <p className="text-brand-cream/60 leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>

                  <div className="mt-auto">
                    <Link 
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-50}
                      className="inline-flex items-center gap-2 text-brand-blue-light text-sm font-mono font-semibold cursor-pointer group/link"
                    >
                      Start a project 
                      <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;