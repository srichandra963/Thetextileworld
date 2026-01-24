export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

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

export const products: Product[] = [
  {
    id: "1",
    name: "Raymond Suiting Fabric",
    category: "Suiting",
    price: 2499,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    description: "Premium Raymond suiting fabric perfect for formal occasions. High-quality material with excellent drape and finish.",
  },
  {
    id: "2",
    name: "Park Avenue Shirts",
    category: "Shirts",
    price: 1999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    description: "Elegant Park Avenue formal shirt collection. Perfect for office wear and formal meetings.",
  },
  {
    id: "3",
    name: "Parx Casual Shirts",
    category: "Shirts",
    price: 1499,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Trendy casual shirts from Parx. Comfortable fabric ideal for everyday wear.",
  },
  {
    id: "4",
    name: "Minister White Shirt",
    category: "Shirts",
    price: 999,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
    description: "Classic white formal shirt by Minister. Essential wardrobe piece for professionals.",
  },
  {
    id: "5",
    name: "Ramraj Dhoti & Vest",
    category: "Ramraj Hosiery",
    price: 1299,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
    description: "Traditional Ramraj dhoti and vest set. Premium cotton for comfort and style.",
  },
  {
    id: "6",
    name: "Aravind Cotton Fabric",
    category: "Shirting",
    price: 1899,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    description: "Premium Aravind cotton shirting fabric. Breathable and perfect for tailoring.",
  },
  {
    id: "7",
    name: "Linen Club Shirts",
    category: "Shirts",
    price: 2199,
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop",
    description: "Pure linen shirts from Linen Club. Cool and comfortable for summer.",
  },
  {
    id: "8",
    name: "Giza Cotton Shirting",
    category: "Shirting",
    price: 2599,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    description: "Luxurious Egyptian Giza cotton shirting fabric. Superior softness and durability.",
  },
  {
    id: "9",
    name: "Soktas Fabric",
    category: "Shirting",
    price: 2399,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
    description: "Premium Turkish Soktas shirting fabric. Known for its exceptional quality.",
  },
  {
    id: "10",
    name: "Grado Formal Shirts",
    category: "Shirts",
    price: 1799,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop",
    description: "Elegant formal shirts by Grado. Perfect fit and premium finish.",
  },
  {
    id: "11",
    name: "Techno Sports Trackpants",
    category: "Trackpants",
    price: 999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
    description: "Comfortable sports trackpants by Techno. Ideal for workouts and casual wear.",
  },
  {
    id: "12",
    name: "Jockey Innerwear",
    category: "Accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
    description: "Premium quality Jockey innerwear. Ultimate comfort and durability.",
  },
];
