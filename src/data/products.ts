// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   description: string;
// }

// export const categories = [
//   "All",
//   "Shirts",
//   "Trousers",
//   "Suiting",
//   "Shirting",
//   "T-Shirts",
//   "Trackpants",
//   "Shorts",
//   "Accessories",
//   "Combo Gift Boxes",
//   "Ramraj Hosiery",
// ];

// export const products: Product[] = [
//   {
//     id: "1",
//     name: "Raymond Suiting Fabric",
//     category: "Suiting",
//     price: 2499,
//     image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
//     description: "Premium Raymond suiting fabric perfect for formal occasions. High-quality material with excellent drape and finish.",
//   },
//   {
//     id: "2",
//     name: "Park Avenue Shirts",
//     category: "Shirts",
//     price: 1999,
//     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
//     description: "Elegant Park Avenue formal shirt collection. Perfect for office wear and formal meetings.",
//   },
//   {
//     id: "3",
//     name: "Parx Casual Shirts",
//     category: "Shirts",
//     price: 1499,
//     image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
//     description: "Trendy casual shirts from Parx. Comfortable fabric ideal for everyday wear.",
//   },
//   {
//     id: "4",
//     name: "Minister White Shirt",
//     category: "Shirts",
//     price: 999,
//     image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
//     description: "Classic white formal shirt by Minister. Essential wardrobe piece for professionals.",
//   },
//   {
//     id: "5",
//     name: "Ramraj Dhoti & Vest",
//     category: "Ramraj Hosiery",
//     price: 1299,
//     image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
//     description: "Traditional Ramraj dhoti and vest set. Premium cotton for comfort and style.",
//   },
//   {
//     id: "6",
//     name: "Aravind Cotton Fabric",
//     category: "Shirting",
//     price: 1899,
//     image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
//     description: "Premium Aravind cotton shirting fabric. Breathable and perfect for tailoring.",
//   },
//   {
//     id: "7",
//     name: "Linen Club Shirts",
//     category: "Shirts",
//     price: 2199,
//     image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop",
//     description: "Pure linen shirts from Linen Club. Cool and comfortable for summer.",
//   },
//   {
//     id: "8",
//     name: "Giza Cotton Shirting",
//     category: "Shirting",
//     price: 2599,
//     image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
//     description: "Luxurious Egyptian Giza cotton shirting fabric. Superior softness and durability.",
//   },
//   {
//     id: "9",
//     name: "Soktas Fabric",
//     category: "Shirting",
//     price: 2399,
//     image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
//     description: "Premium Turkish Soktas shirting fabric. Known for its exceptional quality.",
//   },
//   {
//     id: "10",
//     name: "Grado Formal Shirts",
//     category: "Shirts",
//     price: 1799,
//     image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop",
//     description: "Elegant formal shirts by Grado. Perfect fit and premium finish.",
//   },
//   {
//     id: "11",
//     name: "Techno Sports Trackpants",
//     category: "Trackpants",
//     price: 999,
//     image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
//     description: "Comfortable sports trackpants by Techno. Ideal for workouts and casual wear.",
//   },
//   {
//     id: "12",
//     name: "Jockey Innerwear",
//     category: "Accessories",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
//     description: "Premium quality Jockey innerwear. Ultimate comfort and durability.",
//   },
// ];



// ✅ ONLY local image import (for product 13)
// import aravindGiftBox from "@/assets/products/aravind-gift-box.jpg";

// // Product interface
// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   description: string;
// }

// // Categories
// export const categories = [
//   "All",
//   "Shirts",
//   "Trousers",
//   "Suiting",
//   "Shirting",
//   "T-Shirts",
//   "Trackpants",
//   "Shorts",
//   "Accessories",
//   "Combo Gift Boxes",
//   "Ramraj Hosiery",
// ];

