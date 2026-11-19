import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Globe2,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Footer from "./Footer";

const Resume = () => {
  const navigate = useNavigate();
  const { isId } = useLanguage();

  const experience = isId
    ? [
        {
          period: "Jul 2025 - Jul 2026",
          company: "VR Auto Service",
          role: "Admin",
          points: [
            "Mengelola dokumen administrasi dan workflow pengadaan untuk instansi pemerintah melalui platform E-Katalog.",
            "Menjaga akurasi stok spare-part melalui stock opname berkala dan pencatatan inventaris yang sistematis.",
            "Menjadi kontak utama pelanggan dan menangani administrasi penerimaan kendaraan.",
            "Mendukung koordinasi administrasi dan hubungan operasional dengan client institusi, termasuk rumah sakit.",
          ],
        },
        {
          period: "Mei 2024 - Jun 2025",
          company: "LKP Bimbingan Bagja College",
          role: "Admin & Digital Creative",
          points: [
            "Mengelola database siswa menggunakan Microsoft Excel, termasuk absensi dan laporan transaksi keuangan harian.",
            "Membangun bagjacollege.com sebagai website informasi utama institusi dan secara konsisten membuat konten visual media sosial untuk mendukung komunikasi lembaga.",
          ],
        },
      ]
    : [
        {
          period: "Jul 2025 - Jul 2026",
          company: "VR Auto Service",
          role: "Admin",
          points: [
            "Managed administrative documents and procurement workflows for government institutions through the E-Katalog platform.",
            "Maintained spare-parts stock accuracy through periodic stock opname and systematic inventory recording.",
            "Served as a primary customer contact and handled vehicle-reception administration.",
            "Supported administrative coordination and operational relationships with institutional corporate clients, including hospitals.",
          ],
        },
        {
          period: "May 2024 - Jun 2025",
          company: "LKP Bimbingan Bagja College",
          role: "Admin & Digital Creative",
          points: [
            "Managed student databases using Microsoft Excel, including attendance records and daily financial transaction reporting.",
            "Built bagjacollege.com as the institution's main information website and consistently produced social-media visual content to support institutional communication.",
          ],
        },
      ];

  const copy = isId
    ? {
        back: "Kembali ke Portfolio",
        label: "RESUME / PROFIL",
        intro:
          "Profesional administrasi yang sistematis dengan pengalaman praktis dalam pengelolaan database, pengadaan E-Katalog, dan operasional client institusi. Saya menggabungkan ketelitian administrasi dengan pengetahuan Sistem Informasi untuk membangun workflow data yang terstruktur dan solusi digital yang praktis.",
        experience: "Pengalaman Kerja",
        education: "Pendidikan",
        bachelor: "S1 Sistem Informasi",
        software: "Rekayasa Perangkat Lunak",
        skills: "Keahlian Utama",
        skillItems: [
          "Administrasi Bisnis & Operasional",
          "Web Development (React, Next.js, PHP, MySQL)",
          "Desain & Konten Digital",
        ],
      }
    : {
        back: "Back to Portfolio",
        label: "RESUME / PROFILE",
        intro:
          "A systematic administrative professional with practical experience in database management, E-Katalog procurement, and corporate client operations. I combine administrative precision with Information Systems knowledge to build structured data workflows and practical digital solutions.",
        experience: "Work Experience",
        education: "Education",
        bachelor: "Bachelor's Degree in Information Systems",
        software: "Software Engineering",
        skills: "Core Skills",
        skillItems: [
          "Business Administration & Operations",
          "Web Development (React, Next.js, PHP, MySQL)",
          "Digital Creative & Interface Design",
        ],
      };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resume | Gilar Wahiditya";
    return () => {
      document.title = "Gilar Wahiditya | Web Developer & Information Systems";
    };
  }, [isId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-200">
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="min-h-[44px] inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} aria-hidden="true" /> {copy.back}
          </button>

          <section className="rounded-3xl border border-white/15 bg-white/[0.04] overflow-hidden">
            <header className="p-6 sm:p-10 md:p-12 border-b border-white/10">
              <p className="text-indigo-300 font-mono text-xs sm:text-sm tracking-wider mb-3">
                {copy.label}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Gilar Wahiditya Eka Putra
              </h1>
              <p className="mt-5 max-w-3xl text-slate-300 leading-relaxed">{copy.intro}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 text-sm">
                <a
                  href="mailto:wahidityagilar6@gmail.com"
                  className="min-h-[44px] flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" /> wahidityagilar6@gmail.com
                </a>
                <a
                  href="tel:+6285174388765"
                  className="min-h-[44px] flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Phone size={16} aria-hidden="true" /> +62 851-7438-8765
                </a>
                <span className="min-h-[44px] flex items-center gap-2 text-slate-200">
                  <MapPin size={16} aria-hidden="true" /> Majalengka, West Java
                </span>
                <a
                  href="https://www.linkedin.com/in/gilarwdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href="https://portogilar.vercel.app/"
                  className="min-h-[44px] flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Globe2 size={16} aria-hidden="true" /> portogilar.vercel.app
                </a>
              </div>
            </header>

            <div className="p-6 sm:p-10 md:p-12 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <BriefcaseBusiness className="text-indigo-300" size={22} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-white">{copy.experience}</h2>
                </div>
                <div className="space-y-8">
                  {experience.map((item) => (
                    <article key={item.company} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                      <p className="text-sm text-slate-300 font-mono">{item.period}</p>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.company}</h3>
                        <p className="text-indigo-300 text-sm font-semibold mt-1">{item.role}</p>
                        <ul className="mt-4 space-y-3 text-slate-300 leading-relaxed list-disc pl-5">
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-indigo-300" size={24} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-white">{copy.education}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/15 bg-black/30 p-5">
                    <p className="text-xs font-mono text-slate-300">2025 - PRESENT</p>
                    <h3 className="text-white font-bold mt-2">Universitas Terbuka</h3>
                    <p className="text-slate-300 text-sm mt-1">{copy.bachelor}</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-black/30 p-5">
                    <p className="text-xs font-mono text-slate-300">2021 - 2024</p>
                    <h3 className="text-white font-bold mt-2">SMK Negeri 1 Kertajati</h3>
                    <p className="text-slate-300 text-sm mt-1">{copy.software}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-5">{copy.skills}</h2>
                <div className="flex flex-wrap gap-2.5">
                  {copy.skillItems.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl border border-indigo-400/30 bg-indigo-500/15 text-indigo-200 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
