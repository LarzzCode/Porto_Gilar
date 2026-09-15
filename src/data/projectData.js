export const devProjects = [
  {
    slug: "lar-coffeeshop",
    year: "2025",
    title: "Lar-CoffeShop",
    tech: ["React JS", "Tailwind"],
    link: "https://landing-page-coffe-shop.vercel.app/",
    image: "/Project_CoffeShop.jpg",
    desc: "Landing page coffee shop modern dan responsif."
  },
  {
    slug: "lar-carwash-and-detailing",
    year: "2025",
    title: "Lar-Carwash-And-Detailing",
    tech: ["React JS", "Tailwind"],
    link: "https://landing-page-car-wash.vercel.app/",
    image: "/Project_CarWash.jpg",
    desc: "Landing page untuk bisnis car wash dan detailing dengan fokus pada presentasi layanan."
  },
  {
    slug: "lar-movie",
    year: "2024",
    title: "Lar-Movie",
    tech: ["Next JS", "Tailwind"],
    link: "https://lar-movies.vercel.app/",
    image: "/Project_Movie.jpg",
    desc: "Platform pencarian film sinematik dengan dark mode dan integrasi API TMDB real-time."
  },
  {
    slug: "lar-calculator",
    year: "2024",
    title: "Lar-Calculator",
    tech: ["HTML", "CSS", "JS"],
    link: "https://calculator-lar.vercel.app/",
    image: "/Project_Calculator.jpg",
    desc: "Tools kalkulasi digital dengan antarmuka neumorphism yang responsif."
  },
  {
    slug: "bagja-college",
    year: "2024",
    title: "Bagja College",
    tech: ["HTML", "CSS", "JavaScript", "Google Forms"],
    link: "https://bagjacollege.com",
    source: "https://github.com/LarzzCode/BagjaCollegeDev",
    image: "/Project_BC.jpg",
    desc: "Portal akses tes digital untuk membantu siswa membuka ujian berdasarkan kelas dan program secara lebih terstruktur.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "Education Workflow",
      summary: "Mengubah proses akses ujian yang sebelumnya lebih manual menjadi portal digital sederhana yang mudah digunakan siswa dari perangkat mobile maupun desktop.",
      problem: "Akses ujian dan informasi tes perlu dibuat lebih praktis. Siswa membutuhkan satu titik masuk yang jelas untuk memilih kelas dan membuka tes yang sesuai tanpa bergantung pada alur manual.",
      solution: "Saya membuat portal Bagja College Test dengan pengelompokan kelas, dropdown program, dan tautan langsung menuju form ujian. Antarmukanya dibuat ringan dan responsif agar mudah dibuka dari perangkat siswa.",
      role: "Mengusulkan solusi digital, menyusun alur akses ujian, merancang antarmuka, dan mengimplementasikan front-end portal.",
      features: [
        "Navigasi ujian berdasarkan kelas X, XI, dan XII",
        "Pengelompokan program atau jurusan di dalam dropdown",
        "Integrasi tautan Google Forms sebagai media ujian",
        "Responsive layout untuk desktop dan mobile",
        "Micro-interaction dan animated welcome message"
      ],
      challenge: "Tantangan utamanya adalah membuat alur yang sesederhana mungkin untuk siswa. Solusinya bukan menambah banyak fitur, tetapi mengurangi langkah: pilih kelas, pilih program, lalu masuk ke tes.",
      outcome: "Portal menjadi bagian dari digitalisasi workflow tes Bagja College dan memberi siswa akses ujian yang lebih terstruktur dibanding alur manual sebelumnya."
    }
  },
  {
    slug: "lar-todo",
    year: "2024",
    title: "Lar-Todo",
    tech: ["React", "Vite"],
    link: "https://todo-app-lar.vercel.app/",
    image: "/Project_Todo.jpg",
    desc: "Aplikasi produktivitas manajemen tugas dengan persistensi data lokal."
  },
  {
    slug: "lar-finance",
    year: "2025",
    title: "Lar-Finance",
    tech: ["React", "Supabase", "Recharts", "PWA"],
    link: "https://larfinance.vercel.app/",
    source: "https://github.com/LarzzCode/Lar_Finance",
    image: "/Project_Finance.jpg",
    desc: "Personal finance app untuk mencatat transaksi, mengelola dompet, budgeting, tabungan, laporan, dan insight keuangan dalam satu dashboard.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "Personal Finance Platform",
      summary: "Project ini berawal dari kebutuhan pribadi untuk memahami ke mana uang bulanan pergi, lalu berkembang dari pencatatan sederhana menjadi aplikasi keuangan multi-fitur.",
      problem: "Pencatatan pengeluaran yang tersebar membuat kondisi keuangan sulit dibaca. Spreadsheet membantu, tetapi semakin banyak kategori, dompet, pemasukan, dan pengeluaran, semakin tinggi friksi untuk menjaga data tetap rapi dan mudah dianalisis.",
      solution: "Saya membangun Lar-Finance sebagai pusat pencatatan keuangan personal berbasis React dan Supabase. Data transaksi dihubungkan dengan dompet dan kategori, lalu disajikan kembali melalui dashboard, budgeting, laporan, savings, subscription tracking, dan financial insight.",
      role: "Merancang produk dari kebutuhan pribadi, membangun antarmuka React, menyusun alur fitur, mengintegrasikan autentikasi dan database Supabase, serta mengembangkan visualisasi dan reporting.",
      features: [
        "Authentication dan profile pengguna",
        "Pencatatan pemasukan dan pengeluaran",
        "Wallet / dompet dan kategori transaksi",
        "Budgeting dan target keuangan",
        "Savings dan subscription tracking",
        "Rekap, report, dan visualisasi menggunakan Recharts",
        "AI Insight untuk membantu membaca pola keuangan",
        "PWA support untuk pengalaman seperti aplikasi"
      ],
      challenge: "Tantangan terbesar adalah menjaga banyak modul tetap terasa sebagai satu produk. Struktur data transaksi, dompet, kategori, budget, dan laporan harus saling terhubung tanpa membuat flow input menjadi rumit.",
      outcome: "Lar-Finance menggantikan workflow pencatatan yang sebelumnya lebih manual menjadi satu dashboard yang bisa dipakai untuk mencatat, melihat ringkasan, dan mengevaluasi kondisi keuangan dari berbagai perangkat."
    }
  },
  {
    slug: "lar-ai",
    year: "2025",
    title: "Lar-Ai",
    tech: ["React", "Gemini API", "Web Speech API"],
    link: "https://lar-ai.vercel.app/",
    image: "/Project_Ai.jpg",
    desc: "AI assistant berbasis Gemini dengan chat history, persona, input gambar, voice interaction, markdown, dan image-generation mode.",
    featuredCaseStudy: true,
    caseStudy: {
      eyebrow: "AI Assistant Experience",
      summary: "Eksperimen untuk mengubah Gemini API dari sekadar endpoint text generation menjadi pengalaman assistant yang lebih interaktif di browser.",
      problem: "Chatbot dasar hanya mengirim teks dan menampilkan teks. Saya ingin membuat pengalaman yang lebih dekat dengan assistant: punya mode kerja, mengingat percakapan lokal, menerima gambar, memahami input suara, dan menyajikan jawaban teknis dengan format yang nyaman dibaca.",
      solution: "Lar-Ai dibangun dengan React dan Google Generative AI SDK. Aplikasi menambahkan persona, local chat history, multimodal image input, speech recognition, text-to-speech, markdown rendering, syntax highlighting, dan mode image generation.",
      role: "Merancang UI chat, mengintegrasikan Gemini API, menyusun persona dan context handling, serta membangun fitur multimodal dan browser-native voice interaction.",
      features: [
        "Gemini 2.0 Flash integration",
        "Multiple assistant personas",
        "Persistent chat history menggunakan localStorage",
        "Image upload sebagai multimodal input",
        "Speech-to-text menggunakan Web Speech API",
        "Text-to-speech untuk membacakan respons",
        "Markdown dan syntax highlighting untuk jawaban teknis",
        "Image-generation mode dengan downloadable output"
      ],
      challenge: "Tantangan teknisnya adalah menggabungkan beberapa jenis input dan output ke satu flow chat tanpa membuat state menjadi sulit dikelola, sambil tetap membawa beberapa pesan terakhir sebagai context ke model.",
      outcome: "Hasilnya adalah prototype AI assistant yang menunjukkan integrasi model generatif, multimodal input, persistent client state, dan browser APIs dalam satu interface."
    }
  },
  {
    slug: "lar-garage",
    year: "2025",
    title: "Lar-Garage",
    tech: ["React", "Supabase"],
    link: "https://lar-garage.vercel.app/",
    image: "/Project_Garage.jpg",
    desc: "Sistem manajemen operasional bengkel terintegrasi untuk tracking servis."
  },
  {
    slug: "lar-english-story",
    year: "2025",
    title: "Lar-EnglishStory",
    tech: ["React", "Storage"],
    link: "https://lar-story.vercel.app/",
    image: "/Project_EnglishStory.jpg",
    desc: "Platform literasi digital bahasa Inggris dengan koleksi cerita interaktif."
  },
  {
    slug: "lar-inventory",
    year: "2025",
    title: "Lar-Inventory",
    tech: ["React", "Firebase"],
    link: "https://lar-inventory-stok.vercel.app/",
    image: "/Project_Inventory.jpg",
    desc: "Sistem kontrol stok barang real-time berbasis cloud database."
  },
];