// // Products list
// export const products: Product[] = [
//   {
//     id: "1",
//     name: "Raymond Suiting Fabric",
//     category: "Suiting",
//     price: 2499,
//     image:
//       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
//     description:
//       "Premium Raymond suiting fabric with excellent drape and finish. Ideal for formal occasions and professional wear.",
//   },
//   {
//     id: "2",
//     name: "Park Avenue Formal Shirt",
//     category: "Shirts",
//     price: 1999,
//     image:
//       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
//     description:
//       "Elegant Park Avenue formal shirt designed for office wear and business meetings.",
//   },
//   {
//     id: "3",
//     name: "Parx Casual Shirt",
//     category: "Shirts",
//     price: 1499,
//     image:
//       "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
//     description:
//       "Stylish Parx casual shirt with comfortable fabric, perfect for everyday wear.",
//   },
//   {
//     id: "4",
//     name: "Minister White Formal Shirt",
//     category: "Shirts",
//     price: 999,
//     image:
//       "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
//     description:
//       "Classic white formal shirt by Minister. A must-have wardrobe essential.",
//   },
//   {
//     id: "5",
//     name: "Ramraj Dhoti & Vest Set",
//     category: "Ramraj Hosiery",
//     price: 1299,
//     image:
//       "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
//     description:
//       "Traditional Ramraj dhoti and vest combo made from premium quality cotton.",
//   },
//   {
//     id: "6",
//     name: "Aravind Pure Cotton Shirting Fabric",
//     category: "Shirting",
//     price: 1899,
//     image:
//       "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
//     description:
//       "High-quality Aravind cotton shirting fabric. Breathable, durable, and perfect for tailoring.",
//   },
//   {
//     id: "7",
//     name: "Linen Club Pure Linen Shirt",
//     category: "Shirts",
//     price: 2199,
//     image:
//       "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop",
//     description:
//       "Pure linen shirt from Linen Club. Lightweight and ideal for summer wear.",
//   },
//   {
//     id: "8",
//     name: "Giza Egyptian Cotton Shirting",
//     category: "Shirting",
//     price: 2599,
//     image:
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
//     description:
//       "Luxurious Giza Egyptian cotton fabric known for softness and long-lasting quality.",
//   },
//   {
//     id: "9",
//     name: "Soktas Premium Shirting Fabric",
//     category: "Shirting",
//     price: 2399,
//     image:
//       "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
//     description:
//       "Premium Turkish Soktas fabric offering superior comfort and elegant finish.",
//   },
//   {
//     id: "10",
//     name: "Grado Formal Shirt",
//     category: "Shirts",
//     price: 1799,
//     image:
//       "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop",
//     description:
//       "Well-tailored Grado formal shirt with premium fabric and perfect fit.",
//   },
//   {
//     id: "11",
//     name: "Techno Sports Trackpants",
//     category: "Trackpants",
//     price: 999,
//     image:
//       "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
//     description:
//       "Comfortable Techno sports trackpants suitable for workouts and casual wear.",
//   },
//   {
//     id: "12",
//     name: "Jockey Premium Innerwear",
//     category: "Accessories",
//     price: 799,
//     image:
//       "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
//     description:
//       "Premium Jockey innerwear designed for maximum comfort and durability.",
//   },

//   // ✅ PRODUCT 13 – LOCAL IMAGE FROM PC
//   {
//     id: "13",
//     name: "Aravind Pure Premium Cotton – Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1499,
//     image: aravindGiftBox,
//     description:
//       "Premium Aravind pure cotton gift box combo featuring high-quality fabrics. Elegantly packed and ideal for festivals, weddings, and special occasions.",
//   },
// ];


// // ================= LOCAL IMAGE IMPORTS (ONLY GIFT BOXES) =================
// import aravindGiftBoxs from "@/assets/products/aravind-gift-boxs.jpg";
// import aravindGiftBox from "@/assets/products/aravind-gift-box.jpg";
// import ramrajDiamondGiftBox from "@/assets/products/ramraj-diamond-gift-box.jpg";
// import ramrajEliteMajesticGiftBox from "@/assets/products/ramraj-elite-majestic-gift-box.jpg";
// import ramrajRoyalDelightGiftBox from "@/assets/products/ramraj-royal-delight-gift-box.jpg";

// // ================= PRODUCT TYPE =================
// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   description: string;
// }

// // ================= CATEGORIES =================
// export const categories = [
//   "All",
//   "Shirts",
//   "Trousers",
//   "Suiting",
//   "Shirting",
//   "T-Shirts",
//   "Trackpants",
//   "Shorts",
//   "Accessories",
//   "Combo Gift Boxes",
//   "Ramraj Hosiery",
// ];

