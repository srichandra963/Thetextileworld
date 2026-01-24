import { X, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "918919911936";

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in:\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: ₹${product.price.toLocaleString("en-IN")}`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="text-left">
              <Badge variant="secondary" className="w-fit mb-2">
                {product.category}
              </Badge>
              <DialogTitle className="text-2xl font-bold">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            <p className="text-3xl font-bold text-primary my-4">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-muted-foreground mb-6 flex-grow">
              {product.description}
            </p>

            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send to WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
