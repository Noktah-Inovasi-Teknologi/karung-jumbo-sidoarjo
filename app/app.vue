<script lang="ts" setup>
import Menubar from "primevue/menubar";

const menuItems = [
  {
    label: "Produk",
    id: "product",
  },
  {
    label: "Testimoni",
    id: "testimonial",
  },
  {
    label: "Tentang Kami",
    id: "why-us",
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

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between bg-[#FAFAFA] p-8 gap-4"
      id="header"
    >
      <div class="flex flex-col gap-1 text-black">
        <img src="/images/text-black.png" alt="Logo" class="h-12" />
      </div>
      <Menubar
        :model="menuItems"
        pt:root:class="!bg-[#DAFF95] !rounded-3xl"
        :pt="{
          itemcontent: '!rounded-3xl !hover:bg-[#9DE345] !text-black',
        }"
      >
        <template #item="{ item, props }">
          <p
            v-ripple
            class="cursor-pointer px-2 py-1"
            v-bind="props"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </p>
        </template>
      </Menubar>
      <Button class="!rounded-3xl">
        <div class="flex gap-2 items-center">
          <Icon class="!w-6 !h-6" name="uil:whatsapp" />
          <p>Hubungi Kami</p>
        </div>
      </Button>
    </div>
    <div class="flex flex-col items-center bg-[#FAFAFA] p-8 gap-4" id="hero">
      <div class="flex flex-col text-center text-black gap-4">
        <p class="text-5xl helvetica">Karung Jumbo Bekas</p>
        <p class="text-5xl helvetica">Siap Pakai untuk Industri</p>
        <div class="flex gap-2">
          <p
            class="text-5xl helvetica border-1 bg-[#DAFF95] py-2 px-3 rounded-3xl"
          >
            Biaya Hemat
          </p>
          <p
            class="text-5xl helvetica border-1 bg-[#DAFF95] py-2 px-3 rounded-3xl"
          >
            Tetap Kuat
          </p>
        </div>
      </div>
      <br />
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
    <div class="w-full flex bg-[#FAFAFA] pt-8 px-8" id="footer">
      <div
        class="w-full flex justify-between p-8 bg-[#DAFF95] rounded-t-3xl border-t-1 border-x-1 border-black text-black"
      >
        <div>
          <p>CV Imron Jaya</p>
          <p>Gudang Karung Jumbo Sidoarjo</p>
          <br />
          <p>Jl. Sawahan No.77, Klagen, Tropodo</p>
          <p>Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262</p>
          <br />
          <p>karungjumbosidoarjo@gmail.com</p>
          <p>+62 822-3224-2999</p>
        </div>
        <div class="flex flex-col gap-2 basis-1/2 text-xl">
          <a
            href="https://www.tiktok.com/@karungjumbosidoarjo"
            target="_blank"
            rel="noopener"
            class="underline underline-offset-2"
            >TikTok</a
          >
          <a
            href="https://www.facebook.com/profile.php?id=61576333702383"
            target="_blank"
            rel="noopener"
            class="underline underline-offset-2"
            >Facebook</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.helvetica {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

::v-deep(.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover) {
  background: #9de345 !important;
}

::v-deep(.p-menubar-item.p-focus > .p-menubar-item-content) {
  background: #9de345 !important;
}
</style>