// // ================= PRODUCTS =================
// export const products: Product[] = [
//   {
//     id: "1",
//     name: "Raymond Suiting Fabric",
//     category: "Suiting",
//     price: 2499,
//     image:
//       "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
//     description:
//       "Premium Raymond suiting fabric with excellent drape and finish. Ideal for formal occasions and professional wear.",
//   },
//   {
//     id: "2",
//     name: "Park Avenue Formal Shirt",
//     category: "Shirts",
//     price: 1999,
//     image:
//       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
//     description:
//       "Elegant Park Avenue formal shirt designed for office wear and business meetings.",
//   },
//   {
//     id: "3",
//     name: "Parx Casual Shirt",
//     category: "Shirts",
//     price: 1499,
//     image:
//       "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
//     description:
//       "Stylish Parx casual shirt with comfortable fabric, perfect for everyday wear.",
//   },
//   {
//     id: "4",
//     name: "Minister White Formal Shirt",
//     category: "Shirts",
//     price: 999,
//     image:
//       "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
//     description:
//       "Classic white formal shirt by Minister. A must-have wardrobe essential.",
//   },
//   {
//     id: "5",
//     name: "Ramraj Dhoti & Vest Set",
//     category: "Ramraj Hosiery",
//     price: 1299,
//     image:
//       "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
//     description:
//       "Traditional Ramraj dhoti and vest combo made from premium quality cotton.",
//   },
//   {
//     id: "6",
//     name: "Aravind Pure Cotton Shirting Fabric",
//     category: "Shirting",
//     price: 1899,
//     image:
//       "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
//     description:
//       "High-quality Aravind cotton shirting fabric. Breathable, durable, and perfect for tailoring.",
//   },
//   {
//     id: "7",
//     name: "Linen Club Pure Linen Shirt",
//     category: "Shirts",
//     price: 2199,
//     image:
//       "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop",
//     description:
//       "Pure linen shirt from Linen Club. Lightweight and ideal for summer wear.",
//   },
//   {
//     id: "8",
//     name: "Giza Egyptian Cotton Shirting",
//     category: "Shirting",
//     price: 2599,
//     image:
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
//     description:
//       "Luxurious Giza Egyptian cotton fabric known for softness and long-lasting quality.",
//   },
//   {
//     id: "9",
//     name: "Soktas Premium Shirting Fabric",
//     category: "Shirting",
//     price: 2399,
//     image:
//       "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
//     description:
//       "Premium Turkish Soktas fabric offering superior comfort and elegant finish.",
//   },
//   {
//     id: "10",
//     name: "Grado Formal Shirt",
//     category: "Shirts",
//     price: 1799,
//     image:
//       "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop",
//     description:
//       "Well-tailored Grado formal shirt with premium fabric and perfect fit.",
//   },
//   {
//     id: "11",
//     name: "Techno Sports Trackpants",
//     category: "Trackpants",
//     price: 999,
//     image:
//       "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
//     description:
//       "Comfortable Techno sports trackpants suitable for workouts and casual wear.",
//   },
//   {
//     id: "12",
//     name: "Jockey Premium Innerwear",
//     category: "Accessories",
//     price: 799,
//     image:
//       "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
//     description:
//       "Premium Jockey innerwear designed for maximum comfort and durability.",
//   },

//   // ================= GIFT BOX COMBOS (LOCAL IMAGES) =================
//   {
//     id: "13",
//     name: "Aravind Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 899,
//     image: aravindGiftBoxs,
//     description:
//       "Aravind premium cotton gift box combo. Ideal for festive gifting and special occasions.",
//   },
//   {
//     id: "14",
//     name: "Ramraj Diamond Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1095,
//     image: ramrajDiamondGiftBox,
//     description:
//       "Ramraj Diamond gift box combo featuring premium shirting and suiting fabrics.",
//   },
//   {
//     id: "15",
//     name: "Ramraj Elite Majestic Premium Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1495,
//     image: ramrajEliteMajesticGiftBox,
//     description:
//       "Elite Majestic luxury gift box from Ramraj. Perfect premium gifting option.",
//   },
//   {
//     id: "16",
//     name: "Ramraj Royal Delight Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1295,
//     image: ramrajRoyalDelightGiftBox,
//     description:
//       "Royal Delight gift box combo by Ramraj with elegant packaging and premium fabrics.",
//   },
// {
//     id: "17",
//     name: "Aravind Pure Premium Cotton – Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1499,
//     image: aravindGiftBox,
//     description:
//       "Premium Aravind pure cotton gift box combo featuring high-quality fabrics. Elegantly packed and ideal for festivals, weddings, and special occasions.",
//   },

