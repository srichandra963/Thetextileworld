import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/thetextileworld_hyd",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1AUz3TKRuN/",
    label: "Facebook",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">THE TEXTILE WORLD</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium fabrics and menswear in Hyderabad. Custom tailoring,
              premium brands & ready-made styles – all in one place.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+918919911936"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>8919911936</span>
              </a>
              <a
                href="mailto:srichandrafabrics@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">srichandrafabrics@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Opp. Kun Hyundai Service Centre,
                  <br />
                  Kondapur, Raja Rajeshwara Nagar,
                  <br />
                  Hyderabad, Telangana 500084
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>10:30 AM – 9:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-primary-foreground/70 text-sm">
            © 2026 THE TEXTILE WORLD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
