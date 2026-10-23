import artisanCraft from '../assets/images/ss_craft_artisan_1790067482692.jpg';

// Bag Images from assets/bags
import backPackImg from '../assets/bags/back pack.jpeg';
import blackDenimSlimBagImg from '../assets/bags/black denim slim bag.jpeg';
import cuteAestheticLeatherBag1Img from '../assets/bags/cute aesthetic leather bag (1).jpeg';
import cuteAestheticLeatherBag2Img from '../assets/bags/cute aesthetic leather bag (2).jpeg';
import cuteLeatherBagImg from '../assets/bags/cute leather bag.jpeg';
import cuteLeatherBag1Img from '../assets/bags/cute leather bag 1.jpeg';
import cuteLeatherBagMaroonImg from '../assets/bags/cute leather bag maroon.jpeg';
import denimSlingBagImg from '../assets/bags/denim sling bag.jpeg';
import denimSlingBag2Img from '../assets/bags/denim sling bag (2).jpeg';
import denimSlingBag3Img from '../assets/bags/denim sling bag (3).jpeg';
import earthyBagImg from '../assets/bags/earthy bag.jpeg';
import earthyBag2Img from '../assets/bags/earthy bag (2).jpeg';
import earthyBag3Img from '../assets/bags/Earthy bag (3).jpeg';
import leatherPassMaroonImg from '../assets/bags/leather pass maroon.jpeg';
import leatherPurseImg from '../assets/bags/leather purse.jpeg';
import leatherPurse2Img from '../assets/bags/leather purse (2).jpeg';
import leatherPurse3Img from '../assets/bags/leather purse (3).jpeg';
import leatherPurseCreamImg from '../assets/bags/leather purse cream.jpeg';
import leatherPurseWhiteImg from '../assets/bags/leather purse white.jpeg';
import mustardBagImg from '../assets/bags/mustard.jpeg';
import patchedDenimBagsImg from '../assets/bags/patched denim bags.jpeg';
import patchedDenimBags2Img from '../assets/bags/patched denim bags (2).jpeg';
import slingBagImg from '../assets/bags/sling bag.jpeg';
import travelBag1Img from '../assets/bags/travel bag (1).jpeg';
import travelBag2Img from '../assets/bags/travel bag (2).jpeg';
import bag1_1Img from '../assets/bags/bag1 (1).jpeg';
import bag1_21Img from '../assets/bags/bag1 (21).jpeg';
import bag1_22Img from '../assets/bags/bag1 (22).jpeg';

import { Product, CategoryFilter, CategoryCard, ProductGroup } from '../types';

export const CRAFT_IMAGE = artisanCraft;
export const HERO_IMAGE = leatherPurseCreamImg;
export const BACKPACK_IMAGE = backPackImg;

export const CATEGORIES_LIST: CategoryFilter[] = [
  'All',
  "Women's Bags",
  "Men's Bags",
  'Custom Bags',
  'New Designs',
  'Fashion / Accessories',
];

