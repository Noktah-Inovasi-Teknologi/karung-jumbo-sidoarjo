/**
 * Single source of truth for site content.
 *
 * Previously all of this lived inline in `app.vue`, which meant a copy change
 * required editing markup. Keeping it here also lets the structured-data and
 * the visible markup read from the same values, so they cannot drift apart.
 */

export interface GalleryImage {
  src: string;
  /** Descriptive alt text. Used verbatim — do not fall back to the name. */
  alt: string;
}

export interface Product {
  name: string;
  description: string;
  /**
   * One or more images. The card cross-fades between them and shows dot
   * controls whenever there is more than one.
   */
  images: GalleryImage[];
  /** Sizes/specs this product is offered in. Rendered as badges. */
  variants?: string[];
}

export interface Testimonial {
  name: string;
  content: string;
  /** Stars out of five, as left on the Google Maps listing. */
  rating: number;
}

/** First letter of the name, for the avatar fallback. */
export function initialOf(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export interface Sector {
  name: string;
  image: string;
  alt: string;
  icon: string;
}

const WHATSAPP_NUMBER = "6282232242999";

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const company = {
  legalName: "CV Imron Jaya",
  name: "Gudang Karung Jumbo Sidoarjo",
  tagline: "Karung Jumbo Bekas Siap Pakai untuk Industri",
  phone: "+62 822-3224-2999",
  phoneHref: `tel:+${WHATSAPP_NUMBER}`,
  email: "karungjumbosidoarjo@gmail.com",
  address: {
    street: "Jl. Sawahan No.77, Klagen, Tropodo",
    locality: "Kec. Krian, Kab. Sidoarjo",
    region: "Jawa Timur",
    postalCode: "61262",
    country: "ID",
  },
  geo: { latitude: -7.4254276, longitude: 112.5261388 },
  /** @IconifyIcon */
  addressIcon: "i-uil-map-marker",
  /** @IconifyIcon */
  emailIcon: "i-uil-envelope",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63301.749251788024!2d112.52613881637731!3d-7.425427599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78095b5625e06b%3A0x105a547091935f63!2sGudang%20Karung%20Jumbo!5e0!3m2!1sen!2sid!4v1749036329545!5m2!1sen!2sid",
  socials: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@karungjumbosidoarjo",
      icon: "i-brand-tiktok",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61576333702383",
      icon: "i-uil-facebook-f",
    },
  ],
} as const;

export const whatsapp = {
  general: whatsappLink(
    "Halo, saya ingin bertanya mengenai produk karung jumbo.",
  ),
  order: whatsappLink(
    "Halo, saya ingin memesan produk dari Gudang Karung Jumbo Sidoarjo.",
  ),
  product: (name: string) =>
    whatsappLink(`Halo, saya tertarik dengan produk "${name}". Mohon infonya.`),
};

export const navigation = [
  { label: "Produk", to: "#product" },
  { label: "Testimoni", to: "#testimonial" },
  { label: "Tentang Kami", to: "#why-us" },
] as const;

export const highlights = [
  "Ukuran standar industri (1 ton+)",
  "Kondisi layak pakai & bersih",
  "Siap dikirim dalam jumlah besar",
  "Lebih hemat dibanding karung baru",
] as const;

export const stats = [
  { value: "1000+ Ton", label: "Total Massa Produk Terjual" },
  { value: "500+ Customer", label: "Total Pembeli Sejak Kami Berdiri" },
] as const;

/**
 * Supporting imagery for the About section. Cycles automatically; there are no
 * controls, so order is presentation order only.
 */
export const aboutSecondary: GalleryImage[] = [
  {
    src: "/images/about-secondary/about-secondary-1.webp",
    alt: "Tumpukan karung jumbo bekas tertata rapi per ukuran di gudang",
  },
  {
    src: "/images/about-secondary/about-secondary-2.webp",
    alt: "Karung jumbo berbagai bentuk dan ukuran siap disortir",
  },
  {
    src: "/images/about-secondary/about-secondary-3.webp",
    alt: "Stok karung jumbo bekas dalam jumlah besar di dalam gudang",
  },
  {
    src: "/images/about-secondary/about-secondary-4.webp",
    alt: "Detail serat kain karung jumbo hasil jahitan ulang",
  },
];

export interface ProcessStep {
  name: string;
  /** One-line explanation shown under the heading. */
  description: string;
  /** @IconifyIcon */
  icon: string;
  images: GalleryImage[];
}

