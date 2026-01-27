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

//         {/* Overlay only on desktop hover */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="
//             absolute bottom-3 right-3 w-11 h-11
//             bg-primary hover:bg-primary/90
//             text-primary-foreground rounded-full
//             flex items-center justify-center shadow-lg
//             transition-all duration-300

//             opacity-100 scale-100 translate-y-0
//             md:opacity-0 md:scale-90 md:translate-y-2
//             md:group-hover:opacity-100 md:group-hover:scale-110 md:group-hover:translate-y-0
//           "
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


import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening modal
    addItem(product);
  };

  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/30 hover:-translate-y-2 w-full min-w-0"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* ALWAYS visible + button */}
        <button
          onClick={handleAddToCart}
          className="
            absolute bottom-3 right-3 w-11 h-11
            bg-primary hover:bg-primary/90
            text-primary-foreground rounded-full
            flex items-center justify-center shadow-lg
            transition-transform duration-200
            scale-100 opacity-100
          "
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs font-medium">
          {product.category}
        </Badge>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-xl font-bold text-primary">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}
