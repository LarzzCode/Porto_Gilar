# Gilar Wahiditya Portfolio

Personal web developer and Information Systems portfolio built with React 19, Vite, and Tailwind CSS v4. It presents full-length product case studies, an interactive development and visual design archive, a bilingual (`EN` / `ID`) interface, and live GitHub repository telemetry.

Live URL: [https://portogilar.vercel.app/](https://portogilar.vercel.app/)

## Key Features

- **Selected Case Studies (`/projects/:slug`)**: Deep-dive breakdowns covering the problem statement, architecture decisions, role, key features, technical challenges, and outcomes for flagship projects (`Bagja College`, `Lar-Finance`, `Lar-Ai`), paired with live commit history fetched from the GitHub REST API.
- **Filterable Project Archive (`/archive`)**: Categorized directory of 13 web development projects and 20 digital design assets with instant client-side search and keyboard-accessible image preview.
- **Live Build Telemetry (`CurrentlyBuilding`)**: Automatically calculates repository activity status (`Active now`, `Recently updated`, `Stable`) from real-time GitHub push timestamps.
- **Bilingual Support (`EN` / `ID`)**: Persistent language toggle across all routes (`/`, `/archive`, `/projects/:slug`, `/resume`, and `404`), automatically syncing `<html lang="...">`.
- **Keyboard Command Palette (`Ctrl+K` / `Cmd+K`)**: Fast keyboard navigation to any section, route, case study, or external profile.
- **Dedicated Web Resume (`/resume`)**: Structured, print-friendly summary of work experience in business administration, E-Katalog procurement, and web development.

## Tech Stack

- **Framework**: React 19 + Vite 7
- **Routing**: React Router DOM v7 (with Vercel SPA rewrite in `vercel.json`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Motion**: Framer Motion (with `prefers-reduced-motion` support and interactive pause controls)
- **Icons**: Lucide React

## Project Structure

```text
Porto_Gilar/
├── public/                  # Optimized project screenshots, certificates, and profile photos
├── src/
│   ├── components/          # Page sections, routes, and interactive dialogs
│   ├── data/                # Structured development & design project metadata
│   ├── i18n/                # LanguageContext & bilingual project translations
│   ├── App.jsx              # Route definitions and layout shell
│   ├── index.css            # Tailwind v4 @theme tokens, focus rings, and base styles
│   └── main.jsx             # React root entry point
├── DESIGN.md                # Design system tokens, WCAG contrast ratios, and decision log
├── index.html               # Document metadata, Open Graph tags, and Vercel Analytics
└── vercel.json              # SPA fallback routing configuration
```

## Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/LarzzCode/Porto_Gilar.git
   cd Porto_Gilar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run linter and production build checks:
   ```bash
   npm run lint
   npm run build
   ```

## License

Copyright © Gilar Wahiditya Eka Putra. All rights reserved.
