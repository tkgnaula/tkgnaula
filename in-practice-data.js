/* ============================================================================
   IN PRACTICE — content data
   ----------------------------------------------------------------------------
   This file is the single source of truth for the "In Practice" masonry wall
   (in-practice.html). It is a plain JS array of plain objects — no build step,
   no bundler, no CMS. To add a new photo to the wall: drop a .webp file in the
   repo root and add one object below. No HTML/CSS edits required.

   Schema:
     id        — unique string
     image     — filename, relative to repo root, .webp only (may be null when
                 published:false and no real photo exists yet)
     category  — one of: "people" | "botanicals" | "naula" | "product" | "experience"
     caption   — short, optional. Shown on hover (desktop) and in the lightbox.
     location  — optional, shown only in the lightbox
     year      — optional, shown only in the lightbox
     partner   — optional event/partner name — shown ONLY in the lightbox detail
                 view, never on the wall grid itself (per brand positioning:
                 this page is TKG's visual world, not an events portfolio)
     story     — optional group id. Items sharing a story id become one
                 carousel inside the lightbox (arrows/swipe move within the
                 group; the counter reflects position within the group).
     published — bool. false = staged/not rendered (no real photo yet, or the
                 record exists for factual completeness only).
     featured  — bool. Reserved for potential homepage teaser use later.
     order     — number. Default sequence before the masonry columns balance
                 heights; the render script sorts by this first.

   STAGED / UNPUBLISHED RECORDS
   ----------------------------------------------------------------------------
   Three event/location records are kept below with published:false. No
   candid TKG photography exists yet for these — the previous version of this
   page linked to image filenames (MI-1/2/3.webp, VPB-0/2/3/4.webp,
   TGCB.webp, TGCB-3/4/5.webp) that were never actually present in the repo,
   which produced broken <img> tags on the live site. Rather than repeat that
   mistake or substitute stock photography, these are kept as data-only
   placeholders with full factual metadata (event, location, date) so that
   the moment real photos are supplied, someone can set image + published:true
   and the wall (and lightbox) picks them up automatically — no code changes.
   ========================================================================= */

const IN_PRACTICE_ITEMS = [

  // ---- PEOPLE -------------------------------------------------------------
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
    id: "founders",
    image: "Founders-tablet.webp",
    category: "people",
    caption: "TKG, in two people",
    location: "Ho Chi Minh City",
    published: true,
    featured: true,
    order: 50
  },
  {
    id: "vg2-group-1",
    image: "VG2_1.webp",
    category: "people",
    caption: "The team, on launch day",
    location: "Ho Chi Minh City",
    partner: "SAVVi (VG2 Program) launch event",
    story: "vg2-launch",
    published: true,
    order: 90
  },
  {
    id: "vg2-weighing",
    image: "IMG_9557.webp",
    category: "people",
    caption: "Weighing every batch by hand",
    location: "Ho Chi Minh City",
    published: true,
    order: 130
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

  // ---- BOTANICALS -----------------------------------------------------------
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
    id: "ginger-root",
    image: "Ginger.webp",
    category: "botanicals",
    caption: "Ginger root",
    published: true,
    order: 60
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
    id: "lemongrass",
    image: "Lemongrass-naula.webp",
    category: "botanicals",
    caption: "Lemongrass",
    published: true,
    order: 140
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
    id: "perilla-1",
    image: "Perilla_1.webp",
    category: "botanicals",
    published: true,
    order: 200
  },
  {
    id: "perilla-closeup",
    image: "Perilla-closeup.webp",
    category: "botanicals",
    caption: "Perilla leaf, close",
    published: true,
    order: 230
  },

  // ---- NAULA (heritage / method) -------------------------------------------
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
    id: "naula-simmer",
    image: "Naula-2.webp",
    category: "naula",
    caption: "Perilla, simmered slow",
    published: true,
    order: 70
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
    id: "herbal-boil",
    image: "TKG-herbal-boil.webp",
    category: "naula",
    caption: "Steam rising from the pot",
    published: true,
    order: 150
  },

  // ---- PRODUCT --------------------------------------------------------------
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
    id: "freeze-dried-1",
    image: "Freeze-dried-1.webp",
    category: "product",
    caption: "Freeze-dried, not cooked down",
    published: true,
    order: 80
  },
  {
    id: "morning-ember-texture",
    image: "Morning Ember-texture.webp",
    category: "product",
    published: true,
    order: 120
  },
  {
    id: "still-ember-texture",
    image: "Still-Ember-texture.webp",
    category: "product",
    published: true,
    order: 160
  },
  {
    id: "freeze-dried-2",
    image: "Freeze-dried-2.webp",
    category: "product",
    published: true,
    order: 190
  },
  {
    id: "img-8647",
    image: "IMG_8647.webp",
    category: "product",
    published: true,
    order: 210
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
    id: "product-styled",
    image: "TKG-product-styled.webp",
    category: "product",
    caption: "Ginger Lemongrass · Perilla Clove",
    published: true,
    order: 290
  },
  {
    id: "hero-graphic",
    image: "Hero-Section-1.webp",
    category: "product",
    caption: "TKG Botanical Blend Powder",
    published: true,
    order: 300
  },

  // ---- EXPERIENCE -----------------------------------------------------------
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

  // ---- STAGED / NOT YET PUBLISHED (see note above) ---------------------------
  {
    id: "event-vpbank-half-marathon",
    image: null,
    category: "experience",
    caption: "TKG at the VPBank HCMC Music Half Marathon",
    location: "Ho Chi Minh City",
    year: "2026",
    partner: "VPBank HCMC Music Half Marathon — 02 Aug 2026",
    published: false,
    order: 400
  },
  {
    id: "event-the-gioi-chay-bo",
    image: null,
    category: "experience",
    caption: "TKG at Thế Giới Chạy Bộ",
    location: "Ho Chi Minh City",
    year: "2026",
    partner: "Thế Giới Chạy Bộ — 15 Aug 2026",
    published: false,
    order: 410
  },
  {
    id: "event-michigan",
    image: null,
    category: "experience",
    caption: "TKG's first U.S. launch",
    location: "Bloomfield Hills, Michigan",
    partner: "Michigan · Bloomfield Hills launch",
    published: false,
    order: 420
  },
  // Event reference art only (VPBank's own promo graphic) — not a TKG candid
  // photo, so it stays unpublished by default; flip to true if it's ever
  // needed as supporting context inside the VPBank lightbox story.
  {
    id: "vpbank-cover-art",
    image: "VPB_cover.webp",
    category: "experience",
    caption: "VPBank HCMC Music Half Marathon — event artwork",
    location: "Ho Chi Minh City",
    year: "2026",
    partner: "VPBank HCMC Music Half Marathon — 02 Aug 2026",
    published: false,
    order: 430
  }

];
