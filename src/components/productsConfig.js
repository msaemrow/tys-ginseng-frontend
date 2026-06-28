// productsConfig.js
// Add, remove, or update products here. Each entry renders as a product section.

const products = [
  {
    id: "ginseng-powder",
    name: "Ginseng Powder",
    tagline: "Pure. Potent. Versatile.",
    description:
      "Our premium ginseng powder is cold-processed to preserve the full spectrum of ginsenosides and natural compounds. Sourced from mature roots aged 6+ years, it blends seamlessly into smoothies, teas, and cooking — making daily wellness effortless.",
    benefits: [
      "Supports natural energy",
      "Rich in ginsenosides",
      "No fillers or additives",
    ],
    price: "$34.99",
    unit: "per 100g",
    buttonText: "Shop Now",
    purchaseUrl: "/shop/ginseng-powder",
    badge: ["Best Seller", "MN Grown"],
    imageAlt: "Ginseng root powder in a wooden bowl",
    accentColor: "#DAA520", // goldenrod
  },
  {
    id: "ginseng-honey",
    name: "Ginseng Honey",
    tagline: "Ancient remedy. Modern ritual.",
    description:
      "Raw wildflower honey infused with whole ginseng extract — a time-honored pairing that balances the root's earthy depth with natural sweetness. Stir into warm water, drizzle over food, or take a spoonful straight. No heating, no processing.",
    benefits: [
      "Raw & unfiltered honey",
      "Slow-infused extract",
      "No artificial ingredients",
    ],
    price: "$28.99",
    unit: "per 250g jar",
    buttonText: "Shop Ginseng Honey Now",
    purchaseUrl: "https://www.espn.com",
    badge: ["New Arrival", "Locally Sourced"],
    imageAlt: "Golden jar of ginseng-infused honey",
    accentColor: "#DAA520",
  },
  {
    id: "ginseng-roots",
    name: "Ginseng Roots",
    tagline: "Whole root. Whole benefit.",
    description:
      "Dried whole ginseng roots for those who prefer their wellness unprocessed. Steep them in hot water for a traditional tea, simmer into broths, or slice and chew. Each root is hand-selected, naturally dried, and packaged to lock in freshness.",
    benefits: [
      "Hand-selected whole roots",
      "Traditional preparation",
      "Air-dried, not heat-treated",
    ],
    price: "$49.99",
    unit: "per 50g",
    buttonText: "Buy Now",
    purchaseUrl: "/shop/ginseng-roots",
    badge: ["Bulk", "Wholesale"],
    imageAlt: "Dried whole ginseng roots on a natural surface",
    accentColor: "#DAA520",
  },
];

export default products;
