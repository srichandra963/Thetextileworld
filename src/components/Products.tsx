// import { useState, useMemo, useRef, useEffect } from "react";
// import { Search } from "lucide-react";
// import { products, categories, Product } from "@/data/products";
// import { ProductCard } from "./ProductCard";
// import { ProductModal } from "./ProductModal";
// import { Input } from "@/components/ui/input";

// export function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const filterRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesCategory =
//         selectedCategory === "All" || product.category === selectedCategory;
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchQuery]);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   // Handle sticky filter bar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (filterRef.current && sectionRef.current) {
//         const sectionTop = sectionRef.current.getBoundingClientRect().top;
//         const filterTop = filterRef.current.getBoundingClientRect().top;
//         setIsSticky(sectionTop <= 80 && filterTop <= 80);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section id="products" ref={sectionRef} className="py-16 bg-muted/50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-8 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Our Products
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our premium collection of fabrics and menswear
//           </p>
//         </div>

//         {/* Search Bar - Now at top */}
//         <div className="max-w-lg mx-auto mb-6">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-12 py-6 text-base rounded-full border-2 border-border focus:border-primary shadow-sm"
//             />
//           </div>
//         </div>

//         {/* Category Filters - Sticky on scroll */}
//         <div 
//           ref={filterRef}
//           className={`transition-all duration-300 ${
//             isSticky 
//               ? "sticky top-[72px] z-40 bg-muted/95 backdrop-blur-sm py-4 -mx-4 px-4 shadow-md" 
//               : "py-2"
//           }`}
//         >
//           <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 justify-start md:justify-center scrollbar-hide">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
//                   selectedCategory === category
//                     ? "bg-primary text-primary-foreground shadow-md scale-105"
//                     : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="mt-8">
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredProducts.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="animate-fade-in"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   <ProductCard
//                     product={product}
//                     onClick={() => handleProductClick(product)}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground text-lg">
//                 No products found. Try a different search or category.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Product Modal */}
//         <ProductModal
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       </div>
//     </section>
//   );
// }


// import { useState, useMemo, useRef, useEffect } from "react";
// import { Search } from "lucide-react";
// import { products, categories, Product } from "@/data/products";
// import { ProductCard } from "./ProductCard";
// import { ProductModal } from "./ProductModal";
// import { Input } from "@/components/ui/input";

// export function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const filterRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesCategory =
//         selectedCategory === "All" || product.category === selectedCategory;
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchQuery]);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   // Sticky filter only inside Products section
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!filterRef.current || !sectionRef.current) return;

//       const sectionRect = sectionRef.current.getBoundingClientRect();
//       const filterHeight = filterRef.current.offsetHeight;
//       const headerOffset = 80;

//       const isInsideSection =
//         sectionRect.top <= headerOffset &&
//         sectionRect.bottom > filterHeight + headerOffset;

//       setIsSticky(isInsideSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section id="products" ref={sectionRef} className="py-16 bg-muted/50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-8 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Our Products
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our premium collection of fabrics and menswear
//           </p>
//         </div>

//         {/* Search */}
//         <div className="max-w-lg mx-auto mb-6">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-12 py-6 text-base rounded-full border-2 border-border focus:border-primary shadow-sm"
//             />
//           </div>
//         </div>

//         {/* Filters */}
//         <div
//           ref={filterRef}
//           className={`transition-all duration-300 ${
//             isSticky
//               ? "sticky top-[72px] z-40 bg-muted/95 backdrop-blur-sm py-4 -mx-4 px-4 shadow-md"
//               : "py-2"
//           }`}
//         >
//           <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 justify-start md:justify-center scrollbar-hide">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                   selectedCategory === category
//                     ? "bg-primary text-primary-foreground shadow-md scale-105"
//                     : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="mt-8">
//           {filteredProducts.length ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredProducts.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="animate-fade-in"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   <ProductCard
//                     product={product}
//                     onClick={() => handleProductClick(product)}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground text-lg">
//                 No products found. Try a different search or category.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Modal */}
//         <ProductModal
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       </div>
//     </section>
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

        {/* Category Filters (Normal, not sticky) */}
        <div className="py-2 mb-8">
          <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 justify-start md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
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
