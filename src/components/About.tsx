export function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop"
                alt="THE TEXTILE WORLD Store"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-primary-foreground p-4 shadow-lg">
              <div className="text-center">
                <span className="text-3xl font-bold block">10+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                THE TEXTILE WORLD
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                THE TEXTILE WORLD offers the finest quality fabrics for suiting and
                shirting. Discover a huge collection of men's suits and blazers,
                with a ready-made selection of trendy and formal styles.
              </p>
              <p>
                Custom tailoring and stitching services are available to meet your
                specific needs. Design your perfect attire for any occasion,
                choosing from thousands of fabrics to create a flawlessly fitted
                casual outfit, party dress, suit, or kurta pajama.
              </p>
              <p>
                Look stylish and trendy with our complete range of men's clothing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-muted px-4 py-3 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">👔</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Premium Brands</span>
                  <span className="text-sm text-muted-foreground">Top quality fabrics</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted px-4 py-3 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Custom Tailoring</span>
                  <span className="text-sm text-muted-foreground">Perfect fit guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