export const designProjects = [
  {
    year: "2023",
    title: "Poster Hari Kemerdekaan",
    tech: ["Canva"],
    image: "/Project_Poster.png",
    desc: "Lomba Membuat Poster di SMKN 1 Kertajati"
  },
  {
    year: "2024",
    title: "Poster Super Camp BC",
    tech: ["Canva"],
    image: "/Project_Poster.jpg",
    desc: "Poster Super Camp Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (1).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (2).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (3).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (4).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (5).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (6).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (7).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (8).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (9).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (10).jpg",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Feeds Instagram",
    tech: ["Canva"],
    image: "/Project_Feeds (1).png",
    desc: "Project Feeds Instagram Bagja College"
  },
  {
    year: "2024",
    title: "Brosur Penerimaan Siswa Baru",
    tech: ["Canva"],
    image: "/Project_Brosur (1).png",
    desc: "Project Brosur PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Brosur Penerimaan Siswa Baru",
    tech: ["Canva"],
    image: "/Project_Brosur (2).png",
    desc: "Project Brosur PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Brosur Penerimaan Siswa Baru",
    tech: ["Canva"],
    image: "/Project_Brosur (3).png",
    desc: "Project Brosur PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Brosur Penerimaan Siswa Baru",
    tech: ["Canva"],
    image: "/Project_Brosur (4).png",
    desc: "Project Brosur PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Banner",
    tech: ["Canva"],
    image: "/Project_Banner (1).png",
    desc: "Project Banner PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Banner",
    tech: ["Canva"],
    image: "/Project_Banner (3).png",
    desc: "Project Banner PPDB Bagja College"
  },
  {
    year: "2024",
    title: "Banner",
    tech: ["Canva"],
    image: "/Project_Banner (2).png",
    desc: "Project Banner SuperCamp Bagja College"
  },
];
