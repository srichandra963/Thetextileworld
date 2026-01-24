import { ShoppingBag, X, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WHATSAPP_NUMBER = "918919911936";

export function CartPreview() {
  const { items, removeItem, clearCart, totalItems } = useCart();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `• ${item.name} (${item.category}) - ₹${item.price.toLocaleString("en-IN")} x ${item.quantity}`
      )
      .join("\n");

    const message = `Hello, I'm interested in the following items:\n\n${itemsList}\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")}`;

    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <ShoppingBag className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Selection ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <p>No items selected yet</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 bg-muted rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.category}
                      </p>
                      <p className="text-sm font-semibold text-primary mt-1">
                        ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

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
                    Send All to WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Selection
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
