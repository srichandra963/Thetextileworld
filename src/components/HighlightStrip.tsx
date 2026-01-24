import { Sparkles } from "lucide-react";

export function HighlightStrip() {
  return (
    <div className="gold-gradient py-3">
      <div className="container mx-auto px-4">
        <p className="text-center text-accent-foreground font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Custom Stitching & Tailoring Available
          <Sparkles className="w-5 h-5" />
        </p>
      </div>
    </div>
  );
}
