// EventCard.tsx - Updated to use shared types
"use client";
import React from "react";
import { Star } from "lucide-react";

// Import the shared types from your event.ts file
import { Event, EventCardProps } from "../types/event"; // Adjust path as needed

// Remove any local Event interface definition and use the imported one

const EventCard: React.FC<EventCardProps> = ({ event, onBookNow }) => {
  return (
    <div className="bg-gradient-to-br from-black/90 via-purple-900/50 to-black/90 backdrop-blur-xl rounded-2xl border border-yellow-400/30 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
      {/* Event Image */}
      {event.image && (
        <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 relative overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        {/* Event Name */}
        <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.name}</h3>

        {/* Venue */}
        <p className="text-gray-300 text-sm mb-3 flex items-center">
          📍 {event.venue}
        </p>

        {/* Date and Time */}
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>📅 {event.date}</span>
          <span>🕐 {event.time}</span>
        </div>

        {/* Rating and Capacity */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{event.rating}</span>
          </div>
          <span className="text-sm text-gray-400">👥 {event.capacity}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-yellow-400/20 text-yellow-300 text-xs rounded-full border border-yellow-400/30"
            >
              {feature}
            </span>
          ))}
          {event.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
              +{event.features.length - 3} more
            </span>
          )}
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">
              ₹{event.price}
            </span>
            <span className="text-sm text-gray-400 ml-1">per person</span>
          </div>
          <button
            onClick={() => onBookNow(event)}
            className="px-6 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
