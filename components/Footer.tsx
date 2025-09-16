"use client";

import React from "react";
import { Instagram, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_360_events_/", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://chat.whatsapp.com/JVcYpMXBcHtIutdpnHArQo?mode=ems_qr_t",
      "_blank"
    );
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-950 via-purple-900 to-rose-950 py-12 border-t border-amber-400/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-16 h-16 border border-amber-400 rotate-45"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border border-rose-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-purple-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <h3 className="text-2xl font-bold text-amber-400">Navratri</h3>
              <span className="text-xl font-bold text-white">Celebrations</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              Creating divine Navratri experiences with traditional charm and
              modern excellence.
              <br />
              <span className="text-amber-300 font-semibold">
                Jai Mata Di! 🙏
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-amber-300 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-purple-200 hover:text-amber-300 transition-colors px-3 py-1 rounded-lg hover:bg-purple-800/30"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold text-amber-300 mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center lg:justify-end space-x-4">
              <button
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-pink-500/50"
                title="Follow us on Instagram"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white shadow-lg hover:shadow-green-500/50"
                title="Join WhatsApp Community"
              >
                <MessageCircle size={20} />
              </button>
            </div>
            <p className="text-purple-300 text-sm mt-3">
              Follow for updates & Join our community!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-400/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-center md:text-left text-sm">
              © 2025 Navratri Celebrations. All rights reserved.
              <span className="inline-flex items-center ml-1">
                Made with <Heart className="w-4 h-4 text-rose-400 mx-1" /> for
                devotees
              </span>
            </p>
            <div className="mt-3 md:mt-0 flex items-center gap-4">
              <span className="text-amber-300 text-sm font-medium">
                🕉️ Jai Maa Durga 🕉️
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
