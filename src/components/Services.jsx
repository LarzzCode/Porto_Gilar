import { motion } from "framer-motion";
import { Monitor, LayoutDashboard, PenTool, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Services = () => {
  const { isId } = useLanguage();

  const services = isId
    ? [
        {
          title: "Web App & Dashboard",
          badge: "Fokus Utama",
          featured: true,
          icon: LayoutDashboard,
          desc: "Aplikasi web praktis untuk tracking, administrasi, inventaris, keuangan, dan workflow operasional menggunakan frontend modern serta cloud database.",
          highlights: ["Workflow-first", "UI Berbasis Data", "Integrasi Cloud"],
        },
        {
          title: "Landing Page & Company Profile",
          featured: false,
          icon: Monitor,
          desc: "Website modern dan responsif untuk bisnis, layanan, portfolio, dan campaign, dengan arsitektur informasi yang jelas serta call to action yang terarah.",
          highlights: ["UI Responsif", "Performa Cepat", "CTA Bisnis"],
        },
        {
          title: "UI & Digital Design",
          featured: false,
          icon: PenTool,
          desc: "Antarmuka digital dan aset visual yang bersih untuk membantu produk maupun organisasi menyampaikan informasi secara jelas dan konsisten.",
          highlights: ["Desain Interface", "Hierarki Visual", "Aset Digital"],
        },
      ]
    : [
        {
          title: "Web App & Dashboard",
          badge: "Primary Focus",
          featured: true,
          icon: LayoutDashboard,
          desc: "Practical web applications for tracking, administration, inventory, finance, and operational workflows using modern frontend and cloud databases.",
          highlights: ["Workflow-first", "Data-driven UI", "Cloud integration"],
        },
        {
          title: "Landing Page & Company Profile",
          featured: false,
          icon: Monitor,
          desc: "Modern, responsive websites for businesses, services, portfolios, and campaigns, with clear information architecture and focused calls to action.",
          highlights: ["Responsive UI", "Fast loading", "Business-focused CTA"],
        },
        {
          title: "UI & Digital Design",
          featured: false,
          icon: PenTool,
          desc: "Clean digital interfaces and visual assets that help products and organizations communicate information clearly and consistently.",
          highlights: ["Interface design", "Visual hierarchy", "Digital assets"],
        },
      ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-xs sm:text-sm md:text-base">
            {isId ? "04. / YANG BISA SAYA BANGUN" : "04. / WHAT I CAN BUILD"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream">
            {isId ? "Solusi digital dengan " : "Digital solutions with a "}
            <span className="text-brand-blue-light">
              {isId ? "tujuan yang jelas." : "clear purpose."}
            </span>
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            {isId
              ? "Saya fokus pada hasil yang praktis: membantu bisnis tampil lebih profesional, merapikan workflow, dan mengubah masalah sehari-hari menjadi aplikasi digital yang siap dipakai."
              : "I focus on practical outcomes: helping teams present their business clearly, organize workflows, and turn everyday problems into usable digital applications."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                viewport={{ once: true }}
                className={
                  service.featured ? "lg:col-span-5" : "lg:col-span-3 md:col-span-6 lg:col-span-3.5"
                }
                style={
                  !service.featured ? undefined : undefined
                }
              >
                <div
                  className={`rounded-2xl p-6 sm:p-7 md:p-8 h-full flex flex-col transition-all duration-200 group ${
                    service.featured
                      ? "bg-indigo-950/25 border-2 border-indigo-400/35 hover:border-indigo-400/60"
                      : "bg-white/[0.04] border border-white/10 hover:border-brand-blue-light/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-13 h-13 rounded-xl flex items-center justify-center transition-colors ${
                        service.featured
                          ? "bg-indigo-500/20 border border-indigo-400/30 text-indigo-300"
                          : "bg-brand-blue-dark/15 border border-brand-blue-light/20 text-brand-blue-light"
                      }`}
                    >
                      <Icon size={25} aria-hidden="true" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-400/30 text-indigo-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-brand-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {service.highlights.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md border border-white/15 bg-black/40 text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="min-h-[44px] inline-flex items-center gap-2 text-brand-blue-light hover:text-white text-sm font-mono font-semibold group/link w-fit"
                  >
                    <span>
                      {isId ? `Diskusikan ${service.title}` : `Discuss ${service.title}`}
                    </span>
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="group-hover/link:translate-x-1.5 transition-transform duration-200"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
