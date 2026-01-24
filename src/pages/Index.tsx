import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HighlightStrip } from "@/components/HighlightStrip";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CartPreview } from "@/components/CartPreview";
import { CartProvider } from "@/hooks/useCart";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <HighlightStrip />
          <Products />
          <About />
          <Services />
          <Brands />
          <Contact />
        </main>
        <Footer />
        <CartPreview />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
};

export default Index;
