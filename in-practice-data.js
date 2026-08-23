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
    id: "farmer-ginger",
    image: "Farmer.webp",
    category: "people",
    caption: "A farmer, freshly harvested ginger",
    location: "Vietnam",
    published: true,
    featured: true,
    order: 10
  },

  {
    id: "botanical-house",
    image: "Botanical House.webp",
    category: "botanicals",
    caption: "Perilla, fresh from harvest",
    published: true,
    featured: true,
    order: 20
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
    id: "ritual-spoon",
    image: "Ritual-2.webp",
    category: "product",
    caption: "A spoonful, measured by hand",
    published: true,
    featured: true,
    order: 40
  },

  {
    id: "ginger-root",
    image: "Ginger.webp",
    category: "botanicals",
    caption: "Ginger root",
    published: true,
    order: 60
  },

  {
    id: "naula-simmer",
    image: "Naula-2.webp",
    category: "naula",
    caption: "Perilla, simmered slow",
    published: true,
    order: 70
  },

  {
    id: "freeze-dried-1",
    image: "Freeze-dried-1.webp",
    category: "product",
    caption: "Freeze-dried, not cooked down",
    published: true,
    order: 80
  },

  {
    id: "perilla-harvest",
    image: "Perilla-harvest.webp",
    category: "botanicals",
    caption: "The harvest",
    location: "Vietnam",
    published: true,
    order: 100
  },

  {
    id: "naula-wash",
    image: "Naula-3.webp",
    category: "naula",
    caption: "Washed, before anything else",
    published: true,
    order: 110
  },

  {
    id: "morning-ember-texture",
    image: "Morning Ember-texture.webp",
    category: "product",
    published: true,
    order: 120
  },

  {
    id: "lemongrass",
    image: "Lemongrass-naula.webp",
    category: "botanicals",
    caption: "Lemongrass",
    published: true,
    order: 140
  },

  {
    id: "herbal-boil",
    image: "TKG-herbal-boil.webp",
    category: "naula",
    caption: "Steam rising from the pot",
    published: true,
    order: 150
  },

  {
    id: "still-ember-texture",
    image: "Still-Ember-texture.webp",
    category: "product",
    published: true,
    order: 160
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
    id: "freeze-dried-2",
    image: "Freeze-dried-2.webp",
    category: "product",
    published: true,
    order: 190
  },

  {
    id: "perilla-1",
    image: "Perilla_1.webp",
    category: "botanicals",
    published: true,
    order: 200
  },

  {
    id: "img-8647",
    image: "IMG_8647.webp",
    category: "product",
    published: true,
    order: 210
  },

  {
    id: "vg2-plating",
    image: "VG2_7.webp",
    category: "experience",
    caption: "Plating, one tray at a time",
    location: "Ho Chi Minh City",
    partner: "SAVVi (VG2 Program) launch event",
    story: "vg2-launch",
    published: true,
    order: 220
  },

  {
    id: "perilla-closeup",
    image: "Perilla-closeup.webp",
    category: "botanicals",
    caption: "Perilla leaf, close",
    published: true,
    order: 230
  },

  {
    id: "freeze-dried-3",
    image: "Freeze-dried-3.webp",
    category: "product",
    published: true,
    order: 240
  },

  {
    id: "process-2",
    image: "Process-2.webp",
    category: "product",
    caption: "In process",
    published: true,
    order: 250
  },

  {
    id: "ginger-dissolve",
    image: "Ginger-powder-dissolve.webp",
    category: "product",
    caption: "Powder into water",
    published: true,
    order: 260
  },

  {
    id: "img-8648",
    image: "IMG_8648.webp",
    category: "product",
    published: true,
    order: 270
  },

  {
    id: "freeze-dry-sheet",
    image: "IMG_9555.webp",
    category: "product",
    caption: "Fresh off the freeze-dryer",
    published: true,
    order: 280
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
    id: "product-family-16x9",
    image: "TKG_16_9_1.webp",
    category: "product",
    caption: "Morning Ember, Still Ember",
    published: true,
    order: 305
  },

  {
    id: "vg2-glutinous-corn",
    image: "VG2_2.webp",
    category: "experience",
    caption: "Xôi bắp nếp, Red River Delta",
    location: "Ho Chi Minh City",
    partner: "Very Good Viet Goods (Thiện Kiến showcase)",
    story: "vg2-launch",
    published: true,
    order: 310
  },

  {
    id: "lemongrass-bundle",
    image: "lemonngass.webp",
    category: "botanicals",
    caption: "Lemongrass, bundled",
    published: true,
    order: 315
  },

  {
    id: "product-stick-pack",
    image: "TKG_16_9_2.webp",
    category: "product",
    caption: "A single-serve stick, ready to pour",
    published: true,
    order: 320
  },

  {
    id: "product-lineup",
    image: "TKG_16_9_3.webp",
    category: "product",
    caption: "The full lineup",
    published: true,
    order: 330
  },

  {
    id: "product-table-view",
    image: "TKG_16_9_4.webp",
    category: "product",
    caption: "Above the city",
    location: "Ho Chi Minh City",
    published: true,
    order: 340
  },

  {
    id: "product-pour",
    image: "TKG_16_9_5.webp",
    category: "product",
    caption: "Powder into glass",
    published: true,
    order: 350
  },

  {
    id: "ending-together",
    image: "Ending-1.webp",
    category: "experience",
    caption: "Shared, over something warm",
    published: true,
    order: 355
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
    order: 400
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
    order: 410
  },

  {
    id: "event-michigan",
    image: "MI-3.webp",
    category: "experience",
    caption: "TKG's first U.S. launch",
    location: "Bloomfield Hills, Michigan",
    partner: "Michigan · Bloomfield Hills launch",
    published: true,
    order: 420
  }

];
