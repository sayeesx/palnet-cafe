/** Featured / full-menu items shown on home and `/menu`. */
export const PRODUCTS = [
  {
    slug: "signature-orbit-pasta",
    name: "Signature Pasta",
    price: "$7.50",
    category: "Pasta",
    isVeg: false,
    shortDescription:
      "Gravity. On a plate. A perfect, twisting orbit of pasta, sauce, and simplicity. This is our world.",
    detailDescription:
      "Gravity. On a plate. A perfect, twisting orbit of pasta, sauce, and simplicity. This is our world.",
    rating: "★ 4.9 · Chef’s pick",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747115/1777744177168_ohrdna.png",
    imageAlt: "Planet Cafe signature pasta on a black plate with garlic bread",
  },
  {
    slug: "butter-garlic-prawns",
    name: "Butter Garlic Prawns",
    price: "$10.99",
    category: "Seafood",
    isVeg: false,
    shortDescription:
      "Sizzling, rich, and irresistibly fragrant. The Butter Garlic Prawns.",
    detailDescription:
      "Sizzling, rich, and irresistibly fragrant. The Butter Garlic Prawns.",
    rating: "★ 4.9",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747116/1777744224400_jy3itv.png",
    imageAlt: "Butter garlic prawns with vegetables and garlic bread",
  },
  {
    slug: "mexican-jack-salad",
    name: "Mexican Jack Salad",
    price: "$8.99",
    category: "Salads",
    isVeg: false,
    shortDescription:
      "Fresh, and boldly layered. Our Mexican Jack Salad—a vibrant crunch of texture and flavor.",
    detailDescription:
      "Fresh, and boldly layered. Our Mexican Jack Salad—a vibrant crunch of texture and flavor.",
    rating: "★ 5.0 · Guest favorite",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747116/1777744210860_ri54kk.png",
    imageAlt: "Mexican Jack Salad in a blue bowl",
  },
  {
    slug: "hawaiian-salad",
    name: "Hawaiian Salad",
    price: "$7.99",
    category: "Salads",
    isVeg: true,
    shortDescription:
      "Tropical greens with a bright, sweet-savory dressing—light, fresh, and built to share.",
    detailDescription:
      "A colorful bowl of crisp greens, seasonal fruit notes, and our house dressing for a vacation-on-a-plate vibe. Great as a starter or a lighter main.",
    rating: "★ 4.8 · Guest favorite",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777783510/Screenshot_20260503_100940_Instagram_hecvg9.png",
    imageAlt: "Hawaiian Salad",
  },
  {
    slug: "lambi-chicken",
    name: "Lambi Chicken",
    price: "$8.50",
    category: "Mains",
    isVeg: false,
    shortDescription:
      "Slow-cooked comfort with bold spices—juicy chicken and rich, aromatic gravy.",
    detailDescription:
      "Hearty Kerala-style preparation with layered spices and a satisfying finish. Served hot from the kitchen—ask your server for rice or bread pairings.",
    rating: "★ 4.9 · Must try",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747115/1777744155474_ua92hh.png",
    imageAlt: "Lambi Chicken",
  },
  {
    slug: "alf-med-pasta",
    name: "Alf med Pasta",
    price: "$6.25",
    category: "Pasta",
    isVeg: true,
    shortDescription:
      "Creamy Alfredo with a golden, cheesy sauce and al dente pasta.",
    detailDescription:
      "Classic comfort: velvety sauce, balanced seasoning, and pasta cooked to order. Add grilled protein at the branch when available.",
    rating: "★ 4.7",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747116/1777744215810_btbpaf.png",
    imageAlt: "Alf med Pasta",
  },
  {
    slug: "prawn-red-sauce",
    name: "Prawn in Red Sauce",
    price: "$9.99",
    category: "Seafood",
    isVeg: false,
    shortDescription:
      "Plump prawns simmered in a tangy red sauce—great with bread or rice.",
    detailDescription:
      "Seafood-forward plate with a vibrant sauce that clings to every bite. Spice level may vary by location; ask staff for mild or extra heat.",
    rating: "★ 4.8",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747116/1777744239552_k1wobk.png",
    imageAlt: "Prawn in Red Sauce",
  },
];

/** Home “Taste made to crave” strip — show exactly four cards */
export const HOME_TASTE_STRIP_DISHES = PRODUCTS.slice(0, 4);
