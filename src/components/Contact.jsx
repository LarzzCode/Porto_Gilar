import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Phone, Linkedin, Github, ArrowUpRight, Download } from "lucide-react";
import { downloadCv } from "../utils/downloadCv";

const contactLinks = [
  {
    label: "Email Me",
    value: "wahidityagilar6@gmail.com",
    href: "mailto:wahidityagilar6@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+62 851-7438-8765",
    href: "https://wa.me/6285174388765",
    icon: Phone,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LarzzCode",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gilarwdy",
    icon: Linkedin,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0jp7xrp",
        "template_8nd08mz",
        formRef.current,
        "jMin7PgsQEjecrLAl"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS failed:", error.text);
        }
      );
  };

  const handleCvDownload = async () => {
    try {
      await downloadCv();
    } catch (error) {
      console.error("CV download failed:", error);
      window.alert("CV belum bisa diunduh. Silakan coba lagi.");
    }
  };

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-brand-black relative overflow-hidden scroll-mt-24" id="contact">
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8FABD4_1px,transparent_1px),linear-gradient(to_bottom,#8FABD4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-dark/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="text-brand-blue-light font-mono mb-2 block tracking-wider text-sm md:text-base">06. / GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
            Have an idea? <span className="text-brand-blue-dark">Let's build it.</span>
          </h2>
          <p className="text-brand-cream/60 mt-5 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
            I'm open to freelance projects, collaboration, and job opportunities related to web development, digital products, and technology-driven workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-brand-blue-light/30 transition-all"
                  >
                    <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light group-hover:bg-brand-blue-dark group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-brand-cream/50 uppercase tracking-wider">{item.label}</p>
                      <p className="text-brand-cream font-medium truncate">{item.value}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-brand-cream/30 group-hover:text-brand-blue-light transition-colors" />
                  </a>
                );
              })}

              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-brand-blue-light">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-cream/50 uppercase tracking-wider">Location</p>
                  <p className="text-brand-cream font-medium">Kertajati, Majalengka, Indonesia</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCvDownload}
              className="w-full mb-8 inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-blue-light/20 bg-brand-blue-dark/10 px-5 py-4 text-brand-blue-light font-semibold hover:bg-brand-blue-dark/20 hover:border-brand-blue-light/40 transition-all"
              aria-label="Download Gilar Wahiditya CV"
            >
              <Download size={18} /> Download CV
            </button>

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-cream/40 mb-4">Find me online</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-brand-cream/70 hover:text-white hover:border-brand-blue-light/40 hover:bg-brand-blue-dark/10 transition-all"
                    >
                      <Icon size={17} /> {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 rounded-3xl backdrop-blur-sm"
          >
            <div className="mb-6">
              <p className="text-sm font-mono text-brand-blue-light mb-2">SEND A MESSAGE</p>
              <h3 className="text-2xl font-bold text-brand-cream">Tell me what you want to build.</h3>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about the project, goal, or opportunity..."
                  className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-blue-light focus:ring-1 focus:ring-brand-blue-light transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-blue-dark hover:bg-brand-blue-light text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm"
                >
                  Message sent successfully. I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm"
                >
                  Something went wrong. You can also reach me through WhatsApp or email.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