/**
 * The refurbishment steps every sack goes through before resale. This is the
 * core differentiator against other secondhand wholesalers, who typically
 * resell as-collected.
 */
export const process: ProcessStep[] = [
  {
    name: "Cuci",
    description:
      "Setiap karung dicuci untuk membersihkan sisa material, debu, dan bau dari muatan sebelumnya.",
    icon: "i-uil-raindrops",
    images: [
      {
        src: "/images/wash/wash-1.webp",
        alt: "Tiga pekerja mencuci karung jumbo bersama-sama di bak cuci gudang",
      },
      {
        src: "/images/wash/wash-2.webp",
        alt: "Pekerja menyikat karung jumbo di area pencucian",
      },
      {
        src: "/images/wash/wash-3.webp",
        alt: "Detail tangan pekerja menyikat permukaan karung jumbo hingga bersih",
      },
    ],
  },
  {
    name: "Jemur",
    description:
      "Dikeringkan sampai benar-benar kering agar tidak lembap, berjamur, atau berbau saat disimpan.",
    icon: "i-uil-sun",
    images: [
      {
        src: "/images/dry/dry-1.webp",
        alt: "Pekerja menata karung jumbo yang baru dicuci untuk dijemur",
      },
      {
        src: "/images/dry/dry-2.webp",
        alt: "Karung jumbo dijemur pada palang di halaman gudang",
      },
      {
        src: "/images/dry/dry-3.webp",
        alt: "Deretan karung jumbo dijemur berjajar di sepanjang dinding gudang",
      },
      {
        src: "/images/dry/dry-4.webp",
        alt: "Karung jumbo dikeringkan berbaris di area terbuka gudang",
      },
    ],
  },
  {
    name: "Jahit Ulang",
    description:
      "Jahitan dan tali yang mulai lemah dijahit ulang, sehingga karung kembali kuat menahan beban penuh.",
    icon: "i-uil-repeat",
    images: [
      {
        src: "/images/rethread/rethread-1.webp",
        alt: "Operator menjahit ulang karung jumbo dengan mesin jahit industri",
      },
      {
        src: "/images/rethread/rethread-2.webp",
        alt: "Detail jarum mesin jahit menjahit ulang kain karung jumbo",
      },
      {
        src: "/images/rethread/rethread-3.webp",
        alt: "Area penjahitan ulang karung jumbo di dalam gudang",
      },
    ],
  },
];

export const products: Product[] = [
  {
    name: "Sling Bag",
    description:
      "Kantong angkut heavy-duty berbahan kain plastik tenun untuk kebutuhan industri. Tali panjang memudahkan pengangkutan dengan forklift atau crane.",
    images: [
      {
        src: "/images/sling-bag/sling-bag-1.webp",
        alt: "Sling bag berbahan kain plastik tenun terbentang di atas pallet",
      },
      {
        src: "/images/sling-bag/sling-bag-2.webp",
        alt: "Sling bag putih tergantung pada hand stacker di dalam gudang",
      },
      {
        src: "/images/sling-bag/sling-bag-3.webp",
        alt: "Sling bag diangkat menggunakan forklift di area penyimpanan",
      },
    ],
    variants: [
      "1–1,5 ton · 110×120 cm · tali 150 cm",
      "2 ton · 150×170 cm · tali 180 cm",
    ],
  },
  {
    name: "Baffle Bag",
    description:
      "Karung jumbo dengan struktur baffle di dalamnya, menjaga bentuk tetap kotak saat diisi penuh. Cocok untuk material curah seperti biji plastik, tepung, atau hasil pertanian.",
    images: [
      {
        src: "/images/baffle-bag/baffle-bag-1.webp",
        alt: "Baffle bag putih dibentangkan dua pekerja di gudang Karung Jumbo Sidoarjo",
      },
      {
        src: "/images/baffle-bag/baffle-bag-2.webp",
        alt: "Bagian dalam baffle bag yang menunjukkan sekat penahan bentuk",
      },
      {
        src: "/images/baffle-bag/baffle-bag-3.webp",
        alt: "Baffle bag berdiri tegak di depan tumpukan karung bekas",
      },
      {
        src: "/images/baffle-bag/baffle-bag-4.webp",
        alt: "Baffle bag warna cokelat muda diperiksa kelayakannya oleh pekerja",
      },
    ],
    variants: ["100×100 cm · tinggi 115–120 cm"],
  },
  {
    name: "Circular Bag",
    description:
      "Karung jumbo model tabung tanpa sudut, kuat dan fleksibel. Digunakan secara luas untuk pengangkutan dan penyimpanan material curah dengan volume besar.",
    images: [
      {
        src: "/images/circular-bag/circular-bag-1.webp",
        alt: "Circular bag putih berdiri terisi penuh di area gudang",
      },
      {
        src: "/images/circular-bag/circular-bag-2.webp",
        alt: "Circular bag dibuka oleh pekerja untuk menunjukkan kapasitasnya",
      },
    ],
    variants: ["90×90 cm · tinggi 115–120 cm"],
  },
  {
    name: "Pallet Plastik",
    description:
      "Pallet plastik kokoh dan tahan lama untuk penyimpanan dan distribusi barang di gudang, pabrik, dan logistik. Anti air, mudah dibersihkan, dan lebih ringan dibanding pallet kayu.",
    images: [
      {
        src: "/images/pallet-plastik/pallet-plastik-1.webp",
        alt: "Pallet plastik untuk gudang dan logistik",
      },
    ],
    variants: ["110×110×15 cm"],
  },
  {
    name: "Plastik PE (Polyethylene) Ex-Inner",
    description:
      "Lembaran plastik PE bekas inner jumbo bag dengan kualitas masih baik. Fleksibel, tahan air, dan cocok untuk pembungkus barang, pelapis karung, atau kebutuhan industri ringan lainnya.",
    images: [
      {
        src: "/images/plastik-pe/plastik-pe-1.webp",
        alt: "Lembaran plastik PE ex-inner jumbo bag yang masih layak pakai",
      },
    ],
  },
];