//     {
//     id: "18",
//     name: "Ramraj King of King Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 895,
//     image: ramrajKingOfKingGiftBox,
//     description: "Ramraj King of King premium gift box combo.",
//   },
//   {
//     id: "19",
//     name: "Raymond Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 2155,
//     image: raymondGiftBox2155,
//     description: "Raymond premium gift box combo with suiting and shirting.",
//   },
//   {
//     id: "20",
//     name: "Raymond Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 2455,
//     image: raymondGiftBox2455,
//     description: "Raymond luxury gift box combo with premium fabrics.",
//   },
//   {
//     id: "21",
//     name: "Raymond Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 1455,
//     image: raymondGiftBox1455,
//     description: "Raymond gift box combo with premium quality fabrics.",
//   },
//   {
//     id: "22",
//     name: "Raymond Gift Box Combo",
//     category: "Combo Gift Boxes",
//     price: 655,
//     image: raymondGiftBox655,
//     description: "Affordable Raymond gift box combo with elegant packing.",
//   },
//   {
//     id: "23",
//     name: "Ramraj Bamboo Towel",
//     category: "Accessories",
//     price: 395,
//     image: ramrajBambooTowel,
//     description: "Ramraj Mithu bamboo towel – soft, eco-friendly and durable.",
//   },
// ];



// ================= LOCAL IMAGE IMPORTS =================
import aravindGiftBoxs from "@/assets/products/aravind-gift-boxs.jpg";
import aravindGiftBox from "@/assets/products/aravind-gift-box.jpg";

import ramrajDiamondGiftBox from "@/assets/products/ramraj-diamond-gift-box.jpg";
import ramrajEliteMajesticGiftBox from "@/assets/products/ramraj-elite-majestic-gift-box.jpg";
import ramrajRoyalDelightGiftBox from "@/assets/products/ramraj-royal-delight-gift-box.jpg";
import ramrajKingOfKingGiftBox from "@/assets/products/ramraj-king-of-king-gift-box.jpg";

import raymondGiftBox2155 from "@/assets/products/raymond-gift-box-2155.jpg";
import raymondGiftBox2455 from "@/assets/products/raymond-gift-box-2455.jpg";
import raymondGiftBox1455 from "@/assets/products/raymond-gift-box-1455.jpg";
import raymondGiftBox655 from "@/assets/products/raymond-gift-box-655.jpg";

import ramrajBambooTowel from "@/assets/products/ramraj-bamboo-towel.jpg";





import ramrajCottonLungi from "@/assets/products/ramraj-cotton-lungi.jpg";
import ministerWhiteCreamLungi from "@/assets/products/minister-white-cream-lungi.jpg";
import ministerWhiteWhiteLungi from "@/assets/products/minister-white-white-lungi.jpg";
import ramrajAkshayaPancha from "@/assets/products/ramraj-akshaya-pancha.jpg";

import ramrajChiranjeeviCreamHalf from "@/assets/products/ramraj-chiranjeevi-cream-half-shirt.jpg";
import ramrajChiranjeeviCreamFull from "@/assets/products/ramraj-chiranjeevi-cream-full-shirt.jpg";

import breezeCottonWhiteHalf from "@/assets/products/breeze-cotton-white-half-shirt.jpg";
import breezeCottonWhiteFull from "@/assets/products/breeze-cotton-white-full-shirt.jpg";




