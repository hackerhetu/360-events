"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleExploreEvents = () => {
    router.push("/events");
  };

  const handleJoinCommunity = () => {
    window.open(
      "https://chat.whatsapp.com/JVcYpMXBcHtIutdpnHArQo?mode=ems_qr_t",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-950"
    >
      {/* Enhanced Background with Better Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/—Pngtree—goddess maa durga sherawali with_20556749.png')`,
            animation: "gentleGlow 6s ease-in-out infinite",
            backgroundPosition: "center center",
            backgroundSize: "contain",
          }}
        />
        {/* Strategic Gradient Overlay - Darker on sides, clearer in center */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/40 to-indigo-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-transparent to-purple-900/70" />
      </div>

      {/* Static Particle System - No Math.random() */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute opacity-80 top-[10%] left-[15%] animate-pulse"
          style={{ animationDelay: "0s" }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-rose-400 rounded-full shadow-xl shadow-amber-400/60"></div>
        </div>
        <div
          className="absolute opacity-70 top-[25%] right-[20%] animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-amber-400 rounded-full shadow-xl shadow-pink-400/60"></div>
        </div>
        <div
          className="absolute opacity-80 top-[60%] left-[10%] animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-rose-400 rounded-full shadow-xl shadow-amber-400/60"></div>
        </div>
        <div
          className="absolute opacity-70 bottom-[30%] right-[15%] animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-amber-400 rounded-full shadow-xl shadow-pink-400/60"></div>
        </div>
        <div
          className="absolute opacity-70 top-[40%] left-[5%] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-amber-400 rounded-full shadow-xl shadow-pink-400/60"></div>
        </div>
        <div
          className="absolute opacity-80 top-[80%] left-[25%] animate-pulse"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-rose-400 rounded-full shadow-xl shadow-amber-400/60"></div>
        </div>
        <div
          className="absolute opacity-70 top-[15%] right-[35%] animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-amber-400 rounded-full shadow-xl shadow-pink-400/60"></div>
        </div>
        <div
          className="absolute opacity-80 bottom-[20%] left-[30%] animate-pulse"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-rose-400 rounded-full shadow-xl shadow-amber-400/60"></div>
        </div>
      </div>

      {/* Main Content Container - Positioned to avoid covering the goddess */}
      <div
        className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        style={{ minHeight: "calc(100vh - 100px)", paddingTop: "60px" }}
      >
        {/* Left Side Content */}
        <div className="lg:col-span-6 text-left lg:text-left order-2 lg:order-1">
          <div style={{ animation: "slideInLeft 1.5s ease-out" }}>
            {/* Main Title with Premium Styling */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-rose-500 mb-2 leading-tight drop-shadow-2xl">
                NAVRATRI
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-wider">
                CELEBRATIONS
              </h2>
              <div className="text-2xl md:text-3xl font-semibold text-amber-300 mt-2 drop-shadow-lg">
                2025
              </div>
            </div>

            {/* Premium Description */}
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium drop-shadow-lg">
                Experience the Divine Energy of
                <span className="text-amber-300 font-bold drop-shadow-md">
                  {" "}
                  Garba & Dandiya{" "}
                </span>
                with Goddess Blessings
              </p>

              <div className="flex flex-wrap gap-2 text-base text-amber-200">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-500/30 to-rose-500/30 rounded-full border border-amber-400/60 backdrop-blur-sm shadow-lg">
                  ✨ Premium Events
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full border border-pink-400/60 backdrop-blur-sm shadow-lg">
                  💃 Traditional Dance
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-rose-500/30 to-amber-500/30 rounded-full border border-rose-400/60 backdrop-blur-sm shadow-lg">
                  🙏 Divine Atmosphere
                </span>
              </div>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleExploreEvents}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>🎉</span>
                  Explore Events
                  <span>🎉</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
              </button>

              <button
                onClick={handleJoinCommunity}
                className="px-8 py-4 border-2 border-amber-400 text-amber-300 font-bold rounded-2xl hover:bg-amber-400 hover:text-indigo-950 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm bg-indigo-900/40"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>🎭</span>
                  Join Community
                  <span>🎭</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Reserved for Goddess Image (visible through transparency) */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="text-center lg:text-right">
            {/* Festival Dates Card - Positioned to not overlap with goddess */}
            <div className="inline-block p-6 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-amber-400/60 shadow-2xl">
              <div className="text-amber-300 font-bold text-lg mb-2 flex items-center justify-center gap-2">
                <span>📅</span>
                Festival Dates 2025
              </div>
              <div className="text-white text-2xl font-bold mb-1 drop-shadow-lg">
                September 20th - October 2nd
              </div>
              <div className="text-amber-200 text-sm">
                9 Nights of Divine Celebration
              </div>
              <div className="mt-3 text-rose-300 text-sm font-medium">
                🕉️ May Maa Durga Bless You 🕉️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Accent */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-amber-400/20 via-rose-500/10 to-transparent z-15"></div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-6 w-4 h-4 bg-amber-400 rounded-full opacity-80 z-10 shadow-lg shadow-amber-400/50"></div>
      <div className="absolute top-32 left-12 w-3 h-3 bg-rose-400 rounded-full opacity-60 z-10 shadow-lg shadow-rose-400/50"></div>
      <div className="absolute bottom-20 right-6 w-4 h-4 bg-amber-400 rounded-full opacity-80 z-10 shadow-lg shadow-amber-400/50"></div>
      <div className="absolute bottom-32 right-12 w-3 h-3 bg-rose-400 rounded-full opacity-60 z-10 shadow-lg shadow-rose-400/50"></div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gentleGlow {
          0%,
          100% {
            opacity: 0.4;
            filter: brightness(1) saturate(1.1);
          }
          50% {
            opacity: 0.6;
            filter: brightness(1.2) saturate(1.3);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.3);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
