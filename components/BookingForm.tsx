"use client";

import React, { useState } from "react";

// Import shared types from your event.ts file
import { Event, BookingFormProps } from "../types/event"; // Adjust path as needed

const BookingForm: React.FC<BookingFormProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    date: "",
    ticketType: "",
    numberOfTickets: 1,
  });

  const [subtotal, setSubtotal] = useState(0);

  React.useEffect(() => {
    if (event) {
      const total = event.price * formData.numberOfTickets;
      setSubtotal(total);
    }
  }, [formData.numberOfTickets, event]);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTicketChange = (increment: number) => {
    setFormData((prev) => ({
      ...prev,
      numberOfTickets: Math.max(1, prev.numberOfTickets + increment),
    }));
  };

  const handleSubmit = () => {
    if (!event) return;

    const message = `Hello! I want to book tickets for ${event.name}
    
Details:
- Name: ${formData.fullName}
- Phone: ${formData.phoneNumber}
- Email: ${formData.email}
- Event: ${event.name}
- Venue: ${event.venue}
- Date: ${formData.date}
- Ticket Type: ${formData.ticketType}
- Number of Tickets: ${formData.numberOfTickets}
- Total Amount: ₹${subtotal}

Please confirm my booking.`;

    const whatsappUrl = `https://wa.me/9638770089?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-black/90 via-purple-900/50 to-black/90 backdrop-blur-xl rounded-2xl border border-yellow-400/30 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-yellow-400/20">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-yellow-400">Book Tickets</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-300 text-sm mt-1">{event.name}</p>
          <p className="text-gray-400 text-xs mt-1">{event.venue}</p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Date *
            </label>
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
              required
            >
              <option value="">Choose Date</option>
              <option value="Oct 2, 2025">Oct 2, 2025</option>
              <option value="Oct 3, 2025">Oct 3, 2025</option>
              <option value="Oct 4, 2025">Oct 4, 2025</option>
              <option value="Oct 5, 2025">Oct 5, 2025</option>
              <option value="Oct 6, 2025">Oct 6, 2025</option>
              <option value="Oct 7, 2025">Oct 7, 2025</option>
              <option value="Oct 8, 2025">Oct 8, 2025</option>
              <option value="Oct 9, 2025">Oct 9, 2025</option>
              <option value="Oct 10, 2025">Oct 10, 2025</option>
              <option value="Oct 11, 2025">Oct 11, 2025</option>
            </select>
          </div>

          {/* Ticket Type */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Ticket Type *
            </label>
            <select
              name="ticketType"
              value={formData.ticketType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
              required
            >
              <option value="">Choose Ticket Type</option>
              <option value="Regular">Regular - ₹{event.price}</option>
              <option value="Premium">Premium - ₹{event.price + 200}</option>
              <option value="VIP">VIP - ₹{event.price + 500}</option>
            </select>
          </div>

          {/* Number of Tickets */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Number of Tickets *
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleTicketChange(-1)}
                className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-bold text-white px-4">
                {formData.numberOfTickets}
              </span>
              <button
                type="button"
                onClick={() => handleTicketChange(1)}
                className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-yellow-400 font-bold text-lg">
              <span>Total:</span>
              <span>₹{subtotal}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2"
          >
            <span>📱</span>
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
