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
    name: "Karung Jumbo Bag Circular 90x90 cm, Tinggi 115-120 cm",
    description:
      "Karung jumbo model tabung (circular) tanpa sudut, kuat dan fleksibel. Digunakan secara luas untuk pengangkutan dan penyimpanan material curah dengan volume besar.",
    image: "/images/jb_circular.JPG",
  },
  {
    name: "Karung Jumbo Bag Baffle 100x100, Tinggi 115-120 cm",
    description:
      "Karung jumbo dengan struktur baffle di dalamnya, menjaga bentuk tetap kotak saat diisi penuh. Cocok untuk penyimpanan material curah seperti biji plastik, tepung, atau hasil pertanian.",
    image: "/images/jb_baffle.png",
  },
  {
    name: "Sling Bag 1-1,5 ton 110x120 cm, Panjang Tali 150 cm",
    description:
      "Sling bag serbaguna untuk kebutuhan industri, dirancang untuk menampung beban hingga 1,5 ton. Ukuran pas dan tali 150 cm memudahkan proses pengangkutan dengan forklift atau crane.",
    image: "/images/sb_1.webp",
  },
  {
    name: "Sling Bag 2 ton 150x170 cm, Panjang Tali 180 cm",
    description:
      "Kantong angkut heavy-duty berbahan kain plastik tenun, mampu menampung beban hingga 2 ton. Dilengkapi tali panjang 180 cm untuk pengangkutan yang lebih aman dan stabil.",
    image: "/images/sb_2.jpg",
  },
  {
    name: "Pallet Plastik 110x110x15 cm",
    description:
      "Pallet plastik kokoh dan tahan lama, berukuran 110x110x15 cm. Ideal untuk kebutuhan penyimpanan dan distribusi barang di gudang, pabrik, dan logistik. Anti air, mudah dibersihkan, dan lebih ringan dibanding pallet kayu.",
    image: "/images/plastik_pallet.png",
  },
  {
    name: "Plastik PE (Polyethylene) Ex-Inner",
    description:
      "Lembaran plastik PE bekas inner jumbo bag dengan kualitas masih baik. Fleksibel, tahan air, dan cocok digunakan untuk pembungkus barang, pelapis karung, atau kebutuhan industri ringan lainnya.",
    image: "/images/pe_inner.JPG",
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
const responsiveOptions = ref([
  {
    breakpoint: "1600px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "640px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "320px",
    numVisible: 1,
    numScroll: 1,
  },
]);
const { $viewport } = useNuxtApp();

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
      class="flex items-center justify-between sm:justify-center md:justify-between bg-[#FAFAFA] p-8 gap-4"
      id="header"
    >
      <div
        class="w-full sm:w-[50vw] md:basis-1/4 flex flex-col gap-1 text-black"
      >
        <img src="/images/text-black.png" alt="Logo" />
      </div>
      <Menubar
        :model="menuItems"
        pt:root:class="!bg-[#DAFF95] !rounded-3xl"
        :pt="{
          itemcontent: '!rounded-3xl !hover:bg-[#9DE345] !text-black',
        }"
        v-if="$viewport.isGreaterThan('md')"
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
      <Button v-if="$viewport.isGreaterThan('sm')" class="!rounded-3xl">
        <div class="flex gap-2 items-center">
          <Icon class="!w-6 !h-6" name="uil:whatsapp" />
          <p>Hubungi Kami</p>
        </div>
      </Button>
    </div>
    <div class="flex flex-col items-center bg-[#FAFAFA] p-8 gap-4" id="hero">
      <div class="flex flex-col text-center text-black gap-2 sm:gap-4">
        <p class="text-xl helvetica sm:text-5xl">Karung Jumbo Bekas</p>
        <p class="text-xl helvetica sm:text-5xl">Siap Pakai untuk Industri</p>
        <div class="flex gap-1 sm:gap-2">
          <p
            class="text-lg sm:text-5xl helvetica border-1 bg-[#DAFF95] py-2 px-3 rounded-3xl"
          >
            Biaya Hemat
          </p>
          <p
            class="text-lg sm:text-5xl helvetica border-1 bg-[#DAFF95] py-2 px-3 rounded-3xl"
          >
            Tetap Kuat
          </p>
        </div>
      </div>
      <br />
      <div
        class="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-8 w-full"
      >
        <div
          class="relative aspect-[2/1] sm:col-span-3 w-full sm:w-[75%] mx-auto rounded-3xl border border-black"
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
          class="flex flex-col w-full justify-between basis-1/5 bg-[#DAFF95] border border-black rounded-3xl p-4 gap-2 sm:gap-4"
        >
          <p class="text-sm text-black text-wrap">
            Solusi ekonomis untuk kebutuhan pengemasan & penyimpanan industri.
          </p>
          <div class="flex justify-end sm:justify-center">
            <div
              class="bg-white w-8 h-8 sm:w-20 sm:h-20 border border-black flex items-center justify-center rounded-full"
            >
              <Icon
                class="!w-4 !h-4 sm:!w-10 sm:!h-10 text-black"
                name="uil:truck"
              />
            </div>
          </div>
        </div>
        <div
          class="relative aspect-[2/1] sm:aspect-[1/2] rounded-3xl border-1 border-black"
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
          class="flex flex-col w-full justify-between xs:aspect-[5/8] sm:basis-1/5 bg-[#9DE345] border border-black rounded-3xl"
        >
          <div class="p-4 text-black">
            <p>Produk kami lebih unggul karena:</p>
          </div>
          <div
            class="bg-[#DAFF95] flex flex-col border-t border-black text-black text-xs p-4 rounded-3xl"
          >
            <div class="flex gap-2 items-center">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Ukuran standar industri (1 ton+)</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Kondisi layak pakai & bersih</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Siap dikirim dalam jumlah besar</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon class="!w-6 !h-6" name="uil:check" />
              <p>Lebih hemat dibanding karung baru</p>
            </div>
          </div>
        </div>
        <div
          class="border-1 border-black sm:col-span-3 w-full sm:w-[75%] mx-auto bg-[#DAFF95] rounded-3xl p-4 sm:p-8 justify-between"
        >
          <div class="flex flex-col gap-4 justify-between h-full">
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
    <div class="flex flex-col p-8 bg-[#FAFAFA]" id="why-us">
      <div class="flex justify-center">
        <p
          class="w-fit px-3 py-2 mb-8 border border-black rounded-3xl text-normal xs:text-lg text-black helvetica"
        >
          Tentang Kami
        </p>
      </div>
      <div class="flex">
        <div
          class="bg-[#DAFF95] p-8 rounded-t-3xl text-black flex flex-col gap-2 sm:gap-4 lg:gap-8 border-x border-t border-black"
        >
          <p class="text-xs sm:text-xl lg:text-3xl">
            Kami adalah penyedia karung jumbo bekas serta produk berbahan dasar
            plastik berkualitas untuk kebutuhan industri di Indonesia.
          </p>
          <div class="flex gap-4 lg:gap-8">
            <p class="text-xs md:text-lg text-justify">
              Fokus kami adalah memberikan solusi yang hemat biaya namun tetap
              andal, terutama bagi sektor yang membutuhkan kapasitas dan jumlah
              besar seperti manufaktur, logistik, pertanian, dan tambang.
            </p>
            <p class="text-xs md:text-lg text-justify">
              Setiap produk yang kami jual telah melalui proses sortir untuk
              memastikan higienitas, kelayakan pakai, dan durabilitas terbaik di
              lapangan.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="sm:basis-1/2">
          <img
            src="/images/4.JPG"
            alt="Karung Jumbo 1"
            class="rounded-b-3xl sm:rounded-b-none sm:rounded-bl-3xl object-cover w-full sm:border-l sm:border-x-0 border-x border-b border-black"
          />
        </div>
        <div v-if="$viewport.isGreaterOrEquals('sm')" class="basis-1/2">
          <p
            class="h-full text-black bg-[#9DE345] p-8 rounded-br-3xl text-xs md:text-sm lg:text-xl border-r border-b border-black"
          >
            Dengan pengalaman melayani berbagai jenis industri, kami memahami
            pentingnya ketersediaan stok, pengiriman tepat waktu, dan komunikasi
            yang cepat. Karena itu, kami siap membantu Anda menemukan solusi
            yang sesuai dengan kebutuhan, baik untuk pembelian satuan maupun
            partai besar.
          </p>
        </div>
      </div>
      <p class="text-black text-center text-xl xs:text-3xl m-8">
        Kami telah melayani pelanggan industri sebanyak
      </p>
      <div class="w-full flex gap-4 text-black text-center">
        <div v-if="$viewport.isGreaterThan('xl')" class="basis-1/2" />
        <div
          class="w-full bg-[#DAFF95] p-4 xs:p-8 rounded-3xl basis-1/2 border-black border"
        >
          <p class="font-bold text-lg xs:text-5xl">1000+ Ton</p>
          <p class="mt-2 text-xs xs:text-lg">Total Massa Produk Terjual</p>
        </div>
        <div
          class="w-full bg-[#DAFF95] p-4 xs:p-8 rounded-3xl basis-1/2 border-black border"
        >
          <p class="font-bold text-lg xs:text-5xl">500+ Customer</p>
          <p class="mt-2 text-xs xs:text-lg">
            Total Pembeli Sejak Kami Berdiri
          </p>
        </div>
        <div v-if="$viewport.isGreaterThan('xl')" class="basis-1/2" />
      </div>
    </div>
    <div class="flex flex-col p-8 bg-[#FAFAFA]" id="usage">
      <div class="flex justify-center">
        <p
          class="w-fit px-3 py-2 mb-8 border border-black rounded-3xl text-normal xs:text-lg text-black helvetica"
        >
          Cocok Digunakan untuk Sektor
        </p>
      </div>
      <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          class="col-span-2 md:col-span-1 bg-[#DAFF95] rounded-3xl border border-black"
        >
          <img
            :src="'/images/agri.jpg'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[5/1] rounded-3xl object-cover border-b border-black"
          />
          <p
            class="text-black m-4 text-normal xs:text-2xl helvetica font-semibold"
          >
            Pertanian & Perkebunan / Agrikultur
          </p>
        </div>
        <div
          class="col-span-1 row-span-2 md:row-span-1 bg-[#DAFF95] rounded-3xl border border-black"
        >
          <img
            :src="'/images/const.webp'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[3/1] rounded-3xl object-cover border-b border-black"
          />
          <p class="text-black m-4 text-normal helvetica font-semibold">
            Konstruksi & Material Bangunan
          </p>
        </div>
        <div class="col-span-1 bg-[#DAFF95] rounded-3xl border border-black">
          <img
            :src="'/images/plast.jpg'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[4/1] rounded-3xl object-cover border-b border-black"
          />
          <p
            class="text-black m-4 text-normal xs:text-2xl helvetica font-semibold"
          >
            Daur Ulang Plastik
          </p>
        </div>
        <div
          class="col-span-1 row-span-2 md:row-span-1 bg-[#DAFF95] rounded-3xl border border-black"
        >
          <img
            :src="'/images/fish.jpg'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[3/1] rounded-3xl object-cover border-b border-black"
          />
          <p
            class="text-black m-4 text-normal xs:text-2xl helvetica font-semibold"
          >
            Perikanan & Pakan Ternak
          </p>
        </div>
        <div class="col-span-1 bg-[#DAFF95] rounded-3xl border border-black">
          <img
            :src="'/images/coal.avif'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[4/1] rounded-3xl object-cover border-b border-black"
          />
          <p
            class="text-black m-4 text-normal xs:text-2xl helvetica font-semibold"
          >
            Komoditas Tambang dan Batu Bara
          </p>
        </div>
        <div
          class="col-span-2 md:col-span-1 bg-[#DAFF95] rounded-3xl border border-black"
        >
          <img
            :src="'/images/chem.png'"
            alt="Testimonial Image"
            class="w-full aspect-[1/1] xs:aspect-[5/1] rounded-3xl object-cover border-b border-black"
          />
          <p
            class="text-black m-4 text-normal xs:text-2xl helvetica font-semibold"
          >
            Bahan Kimia & Manufaktur
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 p-8 bg-[#FAFAFA] items-center" id="product">
      <p
        class="w-fit px-3 py-2 mb-8 border border-black rounded-3xl text-normal xs:text-lg text-black helvetica"
      >
        Produk Kami
      </p>
      <Carousel
        :value="products"
        :responsiveOptions="responsiveOptions"
        pt:itemlist:class=""
        class="w-full"
      >
        <template #item="slotProps">
          <div class="flex flex-col gap-4 items-center">
            <img
              :src="slotProps.data.image"
              alt="Testimonial Image"
              class="aspect-square rounded-3xl object-cover p-2"
            />
            <div
              class="text-center flex flex-col gap-2 md:gap-4 xl:gap-8 text-black p-2"
            >
              <p class="text-base sm:text-2xl font-semibold">
                {{ slotProps.data.name }}
              </p>
              <p class="text-xs sm:text-sm xl:text-base">
                {{ slotProps.data.description }}
              </p>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div
      class="flex flex-col p-8 gap-8 bg-[#FAFAFA] items-center"
      id="testimonial"
    >
      <p
        class="w-fit px-3 py-2 mb-8 border border-black rounded-3xl text-normal xs:text-lg text-black helvetica"
      >
        Testimoni Pelanggan
      </p>
      <Carousel
        :value="testimonials"
        :responsiveOptions="responsiveOptions"
        pt:itemlist:class=""
        class="w-full"
      >
        <template #item="slotProps">
          <div class="flex flex-col xs:flex-row gap-4 p-2 md:p-4">
            <img
              :src="slotProps.data.image"
              alt="Testimonial Image"
              class="w-12 h-12 xs:w-24 xs:h-24 rounded-full object-cover"
            />
            <div class="flex flex-col gap-2 text-black">
              <p class="text-sm sm:text-2xl font-semibold">
                {{ slotProps.data.name }}
              </p>
              <p class="text-[0.5rem] sm:text-sm xl:text-base">
                {{ slotProps.data.content }}
              </p>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="bg-[#FAFAFA] p-8" id="order-now">
      <div class="flex flex-col items-center gap-4 text-black">
        <div class="flex flex-col gap-4 text-center p-8">
          <p class="text-xl sm:text-5xl helvetica">Cocok dengan Produk Kami?</p>
          <div class="flex gap-1 sm:gap-3 justify-center">
            <p
              class="text-xl text-nowrap sm:text-5xl helvetica bg-[#DAFF95] rounded-3xl"
            >
              Pesan Sekarang
            </p>
            <p class="text-xl sm:text-5xl helvetica">Juga!</p>
          </div>
        </div>
        <Button class="!rounded-3xl !m-8">
          <div class="flex gap-2 items-center">
            <Icon class="!w-6 !h-6" name="uil:whatsapp" />
            <p>Pesan Sekarang</p>
          </div>
        </Button>
        <p class="text-lg">atau</p>
        <div
          class="flex flex-col text-center xs:text-start xs:flex-row gap-3 justify-center"
        >
          <p class="text-lg sm:text-5xl helvetica bg-[#DAFF95] rounded-3xl">
            Datang Langsung
          </p>
          <p class="text-lg sm:text-5xl helvetica">ke Tempat Kami</p>
        </div>
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
        class="w-full flex flex-col md:flex-row gap-4 xs:flex-row justify-between p-8 bg-[#DAFF95] rounded-t-3xl border-t-1 border-x-1 border-black text-black"
      >
        <div class="text-xs">
          <p class="font-semibold text-lg">CV Imron Jaya</p>
          <p class="font-semibold text-lg">Gudang Karung Jumbo Sidoarjo</p>
          <br />
          <p class="font-semibold text-lg">+62 822-3224-2999</p>

          <br />
          <p>Jl. Sawahan No.77, Klagen, Tropodo</p>
          <p>Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262</p>
          <br />
          <p>karungjumbosidoarjo@gmail.com</p>
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
