export const SITE_CONTENT = {
  brand: {
    name: "Soul Space Creations",
    subtitle: "Bags and Thrifting shop",
    shortName: "S & S",
  },
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
  featured: {
    title: "Featured Collection",
    subtitle: "Discover our hand-picked signature pieces, where heritage craftsmanship meets bold modern utility.",
    viewAllCta: "View in Catalogue"
  },
  catalogue: {
    title: "The Collection",
    badge: "Full Haute Soul Space Catalogue",
    searchPlaceholder: "Search silhouettes, materials...",
  },
  footer: {
    tagline: "Crafting soulful bags, one stitch at a time!",
    description: "Soul Space Creations unites full-grain, vegetable-tanned leather with handwoven African geometric textiles. Hand-stitched with passion, designed around you.",
    atelierLocation: "Nairobi, Kenya • Handcrafted Atelier",
    copyright: `© ${new Date().getFullYear()} Soul Space Creations`,
    credit: "Site by Dacxi Technologies",
    creditLink: "https://porrtfolio-rose.vercel.app/"
  },
  contact: {
    sectionTitle: "Connect with Soul Space",
    sectionSubtitle: "Speak directly with the designer.",
    socialTitle: "Reach Out via Our Social Channels",
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "0000000000",
    whatsappMessage: "Hello Soul Space Creations, I am interested in your bags",
    phoneNumber: import.meta.env.VITE_PHONE_NUMBER || "0000000000",
    email: import.meta.env.VITE_EMAIL_ADDRESS || "soulspace@ssbagscollection.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  }
};
