const brands = [
  "Raymond",
  "Park Avenue",
  "Parx",
  "Minister White",
  "Ramraj",
  "Aravind",
  "Linen Club",
  "Giza Cotton",
  "Soktas",
  "Grado",
  "Techno Sports",
  "Jockey",
];

export function Brands() {
  return (
    <section id="brands" className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Brands
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee animate-marquee-pause">
          {/* Double the brands for seamless loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