import ramrajRRLinenWhiteFull from "@/assets/products/ramraj-rr-linen-white-full.jpg";
import ramrajRRLinenWhiteHalf from "@/assets/products/ramraj-rr-linen-white-half.jpg";
import ramrajCelebrityCreamHalf from "@/assets/products/ramraj-celebrity-cream-half.jpg";
import ramrajCelebrityCreamFull from "@/assets/products/ramraj-celebrity-cream-full.jpg";
import ramrajSammanthamCreamHalf from "@/assets/products/ramraj-sammantham-cream-half.jpg";
import ramrajSilkLookCreamFull from "@/assets/products/ramraj-silklook-cream-full.jpg";
import ramrajSammanthamCreamFull from "@/assets/products/ramraj-sammantham-cream-full.jpg";
import jockeyVest8820 from "@/assets/products/jockey-vest-8820.jpg";
import jockeyVest8817 from "@/assets/products/jockey-vest-8817.jpg";
import checksCottonLungi250 from "@/assets/products/checks-cotton-lungi-250.jpg";


import jockeyBrief8037 from "@/assets/products/jockey-brief-8037.jpg";
import jockeyBoxerBrief8009 from "@/assets/products/jockey-boxer-brief-8009.jpg";
import jockeyBrief8035 from "@/assets/products/jockey-brief-8035.jpg";

import technoTrackpantOR89 from "@/assets/products/technosport-trackpant-or89.jpg";
import technoTshirtOR81 from "@/assets/products/technosport-tshirt-or81.jpg";
import technoTshirtOR11 from "@/assets/products/technosport-tshirt-or11.jpg";



import pureCottonShirtingFabric from "@/assets/products/pure-cotton-shirting-fabric.jpg";
import raymondSuitingFabric from "@/assets/products/raymond-suiting-fabric-collection.jpg";
import ramrajCottonCollarTshirt from "@/assets/products/ramraj-cotton-collar-tshirt.jpg";
import ramrajCottonPancha9x5 from "@/assets/products/ramraj-cotton-pancha-9x5.jpg";

// ================= PRODUCT TYPE =================
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

// ================= CATEGORIES =================
export const categories = [
  "All",
  "Shirts",
  "Trousers",
  "Suiting",
  "Shirting",
  "T-Shirts",
  "Trackpants",
  "Shorts",
  "Accessories",
  "Combo Gift Boxes",
  "Ramraj Hosiery",
];

