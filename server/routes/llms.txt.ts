import {
  company,
  highlights,
  process,
  products,
  sectors,
  stats,
} from "../../app/data/site";

/**
 * /llms.txt — a plain-text brief for AI crawlers and answer engines
 * (see llmstxt.org).
 *
 * Those tools do best with facts stated plainly rather than inferred from
 * markup, and many fetch a fraction of a page's HTML. This restates the same
 * facts the page shows, generated from `site.ts` so it cannot drift from the
 * site itself.
 *
 * Deliberately excluded: customer reviews (they belong to their authors and
 * are already on the Google listing) and anything not published on the page.
 */
export default defineEventHandler((event) => {
  const site = "https://karungjumbosidoarjo.com";
  const address = [
    company.address.street,
    company.address.locality,
    `${company.address.region} ${company.address.postalCode}`,
  ].join(", ");

  const body = `# ${company.name}

> ${company.tagline}. ${company.legalName} menjual karung jumbo (FIBC/bulk bag) bekas siap pakai, sling bag, pallet plastik, dan plastik PE untuk kebutuhan industri di Indonesia.

## Tentang

${company.name} adalah penyedia karung jumbo bekas dan produk berbahan plastik untuk industri, berlokasi di Sidoarjo, Jawa Timur. Fokusnya pada solusi kemasan dan penyimpanan yang hemat biaya namun tetap andal, terutama untuk sektor yang membutuhkan kapasitas besar.

${stats.map((stat) => `- ${stat.value} — ${stat.label}`).join("\n")}

## Kontak

- Nama usaha: ${company.name}
- Badan usaha: ${company.legalName}
- Alamat: ${address}
- Koordinat: ${company.geo.latitude}, ${company.geo.longitude}
- WhatsApp/telepon: ${company.phone}
- Email: ${company.email}
${company.socials.map((social) => `- ${social.label}: ${social.href}`).join("\n")}

## Produk

${products
  .map((product) => {
    const variants = product.variants?.length
      ? `\n  Varian: ${product.variants.join("; ")}`
      : "";
    return `### ${product.name}\n\n${product.description}${variants}`;
  })
  .join("\n\n")}

## Proses pengolahan

Setiap karung bekas melewati tahapan berikut sebelum dijual kembali — ini yang membedakannya dari penjual karung bekas yang menjual barang apa adanya.

${process
  .map((step, index) => `${index + 1}. **${step.name}** — ${step.description}`)
  .join("\n")}

## Keunggulan

${highlights.map((item) => `- ${item}`).join("\n")}

## Sektor yang dilayani

${sectors.map((sector) => `- ${sector.name}`).join("\n")}

## Tautan

- Situs: ${site}/
- Peta: https://www.google.com/maps/search/?api=1&query=${company.geo.latitude},${company.geo.longitude}
`;

  setHeader(event, "content-type", "text/plain; charset=utf-8");
  return body;
});
