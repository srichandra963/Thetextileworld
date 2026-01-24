import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918919911936";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
