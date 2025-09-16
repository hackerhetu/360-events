"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-2xl shadow-yellow-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 py-2">
            <div className="flex items-center py-4">
              <Image
                src="/360-Event-Logo.png"
                alt="360 Events Logo"
                width={320}
                height={176}
                className="h-36 sm:h-44 w-auto max-w-[320px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events" },
              { href: "/about-us", label: "About" },
              { href: "/contact-us", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-yellow-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 p-3 hover:bg-white/10 rounded-lg backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 mt-2 bg-black/80 backdrop-blur-xl rounded-2xl mx-4 mb-4 border border-yellow-400/20 shadow-2xl">
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Home", emoji: "🏠" },
                { href: "/events", label: "Events", emoji: "🎉" },
                { href: "/about-us", label: "About", emoji: "ℹ️" },
                { href: "/contact-us", label: "Contact", emoji: "📞" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium px-6 py-3 hover:bg-yellow-400/10 rounded-xl mx-2 flex items-center space-x-3 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="px-6 pt-4">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 group">
                  <span className="text-lg group-hover:animate-bounce">🎟️</span>
                  <span>Book Now</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-30"
        }`}
      ></div>
    </header>
  );
};

export default Header;
