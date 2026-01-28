// const brands = [
//   "Raymond",
//   "Park Avenue",
//   "Parx",
//   "Minister White",
//   "Ramraj",
//   "Aravind",
//   "Linen Club",
//   "Giza Cotton",
//   "Soktas",
//   "Grado",
//   "Techno Sports",
//   "Jockey",
// ];

// export function Brands() {
//   return (
//     <section id="brands" className="py-16 bg-background overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Brands
//           </h2>
//         </div>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

//         <div className="flex animate-marquee animate-marquee-pause">
//           {/* Double the brands for seamless loop */}
//           {[...brands, ...brands].map((brand, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-8 px-8 py-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
//             >
//               <span className="text-lg font-semibold text-foreground whitespace-nowrap">
//                 {brand}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import raymond from "@/assets/brands/raymond.png";
// import parkAvenue from "@/assets/brands/park-avenue.png";
// import parx from "@/assets/brands/parx.png";
// import ministerWhite from "@/assets/brands/minister-white.png";
// import ramraj from "@/assets/brands/ramraj.png";
// import aravind from "@/assets/brands/aravind.png";
// import linenClub from "@/assets/brands/linen-club.png";
// import gizaCotton from "@/assets/brands/giza-cotton.png";
// import soktas from "@/assets/brands/soktas.png";
// import grado from "@/assets/brands/grado.png";
// import technoSports from "@/assets/brands/techno-sports.png";
// import jockey from "@/assets/brands/jockey.png";

// const brands = [
//   { name: "Raymond", logo: raymond },
//   { name: "Park Avenue", logo: parkAvenue },
//   { name: "Parx", logo: parx },
//   { name: "Minister White", logo: ministerWhite },
//   { name: "Ramraj", logo: ramraj },
//   { name: "Aravind", logo: aravind },
//   { name: "Linen Club", logo: linenClub },
//   { name: "Giza Cotton", logo: gizaCotton },
//   { name: "Soktas", logo: soktas },
//   { name: "Grado", logo: grado },
//   { name: "Techno Sports", logo: technoSports },
//   { name: "Jockey", logo: jockey },
// ];

// export function Brands() {
//   return (
//     <section id="brands" className="py-16 bg-background overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Brands
//           </h2>
//         </div>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         {/* Fade Edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

//         <div className="flex animate-marquee animate-marquee-pause">
//           {[...brands, ...brands].map((brand, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-8 px-10 py-6 bg-card border border-border rounded-xl 
//                          hover:border-primary/40 transition-all duration-300
//                          flex items-center justify-center"
//             >
//               <img
//                 src={brand.logo}
//                 alt={brand.name}
//                 className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import GezaCotton from "@/assets/Geza-cotton.jpeg";
// import Jockey from "@/assets/jockey.jpeg";
// import LinenClub from "@/assets/Linenclub.jpeg";
// import Park from "@/assets/Park.jpeg";
// import ParkAvenue from "@/assets/ParkAvenue.jpeg";
// import Ramraj from "@/assets/Ramraj.jpeg";

// const brands = [
//   GezaCotton,
//   Jockey,
//   LinenClub,
//   Park,
//   ParkAvenue,
//   Ramraj,
// ];

// export function Brands() {
//   return (
//     <section id="brands" className="py-16 bg-background overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Brands
//           </h2>
//         </div>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         {/* Gradient fade edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

//         <div className="flex animate-marquee animate-marquee-pause items-center">
//           {/* Duplicate logos for seamless scroll */}
//           {[...brands, ...brands].map((logo, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-10 px-8 py-6 bg-card border border-border rounded-lg
//                          hover:border-primary/30 transition-all duration-300
//                          flex items-center justify-center"
//             >
//               <img
//                 src={logo}
//                 alt="Brand Logo"
//                 className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import GezaCotton from "@/assets/Geza-cotton.jpeg";
// import Jockey from "@/assets/jockey.jpeg";
// import LinenClub from "@/assets/Linenclub.jpeg";
// import Park from "@/assets/Park.jpeg";
// import ParkAvenue from "@/assets/ParkAvenue.jpeg";
// import Ramraj from "@/assets/Ramraj.jpeg";

// const brands = [
//   GezaCotton,
//   Jockey,
//   LinenClub,
//   Park,
//   ParkAvenue,
//   Ramraj,
// ];

// export function Brands() {
//   return (
//     <section id="brands" className="py-16 bg-background overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Brands
//           </h2>
//         </div>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         {/* Gradient fade edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

//         <div className="flex animate-marquee animate-marquee-pause items-center">
//           {/* Duplicate logos for seamless scroll */}
//           {[...brands, ...brands].map((logo, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-10 px-8 py-6 bg-card border border-border rounded-lg
//                          hover:border-primary/30 transition-all duration-300
//                          flex items-center justify-center"
//             >
//               <img
//                 src={logo}
//                 alt="Brand Logo"
//                 className="h-12 md:h-14 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import GezaCotton from "@/assets/Geza-cotton.jpeg";
// import Jockey from "@/assets/jockey.jpeg";
// import LinenClub from "@/assets/Linenclub.jpeg";
// import Park from "@/assets/Park.jpeg";
// import ParkAvenue from "@/assets/ParkAvenue.jpeg";
// import Ramraj from "@/assets/Ramraj.jpeg";

// const brands = [
//   GezaCotton,
//   Jockey,
//   LinenClub,
//   Park,
//   ParkAvenue,
//   Ramraj,
// ];

// export function Brands() {
//   return (
//     <section id="brands" className="py-16 bg-background overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             Trusted Partners
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Brands
//           </h2>
//         </div>
//       </div>

//       {/* Marquee */}
//       <div className="relative">
//         {/* Gradient fade edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

//         <div className="flex animate-marquee animate-marquee-pause items-center">
//           {[...brands, ...brands].map((logo, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 mx-12 px-10 py-6 bg-card border border-border rounded-lg
//                          hover:border-primary/30 transition-all duration-300
//                          flex items-center justify-center"
//             >
//               <img
//                 src={logo}
//                 alt="Brand Logo"
//                 className="max-h-16 md:max-h-20 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import GezaCotton from "@/assets/Geza-cotton.jpeg";
import Jockey from "@/assets/jockey.jpeg";
import LinenClub from "@/assets/Linenclub.jpeg";
import Park from "@/assets/Park.jpeg";
import ParkAvenue from "@/assets/ParkAvenue.jpeg";
import Ramraj from "@/assets/Ramraj.jpeg";

const brands = [
  GezaCotton,
  Jockey,
  LinenClub,
  Park,
  ParkAvenue,
  Ramraj,
];

export function Brands() {
  return (
    <section id="brands" className="py-14 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-2">
            Our Brands
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee animate-marquee-pause items-center">
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                mx-6 md:mx-12
                px-6 md:px-10
                py-4 md:py-6
                bg-card
                border border-border
                rounded-lg
                hover:border-primary/30
                transition-all duration-300
                flex items-center justify-center
              "
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="
                  max-h-14 sm:max-h-16 md:max-h-20
                  w-auto
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
