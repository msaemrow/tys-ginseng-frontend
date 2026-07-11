// productsConfig.js
// Add, remove, or update products here. Each entry renders as a product section.
import { FARM_TO_TABLE_LINK } from "../constants";

const products = [
  {
    id: "ginseng-powder",
    name: "American Ginseng Powder",
    tagline: "Woods grown. Hand dug.",
    description:
      "Sourced from mature roots aged 6+ years, it blends seamlessly into smoothies, teas, and cooking — making daily wellness effortless. Our ginseng powder is 100% pure, with no fillers or additives, and retains the root's natural earthy flavor.",
    benefits: ["Fights fatigue", "Mental clarity", "Boosts immune system"],
    price: "$34.99",
    unit: "per 100g",
    buttonText: "Shop Now",
    purchaseUrl: FARM_TO_TABLE_LINK,
    badge: ["Best Seller", "MN Grown"],
    imageAlt: "Ginseng root powder in a wooden bowl",
    imageUrl: "/images/ginseng_products.jpg",
    accentColor: "#DAA520", // goldenrod
  },
  {
    id: "ginseng-honey",
    name: "Ginseng Honey",
    tagline: "Earthy roots. Golden sweetness.",
    description:
      "Beat the afternoon slump with our locally sourced raw wildflower honey infused with American ginseng powder. Stir into warm tea, drizzle over food, or take it on the go and eat it straight from the pouch. No heating, no processing.",
    benefits: [
      "Raw & unfiltered honey",
      "Convenient on the go treat",
      "Boost energy and immunity naturally",
    ],
    price: "$28.99",
    unit: "per 250g jar",
    buttonText: "Shop Now",
    purchaseUrl: FARM_TO_TABLE_LINK,
    badge: ["New Arrival", "Locally Sourced"],
    imageUrl: "/images/ginseng_honey_2.jpg",
    imageAlt: "Golden jar of ginseng-infused honey",
    accentColor: "#DAA520",
  },
  {
    id: "ginseng-roots",
    name: "Fresh Ginseng Roots",
    tagline: "Whole root. Whole benefit.",
    description:
      "Fresh American ginseng roots for those who prefer their wellness unprocessed. Steep them in hot water for a traditional tea, simmer into broths, or slice and chew. Each root is 6+ years old and hand-dug. Call our number below for pricing and ordering.",
    benefits: ["Hand-selected whole roots", "6+ years old", "Hand-dug"],
    price: "$49.99",
    unit: "per 50g",
    buttonText: "Shop Now",
    purchaseUrl: FARM_TO_TABLE_LINK,
    badge: ["Fresh", "Whole root"],
    imageUrl: "/images/fresh_dug_ginseng_root_5.jpg",
    imageAlt: "Dried whole ginseng roots on a natural surface",
    accentColor: "#DAA520",
    phoneLink: "true",
  },
];

export default products;
