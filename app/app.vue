<script lang="ts" setup>
import Menubar from "primevue/menubar";

const menuItems = [
  {
    label: "Produk",
    icon: "pi pi-fw pi-download",
    command: () => console.log("Open clicked"),
  },
  {
    label: "Galeri",
    icon: "pi pi-fw pi-power-off",
    command: () => console.log("Exit clicked"),
  },
  {
    label: "Testimoni",
    icon: "pi pi-fw pi-power-off",
    command: () => console.log("Exit clicked"),
  },
  {
    label: "Daftar Harga",
    icon: "pi pi-fw pi-power-off",
    command: () => console.log("Exit clicked"),
  },
];
const products = [
  {
    name: "Karung Jumbo 1",
    description: "Deskripsi Karung Jumbo 1",
    image: "/images/1.jpg",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/2.jpg",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/3.jpg",
  },
  {
    name: "Karung Jumbo 1",
    description: "Deskripsi Karung Jumbo 1",
    image: "/images/1.jpg",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/2.jpg",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/3.jpg",
  },
  {
    name: "Karung Jumbo 1",
    description: "Deskripsi Karung Jumbo 1",
    image: "/images/1.jpg",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/2.jpg",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/3.jpg",
  },
];
const testimonials = [
  {
    name: "Testimonial 1",
    content: "Isi Testimonial 1",
    image: "/images/1.jpg",
  },
  {
    name: "Testimonial 2",
    content: "Isi Testimonial 2",
    image: "/images/2.jpg",
  },
  {
    name: "Testimonial 3",
    content: "Isi Testimonial 3",
    image: "/images/3.jpg",
  },
  {
    name: "Testimonial 1",
    content: "Isi Testimonial 1",
    image: "/images/1.jpg",
  },
  {
    name: "Testimonial 2",
    content: "Isi Testimonial 2",
    image: "/images/2.jpg",
  },
  {
    name: "Testimonial 3",
    content: "Isi Testimonial 3",
    image: "/images/3.jpg",
  },
  {
    name: "Testimonial 1",
    content: "Isi Testimonial 1",
    image: "/images/1.jpg",
  },
  {
    name: "Testimonial 2",
    content: "Isi Testimonial 2",
    image: "/images/2.jpg",
  },
  {
    name: "Testimonial 3",
    content: "Isi Testimonial 3",
    image: "/images/3.jpg",
  },
];
</script>

<template>
  <div>
    <div class="flex items-center justify-between gap-4" id="header">
      <div>
        <p>Karung Jumbo Sidoarjo</p>
      </div>
      <Menubar :model="menuItems" />
      <div>Hubungi Kami</div>
    </div>
    <div class="flex flex-col items-center gap-4" id="hero">
      <div class="flex flex-col text-center gap-4">
        <p class="text-7xl">Karung Jumbo Bekas</p>
        <p class="text-7xl">Siap Pakai untuk Industri</p>
        <p class="text-5xl">Biaya Hemat, Tetap Kuat</p>
      </div>
      <div class="flex items-center gap-4 w-full">
        <div class="h-[120px] basis-1/5 bg-red-500">Test</div>
        <div class="h-[120px] basis-1/5 bg-red-500">Test</div>
        <div class="h-[120px] basis-1/5 bg-red-500">Test</div>
        <div class="h-[120px] basis-1/5 bg-red-500">Test</div>
        <div class="h-[120px] basis-1/5 bg-red-500">Test</div>
      </div>
    </div>
    <div class="flex flex-col gap-4 text-center" id="why-us">
      <div>
        <p class="text-xl">Tentang Kami</p>
      </div>
      <p>
        Kami adalah penyedia karung jumbo bekas berkualitas untuk kebutuhan
        industri di Indonesia. Fokus kami adalah memberikan solusi pengemasan
        yang hemat biaya namun tetap andal, terutama bagi sektor yang
        membutuhkan kapasitas besar seperti manufaktur, logistik, pertanian, dan
        tambang. Setiap karung yang kami jual telah melalui proses sortir untuk
        memastikan kelayakan pakai dan efisiensi penggunaan di lapangan.
      </p>
      <div class="flex gap-4">
        <div>
          <img
            src="/images/1.jpg"
            alt="Karung Jumbo 1"
            class="aspect-2/1 object-cover"
          />
        </div>
        <div class="basis-1/4">
          <p>
            Dengan pengalaman melayani berbagai jenis industri, kami memahami
            pentingnya ketersediaan stok, pengiriman tepat waktu, dan komunikasi
            yang cepat. Karena itu, kami siap membantu Anda menemukan solusi
            yang sesuai dengan kebutuhan—baik untuk pembelian satuan maupun
            partai besar.
          </p>
        </div>
      </div>
      <p>Kami telah melayani customer industri sebanyak</p>
      <div class="w-full flex gap-4">
        <div class="w-full">
          <p>100+ Klien</p>
          <p>Lorem Ipsum dolor sit amet</p>
        </div>
        <div class="w-full">
          <p>100+ Klien</p>
          <p>Lorem Ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col" id="usage">
      <p class="text-center">Cocok Digunakan untuk Sektor</p>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 bg-red-500">
          <p>Pertanian</p>
        </div>
        <div class="col-span-1 bg-red-500">
          <p>Pertanian</p>
        </div>
        <div class="col-span-1 bg-red-500">
          <p>Pertanian</p>
        </div>
        <div class="col-span-2 bg-red-500">
          <p>Pertanian</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4" id="product">
      <Carousel :value="products" :numVisible="3" :numScroll="3">
        <template #item="slotProps">
          <p>{{ slotProps }}</p>
        </template>
      </Carousel>
    </div>
    <div class="" id="testimonial">
      <Carousel :value="testimonials" :numVisible="3" :numScroll="3">
        <template #item="slotProps">
          <p>{{ slotProps }}</p>
        </template>
      </Carousel>
    </div>
    <div class="" id="order-now">
      <div class="flex flex-col items-center gap-4">
        <p class="text-3xl">Pesan Sekarang</p>
        <p class="text-xl">
          Hubungi Kami
          <span class="text-red-500">+62 123 4567 890</span>
        </p>
      </div>
    </div>
    <div id="footer">
      <div>
        <p>CV Imron Jaya - Karung Jumbo Sidoarjo</p>
        <p>Alamat: Jl. Raya Sidoarjo No.123, Sidoarjo</p>
        <p>Email: karungjumbosidoarjo@gmail.com</p>
        <p>Telepon: +62 123 4567 890</p>
      </div>
    </div>
  </div>
</template>
