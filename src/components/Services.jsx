import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Monitor, LayoutDashboard, PenTool, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const services = [
  {
    title: "Landing Page & Company Profile",
    icon: Monitor,
    desc: "Modern, responsive websites for businesses, services, portfolios, and campaigns—with clear information architecture and strong calls to action.",
    highlights: ["Responsive UI", "Fast loading", "Business-focused CTA"],
  },
  {
    title: "Web App & Dashboard",
    icon: LayoutDashboard,
    desc: "Practical web applications for tracking, administration, inventory, finance, and operational workflows using modern frontend and cloud tools.",
    highlights: ["Workflow-first", "Data-driven UI", "Cloud integration"],
  },
  {
    title: "UI & Digital Design",
    icon: PenTool,
    desc: "Clean digital interfaces and visual assets that help products and organizations communicate information clearly and consistently.",
    highlights: ["Interface design", "Visual hierarchy", "Digital assets"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-brand-black relative overflow-hidden" id="services">
      <div className="absolute left-1/2 top-1/2 w-[520px] h-[520px] bg-brand-blue-dark/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider">04. / WHAT I CAN BUILD</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream">
            Digital solutions with a <span className="text-brand-blue-dark">clear purpose.</span>
          </h2>
          <p className="text-brand-cream/55 leading-relaxed max-w-2xl mx-auto mt-5">
            I focus on practical outcomes: helping people present their business better, organize workflows, and turn everyday problems into usable digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.12}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.015}
                  transitionSpeed={1800}
                  className="h-full rounded-3xl overflow-hidden"
                >
                  <div className="bg-white/[0.04] border border-white/10 p-7 md:p-8 h-full flex flex-col hover:border-brand-blue-light/40 transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue-dark/10 border border-brand-blue-light/10 text-brand-blue-light flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-brand-blue-dark/20 transition-all">
                      <Icon size={27} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-brand-cream mb-4">{service.title}</h3>
                    <p className="text-brand-cream/55 leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {service.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-brand-cream/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

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
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
