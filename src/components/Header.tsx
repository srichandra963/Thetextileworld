// import { useState, useEffect } from "react";
// import { Menu, X, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const navItems = [
//   { label: "Home", href: "#home" },
//   { label: "Products", href: "#products" },
//   { label: "About", href: "#about" },
//   { label: "Brands", href: "#brands" },
//   { label: "Contact", href: "#contact" },
// ];

// const WHATSAPP_LINK = "https://wa.me/918919911936";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-primary shadow-lg py-2"
//           : "bg-primary/95 py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="flex items-center gap-2"
//           >
//             <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
//               THE TEXTILE WORLD
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(item.href);
//                 }}
//                 className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button
//               asChild
//               className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//             >
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 WhatsApp Order
//               </a>
//             </Button>
//           </nav>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[280px] bg-primary border-primary">
//               <div className="flex flex-col gap-4 mt-8">
//                 <span className="text-lg font-bold text-primary-foreground mb-4">
//                   THE TEXTILE WORLD
//                 </span>
//                 {navItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       scrollToSection(item.href);
//                     }}
//                     className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//                 <Button
//                   asChild
//                   className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//                 >
//                   <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     WhatsApp Order
//                   </a>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from "react";
// import { Menu, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import logo from "@/assets/textile-logo.jpg"; // <-- your logo

// const navItems = [
//   { label: "Home", href: "#home" },
//   { label: "Products", href: "#products" },
//   { label: "About", href: "#about" },
//   { label: "Brands", href: "#brands" },
//   { label: "Contact", href: "#contact" },
// ];

// const WHATSAPP_LINK = "https://wa.me/918919911936";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">

//           {/* Logo + Brand */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="flex items-center gap-3"
//           >
//             <img
//               src={logo}
//               alt="The Textile World"
//               className="w-10 h-10 object-contain rounded-full bg-white p-1"
//             />
//             <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
//               THE TEXTILE WORLD
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(item.href);
//                 }}
//                 className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button
//               asChild
//               className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//             >
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 WhatsApp Order
//               </a>
//             </Button>
//           </nav>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-[280px] bg-primary border-primary">
//               <div className="flex flex-col gap-4 mt-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <img
//                     src={logo}
//                     alt="The Textile World"
//                     className="w-10 h-10 object-contain rounded-full bg-white p-1"
//                   />
//                   <span className="text-lg font-bold text-primary-foreground">
//                     THE TEXTILE WORLD
//                   </span>
//                 </div>

//                 {navItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       scrollToSection(item.href);
//                     }}
//                     className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//                   >
//                     {item.label}
//                   </a>
//                 ))}

//                 <Button
//                   asChild
//                   className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//                 >
//                   <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     WhatsApp Order
//                   </a>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }



// import { useState, useEffect } from "react";
// import { Menu, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import logo from "@/assets/textile-logo.jpg"; // your logo

// const navItems = [
//   { label: "Home", href: "#home" },
//   { label: "Products", href: "#products" },
//   { label: "About", href: "#about" },
//   { label: "Brands", href: "#brands" },
//   { label: "Contact", href: "#contact" },
// ];

// const WHATSAPP_LINK = "https://wa.me/918919911936";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">

//           {/* Logo + Brand */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="flex items-center gap-3"
//           >
//             <img
//               src={logo}
//               alt="The Textile World"
//               className="w-12 h-12 object-cover scale-110 rounded-full bg-white p-1 shadow-md"
//             />
//             <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
//               THE TEXTILE WORLD
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(item.href);
//                 }}
//                 className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button
//               asChild
//               className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//             >
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 WhatsApp Order
//               </a>
//             </Button>
//           </nav>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-[280px] bg-primary border-primary">
//               <div className="flex flex-col gap-4 mt-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <img
//                     src={logo}
//                     alt="The Textile World"
//                     className="w-12 h-12 object-cover scale-110 rounded-full bg-white p-1 shadow-md"
//                   />
//                   <span className="text-lg font-bold text-primary-foreground">
//                     THE TEXTILE WORLD
//                   </span>
//                 </div>

//                 {navItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       scrollToSection(item.href);
//                     }}
//                     className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//                   >
//                     {item.label}
//                   </a>
//                 ))}

//                 <Button
//                   asChild
//                   className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//                 >
//                   <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     WhatsApp Order
//                   </a>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from "react";
// import { Menu, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import logo from "@/assets/textile-logo.jpg";

// const navItems = [
//   { label: "Home", href: "#home" },
//   { label: "Products", href: "#products" },
//   { label: "About", href: "#about" },
//   { label: "Brands", href: "#brands" },
//   { label: "Contact", href: "#contact" },
// ];

// const WHATSAPP_LINK = "https://wa.me/918919911936";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">

//           {/* Logo + Brand */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="flex items-center gap-3 max-w-full"
//           >
//             <img
//               src={logo}
//               alt="The Textile World"
//               className="w-11 h-11 object-contain rounded-md bg-white p-1 shadow"
//             />
//             <span className="text-lg md:text-2xl font-bold text-primary-foreground tracking-tight whitespace-nowrap">
//               THE TEXTILE WORLD
//             </span>
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(item.href);
//                 }}
//                 className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <Button
//               asChild
//               className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//             >
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 WhatsApp Order
//               </a>
//             </Button>
//           </nav>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-primary-foreground hover:bg-primary-foreground/10"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-[280px] bg-primary border-primary">
//               <div className="flex flex-col gap-4 mt-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <img
//                     src={logo}
//                     alt="The Textile World"
//                     className="w-11 h-11 object-contain rounded-md bg-white p-1 shadow"
//                   />
//                   <span className="text-lg font-bold text-primary-foreground whitespace-nowrap">
//                     THE TEXTILE WORLD
//                   </span>
//                 </div>

//                 {navItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       scrollToSection(item.href);
//                     }}
//                     className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
//                   >
//                     {item.label}
//                   </a>
//                 ))}

//                 <Button
//                   asChild
//                   className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//                 >
//                   <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     WhatsApp Order
//                   </a>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/textile-logo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="The Textile World"
              className="w-10 h-10 object-contain rounded-full bg-white p-1"
            />
            <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
              THE TEXTILE WORLD
            </span>
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* WhatsApp → Products */}
            <Button
              onClick={() => scrollToSection("#products")}
              className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Order
            </Button>
          </nav>

          {/* Mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] bg-primary border-primary">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={logo}
                    alt="The Textile World"
                    className="w-10 h-10 object-contain rounded-full bg-white p-1"
                  />
                  <span className="text-lg font-bold text-primary-foreground">
                    THE TEXTILE WORLD
                  </span>
                </div>

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}

                {/* WhatsApp → Products */}
                <Button
                  onClick={() => scrollToSection("#products")}
                  className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Order
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