// ================= PRODUCTS =================
export const products: Product[] = [
  // ---------- PRODUCTS USING IMAGE LINKS ----------
  {
    id: "1",
    name: "Raymond Suiting Fabric",
    category: "Suiting",
    price: 2499,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    description: "Premium Raymond suiting fabric with excellent drape and finish.",
  },
  {
    id: "2",
    name: "Park Avenue Formal Shirt",
    category: "Shirts",
    price: 1999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    description: "Elegant Park Avenue formal shirt designed for office wear.",
  },
  {
    id: "3",
    name: "Raymond Suiting Fabric Collection",
    category: "Suiting",
    price: 699,
    image: raymondSuitingFabric,
    description: "Raymond premium suiting fabric collection ideal for formal wear.",
  },
  {
    id: "4",
    name: "Minister White Formal Shirt",
    category: "Shirts",
    price: 999,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
    description: "Classic white formal shirt by Minister.",
  },
  {
    id: "5",
    name: "Ramraj Dhoti & Vest Set",
    category: "Ramraj Hosiery",
    price: 1299,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
    description: "Traditional Ramraj dhoti and vest combo.",
  },
  {
      id: "6",
      name: "Pure Cotton Shirting Fabric",
      category: "Shirting",
      price: 899,
      image: pureCottonShirtingFabric,
      description: "Premium pure cotton shirting fabric with rich colors and smooth finish.",
  },

  // ---------- GIFT BOX COMBOS (LOCAL IMAGES) ----------
  {
    id: "13",
    name: "Aravind Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 899,
    image: aravindGiftBoxs,
    description: "Aravind premium cotton gift box combo.",
  },
  {
    id: "14",
    name: "Aravind Pure Premium Cotton – Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 1499,
    image: aravindGiftBox,
    description: "Premium Aravind cotton gift box combo for special occasions.",
  },
  {
    id: "15",
    name: "Ramraj Diamond Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 1095,
    image: ramrajDiamondGiftBox,
    description: "Ramraj Diamond premium gift box combo.",
  },
  {
    id: "16",
    name: "Ramraj Elite Majestic Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 1495,
    image: ramrajEliteMajesticGiftBox,
    description: "Elite Majestic luxury gift box by Ramraj.",
  },
  {
    id: "17",
    name: "Ramraj Royal Delight Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 1295,
    image: ramrajRoyalDelightGiftBox,
    description: "Royal Delight premium gift box combo.",
  },
  {
    id: "18",
    name: "Ramraj King of King Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 895,
    image: ramrajKingOfKingGiftBox,
    description: "Ramraj King of King premium gift box combo.",
  },

  // ---------- RAYMOND GIFT BOXES ----------
  {
    id: "19",
    name: "Raymond Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 2155,
    image: raymondGiftBox2155,
    description: "Raymond premium gift box combo.",
  },
  {
    id: "20",
    name: "Raymond Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 2455,
    image: raymondGiftBox2455,
    description: "Raymond luxury gift box combo.",
  },
  {
    id: "21",
    name: "Raymond Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 1455,
    image: raymondGiftBox1455,
    description: "Raymond gift box combo with premium fabrics.",
  },
  {
    id: "22",
    name: "Raymond Gift Box Combo",
    category: "Combo Gift Boxes",
    price: 655,
    image: raymondGiftBox655,
    description: "Affordable Raymond gift box combo.",
  },

  // ---------- ACCESSORY ----------
  {
    id: "23",
    name: "Ramraj Bamboo Towel",
    category: "Accessories",
    price: 395,
    image: ramrajBambooTowel,
    description: "Ramraj Mithu bamboo towel – soft and eco-friendly.",
  },


  // ---------- LUNGIS & SHIRTS (LOCAL IMAGES) ----------
{
  id: "24",
  name: "Ramraj Cotton Lungi – 2 Mtrs",
  category: "Ramraj Hosiery",
  price: 525,
  image: ramrajCottonLungi,
  description: "Premium Ramraj cotton lungi with traditional design. Length: 2 meters.",
},
{
  id: "25",
  name: "Minister White Velcro Cream Lungi (Double Layer)",
  category: "Ramraj Hosiery",
  price: 645,
  image: ministerWhiteCreamLungi,
  description: "Minister White cream velcro lungi with double layer and flexi waist.",
},
{
  id: "26",
  name: "Minister White Velcro White Lungi (Double Layer)",
  category: "Ramraj Hosiery",
  price: 645,
  image: ministerWhiteWhiteLungi,
  description: "Minister White white velcro lungi with double layer and flexi waist.",
},
{
  id: "27",
  name: "Ramraj Akshaya Pancha with Towel (9+5)",
  category: "Ramraj Hosiery",
  price: 670,
  image: ramrajAkshayaPancha,
  description: "Ramraj Akshaya pancha dhoti with towel combo (9+5).",
},
{
  id: "28",
  name: "Ramraj Chiranjeevi Cream Half Hand Shirt",
  category: "Shirts",
  price: 695,
  image: ramrajChiranjeeviCreamHalf,
  description: "Ramraj Chiranjeevi premium cream half hand cotton shirt.",
},
{
  id: "29",
  name: "Ramraj Chiranjeevi Cream Full Hand Shirt",
  category: "Shirts",
  price: 745,
  image: ramrajChiranjeeviCreamFull,
  description: "Ramraj Chiranjeevi premium cream full hand cotton shirt.",
},
{
  id: "30",
  name: "Breeze Cotton White Half Hand Shirt",
  category: "Shirts",
  price: 925,
  image: breezeCottonWhiteHalf,
  description: "Breeze 100% cotton white half hand formal shirt.",
},
{
  id: "31",
  name: "Breeze Cotton White Full Hand Shirt",
  category: "Shirts",
  price: 975,
  image: breezeCottonWhiteFull,
  description: "Breeze 100% cotton white full hand formal shirt.",
},

{
  id: "32",
  name: "Ramraj RR Linen Cotton White – Full Hand Shirt",
  category: "Shirts",
  price: 1595,
  image: ramrajRRLinenWhiteFull,
  description: "Premium Ramraj RR linen cotton white shirt with full sleeves. Elegant and breathable.",
},
{
  id: "33",
  name: "Ramraj RR Linen Cotton White – Half Hand Shirt",
  category: "Shirts",
  price: 1545,
  image: ramrajRRLinenWhiteHalf,
  description: "Ramraj RR linen cotton white half sleeve shirt, perfect for daily and formal wear.",
},
{
  id: "34",
  name: "Ramraj Celebrity Cream – Half Hand Shirt",
  category: "Shirts",
  price: 925,
  image: ramrajCelebrityCreamHalf,
  description: "Celebrity series cream color half sleeve shirt with premium finish.",
},
{
  id: "35",
  name: "Ramraj Celebrity Cream – Full Hand Shirt",
  category: "Shirts",
  price: 975,
  image: ramrajCelebrityCreamFull,
  description: "Ramraj Celebrity cream full sleeve shirt with prestigious fit.",
},
{
  id: "36",
  name: "Ramraj Sammantham Cream – Half Hand Shirt",
  category: "Shirts",
  price: 995,
  image: ramrajSammanthamCreamHalf,
  description: "Sammantham series cream half sleeve shirt designed for comfort and style.",
},
{
  id: "37",
  name: "Ramraj Silk Look Cream – Full Hand Shirt",
  category: "Shirts",
  price: 1045,
  image: ramrajSilkLookCreamFull,
  description: "Silk-look cream full sleeve shirt with rich texture and premium feel.",
},
{
  id: "38",
  name: "Ramraj Sammantham Cream – Full Hand Shirt",
  category: "Shirts",
  price: 1045,
  image: ramrajSammanthamCreamFull,
  description: "Ramraj Sammantham cream full sleeve shirt with elegant tailoring.",
},
{
  id: "39",
  name: "Jockey Vest – Model 8820 (2 Pack)",
  category: "Accessories",
  price: 459,
  image: jockeyVest8820,
  description: "Jockey modern classic vest model 8820, soft cotton, 2-piece pack.",
},
{
  id: "40",
  name: "Jockey Vest – Model 8817 (2 Pack)",
  category: "Accessories",
  price: 599,
  image: jockeyVest8817,
  description: "Jockey sleeved vest model 8817 with stay-fresh technology.",
},
{
  id: "41",
  name: "Checks Cotton Lungi – 2.50 Meters",
  category: "Ramraj Hosiery",
  price: 300,
  image: checksCottonLungi250,
  description: "Traditional checks cotton lungi, 2.50 meters length, breathable fabric.",
},
{
  id: "42",
  name: "Jockey Brief – Model 8037 (2 Pack)",
  category: "Accessories",
  price: 399,
  image: jockeyBrief8037,
  description: "Jockey Modern Classic cotton brief, model 8037. StayFresh technology. 2 pack.",
},
{
  id: "43",
  name: "Jockey Boxer Brief – Model 8009 (2 Pack)",
  category: "Accessories",
  price: 569,
  image: jockeyBoxerBrief8009,
  description: "Jockey Modern Classic boxer brief model 8009 with NoRideUp support. 2 pack.",
},
{
  id: "44",
  name: "Jockey Brief – Model 8035 (2 Pack)",
  category: "Accessories",
  price: 379,
  image: jockeyBrief8035,
  description: "Jockey cotton brief model 8035 with StayFresh technology. 2 pack.",
},
{
  id: "45",
  name: "TechnoSport Track Pant – OR89",
  category: "Trackpants",
  price: 725,
  image: technoTrackpantOR89,
  description: "TechnoSport DuraCool+ 4-way stretch track pant. Lightweight and breathable.",
},
{
  id: "46",
  name: "TechnoSport T-Shirt – OR81",
  category: "T-Shirts",
  price: 549,
  image: technoTshirtOR81,
  description: "TechnoSport Cotflex polo T-shirt with anti-microbial fabric and comfort fit.",
},
{
  id: "47",
  name: "TechnoSport T-Shirt – OR11",
  category: "T-Shirts",
  price: 479,
  image: technoTshirtOR11,
  description: "TechnoSport Matpiq slim fit polo T-shirt with soft stretch fabric.",
},
{
  id: "48",
  name: "Ramraj Cotton Collar T-Shirt",
  category: "T-Shirts",
  price: 635,
  image: ramrajCottonCollarTshirt,
  description: "Ramraj cotton collar t-shirt with comfortable fit and premium fabric.",
},


];
