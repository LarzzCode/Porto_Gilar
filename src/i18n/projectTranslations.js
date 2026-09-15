const developmentId = {
  "lar-coffeeshop": {
    desc: "Landing page kedai kopi modern dan responsif yang berfokus pada penyajian produk serta suasana brand.",
  },
  "lar-carwash-and-detailing": {
    desc: "Landing page berorientasi layanan untuk bisnis car wash dan detailing kendaraan.",
  },
  "lar-movie": {
    desc: "Platform pencarian film dengan nuansa sinematik, dark mode, dan integrasi TMDB API secara real-time.",
  },
  "lar-calculator": {
    desc: "Kalkulator digital responsif dengan antarmuka bergaya neumorphism.",
  },
  "bagja-college": {
    desc: "Portal akses ujian digital yang membantu siswa membuka ujian berdasarkan kelas dan program melalui alur yang lebih jelas dan terstruktur.",
    caseStudy: {
      eyebrow: "Alur Kerja Pendidikan",
      summary: "Portal ringan yang mengubah proses akses ujian yang lebih manual menjadi satu titik masuk digital sederhana untuk siswa di mobile maupun desktop.",
      problem: "Siswa membutuhkan cara yang lebih jelas untuk mengakses ujian yang tepat. Alur sebelumnya terlalu bergantung pada arahan manual dan belum memiliki satu tempat yang jelas untuk memilih kelas lalu membuka tes yang sesuai.",
      solution: "Saya membangun portal Bagja College Test dengan pengelompokan kelas, pilihan program, dan tautan langsung ke formulir ujian yang relevan. Antarmuka sengaja dibuat ringan dan responsif agar mudah dibuka dari perangkat siswa.",
      role: "Saya mengusulkan pendekatan digital, memetakan alur akses ujian, merancang antarmuka, dan mengimplementasikan portal front-end.",
      features: [
        "Navigasi ujian untuk kelas X, XI, dan XII",
        "Pengelompokan program di dalam pilihan kelas",
        "Integrasi Google Forms untuk pelaksanaan ujian",
        "Layout responsif untuk desktop dan mobile",
        "Interaksi ringan dan pesan sambutan animatif",
      ],
      challenge: "Tantangan utamanya adalah menjaga perjalanan siswa sesederhana mungkin. Alih-alih menambah banyak fitur, alurnya dipadatkan menjadi tiga tindakan: pilih kelas, pilih program, lalu buka ujian.",
      outcome: "Portal ini menjadi bagian dari alur ujian Bagja College dan memberi siswa cara yang lebih terstruktur untuk mencapai ujian dibanding pendekatan manual sebelumnya.",
    },
  },
  "lar-todo": {
    desc: "Aplikasi manajemen tugas dengan penyimpanan data lokal untuk produktivitas harian yang ringan.",
  },
  "lar-finance": {
    desc: "Aplikasi keuangan pribadi untuk transaksi, dompet, budgeting, tabungan, laporan, langganan, dan insight finansial dalam satu dashboard.",
    caseStudy: {
      eyebrow: "Platform Keuangan Pribadi",
      summary: "Berawal dari kebutuhan pribadi untuk memahami ke mana uang bulanan pergi, lalu berkembang menjadi aplikasi keuangan pribadi dengan banyak fitur.",
      problem: "Pencatatan pengeluaran yang tersebar membuat gambaran keuangan sulit dipahami. Spreadsheet membantu di awal, tetapi ketika dompet, kategori, pemasukan, dan pengeluaran bertambah, menjaga data tetap rapi dan berguna menjadi semakin merepotkan.",
      solution: "Saya membangun Lar-Finance sebagai pusat pengelolaan keuangan pribadi menggunakan React dan Supabase. Transaksi terhubung ke dompet dan kategori, lalu mengalir ke dashboard, budgeting, laporan, tabungan, pelacakan langganan, dan insight finansial.",
      role: "Saya membentuk produk dari masalah pribadi, membangun antarmuka React, merancang alur fitur, mengintegrasikan autentikasi dan data Supabase, serta mengembangkan pengalaman laporan dan visualisasi.",
      features: [
        "Autentikasi pengguna dan manajemen profil",
        "Pencatatan pemasukan dan pengeluaran",
        "Manajemen dompet dan kategori transaksi",
        "Budgeting dan target finansial",
        "Pelacakan tabungan dan langganan",
        "Rekap, laporan, dan visualisasi Recharts",
        "AI Insight untuk membaca pola finansial",
        "Dukungan PWA untuk pengalaman seperti aplikasi",
      ],
      challenge: "Tantangan terbesar adalah membuat banyak modul terasa sebagai satu produk yang utuh. Transaksi, dompet, kategori, budget, dan laporan harus tetap saling terhubung tanpa membuat proses input menjadi rumit.",
      outcome: "Lar-Finance menggantikan alur pencatatan yang lebih manual dengan satu dashboard untuk mencatat aktivitas, melihat ringkasan, dan mengevaluasi kondisi keuangan pribadi lintas perangkat.",
    },
  },
  "lar-ai": {
    desc: "Asisten AI berbasis Gemini dengan riwayat chat, persona, input gambar, interaksi suara, Markdown rendering, dan mode image generation.",
    caseStudy: {
      eyebrow: "Pengalaman Asisten AI",
      summary: "Eksperimen untuk mengubah Gemini API dari sekadar endpoint text generation menjadi pengalaman asisten berbasis browser yang lebih interaktif.",
      problem: "Chatbot dasar hanya mengirim dan menampilkan teks. Saya ingin pengalaman yang lebih dekat dengan asisten: mode kerja berbeda, memori percakapan lokal, input gambar, interaksi suara, dan jawaban teknis yang tetap nyaman dibaca.",
      solution: "Lar-Ai menggunakan React dan Google Generative AI SDK, kemudian menambahkan persona, riwayat chat lokal, input gambar multimodal, speech recognition, text-to-speech, Markdown rendering, syntax highlighting, dan mode image generation.",
      role: "Saya merancang antarmuka chat, mengintegrasikan Gemini API, menyusun penanganan persona dan konteks, serta membangun interaksi multimodal dan voice berbasis browser.",
      features: [
        "Integrasi Gemini 2.0 Flash",
        "Beragam persona asisten",
        "Riwayat chat persisten dengan localStorage",
        "Upload gambar untuk input multimodal",
        "Speech-to-text dengan Web Speech API",
        "Text-to-speech untuk respons asisten",
        "Markdown dan syntax highlighting untuk jawaban teknis",
        "Mode image generation dengan hasil yang dapat disimpan",
      ],
      challenge: "Tantangan teknisnya adalah menggabungkan berbagai mode input dan output dalam satu alur chat tanpa membuat state sulit dikelola, sambil tetap mengirim konteks percakapan terbaru kembali ke model.",
      outcome: "Hasilnya adalah prototipe asisten AI yang memperlihatkan integrasi model generatif, input multimodal, state client-side persisten, dan browser API dalam satu antarmuka.",
    },
  },
  "lar-garage": {
    desc: "Sistem manajemen bengkel terintegrasi untuk melacak operasional servis dan berbagai catatan terkait.",
  },
  "lar-english-story": {
    desc: "Platform literasi bahasa Inggris dengan koleksi cerita digital interaktif.",
  },
  "lar-inventory": {
    desc: "Sistem kontrol inventaris real-time dengan dukungan cloud database.",
  },
  "college-command-center": {
    desc: "Pusat kendali belajar pribadi untuk Universitas Terbuka yang menyatukan mata kuliah, aktivitas Tuton, deadline, target, progres, dan pengalaman PWA dalam satu dashboard.",
  },
  "ditya-tools": {
    desc: "Kumpulan utility browser bebas iklan untuk kebutuhan praktis sehari-hari, menggabungkan berbagai tools ringan dalam satu antarmuka yang bersih dan responsif.",
  },
};

