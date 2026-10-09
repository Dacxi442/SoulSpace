import heroTote from '../assets/bags/bag1 (8).jpeg';
import crossbodyBag from '../assets/bags/bag1 (4).jpeg';
import duffleBag from '../assets/bags/bag1 (13).jpeg';
import clutchBag from '../assets/bags/bag1 (3).jpeg';
import burgundyTote from '../assets/bags/bag1 (9).jpeg';
import crossbodyAlternate from '../assets/bags/bag1 (25).jpeg';
import shopperBag from '../assets/bags/bag1 (6).jpeg';
import patchworkBag from '../assets/bags/bag1 (28).jpeg';
import darkBagAlternate from '../assets/bags/bag1 (27).jpeg';
import clutchDetail from '../assets/bags/bag1 (2).jpeg';
import artisanCraft from '../assets/images/ss_craft_artisan_1790067482692.jpg';
import backpackBag from '../assets/bags/bag1 (19).jpeg';

import { Product } from '../types';

export const CRAFT_IMAGE = artisanCraft;
export const HERO_IMAGE = heroTote;
export const BACKPACK_IMAGE = backpackBag;

export const PRODUCTS: Product[] = [
  {
    id: 'ss-tote-solstice',
    name: 'Solstice Grand Tote',
    subtitle: 'Signature Hand-Stitched Leather & Geometric Textile',
    category: 'Women\'s Bags',
    price: '$385',
    image: heroTote,
    secondaryImage: burgundyTote,
    description: 'An architectural everyday tote uniting vegetable-tanned cognac leather with handwoven African geometric motifs. Features reinforced hand-burnished handles, an interior zippered pocket, and magnetic solid brass closure.',
    craftDetails: [
      '100% hand-cut and edge-burnished full grain leather',
      'Artisanal African geometric diamond fabric panel',
      'Double hand-stitched with waxed Irish linen thread',
      'Cast solid brass D-rings and protective base studs'
    ],
    dimensions: '38cm (H) x 32cm (W) x 14cm (D)',
    materials: 'Vegetable-tanned Cognac Cowhide, Authentic African Cotton Weave, Solid Brass Hardware',
    isFeatured: true,
    isNew: true,
    colorways: ['Cognac & Terracotta', 'Obsidian Black', 'Espresso Earth']
  },
  {
    id: 'ss-crossbody-zaria',
    name: 'Zaria Arch Crossbody',
    subtitle: 'Sculptural Saddle Bag with African Flap Motif',
    category: 'Women\'s Bags',
    price: '$290',
    image: crossbodyBag,
    secondaryImage: crossbodyAlternate,
    description: 'Designed for fluid movement. The Zaria Crossbody features a curved silhouette in rich plum leather, balanced by an earthy terracotta geometric side inlay. Includes an adjustable shoulder strap with custom brass buckle.',
    craftDetails: [
      'Structured saddle silhouette with reinforced piping',
      'Individually placed African geometric woven side-flashes',
      'Beveled and waxed edge finishing',
      'Suede-lined interior with card organizer'
    ],
    dimensions: '22cm (H) x 25cm (W) x 8cm (D)',
    materials: 'Plum & Terracotta Full-Grain Leather, African Geometric Inlay, Antique Brass Hardware',
    isFeatured: true,
    isNew: false,
    colorways: ['Plum Purple', 'Earthy Terracotta', 'Midnight Espresso']
  },
  {
    id: 'ss-duffle-kilim',
    name: 'Sahara Nomad Weekender',
    subtitle: 'Heavyweight Artisan Travel Bag',
    category: 'Men\'s Bags',
    price: '$460',
    image: duffleBag,
    secondaryImage: shopperBag,
    description: 'A statement travel piece designed for weekend journeys and long horizons. Crafted from deep espresso pull-up leather, featuring a prominent African geometric textile center band and heavy-duty reinforced shoulder carriage.',
    craftDetails: [
      'Heavy-gauge saddle stitching along all load-bearing seams',
      'Substantial solid brass zippers with hand-knotted leather pulls',
      'Removable padded shoulder strap with brass trigger snaps',
      'Luggage tag slot with embossed S & S Soul Space monogram'
    ],
    dimensions: '30cm (H) x 52cm (W) x 24cm (D)',
    materials: 'Espresso Pull-up Leather, African Earth Motif Weave, Solid Antiqued Brass Hardware',
    isFeatured: true,
    isNew: true,
    colorways: ['Espresso & Ochre', 'Dark Chestnut', 'Ebony Black']
  }

];