export const PRODUCTS: Product[] = [
  // 1. Back Pack
  {
    id: 'back-pack',
    name: 'Back Pack',
    subtitle: 'Edition 1 • Handcrafted Protection for Laptops',
    category: 'New Designs',
    price: 'KSh 2,500',
    image: backPackImg,
    secondaryImage: leatherPurseCreamImg,
    description: 'So cozy for laptops to be protected from damage. Handcrafted caramel tan leather rucksack with reinforced seams and ergonomic shoulder straps.',
    size: 'Laptop Bag',
    sizes: ['Medium', 'Large', 'Laptop Bag'],
    isFeatured: false,
    isNew: true,
    groupId: 'back-pack',
    groupName: 'Soul Space Backpack',
    colorHex: '#A06838',
    colorName: 'Caramel Tan',
  },

  // 2. Black Denim Slim Bag
  {
    id: 'black-denim-slim-bag',
    name: 'Black Denim Sling Bag',
    subtitle: 'Edition 1 • Minimalist Unisex Daily Crossbody',
    category: 'Fashion / Accessories',
    price: 'KSh 499',
    image: blackDenimSlimBagImg,
    secondaryImage: slingBagImg,
    description: 'Was inspired by the need for both genders needing something small easy to go to. A sleek, minimalist vertical crossbody pouch tailored from premium black denim with a statement button.',
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: true,
    isNew: true,
    groupId: 'black-denim-slim-bag',
    groupName: 'Black Denim Sling Pouch',
    colorHex: '#1F1F1F',
    colorName: 'Jet Black Denim',
  },

  // 3. Cute Aesthetic Leather Bag (Edition 1)
  {
    id: 'cute-aesthetic-leather-bag-1',
    name: 'Cute Aesthetic Leather Bag',
    subtitle: 'Edition 1 • Artisanal Button & Butterfly Charm Detail',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: cuteAestheticLeatherBag1Img,
    secondaryImage: cuteAestheticLeatherBag2Img,
    description: 'Inspired by the need for carrying personal items for earthy but classy women. A playful yet refined leather silhouette adorned with hand-stitched vintage buttons and an iridescent butterfly charm detail.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: true,
    groupId: 'cute-aesthetic-leather-bag',
    groupName: 'Cute Aesthetic Charm Bag',
    colorHex: '#5C3317',
    colorName: 'Chocolate Brown',
  },

  // 4. Cute Aesthetic Leather Bag (Edition 2)
  {
    id: 'cute-aesthetic-leather-bag-2',
    name: 'Cute Aesthetic Leather Bag (Edition 2)',
    subtitle: 'Edition 1 • Chain-Link Shoulder Silhouette with Charm Accents',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: cuteAestheticLeatherBag2Img,
    secondaryImage: cuteAestheticLeatherBag1Img,
    description: 'Inspired by the need for carrying personal items for earthy but classy women. Featuring an arched brass chain-link strap, playful button face, and contrast zip tape.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: true,
    isNew: false,
    groupId: 'cute-aesthetic-leather-bag',
    groupName: 'Cute Aesthetic Charm Bag',
    colorHex: '#9E6B35',
    colorName: 'Chocolate Brown / Shoulder Chain',
  },

  // 5. Cute Leather Bag (Cream White)
  {
    id: 'cute-leather-bag',
    name: 'Cute Leather Bag (Cream White)',
    subtitle: 'Edition 1 • Structured Classy Hand Tote',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: cuteLeatherBagImg,
    secondaryImage: cuteLeatherBag1Img,
    description: 'Inspired by the need for carrying personal items for classy working women. Tailored from supple cream white leather with reinforced flat handles and a wide base for effortless daytime carry.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: true,
    isNew: true,
    groupId: 'cute-leather-bag',
    groupName: 'Cute Leather Bag Collection',
    colorHex: '#F0EAD6',
    colorName: 'Cream White',
  },

  // 6. Cute Leather Bag 1 (Profile View)
  {
    id: 'cute-leather-bag-1',
    name: 'Cute Leather Bag (Cream White - Profile)',
    subtitle: 'Edition 1 • Angle Perspective & Compartment View',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: cuteLeatherBag1Img,
    secondaryImage: cuteLeatherBagImg,
    description: 'Inspired by the need for carrying personal items for classy working women. Profile view showing the flared side gussets and generous opening of our signature minimalist leather mini tote.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: false,
    groupId: 'cute-leather-bag',
    groupName: 'Cute Leather Bag Collection',
    colorHex: '#EAE0D0',
    colorName: 'Cream White (Profile)',
  },

  // 7. Cute Leather Bag Maroon (Chocolate Brown)
  {
    id: 'cute-leather-bag-maroon',
    name: 'Cute Leather Bag (Chocolate Brown)',
    subtitle: 'Edition 1 • Rich Chocolate Leather Hand Tote',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: cuteLeatherBagMaroonImg,
    secondaryImage: cuteLeatherBagImg,
    description: 'Inspired by the need for carrying personal items for classy working women. Handcrafted in rich chocolate brown leather bringing deep tones and everyday practicality together in one refined silhouette.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: false,
    groupId: 'cute-leather-bag',
    groupName: 'Cute Leather Bag Collection',
    colorHex: '#4A2E1B',
    colorName: 'Chocolate Brown',
  },

  // 8. Cute Leather Bag (Chocolate Brown - Minimalistic)
  {
    id: 'cute-leather-bag-minimalistic',
    name: 'Cute Leather Bag (Minimalistic)',
    subtitle: 'Edition 1 • Compact Chocolate Brown Tote',
    category: "Women's Bags",
    price: 'KSh 500',
    image: cuteLeatherBagMaroonImg,
    secondaryImage: cuteLeatherBag1Img,
    description: 'Inspired by desire to carry few things in a minimalistic way. A compact, lightweight chocolate brown leather silhouette made for effortless carry.',
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: true,
    groupId: 'cute-leather-bag',
    groupName: 'Cute Leather Bag Collection',
    colorHex: '#3D2314',
    colorName: 'Chocolate Brown (Small)',
  },

  // 9. Denim Sling Bag
  {
    id: 'denim-sling-bag',
    name: 'Denim Sling Bag',
    subtitle: 'Hand-Stitched Star Accent Moon Sling',
    category: 'Custom Bags',
    price: 'KSh 499',
    image: denimSlingBagImg,
    secondaryImage: denimSlingBag2Img,
    description: 'A crescent moon sling pouch crafted from repurposed indigo denim with hand-embroidered white star motifs along the central zippered curve.',
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: true,
    groupId: 'denim-sling-bag',
    groupName: 'Denim Crescent Sling',
    colorHex: '#3B5B88',
    colorName: 'Star Embroidered',
  },

  // 10. Denim Sling Bag (Edition 2)
  {
    id: 'denim-sling-bag-2',
    name: 'Denim Sling Bag (Edition 2)',
    subtitle: 'Colorblock Corduroy & Denim Crescent',
    category: 'Custom Bags',
    price: 'KSh 550',
    image: denimSlingBag2Img,
    secondaryImage: denimSlingBagImg,
    description: 'A striking color-blocked crescent sling combining indigo denim with amber corduroy and deep plum panels, hung from leather connector tabs.',
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: true,
    groupId: 'denim-sling-bag',
    groupName: 'Denim Crescent Sling',
    colorHex: '#54739E',
    colorName: 'Corduroy Blocked',
  },

  // 11. Denim Sling Bag (Edition 3)
  {
    id: 'denim-sling-bag-3',
    name: 'Denim Sling Bag (Edition 3)',
    subtitle: 'Crossbody Messenger with Jean Pocket Accent',
    category: "Men's Bags",
    price: 'KSh 600',
    image: denimSlingBag3Img,
    secondaryImage: blackDenimSlimBagImg,
    description: 'A compact square utility messenger incorporating an authentic vintage denim pocket on the front face for easy phone access and rugged style.',
    size: 'Medium',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: false,
    groupId: 'denim-sling-bag-3',
    groupName: 'Denim Utility Messenger',
    colorHex: '#2A4365',
    colorName: 'Raw Indigo',
  },

  // 12. Earthy Bag Aesthetic
  {
    id: 'earthy-bag',
    name: 'Earthy Bag Aesthetic',
    subtitle: 'Edition 1 • Textured Slouch with Ball-Chain Accent',
    category: 'Fashion / Accessories',
    price: 'KSh 800',
    image: earthyBagImg,
    secondaryImage: earthyBag2Img,
    description: 'Inspired by the need for carrying personal items for earth girl aesthetic women. An artisanal textured slouch bag in midnight ribbed textile, accented with a delicate vertical silver ball-chain pull.',
    size: 'Large',
    sizes: ['Medium', 'Large', 'XL'],
    isFeatured: false,
    isNew: false,
    groupId: 'earthy-textured-slouch',
    groupName: 'Earthy Bag Collection',
    colorHex: '#1F1F1F',
    colorName: 'Black Ribbed',
  },

  // 13. Earthy Bag (Edition 2)
  {
    id: 'earthy-bag-2',
    name: 'Earthy Bag (Edition 2)',
    subtitle: 'Edition 1 • Ribbed Hobo with Natural Wood Button',
    category: "Women's Bags",
    price: 'KSh 800',
    image: earthyBag2Img,
    secondaryImage: earthyBagImg,
    description: 'Inspired by the need for carrying personal items for earth girl aesthetic women. A relaxed bohemian hobo combining deep ribbed corduroy texture with smooth fabric panels and a carved natural wood button closure.',
    size: 'Large',
    sizes: ['Medium', 'Large', 'XL'],
    isFeatured: false,
    isNew: false,
    groupId: 'earthy-textured-slouch',
    groupName: 'Earthy Bag Collection',
    colorHex: '#556B2F',
    colorName: 'Wood Button Hobo',
  },

  // 14. Earthy Bag (Edition 3)
  {
    id: 'earthy-bag-3',
    name: 'Earthy Bag (Edition 3)',
    subtitle: 'Edition 1 • Herringbone Ribbed Sling with Contrast Pocket',
    category: 'Custom Bags',
    price: 'KSh 800',
    image: earthyBag3Img,
    secondaryImage: earthyBag2Img,
    description: 'Inspired by the need for carrying personal items for earth girl aesthetic women. A tactile textural shoulder bag cut from grey herringbone ribbed weave, accented with a contrasting matte black corduroy front slip pocket.',
    size: 'Large',
    sizes: ['Medium', 'Large', 'XL'],
    isFeatured: false,
    isNew: true,
    groupId: 'earthy-textured-slouch',
    groupName: 'Earthy Bag Collection',
    colorHex: '#4A5568',
    colorName: 'Herringbone Sling',
  },

  // 15. Leather Pass Maroon
  {
    id: 'leather-pass-maroon',
    name: 'Leather Pass Maroon',
    subtitle: 'Sculptural Seamless Crescent Shoulder Bag',
    category: "Women's Bags",
    price: 'KSh 1,200',
    image: leatherPassMaroonImg,
    secondaryImage: cuteLeatherBagMaroonImg,
    description: 'A seamless, aerodynamic crescent shoulder bag handcrafted in rich maroon leather with an ergonomic cutout arm loop.',
    size: 'Medium',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: true,
    groupId: 'leather-pass-maroon',
    groupName: 'Leather Pass Crescent',
    colorHex: '#581825',
    colorName: 'Wine Maroon',
  },

  // 16. Leather Purse
  {
    id: 'leather-purse',
    name: 'Leather Purse',
    subtitle: 'Edition 1 • Handcrafted Brown Leather Coin Purse',
    category: 'Fashion / Accessories',
    price: 'KSh 250',
    image: leatherPurseImg,
    secondaryImage: leatherPurseCreamImg,
    description: "Inspired by it's size and a need to carry small items. A master-crafted brown leather coin and card purse highlighting an embossed solid metal zipper slider and burnished lip.",
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: false,
    groupId: 'sculptural-leather-purse',
    groupName: 'Sculptural Leather Purse',
    colorHex: '#9E6B35',
    colorName: 'Brown',
  },

  // 17. Leather Purse (Edition 2)
  {
    id: 'leather-purse-2',
    name: 'Leather Purse (Edition 2)',
    subtitle: 'Edition 1 • Diamond Quilted Envelope Wallet Clutch',
    category: 'Fashion / Accessories',
    price: 'KSh 250',
    image: leatherPurse2Img,
    secondaryImage: leatherPurse3Img,
    description: "Inspired by it's size and a need to carry small items. An elongated envelope wallet clutch featuring an embossed geometric diamond grid matrix, pinked zig-zag edges, and a structured center flap.",
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: true,
    groupId: 'sculptural-leather-purse',
    groupName: 'Sculptural Leather Purse',
    colorHex: '#B8860B',
    colorName: 'Diamond Quilted',
  },

  // 18. Leather Purse (Edition 3)
  {
    id: 'leather-purse-3',
    name: 'Leather Purse (Edition 3)',
    subtitle: 'Edition 1 • Engraved Hardware & Pebbled Leather Detail',
    category: 'Fashion / Accessories',
    price: 'KSh 250',
    image: leatherPurse3Img,
    secondaryImage: leatherPurseCreamImg,
    description: "Inspired by it's size and a need to carry small items. Close-up craftsmanship view of the pebbled cream leather grain, contrast stitching, and custom engraved metal pull.",
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: false,
    groupId: 'sculptural-leather-purse',
    groupName: 'Sculptural Leather Purse',
    colorHex: '#4A2E1B',
    colorName: 'Walnut Pebbled',
  },

  // 19. Leather Purse Cream
  {
    id: 'leather-purse-cream',
    name: 'Leather Purse Cream',
    subtitle: 'Two-Tone Sculptural Teardrop Shoulder Bag',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: leatherPurseCreamImg,
    secondaryImage: leatherPurseWhiteImg,
    description: 'A breathtaking teardrop shoulder bag uniting creamy vanilla leather with a contrasting deep espresso back panel and strap.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: true,
    groupId: 'sculptural-leather-purse',
    groupName: 'Sculptural Leather Purse',
    colorHex: '#F5F2EB',
    colorName: 'Vanilla Cream',
  },

  // 20. Leather Purse White
  {
    id: 'leather-purse-white',
    name: 'Leather Purse White',
    subtitle: 'Monochrome Sculptural White & Black Hobo',
    category: "Women's Bags",
    price: 'KSh 1,000',
    image: leatherPurseWhiteImg,
    secondaryImage: leatherPurseCreamImg,
    description: 'A crisp, high-contrast monochrome version of our sculptural shoulder bag, executed in chalk white leather paired with deep black leather accents.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: true,
    groupId: 'sculptural-leather-purse',
    groupName: 'Sculptural Leather Purse',
    colorHex: '#FFFFFF',
    colorName: 'Chalk White',
  },

  // 21. Mustard Travel Bag
  {
    id: 'mustard',
    name: 'Mustard Travel Bag',
    subtitle: 'Edition 1 • Cozy Padded Travel Carryall',
    category: "Men's Bags",
    price: 'KSh 2,500',
    image: mustardBagImg,
    secondaryImage: travelBag1Img,
    description: 'Cozy and easy to travel with anytime. A spacious, architectural travel carryall finished in warm mustard-olive textile with box-stitched padded grab handles and a reinforced top zipper.',
    size: 'XL',
    sizes: ['Large', 'XL'],
    isFeatured: false,
    isNew: false,
    groupId: 'mustard',
    groupName: 'Mustard Travel Carryall',
    colorHex: '#B89635',
    colorName: 'Mustard',
  },

  // 22. Patched Denim Bags
  {
    id: 'patched-denim-bags',
    name: 'Patched Denim Bags',
    subtitle: 'Edition 1 • Casual Classy Denim Patchwork Carryall',
    category: 'Custom Bags',
    price: 'KSh 499',
    image: patchedDenimBagsImg,
    secondaryImage: patchedDenimBags2Img,
    description: 'Inspired by the need to look casual but classy. A custom patchwork creation assembling diverse shades of washed indigo, raw denim, and contrast top-stitching into a one-of-a-kind carryall.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: true,
    groupId: 'patched-denim-bags',
    groupName: 'Upcycled Denim Patchwork Bag',
    colorHex: '#2B4C7E',
    colorName: 'Denim Patches (Blue/Black)',
  },

  // 23. Patched Denim Bags (Edition 2)
  {
    id: 'patched-denim-bags-2',
    name: 'Patched Denim Bags (Edition 2)',
    subtitle: 'Edition 1 • Asymmetrical Upcycled Denim Tote',
    category: 'Custom Bags',
    price: 'KSh 499',
    image: patchedDenimBags2Img,
    secondaryImage: patchedDenimBagsImg,
    description: 'Inspired by the need to look casual but classy. Alternative patchwork layout featuring geometric diamond denim cutouts and distressing for a raw, authentic vintage aesthetic.',
    size: 'Medium',
    sizes: ['Small', 'Medium', 'Large'],
    isFeatured: false,
    isNew: false,
    groupId: 'patched-denim-bags',
    groupName: 'Upcycled Denim Patchwork Bag',
    colorHex: '#3E6B99',
    colorName: 'Diamond Layout',
  },

  // 24. Sling Bag
  {
    id: 'sling-bag',
    name: 'Sling Bag',
    subtitle: 'Compact Everyday Hands-Free Crossbody',
    category: 'Fashion / Accessories',
    price: 'KSh 499',
    image: slingBagImg,
    secondaryImage: blackDenimSlimBagImg,
    description: 'A versatile, compact sling designed for on-the-go essentials, featuring quick-adjust hardware and comfortable all-day wear.',
    size: 'Small',
    sizes: ['Small', 'Medium'],
    isFeatured: false,
    isNew: false,
    groupId: 'sling-bag',
    groupName: 'Hands-Free Leather Sling',
    colorHex: '#8C552A',
    colorName: 'Cognac Leather',
  },

  // 25. Travel Bags with Removable Hooks
  {
    id: 'travel-bag-1',
    name: 'Travel Bags with Removable Hooks',
    subtitle: 'Edition 1 • Heavy-Duty Bulk Travel Carryall',
    category: "Men's Bags",
    price: 'KSh 2,500',
    image: travelBag1Img,
    secondaryImage: travelBag2Img,
    description: 'Inspired by the need for carrying items in bulk. A substantial weekender bag built for voyages near and far, crafted from durable leather accented with removable hooks and reinforced carry straps.',
    size: 'XL',
    sizes: ['Large', 'XL'],
    isFeatured: false,
    isNew: true,
    groupId: 'travel-bag',
    groupName: 'Nomad Travel Bag Collection',
    colorHex: '#4A3525',
    colorName: 'Brown',
  },

  // 26. Travel Bag (Edition 2)
  {
    id: 'travel-bag-2',
    name: 'Travel Bag (Edition 2)',
    subtitle: 'Edition 1 • Overnight Nomad Duffel with Utility Pockets',
    category: "Men's Bags",
    price: 'KSh 2,500',
    image: travelBag2Img,
    secondaryImage: travelBag1Img,
    description: 'Inspired by the need for carrying items in bulk. Expanded capacity edition of our signature travel duffel, offering twin exterior gusseted utility pockets and removable hardware.',
    size: 'XL',
    sizes: ['Large', 'XL'],
    isFeatured: false,
    isNew: false,
    groupId: 'travel-bag',
    groupName: 'Nomad Travel Bag Collection',
    colorHex: '#2D2319',
    colorName: 'Dark Brown',
  },

  // 27. Bag1 (1) - Cognac Coin Pouch
  {
    id: 'bag1-1-coin-pouch',
    name: 'Cognac Coin Pouch',
    subtitle: 'Curved Zipper Pocket Purse',
    category: 'Fashion / Accessories',
    price: 'KSh 250',
    image: bag1_1Img,
    secondaryImage: leatherPurse2Img,
    description: 'A pocket-sized curved leather coin and card pouch in warm cognac with an oversized silver pull tab stamped for authenticity.',
    size: 'Small',
    sizes: ['Small'],
    isFeatured: false,
    isNew: false,
    groupId: 'bag1-1-coin-pouch',
    groupName: 'Cognac Coin Pouch',
    colorHex: '#9E6B35',
    colorName: 'Cognac',
  },

  // 28. Bag1 (21) - Velvet Charm Sleeve
  {
    id: 'bag1-21-charm-sleeve',
    name: 'Velvet Charm Sleeve',
    subtitle: 'Ribbed Black Pouch with Beaded Gem Charm',
    category: 'Fashion / Accessories',
    price: 'KSh 350',
    image: bag1_21Img,
    secondaryImage: bag1_22Img,
    description: 'A tactile black ribbed sleeve or pouch accented with a colorful handset stone and bead charm hanging from a delicate wire loop.',
    size: 'Small',
    sizes: ['Small'],
    isFeatured: false,
    isNew: false,
    groupId: 'bag1-21-charm-sleeve',
    groupName: 'Velvet Charm Sleeve',
    colorHex: '#1A1A1A',
    colorName: 'Black Velvet',
  },

  // 29. Bag1 (22) - Striped Slouch Hobo
  {
    id: 'bag1-22-striped-slouch',
    name: 'Striped Slouch Hobo',
    subtitle: 'Pinstriped Draped Canvas Tote',
    category: 'Custom Bags',
    price: 'KSh 800',
    image: bag1_22Img,
    secondaryImage: bag1_21Img,
    description: 'A draped, slouchy casual tote featuring clean white diagonal pinstripes across a dense charcoal cotton canvas weave.',
    size: 'Large',
    sizes: ['Medium', 'Large'],
    isFeatured: false,
    isNew: true,
    groupId: 'bag1-22-striped-slouch',
    groupName: 'Striped Slouch Tote',
    colorHex: '#3A3A3A',
    colorName: 'Charcoal Stripe',
  }
];

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: "Women's Bags",
    title: "Women's Bags",
    description: 'Structured totes, sculptural crossbodies, and statement shoulder bags.',
    image: leatherPurseCreamImg,
    tag: 'Hand-burnished leather'
  },
  {
    id: "Men's Bags",
    title: "Men's Bags",
    description: 'Heavyweight weekenders, architectural carryalls, and travel messengers.',
    image: travelBag1Img,
    tag: 'Heavy-gauge saddle stitch'
  },
  {
    id: "Custom Bags",
    title: 'Custom Bags',
    description: '1-of-1 bespoke pieces, upcycled denim patchwork, and artisanal silhouettes.',
    image: patchedDenimBagsImg,
    tag: 'Your Idea. Our Craft.'
  },
  {
    id: 'New Designs',
    title: 'New Designs',
    description: 'Our latest seasonal silhouettes fusing contemporary cuts with artisan craft.',
    image: backPackImg,
    tag: 'Soul Space Fresh'
  },
  {
    id: 'Fashion / Accessories',
    title: 'Fashion / Accessories',
    description: 'Envelope clutches, embossed wallets, zip pouches, and delicate accents.',
    image: leatherPurse2Img,
    tag: 'Solid brass & leather'
  }
];

