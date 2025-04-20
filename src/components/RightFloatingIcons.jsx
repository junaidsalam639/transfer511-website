// RightFloatingIcons.jsx
import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const RightFloatingIcons = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col space-y-2 p-2">
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E66431] w-12 h-12 flex items-center justify-center rounded-l hover:opacity-90 transition"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>

      <a
        href="tel:+123456789"
        className="bg-[#E66431] w-12 h-12 flex items-center justify-center rounded-l hover:opacity-90 transition"
      >
        <Phone className="text-white w-6 h-6" />
      </a>

      <a
        href="mailto:youremail@example.com"
        className="bg-[#E66431] w-12 h-12 flex items-center justify-center rounded-l hover:opacity-90 transition"
      >
        <Mail className="text-white w-6 h-6" />
      </a>
    </div>
  );
};

export default RightFloatingIcons;