export const CRAFT_STEPS = [
  {
    step: '01',
    title: 'Pattern & Proportion Drafting',
    description: 'Every bag begins with hand-drawn architectural blueprints. Proportions are calibrated for ergonomic comfort, silhouette balance, and timeless elegance.',
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'Sourcing Heritage Textiles & Leather',
    description: 'We select full-grain, vegetable-tanned hides and authentic African textiles characterized by rich geometric symbolism, vibrant dyes, and tactile depth.',
    iconName: 'Layers'
  },
  {
    step: '03',
    title: 'Precision Hand-Cutting & Skiving',
    description: 'Each panel is cut by hand with round knives. Edge thicknesses are skived to tenths of a millimeter to ensure clean seams without bulk.',
    iconName: 'Scissors'
  },
  {
    step: '04',
    title: 'Traditional Saddle Stitching',
    description: 'Using two needles and waxed linen thread, the artisan passes each stitch by hand through pre-punched diamond awl holes for lifetime longevity.',
    iconName: 'Sparkles'
  }
];

export const BESPOKE_SILHOUETTES = [
  { id: 'tote', name: 'The Signature Tote', basePrice: 350, desc: 'Spacious daily tote with structured base and comfort drop handles.' },
  { id: 'crossbody', name: 'The Arch Crossbody', basePrice: 280, desc: 'Curved saddle silhouette with adjustable crossbody strap.' },
  { id: 'duffle', name: 'The Nomad Duffle', basePrice: 440, desc: 'Spacious weekender built for travel and weekend getaways.' },
  { id: 'clutch', name: 'The Sovereign Clutch', basePrice: 200, desc: 'Architectural envelope evening clutch with chain option.' },
  { id: 'backpack', name: 'The Soul Space Rucksack', basePrice: 390, desc: 'Modern geometric backpack with padded leather straps.' }
];

export const LEATHER_OPTIONS = [
  { id: 'terracotta', name: 'Terracotta Full-Grain', colorHex: '#D95A2B', tone: 'Warm Earth' },
  { id: 'cognac', name: 'Vintage Cognac', colorHex: '#9E4E24', tone: 'Rich Warmth' },
  { id: 'espresso', name: 'Deep Espresso Brown', colorHex: '#251712', tone: 'Dark Classic' },
  { id: 'obsidian', name: 'Midnight Obsidian', colorHex: '#0E0907', tone: 'Sharp Modern' },
  { id: 'royal-plum', name: 'Royal Plum Suede', colorHex: '#3D1A39', tone: 'Editorial Luxury' }
];

export const TEXTILE_OPTIONS = [
  { id: 'ashanti-diamond', name: 'Ashanti Geometric Diamond', desc: 'Repeating gold & terracotta diamond matrices symbolizing wisdom', previewClass: 'from-brand-terracotta via-brand-gold to-brand-brown-ink' },
  { id: 'sunburst-spiral', name: 'Sunburst Spiral Rhythm', desc: 'Concentric circular motifs celebrating solar energy and life cycle', previewClass: 'from-brand-gold via-brand-terracotta-vivid to-brand-purple' },
  { id: 'sahara-linear', name: 'Sahara Linear Chevron', desc: 'Bold alternating high-contrast linework and architectural steps', previewClass: 'from-brand-brown-near-black via-brand-terracotta to-brand-cream-muted' },
  { id: 'adinkra-grace', name: 'Kente Rhythm Inlay', desc: 'Historic woven blocks of deep brown, ochre, and warm vermilion', previewClass: 'from-brand-purple via-brand-ochre to-brand-gold' }
];

export const HARDWARE_OPTIONS = [
  { id: 'antique-brass', name: 'Antiqued Cast Brass', finish: 'Warm Vintage Gold' },
  { id: 'brushed-gold', name: 'Brushed Champagne Gold', finish: 'Contemporary Luster' },
  { id: 'matte-black', name: 'Matte Gunmetal Obsidian', finish: 'Stealth Architectural' }
];
