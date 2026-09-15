export const devProjects = [
  {
    slug: "lar-coffeeshop",
    year: "2025",
    title: "Lar-CoffeeShop",
    tech: ["React JS", "Tailwind"],
    link: "https://landing-page-coffe-shop.vercel.app/",
    image: "/Project_CoffeShop.jpg",
    desc: "A modern, responsive coffee shop landing page focused on presenting products and brand atmosphere."
  },
  {
    slug: "lar-carwash-and-detailing",
    year: "2025",
    title: "Lar-Carwash-And-Detailing",
    tech: ["React JS", "Tailwind"],
    link: "https://landing-page-car-wash.vercel.app/",
    image: "/Project_CarWash.jpg",
    desc: "A service-focused landing page for a car wash and detailing business."
  },
  {
    slug: "lar-movie",
    year: "2024",
    title: "Lar-Movie",
    tech: ["Next.js", "Tailwind"],
    link: "https://lar-movies.vercel.app/",
    image: "/Project_Movie.jpg",
    desc: "A cinematic movie discovery platform with dark mode and real-time TMDB API integration."
  },
  {
    slug: "lar-calculator",
    year: "2024",
    title: "Lar-Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://calculator-lar.vercel.app/",
    image: "/Project_Calculator.jpg",
    desc: "A responsive digital calculator with a neumorphic interface."
  },
  {
    slug: "bagja-college",
    year: "2024",
    title: "Bagja College",
    tech: ["HTML", "CSS", "JavaScript", "Google Forms"],
    link: "https://bagjacollege.com",
    source: "https://github.com/LarzzCode/BagjaCollegeDev",
    image: "/Project_BC.jpg",
    desc: "A digital test-access portal that helps students open exams based on class and program through a clearer, more structured flow.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "Education Workflow",
      summary: "A lightweight portal that turned a more manual exam-access process into a simple digital entry point for students on mobile and desktop.",
      problem: "Students needed a clearer way to access the correct exam. The existing flow depended too much on manual guidance and did not provide one obvious place to choose a class and open the right test.",
      solution: "I built the Bagja College Test portal with class grouping, program dropdowns, and direct links to the relevant exam forms. The interface was intentionally kept lightweight and responsive so students could open it easily from their own devices.",
      role: "I proposed the digital approach, mapped the exam-access flow, designed the interface, and implemented the front-end portal.",
      features: [
        "Exam navigation for grades X, XI, and XII",
        "Program grouping inside class-based dropdowns",
        "Google Forms integration for exam delivery",
        "Responsive layout for desktop and mobile",
        "Small interactions and an animated welcome message"
      ],
      challenge: "The main challenge was keeping the student journey as simple as possible. Instead of adding more features, the flow was reduced to three actions: choose a class, choose a program, then open the test.",
      outcome: "The portal became part of Bagja College's exam workflow and gave students a more structured way to reach their tests than the previous manual approach."
    }
  },
  {
    slug: "lar-todo",
    year: "2024",
    title: "Lar-Todo",
    tech: ["React", "Vite"],
    link: "https://todo-app-lar.vercel.app/",
    image: "/Project_Todo.jpg",
    desc: "A task-management application with local data persistence for lightweight daily productivity."
  },
  {
    slug: "lar-finance",
    year: "2025",
    title: "Lar-Finance",
    tech: ["React", "Supabase", "Recharts", "PWA"],
    link: "https://larfinance.vercel.app/",
    source: "https://github.com/LarzzCode/Lar_Finance",
    image: "/Project_Finance.jpg",
    desc: "A personal finance app for transactions, wallets, budgeting, savings, reports, subscriptions, and financial insights in one dashboard.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "Personal Finance Platform",
      summary: "What started as a personal need to understand where monthly money was going grew into a multi-feature personal finance application.",
      problem: "Scattered expense tracking made it difficult to understand the overall financial picture. A spreadsheet helped at first, but as wallets, categories, income, and expenses grew, maintaining clean and useful records created more friction.",
      solution: "I built Lar-Finance as a personal finance hub using React and Supabase. Transactions connect to wallets and categories, then flow into dashboards, budgeting, reports, savings, subscription tracking, and financial insights.",
      role: "I shaped the product from a personal pain point, built the React interface, designed the feature flow, integrated Supabase authentication and data, and developed reporting and visualization experiences.",
      features: [
        "User authentication and profile management",
        "Income and expense tracking",
        "Wallet and transaction-category management",
        "Budgeting and financial targets",
        "Savings and subscription tracking",
        "Recaps, reports, and Recharts visualizations",
        "AI Insight for interpreting financial patterns",
        "PWA support for an app-like experience"
      ],
      challenge: "The biggest challenge was making many modules feel like one coherent product. Transactions, wallets, categories, budgets, and reports had to stay connected without making the input flow feel complicated.",
      outcome: "Lar-Finance replaced a more manual tracking workflow with one dashboard for recording activity, reviewing summaries, and evaluating personal finances across devices."
    }
  },
  {
    slug: "lar-ai",
    year: "2025",
    title: "Lar-Ai",
    tech: ["React", "Gemini API", "Web Speech API"],
    link: "https://lar-ai.vercel.app/",
    image: "/Project_Ai.jpg",
    desc: "A Gemini-powered AI assistant with chat history, personas, image input, voice interaction, Markdown rendering, and an image-generation mode.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "AI Assistant Experience",
      summary: "An experiment in turning the Gemini API from a simple text-generation endpoint into a more interactive browser-based assistant experience.",
      problem: "A basic chatbot only sends text and displays text. I wanted an experience closer to an assistant: different working modes, local conversation memory, image input, voice interaction, and technical responses that remain comfortable to read.",
      solution: "Lar-Ai uses React and the Google Generative AI SDK, then layers in personas, local chat history, multimodal image input, speech recognition, text-to-speech, Markdown rendering, syntax highlighting, and an image-generation mode.",
      role: "I designed the chat interface, integrated the Gemini API, structured persona and context handling, and built the multimodal and browser-native voice interactions.",
      features: [
        "Gemini 2.0 Flash integration",
        "Multiple assistant personas",
        "Persistent chat history with localStorage",
        "Image upload for multimodal input",
        "Speech-to-text with the Web Speech API",
        "Text-to-speech for assistant responses",
        "Markdown and syntax highlighting for technical answers",
        "Image-generation mode with downloadable output"
      ],
      challenge: "The technical challenge was combining different input and output modes into one chat flow without letting state become difficult to manage, while still passing recent conversation context back to the model.",
      outcome: "The result is an AI assistant prototype that demonstrates generative-model integration, multimodal input, persistent client-side state, and browser APIs in one interface."
    }
  },
  {
    slug: "lar-garage",
    year: "2025",
    title: "Lar-Garage",
    tech: ["React", "Supabase"],
    link: "https://lar-garage.vercel.app/",
    image: "/Project_Garage.jpg",
    desc: "An integrated workshop-management system for tracking service operations and related records."
  },
  {
    slug: "lar-english-story",
    year: "2025",
    title: "Lar-EnglishStory",
    tech: ["React", "Local Storage"],
    link: "https://lar-story.vercel.app/",
    image: "/Project_EnglishStory.jpg",
    desc: "An English-literacy platform with an interactive collection of digital stories."
  },
  {
    slug: "lar-inventory",
    year: "2025",
    title: "Lar-Inventory",
    tech: ["React", "Firebase"],
    link: "https://lar-inventory-stok.vercel.app/",
    image: "/Project_Inventory.jpg",
    desc: "A real-time inventory-control system backed by a cloud database."
  },
];

