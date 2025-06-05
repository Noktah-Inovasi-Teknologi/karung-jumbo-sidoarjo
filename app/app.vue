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
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 1",
    description: "Deskripsi Karung Jumbo 1",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 1",
    description: "Deskripsi Karung Jumbo 1",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 2",
    description: "Deskripsi Karung Jumbo 2",
    image: "/images/1.JPG",
  },
  {
    name: "Karung Jumbo 3",
    description: "Deskripsi Karung Jumbo 3",
    image: "/images/1.JPG",
  },
];
const testimonials = [
  {
    name: "Tony Handoko",
    content:
      "Saya sudah beberapa kali beli karung jumbo di sini. Barangnya kuat dan awet, cocok banget buat kebutuhan di gudang. Pelayanannya juga enak, cepat tanggap.",
    image: "/images/user1.png",
  },
  {
    name: "Liem Tjokro",
    content:
      "Tim saya biasa beli karung plastik di sini. Kualitasnya konsisten, nggak gampang robek. Harga masuk akal, jadi langganan terus sampai sekarang.",
    image: "/images/user2.png",
  },
  {
    name: "Agus Hardi Tambunan",
    content:
      "Awalnya coba-coba beli satu kali, tapi ternyata cocok. Sekarang tiap bulan pasti order. Pengirimannya cepet dan nggak pernah salah kirim.",
    image: "/images/user3.png",
  },
  {
    name: "Budi Santoso",
    content:
      "Usaha saya butuh banyak karung besar buat packing. Di sini lengkap dan gampang dihubungi. Nggak ribet, langsung kirim, langsung pakai.",
    image: "/images/user4.png",
  },
  {
    name: "Hendri Wijaya",
    content:
      "Saya suka karena mereka ngerti kebutuhan pelanggan. Pas saya butuh urgent, langsung dibantu. Jarang banget ada layanan secepat ini.",
    image: "/images/user5.png",
  },
  {
    name: "Eko Prasetyo",
    content:
      "Karung jumbo dari sini kokoh banget. Udah saya coba buat bahan berat dan tetap aman. Harganya juga masih masuk akal buat skala industri.",
    image: "/images/user6.png",
  },
  {
    name: "Nanang Prabowo",
    content:
      "Kami pakai plastik dari sini buat produksi harian. Bahannya bagus, nggak gampang sobek, dan yang paling penting, stoknya selalu ada.",
    image: "/images/user7.png",
  },
  {
    name: "Setiawan Adi",
    content:
      "Pernah sekali ada masalah kecil soal pengiriman, tapi langsung diselesaikan dengan baik. Itu bikin saya makin percaya sama layanan mereka.",
    image: "/images/user8.png",
  },
  {
    name: "Yulianto Trianto",
    content:
      "Saya udah coba beli dari beberapa tempat, tapi yang paling nyaman tetap di sini. Fast response, ramah, dan barang selalu sesuai harapan.",
    image: "/images/user9.png",
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
      <div class="flex items-center gap-8 w-full">
        <div
          class="relative aspect-[6/8] basis-1/5 rounded-3xl border border-black"
        >
          <img
            src="/images/2.JPG"
            alt="Karung Jumbo"
            class="h-full w-full object-cover rounded-3xl"
          />
          <p
            class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-2 rounded-3xl text-center"
          >
            Berkualitas dan Durable
          </p>
        </div>
        <div
          class="flex flex-col justify-between aspect-[5/8] basis-1/5 bg-[#DAFF95] border border-black rounded-3xl p-8"
        >
          <p class="text-sm text-black text-wrap">
            Solusi ekonomis untuk kebutuhan pengemasan & penyimpanan industri.
          </p>
          <Icon class="!w-16 !h-16 text-black" name="uil:truck" />
        </div>
        <div
          class="relative aspect-[4/8] basis-1/5 rounded-3xl border-1 border-black"
        >
          <img
            src="/images/3.JPG"
            alt="Karung Jumbo"
            class="h-full w-full object-cover rounded-3xl"
          />
          <p
            class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-2 rounded-3xl text-center"
          >
            Tersedia dalam Berbagai Ukuran
          </p>
        </div>
        <div
          class="flex flex-col justify-between aspect-[5/8] basis-1/5 bg-[#9DE345] border border-black rounded-3xl"
        >
          <div class="p-4 text-black">
            <p>Produk kami lebih unggul karena:</p>
          </div>
          <div
            class="bg-[#DAFF95] border-t border-black text-black text-xs p-4 rounded-3xl"
          >
            <div class="flex">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Ukuran standar industri (1 ton+)</p>
            </div>
            <div class="flex">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Kondisi layak pakai & bersih</p>
            </div>
            <div class="flex">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Siap dikirim dalam jumlah besar</p>
            </div>
            <div class="flex">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Lebih hemat dibanding karung baru</p>
            </div>
          </div>
        </div>
        <div
          class="aspect-[6/8] basis-1/5 bg-[#9DE345] rounded-3xl p-8 justify-between"
        >
          <div class="flex flex-col justify-between h-full">
            <p class="text-xl text-black">Bukan yang Anda cari?</p>
            <Button @click="scrollToSection('product')" class="!rounded-3xl">
              <div class="flex gap-2 items-center">
                <p>Cek Produk Lainnya</p>
                <Icon class="!w-6 !h-6" name="uil:arrow-right" />
              </div>
            </Button>
          </div>
        </div>
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
    <div class="p-8 bg-[#FAFAFA]" id="testimonial">
      <Carousel
        :value="testimonials"
        :numVisible="3"
        :numScroll="3"
        pt:itemlist:class=""
      >
        <template #item="slotProps">
          <div class="flex gap-4">
            <img
              :src="slotProps.data.image"
              alt="Testimonial Image"
              class="w-24 h-24 rounded-full object-cover"
            />
            <div class="flex flex-col gap-2 text-black">
              <p class="text-2xl font-semibold">{{ slotProps.data.name }}</p>
              <p class="text-sm">{{ slotProps.data.content }}</p>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="bg-[#FAFAFA] p-8" id="order-now">
      <div class="flex flex-col items-center gap-4 text-black">
        <div class="flex flex-col gap-4 text-center p-8">
          <p class="text-5xl helvetica">Cocok dengan Produk Kami?</p>
          <p class="text-5xl helvetica">Pesan Sekarang Juga!</p>
        </div>
        <Button class="!rounded-3xl !m-8">
          <div class="flex gap-2 items-center">
            <Icon class="!w-6 !h-6" name="uil:whatsapp" />
            <p>Pesan Sekarang</p>
          </div>
        </Button>
        <p class="text-lg">atau</p>
        <p class="text-5xl helvetica">Datang Langsung ke Tempat Kami</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63301.749251788024!2d112.52613881637731!3d-7.425427599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78095b5625e06b%3A0x105a547091935f63!2sGudang%20Karung%20Jumbo!5e0!3m2!1sen!2sid!4v1749036329545!5m2!1sen!2sid"
          height="480"
          class="w-full items-center rounded-3xl my-8"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