export const BESPOKE_SILHOUETTES = [
  { id: 'tote', name: 'The Signature Tote', basePrice: 350, desc: 'Spacious daily tote with structured base and comfort drop handles.' },
  { id: 'crossbody', name: 'The Arch Crossbody', basePrice: 280, desc: 'Curved saddle silhouette with adjustable crossbody strap.' },
  { id: 'travel', name: 'The Nomad Travel Bag', basePrice: 440, desc: 'Spacious weekender built for travel and weekend getaways.' },
  { id: 'clutch', name: 'The Sovereign Clutch', basePrice: 200, desc: 'Architectural envelope evening clutch with chain option.' },
  { id: 'backpack', name: 'The Soul Space Rucksack', basePrice: 390, desc: 'Modern geometric backpack with padded leather straps.' }
];

export const LEATHER_OPTIONS = [
  { id: 'terracotta', name: 'Terracotta Full-Grain', colorHex: '#D95A2B', tone: 'Warm Earth' },
  { id: 'cognac', name: 'Vintage Cognac', colorHex: '#9E4E24', tone: 'Rich Warmth' },
  { id: 'espresso', name: 'Deep Espresso Brown', colorHex: '#251712', tone: 'Dark Classic' },
  { id: 'obsidian', name: 'Midnight Obsidian', colorHex: '#0E0907', tone: 'Sharp Modern' },
  { id: 'maroon', name: 'Maroon Pebble', colorHex: '#581825', tone: 'Deep Luxury' }
];

