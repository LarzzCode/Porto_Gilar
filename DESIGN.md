# Design System & Direction: Gilar Wahiditya Portfolio

Dial: ENERGY 2 / RHYTHM 2 / MOTION 2

## 1. Identity & Audience
- **Product Kind**: Personal developer & operations portfolio with interactive project case studies and live GitHub build telemetry.
- **Target Audience**: Technical recruiters, hiring managers, and prospective freelance clients in Indonesia and internationally.
- **Visual Language**: High-contrast editorial dark mode (`#050505` obsidian canvas, `#EFECE3` warm parchment cream typography, `#8FABD4` steel blue and `#6366F1` indigo interactive accents).

## 2. Color Palette & WCAG AA Contrast Verification
Core palette is capped at 2 neutral base tones + 2 purposeful accents (R-29):
- **Canvas (`--color-brand-black: #050505`)**: Deep obsidian background chosen to frame bright dashboard and design screenshots without glare.
- **Primary Text (`--color-brand-cream: #EFECE3`)**: Warm cream text (`17.25:1` contrast on `#050505`, PASS AAA) to prevent harsh pure-white halation on dark surfaces.
- **Secondary Text (`#CBD5E1` / `#94A3B8`)**: Muted slate (`7.95:1` contrast on `#050505`, PASS AA) for body descriptions and metadata.
- **Primary Accent (`--color-brand-blue-light: #8FABD4`)**: Steel blue (`8.68:1` contrast on `#050505`, PASS AAA) used for section indices, interactive focus rings, and active links.
- **Interactive CTA Accent (`#4F46E5` / `--color-brand-blue-dark: #4A70A9`)**: Used on primary action buttons with `#FFFFFF` label text (`6.29:1` / `5.02:1` contrast, PASS AA).

## 3. One-Line Purpose Log (R-31 & Purpose-Gate Compliance)
- **Why dark theme (R-21)**: Highlights full-color web app screenshots, dashboards, and visual design pieces as the primary focal point on every screen.
- **Why Poppins & monospace index labels (R-06)**: Geometric sans-serif keeps bilingual (EN/ID) long-form case studies readable, while monospace is restricted to numeric section indices (`01.` to `06.`), dates, and commit SHAs.
- **Why subtle top radial gradient & grid in Hero/Contact only (R-01, R-07)**: Anchors the entry and exit landmarks of the single-page flow while keeping content-heavy middle sections (`About`, `Projects`, `Services`, `Certificates`) on a clean solid canvas.
- **Why glassmorphism cap (R-10)**: Backdrop blur is restricted to floating navigation (`Navbar`) and modal overlays (`CommandPalette`, image lightbox) so scrolling content remains legible underneath.
- **Why elevation shadow cap (R-12)**: Shadows are reserved for floating navigation and the active featured case-study showcase frame to separate foreground controls from flat content cards.
- **Why varied card hierarchy in Services & About (R-14)**: In `Services`, the primary Web App & Dashboard offering is visually emphasized as the flagship capability; in `About`, narrative, portrait, and credential blocks use an asymmetric 12-column split.
- **Why purposeful motion (R-19, R-39)**: Entrance transitions guide scroll progression once (`viewport={{ once: true }}`), all infinite decorative loops are removed, the case-study showcase includes an explicit pause/play control, and `prefers-reduced-motion: reduce` disables non-essential motion.
- **Why specific icons & CTAs (R-04, R-08, R-15)**: Every icon maps directly to its domain noun (GitHub, LinkedIn, Mail, Calendar, Award, Code), directional arrows appear only on navigation/external links to indicate page vs. new-tab transitions, and CTAs state the exact destination (`View Projects`, `Read Case Study`, `View Resume`, `Open Email Draft`).