export const designProjects = [
  {
    year: "2023",
    title: "Independence Day Poster",
    tech: ["Canva"],
    image: "/Project_Poster.png",
    desc: "Poster created for a design competition at SMKN 1 Kertajati."
  },
  {
    year: "2024",
    title: "Bagja College Super Camp Poster",
    tech: ["Canva"],
    image: "/Project_Poster.jpg",
    desc: "Promotional poster for the Bagja College Super Camp program."
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    year: "2024",
    title: "Instagram Feed Design",
    tech: ["Canva"],
    image: `/Project_Feeds (${index + 1}).jpg`,
    desc: "Instagram feed content designed for Bagja College."
  })),
  {
    year: "2024",
    title: "Instagram Feed Design",
    tech: ["Canva"],
    image: "/Project_Feeds (1).png",
    desc: "Instagram feed content designed for Bagja College."
  },
  ...Array.from({ length: 4 }, (_, index) => ({
    year: "2024",
    title: "Student Admission Brochure",
    tech: ["Canva"],
    image: `/Project_Brosur (${index + 1}).png`,
    desc: "Student-admission brochure designed for Bagja College."
  })),
  {
    year: "2024",
    title: "Admission Banner",
    tech: ["Canva"],
    image: "/Project_Banner (1).png",
    desc: "Student-admission banner designed for Bagja College."
  },
  {
    year: "2024",
    title: "Admission Banner",
    tech: ["Canva"],
    image: "/Project_Banner (3).png",
    desc: "Student-admission banner designed for Bagja College."
  },
  {
    year: "2024",
    title: "Super Camp Banner",
    tech: ["Canva"],
    image: "/Project_Banner (2).png",
    desc: "Promotional banner for the Bagja College Super Camp program."
  },
];
