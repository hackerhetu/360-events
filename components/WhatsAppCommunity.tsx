"use client";

import React, { useState } from "react";
import { Users, MessageCircle, X } from "lucide-react";

const WhatsAppCommunity = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleJoinCommunity = () => {
    // Replace with your actual WhatsApp community link
    window.open(
      "https://chat.whatsapp.com/JVcYpMXBcHtIutdpnHArQo?mode=ems_qr_t",
      "_blank"
    );
  };

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Main Community Button */}
      <div className="fixed left-4 bottom-4 z-50">
        <div className="relative">
          {/* Expanded Card */}
          {isExpanded && (
            <div className="absolute bottom-16 left-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-2xl border border-green-400/30 w-72 animate-fade-in-up">
              <button
                onClick={handleToggleExpanded}
                className="absolute top-2 right-2 text-white/70 hover:text-white"
              >
                <X size={16} />
              </button>

              <div className="mb-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  Join Our Community! 🎭
                </h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  Get exclusive updates, behind-the-scenes content, and connect
                  with other Navratri enthusiasts!
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-green-100 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Live event updates</span>
                </div>
                <div className="flex items-center text-green-100 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Exclusive discounts</span>
                </div>
                <div className="flex items-center text-green-100 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Community meetups</span>
                </div>
                <div className="flex items-center text-green-100 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Photo sharing & contests</span>
                </div>
              </div>

              <button
                onClick={handleJoinCommunity}
                className="w-full mt-4 bg-white text-green-600 font-semibold py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Join Now</span>
              </button>

              <p className="text-xs text-green-200 text-center mt-2">
                1000+ members already joined!
              </p>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleToggleExpanded}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <Users size={24} className="relative z-10" />
            <span className="hidden group-hover:block whitespace-nowrap relative z-10 font-semibold">
              Community
            </span>

            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
          </button>
        </div>
      </div>

      {/* Additional floating elements for better UX */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={handleToggleExpanded}
        />
      )}
    </>
  );
};

export default WhatsAppCommunity;
