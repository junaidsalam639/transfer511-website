import React from "react";
import {
  Phone,
  Mail,
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
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="text-white w-6 h-6">
          <path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" />
        </svg>
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
