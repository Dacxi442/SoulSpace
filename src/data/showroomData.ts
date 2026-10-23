import { ShowroomCategory } from '../types';

// Showroom Stage Background Fabrics
import bgBrown from '../assets/background/Brown_fabric_curtain_background_2K_20261002161621.jpg';
import bgCream from '../assets/background/Cream_fabric_curtain_showcase_ba…_2K_20261002160610.jpg';
import bgMauve from '../assets/background/Mauve_fabric_product_showcase_ba…_2K_20261002160615.jpg';
import bgPurple from '../assets/background/Purple_fabric_curtain.jpg';

// Transparent Background-Removed Bag Cutouts for the Floating Stage
import bagCutout1 from '../assets/background/bag no background/download-Photoroom.png';
import bagCutout2 from '../assets/background/bag no background/download (1)-Photoroom.png';
import bagCutout3 from '../assets/background/bag no background/bag1 (15)-Photoroom.png';

export const SHOWROOM_TIMINGS = {
  slide: 1000,      // bag slides in (ms)
  settle: 500,      // brief pause before info fades in (ms)
  info: 700,        // info card fade duration (ms)
  dwell: 5500,      // time spent on slide before auto-advancing (ms)
  userPause: 9000,  // pause before resuming auto-play after user click (ms)
};

export const SHOWROOM_BACKGROUNDS = [bgBrown, bgCream, bgMauve, bgPurple];

export const SHOWROOM_CATEGORIES: ShowroomCategory[] = [
  {
    id: 'womens-bags',
    label: "Women's Bags",
    tagline: 'Timeless styles crafted for every occasion.',
    img: bagCutout1,
    bg: bgBrown,
    hotspotX: 0.68,
    hotspotY: 0.20,
    href: '/categories',
  },
  {
    id: 'mens-bags',
    label: "Men's Bags",
    tagline: 'Bold, durable bags built for the modern man.',
    img: bagCutout2,
    bg: bgCream,
    hotspotX: 0.30,
    hotspotY: 0.18,
    href: '/categories',
  },
  {
    id: 'travel-bags',
    label: 'Travel Bags',
    tagline: 'Pack smart, travel in style.',
    img: bagCutout3,
    bg: bgMauve,
    hotspotX: 0.55,
    hotspotY: 0.25,
    href: '/categories',
  },
  {
    id: 'handbags',
    label: 'Handbags',
    tagline: 'Elegant companions for every step you take.',
    img: bagCutout1,
    bg: bgPurple,
    hotspotX: 0.62,
    hotspotY: 0.22,
    href: '/categories',
  },
  {
    id: 'thrift-clothing',
    label: 'Thrift Clothing',
    tagline: 'Pre-loved fashion — your sustainable style choice.',
    img: bagCutout2,
    bg: bgBrown,
    hotspotX: 0.38,
    hotspotY: 0.20,
    href: '/categories',
  },
];
