// import {
//   Shirt,
//   Scissors,
//   Briefcase,
//   Gift,
//   Sparkles,
// } from "lucide-react";

// const services = [
//   { icon: Shirt, title: "Readymade Shirts", description: "Premium branded shirts" },
//   { icon: Briefcase, title: "Trousers", description: "Formal & casual trousers" },
//   { icon: Scissors, title: "Fabric – Suiting & Shirting", description: "Finest quality fabrics" },
//   { icon: Sparkles, title: "Accessories", description: "Complete your look" },
//   { icon: Gift, title: "Combo Gift Boxes", description: "Perfect for gifting" },
//   { icon: Shirt, title: "T-Shirts", description: "Casual comfort wear" },
//   { icon: Briefcase, title: "Trackpants", description: "Sports & leisure wear" },
//   { icon: Shirt, title: "Shorts", description: "Summer essentials" },
//   { icon: Shirt, title: "Ramraj Hosiery", description: "Traditional wear" },
//   { icon: Scissors, title: "Custom Tailor Service", description: "Made to measure" },
// ];

// export function Services() {
//   return (
//     <section className="py-16 bg-muted/50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             What We Offer
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Services
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-card p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
//             >
//               <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                 <service.icon className="w-6 h-6" />
//               </div>
//               <h3 className="font-semibold text-foreground mb-1 text-sm">
//                 {service.title}
//               </h3>
//               <p className="text-xs text-muted-foreground">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import {
//   Shirt,
//   Scissors,
//   Briefcase,
//   Gift,
//   Sparkles,
// } from "lucide-react";

// const services = [
//   { icon: Shirt, title: "Readymade Shirts", description: "Premium branded shirts" },
//   { icon: Briefcase, title: "Trousers", description: "Formal & casual trousers" },
//   { icon: Scissors, title: "Fabric – Suiting & Shirting", description: "Finest quality fabrics" },
//   { icon: Sparkles, title: "Accessories", description: "Complete your look" },
//   { icon: Gift, title: "Combo Gift Boxes", description: "Perfect for gifting" },
//   { icon: Shirt, title: "T-Shirts", description: "Casual comfort wear" },
//   { icon: Briefcase, title: "Trackpants", description: "Sports & leisure wear" },
//   { icon: Shirt, title: "Shorts", description: "Summer essentials" },
//   { icon: Shirt, title: "Ramraj Hosiery", description: "Traditional wear" },
//   {
//     icon: Scissors,
//     title: "Custom Tailor Service",
//     description: "Custom tailor service available • Express stitching delivery available",
//   },
// ];

// export function Services() {
//   return (
//     <section className="py-16 bg-muted/50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-wider text-sm">
//             What We Offer
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
//             Our Services
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-card p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
//             >
//               <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                 <service.icon className="w-6 h-6" />
//               </div>
//               <h3 className="font-semibold text-foreground mb-1 text-sm">
//                 {service.title}
//               </h3>
//               <p className="text-xs text-muted-foreground">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Shirt,
  Scissors,
  Briefcase,
  Gift,
  Sparkles,
} from "lucide-react";

const services = [
  { icon: Shirt, title: "Readymade Shirts", description: "Premium branded shirts" },
  { icon: Briefcase, title: "Trousers", description: "Formal & casual trousers" },
  { icon: Scissors, title: "Fabric – Suiting & Shirting", description: "Finest quality fabrics" },
  { icon: Sparkles, title: "Accessories", description: "Complete your look" },
  { icon: Gift, title: "Combo Gift Boxes", description: "Perfect for gifting" },
  { icon: Shirt, title: "T-Shirts", description: "Casual comfort wear" },
  { icon: Briefcase, title: "Trackpants", description: "Sports & leisure wear" },
  { icon: Shirt, title: "Shorts", description: "Summer essentials" },
  { icon: Shirt, title: "Ramraj Hosiery", description: "Traditional wear" },
  { icon: Scissors, title: "Custom Tailor Service", description: "Made to measure" },
  {
    icon: Scissors,
    title: "Express Stitching Delivery",
    description: "Fast & on-time stitching service",
  },
];

export function Services() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
