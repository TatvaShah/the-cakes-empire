import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "The Cakes Empire",
  tagline: "Eggless custom celebration cakes in Brampton. Soft, Pinteresty designs you will be back for.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://the-cakes-empire.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#e590c7" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and the GTA",
    headline: "Eggless cakes made for your celebration",
    subhead:
      "Custom Pinteresty cakes, classic tiers, surprise cakes, and sweet hampers. Send a DM with your date and idea to get started.",
    images: [
      {
        src: "/images/wedding-cake.jpg",
        alt: "Custom celebration cake by The Cakes Empire",
        width: 720,
        height: 1280,
      },
      {
        src: "/images/october-divas.jpg",
        alt: "Pretty birthday cake for an October celebration",
        width: 720,
        height: 1280,
      },
      {
        src: "/images/surprise-him.jpg",
        alt: "Surprise cake styled for a special someone",
        width: 720,
        height: 1280,
      },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Eggless cakes",
    "Custom and Pinteresty designs",
    "Orders by Instagram DM",
    "Brampton and the GTA",
  ],

  about: {
    title: "You will be back for more",
    body: [
      "The Cakes Empire creates eggless custom celebration cakes with soft, Pinteresty styling for birthdays, big days, and every sweet surprise in between.",
      "Based in Brampton and serving the GTA, we customize flavours and designs when you DM us. A minimum 50% advance payment holds your order.",
    ],
    image: {
      src: "/images/classic-fresh.jpg",
      alt: "Fresh classic cake from The Cakes Empire",
      width: 720,
      height: 1280,
    },
  },

  menu: {
    title: "What we bake",
    intro: "Every cake is quoted in your DM based on size, design, and date. Ask us about available flavours anytime.",
    variant: "cards",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM",
        items: [
          {
            name: "Pinteresty custom cakes",
            description: "Aesthetic designs made to match your inspo and occasion.",
            image: {
              src: "/images/october-divas.jpg",
              alt: "Aesthetic custom celebration cake",
              width: 720,
              height: 1280,
            },
            href: "https://www.instagram.com/p/DeC886zhDk7/",
          },
          {
            name: "Classic cakes",
            description: "Clean, fresh, and ready for any celebration.",
            image: {
              src: "/images/classic-yeah.jpg",
              alt: "Classic celebration cake",
              width: 640,
              height: 1136,
            },
            href: "https://www.instagram.com/p/Dd71crmu0tB/",
          },
          {
            name: "Surprise cakes",
            description: "For the people who deserve a sweet plot twist.",
            image: {
              src: "/images/surprise-him.jpg",
              alt: "Surprise cake for a special moment",
              width: 720,
              height: 1280,
            },
            href: "https://www.instagram.com/p/DeK9qDuve44/",
          },
          {
            name: "Cake hampers and gifts",
            description: "Cakes paired with thoughtful extras for birthdays and love notes.",
            image: {
              src: "/images/hamper.jpg",
              alt: "Cake hamper gift setup",
              width: 640,
              height: 1136,
            },
            href: "https://www.instagram.com/p/DeIciKZBR56/",
          },
        ],
      },
      {
        title: "Special requests",
        note: "Tell us what you have in mind",
        items: [
          {
            name: "Sorry cake",
            description: "When words need a little frosting.",
            href: "https://www.instagram.com/p/DdziNvWheSq/",
          },
          {
            name: "Lily cake",
            description: "Soft floral styling for a graceful table.",
          },
          {
            name: "Whisky cake",
            description: "A bolder flavour for the grown up celebrations.",
          },
        ],
      },
    ],
    footnote: "Final quotes depend on design, size, and date. Ask about available flavours in your DM.",
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/wedding-cake.jpg",
        width: 720,
        height: 1280,
        alt: "Custom cake for a big day",
        caption: "Trusted on their big day",
        href: "https://www.instagram.com/p/DeGK4nXpifF/",
      },
      {
        src: "/images/october-divas.jpg",
        width: 720,
        height: 1280,
        alt: "Pretty October birthday cake",
        caption: "For our October born",
        href: "https://www.instagram.com/p/DeC886zhDk7/",
      },
      {
        src: "/images/surprise-him.jpg",
        width: 720,
        height: 1280,
        alt: "Surprise cake moment",
        caption: "Surprising him",
        href: "https://www.instagram.com/p/DeK9qDuve44/",
      },
      {
        src: "/images/classic-fresh.jpg",
        width: 720,
        height: 1280,
        alt: "Classic fresh cake in Brampton",
        caption: "Classic and fresh",
        href: "https://www.instagram.com/p/DeAAhu9B5Bt/",
      },
      {
        src: "/images/classic-yeah.jpg",
        width: 640,
        height: 1136,
        alt: "Classic cake celebration",
        caption: "Classic cakes? Yes",
        href: "https://www.instagram.com/p/Dd71crmu0tB/",
      },
      {
        src: "/images/sorry-cake.jpg",
        width: 720,
        height: 1280,
        alt: "Sorry cake that travelled to North Bay",
        caption: "A sorry cake adventure",
        href: "https://www.instagram.com/p/DdziNvWheSq/",
      },
      {
        src: "/images/lucky-surprise.jpg",
        width: 640,
        height: 1136,
        alt: "Planned surprise cake setup",
        caption: "Lucky if someone plans this",
        href: "https://www.instagram.com/p/Ddu1mZ9xz7j/",
      },
      {
        src: "/images/hamper.jpg",
        width: 640,
        height: 1136,
        alt: "Cake hamper gift",
        caption: "Hampers and gifts",
        href: "https://www.instagram.com/p/DeIciKZBR56/",
      },
      {
        src: "/images/reveal.jpg",
        width: 720,
        height: 1280,
        alt: "Cake reveal moment",
        caption: "Watch till the end",
        href: "https://www.instagram.com/p/DdsghNxhBPw/",
      },
      {
        src: "/images/flavours.jpg",
        width: 1080,
        height: 1439,
        alt: "Available flavours board from The Cakes Empire",
        caption: "Ask us about flavours",
        href: "https://www.instagram.com/p/Dd9sNYYNXpi/",
      },
    ],
  },

  instagram: {
    handle: "the_cakes_empire",
    embeds: [
      "https://www.instagram.com/p/DeK9qDuve44/",
      "https://www.instagram.com/p/Dd9sNYYNXpi/",
      "https://www.instagram.com/p/DeGK4nXpifF/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro:
      "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi The Cakes Empire! I would love to order an eggless cake.\nDate needed:\nSize or servings:\nFlavour:\nPickup:\nDesign idea (I can send a photo):",
    links: [],
    note: "A minimum 50% advance payment holds your order. Custom flavours and designs are welcome by DM.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send us a DM on Instagram with your date, size or servings, flavour, and pickup details. We will help you customize from there.",
    },
    {
      q: "Are your cakes eggless?",
      a: "Yes. Our celebration cakes are eggless.",
    },
    {
      q: "Do you need a deposit?",
      a: "Yes. A minimum 50% advance payment is required to hold your order.",
    },
    {
      q: "Where are you based?",
      a: "We are based in Brampton and serve the GTA in Ontario.",
    },
  ],

  contact: {
    area: "Brampton, Ontario",
  },

  seo: {
    title: "The Cakes Empire | Eggless custom cakes in Brampton",
    description:
      "Eggless custom celebration cakes in Brampton and the GTA. Pinteresty designs, classic cakes, and hampers. Order by Instagram DM.",
    keywords: [
      "eggless cakes Brampton",
      "custom cakes Brampton",
      "celebration cakes GTA",
      "Pinterest cakes Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
