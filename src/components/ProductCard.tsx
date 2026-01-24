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
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/30"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-primary">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}
