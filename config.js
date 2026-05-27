const CONFIG = {
  brand: {
    name: "Graha Hotel",
    tagline: "Kenyamanan dalam Kemewahan",
    logo: "",
    favicon: "",
  },

  hero: {
    headline: "Selamat Datang di Graha Hotel",
    subheadline: "Nikmati pengalaman menginap mewah dengan pemandangan kota yang menakjubkan. Elegansi dan kenyamanan dalam setiap momen.",
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    ctaPrimary: { text: "Lihat Kamar", href: "#rooms" },
    ctaSecondary: { text: "Hubungi Kami", href: "#contact" },
  },

  nav: {
    links: [
      { label: "Beranda", href: "#hero" },
      { label: "Tentang", href: "#about" },
      { label: "Kamar", href: "#rooms" },
      { label: "Fasilitas", href: "#facilities" },
      { label: "Kontak", href: "#contact" },
    ],
    ctaButton: { text: "Pesan Sekarang", href: "#contact" },
  },

  stats: [
    { value: "120+", label: "Kamar Premium" },
    { value: "15K+", label: "Tamu Puas" },
    { value: "8", label: "Tahun Berdiri" },
    { value: "4.9★", label: "Rating Tamu" },
  ],

  rooms: {
    sectionTitle: "Kamar & Suite",
    sectionSubtitle: "Beragam pilihan kamar dengan fasilitas terbaik untuk pengalaman menginap yang sempurna",
    items: [
      {
        name: "Standard Room",
        description: "Kamar nyaman dengan fasilitas lengkap, cocok untuk perjalanan bisnis atau liburan singkat.",
        price: "Rp 500K",
        period: "/malam",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        badge: "Populer",
        amenities: ["WiFi Gratis", "TV LED 32\"", "AC", "Kamar Mandi Dalam"],
      },
      {
        name: "Deluxe Room",
        description: "Kamar lebih luas dengan pemandangan kota dan fasilitas premium untuk kenyamanan maksimal.",
        price: "Rp 850K",
        period: "/malam",
        image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&q=80",
        badge: "Favorite",
        amenities: ["WiFi Gratis", "TV LED 43\"", "AC", "Coffee Maker", "Mini Bar"],
      },
      {
        name: "Suite Room",
        description: "Suite mewah dengan ruang tamu terpisah, balkon pribadi, dan layanan butler 24 jam.",
        price: "Rp 1,5JT",
        period: "/malam",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
        badge: "Premium",
        amenities: ["WiFi Gratis", "TV LED 55\"", "AC", "Coffee Maker", "Mini Bar", "Safe Box", "Balkon"],
      },
    ],
  },

  facilities: {
    sectionTitle: "Fasilitas Hotel",
    sectionSubtitle: "Nikmati berbagai fasilitas lengkap untuk menunjang kenyamanan Anda selama menginap",
    items: [
      {
        icon: "waves",
        title: "Kolam Renang",
        description: "Kolam renang outdoor dengan pemandangan kota yang indah.",
      },
      {
        icon: "utensils",
        title: "Restoran",
        description: "Hidangan internasional dan lokal dari chef berbakat.",
      },
      {
        icon: "dumbbell",
        title: "Fitness Center",
        description: "Peralatan gym modern buka 24 jam untuk tamu.",
      },
      {
        icon: "car",
        title: "Valet Parking",
        description: "Layanan parkir valet 24 jam yang aman dan nyaman.",
      },
      {
        icon: "sparkles",
        title: "Spa & Wellness",
        description: "Pijat tradisional dan perawatan spa untuk relaksasi.",
      },
      {
        icon: "building-2",
        title: "Meeting Room",
        description: "Ruang pertemuan kapasitas 50 orang dengan peralatan lengkap.",
      },
    ],
  },

  testimonials: {
    sectionTitle: "Testimoni Tamu",
    items: [
      {
        name: "Ani & Budi Santoso",
        location: "Jakarta",
        avatar: "https://i.pravatar.cc/80?img=32",
        rating: 5,
        text: "Pengalaman menginap yang luar biasa! Pelayanan staf sangat ramah dan profesional. Kamar bersih dan nyaman. Pasti akan kembali lagi.",
      },
      {
        name: "Sarah Wijaya",
        location: "Bandung",
        avatar: "https://i.pravatar.cc/80?img=25",
        rating: 5,
        text: "Suite room-nya sangat mewah dengan pemandangan kota yang menakjubkan. Sarapan prasmanan juga lengkap dan lezat. Highly recommended!",
      },
      {
        name: "David Lim",
        location: "Surabaya",
        avatar: "https://i.pravatar.cc/80?img=60",
        rating: 5,
        text: "Fasilitas lengkap, lokasi strategis, dan pelayanan bintang 5. Graha Hotel menjadi pilihan utama saya setiap ke kota ini.",
      },
    ],
  },

  about: {
    headline: "Hotel Terbaik untuk Pengalaman Tak Terlupakan",
    body: "Graha Hotel hadir sebagai destinasi menginap premium yang menggabungkan kemewahan modern dengan keramahan tradisional Indonesia. Berdiri sejak 2018, kami telah melayani ribuan tamu dengan standar pelayanan internasional dan komitmen terhadap kenyamanan tamu.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80",
    highlights: [
      "Terletak di pusat kota dengan akses mudah ke berbagai destinasi wisata",
      "Sertifikasi kebersihan internasional dan protokol kesehatan ketat",
      "Staf profesional multibahasa siap melayani 24 jam",
    ],
  },

  contact: {
    sectionTitle: "Hubungi Kami",
    sectionSubtitle: "Pesan sekarang atau tanyakan lebih lanjut tentang layanan kami",
    email: "info@grahahotel.com",
    phone: "(0361) 123-4567",
    address: "Jl. Pantai Indah No. 123, Denpasar, Bali",
    formFields: {
      namePlaceholder: "Nama Lengkap",
      emailPlaceholder: "Email Anda",
      destinationPlaceholder: "Tipe Kamar yang Diminati",
      messagePlaceholder: "Pesan atau pertanyaan Anda...",
      submitText: "Kirim Pesan",
    },
  },

  footer: {
    tagline: "Kenyamanan dalam Kemewahan",
    columns: [
      {
        title: "Kamar",
        links: [
          { label: "Standard Room", href: "#rooms" },
          { label: "Deluxe Room", href: "#rooms" },
          { label: "Suite Room", href: "#rooms" },
          { label: "Promo Spesial", href: "#contact" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Tentang Kami", href: "#about" },
          { label: "Karir", href: "#" },
          { label: "Press", href: "#" },
          { label: "Kebijakan Privasi", href: "#" },
        ],
      },
      {
        title: "Dukungan",
        links: [
          { label: "FAQ", href: "#" },
          { label: "Hubungi Kami", href: "#contact" },
          { label: "Syarat & Ketentuan", href: "#" },
          { label: "Kebijakan Refund", href: "#" },
        ],
      },
    ],
    socials: [
      { platform: "Instagram", href: "#", icon: "instagram" },
      { platform: "Facebook", href: "#", icon: "facebook" },
      { platform: "Twitter", href: "#", icon: "twitter" },
      { platform: "YouTube", href: "#", icon: "youtube" },
    ],
    copyright: "© 2026 Graha Hotel. All rights reserved.",
  },

  theme: {
    navy: "#0c1428",
    navyLight: "#1a2444",
    gold: "#c9a84c",
    goldLight: "#d4b85a",
    cream: "#faf6ef",
    white: "#ffffff",
  },
};
