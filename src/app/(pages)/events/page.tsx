"use client";
import React, { useState, useEffect } from "react";
import BookingForm from "../../../../components/BookingForm";
import WhatsAppCommunity from "../../../../components/WhatsAppCommunity";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { Star } from "lucide-react";
import EventCard from "../../../../components/EventCard";

// Import types from your event.ts file
import { Event } from "../../../../types/event";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [isClient, setIsClient] = useState(false);

  // Fixed positions for floating dots to prevent hydration mismatch
  const floatingDotsPositions = [
    { top: 15, left: 10, delay: 0 },
    { top: 25, left: 85, delay: 0.3 },
    { top: 45, left: 20, delay: 0.6 },
    { top: 35, left: 70, delay: 0.9 },
    { top: 65, left: 15, delay: 1.2 },
    { top: 75, left: 80, delay: 1.5 },
    { top: 85, left: 45, delay: 1.8 },
    { top: 20, left: 60, delay: 2.1 },
    { top: 55, left: 90, delay: 2.4 },
    { top: 40, left: 35, delay: 2.7 },
    { top: 70, left: 25, delay: 3.0 },
    { top: 30, left: 75, delay: 3.3 },
    { top: 80, left: 65, delay: 3.6 },
    { top: 10, left: 40, delay: 3.9 },
    { top: 90, left: 55, delay: 4.2 },
  ];

  // Enhanced Events Data with categories
  const events: Event[] = [
    {
      id: 1,
      name: "શાંતલડી",
      venue: "TBD",
      date: "Oct 2-11, 2025",
      time: "7:00 PM - 12:00 AM",
      price: 1199,
      description:
        "Traditional Navratri celebration with authentic Gujarati cultural experience.",
      features: [
        "Traditional Music",
        "Cultural Programs",
        "Authentic Decor",
        "Folk Dance",
      ],
      capacity: "",
      rating: "",
    },
    {
      id: 2,
      name: "મહારાણી",
      venue: "TBD",
      date: "Oct 2-10, 2025",
      time: "6:30 PM - 11:30 PM",
      price: 650,
      description:
        "Celebrate the divine energy of Maa Durga with mesmerizing dance and spiritual ambiance.",
      features: ["Maa Durga Theme", "Spiritual Atmosphere", "Aarti", "Prasad"],
      capacity: "",
      rating: "",
    },
    {
      id: 3,
      name: "જગરણ - With Dhol & Sharnai",
      venue: "TBD",
      date: "Oct 2-11, 2025",
      time: "8:00 PM - 1:00 AM",
      price: 599,
      description:
        "Traditional Garba with live Dhol and Shehnai music for an authentic experience.",
      features: [
        "Live Dhol",
        "Shehnai Music",
        "Traditional Atmosphere",
        "Folk Musicians",
      ],
      capacity: "",
      rating: "",
    },
    {
      id: 4,
      name: "સર્વન નવરાત્રિ",
      venue: "TBD",
      date: "Oct 2-11, 2025",
      time: "7:30 PM - 11:00 PM",
      price: 799,
      description:
        "Complete Navratri celebration with traditional rituals and cultural programs.",
      features: [
        "Traditional Rituals",
        "Cultural Programs",
        "Heritage Decor",
        "Folk Artists",
      ],
      capacity: "",
      rating: "",
    },
    {
      id: 5,
      name: "HANG મોરલા ft. Aditya Gadhvi",
      venue: "TBD",
      date: "Oct 2-11, 2025",
      time: "8:30 PM - 12:30 AM",
      price: 1500,
      description:
        "Premium Garba experience featuring celebrity performance by Aditya Gadhvi.",
      features: [
        "Celebrity Performance",
        "Live Music",
        "Premium Experience",
        "Special Effects",
      ],
      capacity: "",
      rating: "",
    },
    {
      id: 6,
      name: "AC DOM ft. Jigardan Gadhavi",
      venue: "AC Dome Navratri",
      date: "Sep 22 - Oct 1",
      time: "7:00 PM - 11:00 PM",
      price: 700,
      description:
        "Elite Navratri experience in air-conditioned venue with Jigardan Gadhavi.",
      features: [
        "AC Venue",
        "Celebrity Performance",
        "Comfort Experience",
        "Premium Sound",
      ],
      capacity: "",
      rating: "",
    },
  ];

  // Check if we're on the client to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter events based on selected filters
  const filteredEvents = events.filter((event) => {
    let priceMatch = true;
    if (priceRange === "budget") priceMatch = event.price <= 500;
    else if (priceRange === "mid")
      priceMatch = event.price > 500 && event.price <= 800;
    else if (priceRange === "premium") priceMatch = event.price > 800;
    return priceMatch;
  });

  // Intersection Observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = parseInt(
              entry.target.getAttribute("data-event-id") || "0"
            );
            setVisibleEvents((prev) => [...prev, eventId]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const eventElements = document.querySelectorAll(".event-card");
    eventElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredEvents]);

  const handleBookNow = (event: Event) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedEvent(null);
  };

  const priceRanges = [
    { key: "all", label: "All Prices", icon: "💰" },
    { key: "budget", label: "Budget (≤₹500)", icon: "🎫" },
    { key: "mid", label: "Mid-Range (₹500-800)", icon: "🎟️" },
    { key: "premium", label: "Premium (₹800+)", icon: "🎭" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-950">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/60 to-rose-800/80" />

        {/* Floating festive dots - Only render on client to prevent hydration mismatch */}
        {isClient && (
          <div className="absolute inset-0">
            {floatingDotsPositions.map((position, i) => (
              <span
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 opacity-80 animate-pulse shadow-lg"
                style={{
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  animationDelay: `${position.delay}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-bounce drop-shadow-2xl">
            Navratri 2025 Celebrations
          </h2>

          <p className="text-lg md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 animate-fade-in leading-relaxed drop-shadow-lg">
            Discover amazing Garba and Dandiya events across Ahmedabad.
            <br />
            <span className="text-amber-300 font-semibold">
              Celebrate the divine energy of Navratri with us!
            </span>
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 text-amber-200 mb-8">
            {[
              "✨ 10 Premium Venues",
              "🎭 Traditional & Modern",
              "🙏 Divine Celebrations",
              "🎵 Live Entertainment",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-purple-600/40 to-rose-600/40 rounded-full border border-amber-400/60 backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse shadow-lg"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-indigo-900/70 to-purple-900/70 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/40 shadow-2xl">
          <h3 className="text-2xl font-bold text-amber-300 mb-6 text-center drop-shadow-lg">
            💰 Price Range 💰
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {priceRanges.map((range) => (
              <button
                key={range.key}
                onClick={() => setPriceRange(range.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                  priceRange === range.key
                    ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-amber-500/50"
                    : "bg-indigo-900/60 text-purple-200 border border-purple-600 hover:border-amber-400 hover:text-amber-300"
                }`}
              >
                {range.icon} {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {filteredEvents.length} Amazing Events Waiting for You!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full animate-pulse shadow-lg"></div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-bounce">😅</div>
            <h3 className="text-2xl text-purple-200 mb-2">No events found</h3>
            <p className="text-purple-300">
              Try adjusting your filters to see more events
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                data-event-id={event.id}
                className={`event-card transform transition-all duration-700 ${
                  visibleEvents.includes(event.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="group relative bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-600/50 hover:border-amber-400/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30">
                  <div className="relative p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors drop-shadow-lg">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="text-amber-300 font-semibold">
                            {event.rating}
                          </span>
                          <span className="text-purple-200 text-sm ml-2">
                            {event.capacity} people
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-400 drop-shadow-lg">
                          ₹{event.price}
                        </div>
                        <div className="text-xs text-purple-300">
                          per person
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-purple-100">
                      <div className="flex items-center gap-2">
                        📍 {event.venue}
                      </div>
                      <div className="flex items-center gap-2">
                        📅 {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        ⏰ {event.time}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-purple-700/60 to-rose-700/60 text-amber-200 rounded-full text-xs border border-purple-500/50 backdrop-blur-sm shadow-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleBookNow(event)}
                      className="w-full bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-white font-bold py-3 rounded-2xl hover:shadow-lg hover:shadow-amber-400/60 transition-all duration-300 group-hover:scale-105"
                    >
                      🎉 Book Now 🎊
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />

      {/* Booking Form */}
      <BookingForm
        event={selectedEvent}
        isOpen={isFormOpen}
        onClose={handleCloseForm}
      />

      <WhatsAppCommunity />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed left-4 bottom-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl z-40 animate-bounce"
      >
        ⬆️
      </button>
    </div>
  );
};

export default EventsPage;
