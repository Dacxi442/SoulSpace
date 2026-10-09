export const SITE_CONTENT = {
  hero: {
    title: "SOUL SPACE CREATIONS",
    subtitles: ["BAGS & THRIFTS", "HANDMADE DESIGNS", "CLOTHING & ACCESSORIES"],
    tagline: "Hand-stitched. Designed around you.",
    features: [
      "Bags Designing & Styling",
      "Thrifting Clothes & Accessories",
      "Fashion & Lifestyle Curation"
    ],
    primaryCta: "Explore Collection",
    secondaryCta: "View Gallery"
  },
  footer: {
    tagline: "Crafting soulful bags, one stitch at a time!",
    copyright: `© ${new Date().getFullYear()} Soul Space Creations`,
    credit: "Site by Dacxi Technologies",
    creditLink: "https://porrtfolio-rose.vercel.app/"
  },
  contact: {
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "0000000000",
    whatsappMessage: "Hello Soul Space Creations, I am interested in your bags",
    phoneNumber: import.meta.env.VITE_PHONE_NUMBER || "0000000000",
    email: import.meta.env.VITE_EMAIL_ADDRESS || "soulspace@ssbagscollection.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  },
  brand: {
    name: "Soul Space Creations",
    subtitle: "Bags and Thrifting shop"
  }
};
