import { Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HighlightStrip() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="gold-gradient py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-center text-accent-foreground font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Custom Stitching & Tailoring Available
            <Sparkles className="w-5 h-5 animate-pulse" />
          </p>
          <Button
            onClick={scrollToProducts}
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-accent-foreground font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowDown className="w-4 h-4 mr-1" />
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}
