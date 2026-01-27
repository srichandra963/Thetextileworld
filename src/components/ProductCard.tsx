// import { Plus } from "lucide-react";
// import { Product } from "@/data/products";
// import { useCart } from "@/hooks/useCart";
// import { Badge } from "@/components/ui/badge";

// interface ProductCardProps {
//   product: Product;
//   onClick: () => void;
// }

// export function ProductCard({ product, onClick }: ProductCardProps) {
//   const { addItem } = useCart();

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     addItem(product);
//   };

//   return (
//     <div
//       onClick={onClick}
//       className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/30 hover:-translate-y-2"
//     >
//       <div className="relative aspect-square overflow-hidden bg-muted">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         {/* Overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <button
//           onClick={handleAddToCart}
//           className="absolute bottom-3 right-3 w-11 h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
//           aria-label={`Add ${product.name} to cart`}
//         >
//           <Plus className="w-5 h-5" />
//         </button>
//       </div>
//       <div className="p-4">
//         <Badge variant="secondary" className="mb-2 text-xs font-medium">
//           {product.category}
//         </Badge>
//         <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
//           {product.name}
//         </h3>
//         <p className="text-xl font-bold text-primary">
//           ₹{product.price.toLocaleString("en-IN")}
//         </p>
//       </div>
//     </div>
//   );
// }


// import { Plus } from "lucide-react";
// import { Product } from "@/data/products";
// import { useCart } from "@/hooks/useCart";
// import { Badge } from "@/components/ui/badge";

// interface ProductCardProps {
//   product: Product;
//   onClick: () => void;
// }

// export function ProductCard({ product, onClick }: ProductCardProps) {
//   const { addItem } = useCart();

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     addItem(product);
//   };

//   return (
//     <div
//       onClick={onClick}
//       className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/30 hover:-translate-y-2 w-full min-w-0"
//     >
//       <div className="relative aspect-square overflow-hidden bg-muted">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />

//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         <button
//           onClick={handleAddToCart}
//           className="absolute bottom-3 right-3 w-11 h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
//           aria-label={`Add ${product.name} to cart`}
//         >
//           <Plus className="w-5 h-5" />
//         </button>
//       </div>

//       <div className="p-4">
//         <Badge variant="secondary" className="mb-2 text-xs font-medium">
//           {product.category}
//         </Badge>

//         <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-300">
//           {product.name}
//         </h3>

//         <p className="text-xl font-bold text-primary">
//           ₹{product.price.toLocaleString("en-IN")}
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { products, categories, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Input } from "@/components/ui/input";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our premium collection of fabrics and menswear
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base rounded-full border-2 border-border focus:border-primary shadow-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="py-2 mb-8">
          <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 justify-start md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          {filteredProducts.length > 0 ? (
            <div className="product-grid grid gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in w-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found. Try a different search or category.
              </p>
            </div>
          )}
        </div>

        {/* Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