export const sectors: Sector[] = [
  {
    name: "Pertanian & Perkebunan / Agrikultur",
    image: "/images/agri.webp",
    alt: "Hamparan lahan pertanian sebagai sektor pengguna karung jumbo",
    icon: "i-uil-trees",
  },
  {
    name: "Konstruksi & Material Bangunan",
    image: "/images/const.webp",
    alt: "Lokasi proyek konstruksi dengan material bangunan curah",
    icon: "i-uil-constructor",
  },
  {
    name: "Daur Ulang Plastik",
    image: "/images/plast.webp",
    alt: "Tumpukan biji plastik hasil daur ulang",
    icon: "i-uil-sync",
  },
  {
    name: "Perikanan & Pakan Ternak",
    image: "/images/fish.webp",
    alt: "Hasil perikanan dan bahan baku pakan ternak",
    icon: "i-uil-ship",
  },
  {
    name: "Komoditas Tambang dan Batu Bara",
    image: "/images/coal.webp",
    alt: "Tumpukan batu bara di area pertambangan",
    icon: "i-uil-mountains",
  },
  {
    name: "Bahan Kimia & Manufaktur",
    image: "/images/chem.webp",
    alt: "Fasilitas manufaktur bahan kimia industri",
    icon: "i-uil-flask",
  },
];

/**
 * Real reviews from the Google Maps listing — these replace a set of invented
 * ones. Copy is reproduced verbatim, including the emoji and informal spelling.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Angelina Payment",
    content: "Jumbo second tp kualitas nomer 1",
    rating: 5,
  },
  {
    name: "Mimi Fitri",
    content:
      "Pelayanan nya cepat , barangnya bagus kuat dan awett , bakal langganan terus pokoknya",
    rating: 5,
  },
  {
    name: "Muhammad Habibi",
    content:
      "Penjual responsif, barang oke , harga terjangkau, nggak nyesal belanja disini , semoga sukses selalu 👍👍👍👍",
    rating: 5,
  },
  {
    name: "GONO Wibowo",
    content: "Kwalitas oke..pelayanan memuaskan",
    rating: 5,
  },
  {
    name: "Achmad Taufik",
    content: "Harga murah, bisa di tawar. Hehehe",
    rating: 5,
  },
  {
    name: "Muhammad Arif",
    content:
      "Recommended buat yg butuh jumbo bag bekas bagus. Harga terjangkau.",
    rating: 5,
  },
  {
    name: "Sunardi Febyy",
    content: "Jumbo banyak pilihan, harga murah meriah.",
    rating: 5,
  },
  {
    name: "maskacong22",
    content: "Selalu ready segala ukuran",
    rating: 5,
  },
];
