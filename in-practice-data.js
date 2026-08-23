/* ============================================================================
   IN PRACTICE — content data
   ----------------------------------------------------------------------------
   This file is the single source of truth for the "In Practice" masonry wall
   (in-practice.html). It is a plain JS array of plain objects — no build step,
   no bundler, no CMS. To add a new photo to the wall: drop a .webp file in the
   repo root and add one object below (or use in-practice-admin.html). No
   HTML/CSS edits required.

   Regenerated via in-practice-admin.html on 2026-08-23.

   Schema:
     id, image, category (people|botanicals|naula|product|experience),
     caption, location, year, partner (lightbox-only), story (carousel group),
     published, featured, order.
   ========================================================================= */

const IN_PRACTICE_ITEMS = [

  {
    id: "product-lineup",
    image: "TKG_16_9_3.webp",
    category: "product",
    caption: "The full lineup",
    published: true,
    order: 0
  },

  {
    id: "event-vpbank-half-marathon",
    image: "VPB-0.webp",
    category: "experience",
    caption: "TKG at the VPBank HCMC Music Half Marathon",
    location: "Ho Chi Minh City",
    year: "2026",
    partner: "VPBank HCMC Music Half Marathon — 02 Aug 2026",
    published: true,
    order: 1
  },

  {
    id: "event-the-gioi-chay-bo",
    image: "TGCB.webp",
    category: "experience",
    caption: "TKG at Thế Giới Chạy Bộ",
    location: "Ho Chi Minh City",
    year: "2026",
    partner: "Thế Giới Chạy Bộ — 15 Aug 2026",
    published: true,
    order: 2
  },

  {
    id: "vpbank-music-half-marathon-hcmc",
    image: "VPB-3.webp",
    category: "experience",
    caption: "VPBank Music Half Marathon HCMC",
    year: "2026",
    partner: "NEXUS Sport Events",
    published: true,
    order: 3
  },

  {
    id: "product-table-view",
    image: "TKG_16_9_4.webp",
    category: "product",
    caption: "Above the city",
    location: "Ho Chi Minh City",
    published: true,
    order: 5
  },

  {
    id: "product-family-16x9",
    image: "TKG_16_9_1.webp",
    category: "product",
    caption: "Morning Ember, Still Ember",
    published: true,
    order: 6
  },

  {
    id: "morning-ember-texture",
    image: "Morning Ember-texture.webp",
    category: "product",
    published: true,
    order: 7
  },

  {
    id: "farmer-ginger",
    image: "Farmer.webp",
    category: "people",
    caption: "A farmer, freshly harvested ginger",
    location: "Vietnam",
    published: true,
    featured: true,
    order: 8
  },

  {
    id: "ginger-root",
    image: "Ginger.webp",
    category: "botanicals",
    caption: "Ginger root",
    published: true,
    order: 10
  },

  {
    id: "lemongrass-bundle",
    image: "lemonngass.webp",
    category: "botanicals",
    caption: "Lemongrass, bundled",
    published: true,
    order: 11
  },

  {
    id: "lemongrass",
    image: "Lemongrass-naula.webp",
    category: "botanicals",
    caption: "Lemongrass",
    published: true,
    order: 12
  },

  {
    id: "ginger-dissolve",
    image: "Ginger-powder-dissolve.webp",
    category: "product",
    caption: "Powder into water",
    published: true,
    order: 13
  },

  {
    id: "product-stick-pack",
    image: "TKG_16_9_2.webp",
    category: "product",
    caption: "A single-serve stick, ready to pour",
    published: true,
    order: 14
  },

  {
    id: "ritual-spoon",
    image: "Ritual-2.webp",
    category: "product",
    caption: "A spoonful, measured by hand",
    published: true,
    featured: true,
    order: 15
  },

  {
    id: "event-michigan",
    image: "MI-3.webp",
    category: "experience",
    caption: "TKG's first U.S. launch",
    location: "Bloomfield Hills, Michigan",
    partner: "Michigan · Bloomfield Hills launch",
    published: true,
    order: 16
  },

  {
    id: "perilla-harvest",
    image: "Perilla-harvest.webp",
    category: "botanicals",
    caption: "The harvest",
    location: "Vietnam",
    published: true,
    order: 17
  },

  {
    id: "perilla-1",
    image: "Perilla_1.webp",
    category: "botanicals",
    published: true,
    order: 18
  },

  {
    id: "botanical-house",
    image: "Botanical House.webp",
    category: "botanicals",
    caption: "Perilla, fresh from harvest",
    published: true,
    featured: true,
    order: 19
  },

  {
    id: "naula-simmer",
    image: "Naula-2.webp",
    category: "naula",
    caption: "Perilla, simmered slow",
    published: true,
    order: 20
  },

  {
    id: "herbal-boil",
    image: "TKG-herbal-boil.webp",
    category: "naula",
    caption: "Steam rising from the pot",
    published: true,
    order: 21
  },

  {
    id: "naula-wash",
    image: "Naula-3.webp",
    category: "naula",
    caption: "Washed, before anything else",
    published: true,
    order: 22
  },

  {
    id: "freeze-dried-2",
    image: "Freeze-dried-2.webp",
    category: "product",
    published: true,
    order: 23
  },

  {
    id: "freeze-dried-1",
    image: "Freeze-dried-1.webp",
    category: "product",
    caption: "Freeze-dried, not cooked down",
    published: true,
    order: 24
  },

  {
    id: "freeze-dry-sheet",
    image: "IMG_9555.webp",
    category: "product",
    caption: "Fresh off the freeze-dryer",
    published: true,
    order: 25
  },

  {
    id: "still-ember-texture",
    image: "Still-Ember-texture.webp",
    category: "product",
    published: true,
    order: 26
  },

  {
    id: "process-2",
    image: "Process-2.webp",
    category: "product",
    caption: "In process",
    published: true,
    order: 27
  },

  {
    id: "product-pour",
    image: "TKG_16_9_5.webp",
    category: "product",
    caption: "Powder into glass",
    published: true,
    order: 28
  },

  {
    id: "naula-documentary",
    image: "Naula-documentary.webp",
    category: "naula",
    caption: "The old way — remedy over an open flame",
    location: "Vietnam",
    published: true,
    featured: true,
    order: 30
  },

  {
    id: "vg2-group-2",
    image: "VG2_6.webp",
    category: "people",
    caption: "Partners and makers, together",
    location: "Ho Chi Minh City",
    partner: "SAVVi (VG2 Program) launch event",
    story: "vg2-launch",
    published: true,
    order: 170
  },

  {
    id: "veget-market",
    image: "veget-market.webp",
    category: "botanicals",
    caption: "The market, before sunrise",
    location: "Vietnam",
    published: true,
    order: 180
  },

  {
    id: "hero-graphic",
    image: "Hero-Section-1.webp",
    category: "product",
    caption: "TKG Botanical Blend Powder",
    published: true,
    order: 300
  },

  {
    id: "ending-together",
    image: "Ending-1.webp",
    category: "experience",
    caption: "Shared, over something warm",
    published: true,
    order: 355
  }

];