const designId = {
  "Independence Day Poster": {
    title: "Poster Hari Kemerdekaan",
    desc: "Poster yang dibuat untuk kompetisi desain di SMKN 1 Kertajati.",
  },
  "Bagja College Super Camp Poster": {
    title: "Poster Super Camp Bagja College",
    desc: "Poster promosi untuk program Super Camp Bagja College.",
  },
  "Instagram Feed Design": {
    title: "Desain Feed Instagram",
    desc: "Konten feed Instagram yang dirancang untuk Bagja College.",
  },
  "Student Admission Brochure": {
    title: "Brosur Penerimaan Siswa",
    desc: "Brosur penerimaan siswa yang dirancang untuk Bagja College.",
  },
  "Admission Banner": {
    title: "Banner Penerimaan Siswa",
    desc: "Banner penerimaan siswa yang dirancang untuk Bagja College.",
  },
  "Super Camp Banner": {
    title: "Banner Super Camp",
    desc: "Banner promosi untuk program Super Camp Bagja College.",
  },
};

export const localizeProject = (project, language) => {
  if (language !== "id") return project;

  const translated = project.slug ? developmentId[project.slug] : designId[project.title];
  if (!translated) return project;

  return {
    ...project,
    ...translated,
    caseStudy: project.caseStudy
      ? {
          ...project.caseStudy,
          ...(translated.caseStudy || {}),
        }
      : project.caseStudy,
  };
};