export const TEXTILE_OPTIONS = [
  { id: 'ashanti-diamond', name: 'Ashanti Geometric Diamond', desc: 'Repeating gold & terracotta diamond matrices symbolizing wisdom', previewClass: 'from-brand-terracotta via-brand-gold to-brand-brown-ink' },
  { id: 'sunburst-spiral', name: 'Sunburst Spiral Rhythm', desc: 'Concentric circular motifs celebrating solar energy and life cycle', previewClass: 'from-brand-gold via-brand-terracotta-vivid to-brand-purple' },
  { id: 'upcycled-denim', name: 'Upcycled Indigo Denim', desc: 'Sashiko-stitched multi-tone recycled denim patchwork panels', previewClass: 'from-blue-900 via-sky-700 to-indigo-950' },
  { id: 'earthy-corduroy', name: 'Earthy Corduroy & Knit', desc: 'Tactile textured ribbed corduroy in midnight and cocoa tones', previewClass: 'from-neutral-900 via-stone-700 to-amber-900' }
];

export const HARDWARE_OPTIONS = [
  { id: 'antique-brass', name: 'Antiqued Cast Brass', finish: 'Warm Vintage Gold' },
  { id: 'brushed-gold', name: 'Brushed Champagne Gold', finish: 'Contemporary Luster' },
  { id: 'matte-black', name: 'Matte Gunmetal Obsidian', finish: 'Stealth Architectural' },
  { id: 'chrome-silver', name: 'Polished Chrome Silver', finish: 'Sleek Modern' }
];

// ---------------------------------------------------------------------------
// PRODUCT GROUPS — Dynamically grouped directly from PRODUCTS.
// Bags sharing a `groupId` are presented together in the boutique shop with swatches.
// ---------------------------------------------------------------------------
export function getProductGroups(products: Product[] = PRODUCTS): ProductGroup[] {
  const groupsMap = new Map<string, ProductGroup>();

  for (const product of products) {
    const key = product.groupId || product.id;
    if (!groupsMap.has(key)) {
      groupsMap.set(key, {
        id: key,
        name: product.groupName || product.name,
        category: product.category,
        isFeatured: product.isFeatured,
        isNew: product.isNew,
        products: [],
      });
    }
    const group = groupsMap.get(key)!;
    group.products.push(product);
    if (product.isFeatured) group.isFeatured = true;
    if (product.isNew) group.isNew = true;
  }

  return Array.from(groupsMap.values());
}

export const PRODUCT_GROUPS: ProductGroup[] = getProductGroups();
