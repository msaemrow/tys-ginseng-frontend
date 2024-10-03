const products = [
  {
    id: 1001,
    type: "SINGLE",
    name: "Ginseng Powder 0.25oz",
    price: 20.0,
    sale_price: 17.0,
    on_sale: false,
    description: "100% pure American ginseng powder - Minnesota woods grown",
    servings: "Approximately 7 daily servings at ¼-½ teaspoon",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/jar_of_ginseng_025.jpg",
    weight: 0.43,
    quantity: 20,
  },
  {
    id: 1002,
    type: "SINGLE",
    name: "Ginseng Powder 1oz ",
    price: 70,
    sale_price: 59.5,
    on_sale: false,
    description: "100% pure American ginseng powder - Minnesota woods grown",
    servings: "Approximately 30 daily servings at ¼-½ teaspoon",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/jar_of_ginseng_100.jpg",
    weight: 3.93,
    quantity: 20,
  },
  {
    id: 1003,
    type: "SINGLE",
    name: "Ginseng Powder 6oz",
    price: 360.0,
    sale_price: 306.0,
    on_sale: false,
    description: "100% pure American ginseng powder - Minnesota woods grown",
    servings: "Approximately 180 daily servings at ¼-½ teaspoon",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/jar_of_ginseng_600.jpg",
    weight: 7.32,
    quantity: 20,
  },
  {
    id: 1004,
    name: "Ginseng Powder 0.75oz",
    type: "SINGLE",
    price: 55.0,
    sale_price: 46.75,
    on_sale: true,
    description:
      "1oz jar of 100% Minnesota forest grown ginseng. No additives. ",
    servings: "Approximately 3 week supply if used daily at 1/4-1/2 tsp.",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/jar_of_ginseng_075.jpg",
    weight: 2.87,
    quantity: 20,
  },
  {
    id: 1005,
    type: "BULK",
    name: "Dried Ginseng Roots by the Pound",
    price: 800,
    sale_price: 730,
    on_sale: false,
    description:
      "Dried woods grown ginseng roots 6+ years old.  Quantities based on seasonal availability. Minimum order is 1lb. Orders over 5lbs may need additional time to fulfill. Contact for availability.",
    servings: "NA",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/dried_ginseng.jpg",
    weight: 0,
    quantity: 20,
  },
  {
    id: 1006,
    type: "BULK",
    name: "Fresh Ginseng Roots by the Pound",
    price: 300,
    sale_price: 270,
    on_sale: false,
    description:
      "Fresh woods grown ginseng roots 6+ years old. Quantities based on seasonal availability. Minimum order is 1lb. Orders over 5lbs may need additional time to fulfill. Contact for availability.",
    servings: "NA",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/fresh_ginseng_roots.jpg",
    weight: 0,
    quantity: 20,
  },
  {
    id: 1007,
    type: "ROOTLET",
    name: "Rootlets for Sale",
    price: 2,
    sale_price: 1.5,
    on_sale: false,
    description:
      "Fresh woods grown rootlets 1 year old.  Quantities based on seasonal availability.  Minimum order is 50 rootlets. Orders over 150 may need additional time to fulfill.",
    servings: "",
    image_url:
      "https://tysginseng.s3.us-east-2.amazonaws.com/fresh_dug_ginseng_root.jpg",
    weight: 0,
    quantity: 20,
  },
];

export default products;
