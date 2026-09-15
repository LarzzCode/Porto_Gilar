import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, Linkedin, Globe2 } from "lucide-react";

const experience = [
  {
    period: "May 2024 — Jun 2025",
    company: "LKP Bimbingan Bagja College",
    role: "Admin & Digital Creative",
    points: [
      "Managed a database of 100+ students using Microsoft Excel, including attendance records and daily financial transaction reporting.",
      "Built bagjacollege.com as the institution's main information website and consistently produced social-media visual content to support engagement and brand awareness.",
    ],
  },
  {
    period: "Jul 2025 — Jul 2026",
    company: "VR Auto Service",
    role: "Admin",
    points: [
      "Managed administrative documents and procurement workflows for government institutions through the E-Katalog platform.",
      "Maintained spare-parts stock accuracy through periodic stock opname and systematic inventory recording.",
      "Served as a primary customer contact and handled vehicle-reception administration.",
      "Supported administrative coordination and operational relationships with institutional corporate clients, including hospitals.",
    ],
  },
];

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resume | Gilar Wahiditya";
    return () => {
      document.title = "Gilar Wahiditya | Portfolio";
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] overflow-hidden">
          <header className="p-6 sm:p-10 md:p-12 border-b border-white/10">
            <p className="text-indigo-400 font-mono text-xs sm:text-sm tracking-wider mb-3">RESUME / PROFILE</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">Gilar Wahiditya Eka Putra</h1>
            <p className="mt-5 max-w-3xl text-slate-400 leading-relaxed">
              A systematic administrative professional with practical experience in database management, E-Katalog procurement, and corporate client operations. I combine administrative precision with Information Systems knowledge to build structured data workflows and practical digital solutions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 text-sm">
              <a href="mailto:wahidityagilar6@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white"><Mail size={16} /> wahidityagilar6@gmail.com</a>
              <a href="tel:+6285174388765" className="flex items-center gap-2 text-slate-300 hover:text-white"><Phone size={16} /> +62 851-7438-8765</a>
              <span className="flex items-center gap-2 text-slate-300"><MapPin size={16} /> Majalengka, West Java</span>
              <a href="https://www.linkedin.com/in/gilarwdy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white"><Linkedin size={16} /> LinkedIn</a>
              <a href="https://portogilar.vercel.app/" className="flex items-center gap-2 text-slate-300 hover:text-white"><Globe2 size={16} /> Portfolio</a>
            </div>
          </header>

          <div className="p-6 sm:p-10 md:p-12 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BriefcaseBusiness className="text-indigo-400" size={22} />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-8">
                {experience.map((item) => (
                  <article key={item.company} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                    <p className="text-sm text-slate-500 font-mono">{item.period}</p>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.company}</h3>
                      <p className="text-indigo-400 text-sm font-semibold mt-1">{item.role}</p>
                      <ul className="mt-4 space-y-3 text-slate-400 leading-relaxed list-disc pl-5">
                        {item.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-indigo-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-mono text-slate-500">2025 — PRESENT</p>
                  <h3 className="text-white font-bold mt-2">Universitas Terbuka</h3>
                  <p className="text-slate-400 text-sm mt-1">Bachelor's Degree — Information Systems</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-mono text-slate-500">2021 — 2024</p>
                  <h3 className="text-white font-bold mt-2">SMK Negeri 1 Kertajati</h3>
                  <p className="text-slate-400 text-sm mt-1">Software Engineering</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-5">Core Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["Business Administration & Operations", "IT & Web Development", "Digital Creative"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-200 text-sm">{skill}</span>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
