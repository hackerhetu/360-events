"use client";
import React, { useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import WhatsAppCommunity from "../../../../components/WhatsAppCommunity";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
} from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    eventType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Inquiry Type:* ${formData.eventType}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Navratri Celebrations Website`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919638770089?text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, "_blank");

    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        eventType: "general",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 96387 70089"],
      description: "Available 24/7 for your queries",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["mr.hiteshprajapati07@gmail.com"],
      description: "We respond within 2 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Prahladnagar", "Ahmedabad, Gujarat"],
      description: "Monday to Saturday, 10 AM - 8 PM",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
      description: "Extended hours during Navratri",
    },
  ];

  const eventTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "booking", label: "Event Booking" },
    { value: "corporate", label: "Corporate Events" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
    { value: "support", label: "Technical Support" },
  ];

  // Pre-defined positions to avoid hydration mismatch
  const backgroundElements = [
    { top: 15, left: 25, delay: 0 },
    { top: 75, left: 80, delay: 0.4 },
    { top: 35, left: 10, delay: 0.8 },
    { top: 60, left: 60, delay: 1.2 },
    { top: 20, left: 85, delay: 1.6 },
    { top: 85, left: 40, delay: 2.0 },
    { top: 45, left: 15, delay: 2.4 },
    { top: 10, left: 70, delay: 2.8 },
    { top: 90, left: 20, delay: 3.2 },
    { top: 25, left: 90, delay: 3.6 },
    { top: 70, left: 5, delay: 4.0 },
    { top: 55, left: 50, delay: 4.4 },
    { top: 30, left: 75, delay: 4.8 },
    { top: 80, left: 35, delay: 5.2 },
    { top: 5, left: 55, delay: 5.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/60 to-rose-800/80" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {backgroundElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-60 animate-pulse"
              style={{
                top: `${element.top}%`,
                left: `${element.left}%`,
                animationDelay: `${element.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-purple-400 mb-6 drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Let's create{" "}
            <span className="text-amber-300 font-bold">
              divine celebrations
            </span>{" "}
            together!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-600/50 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-purple-200 font-medium">
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-amber-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Contact Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                Send us a <span className="text-amber-300">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-8 border border-purple-600/50 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-300 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:border-amber-400 focus:outline-none transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-300 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:border-amber-400 focus:outline-none transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-amber-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:border-amber-400 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-amber-300 font-semibold mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-all duration-300"
                    >
                      {eventTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-indigo-900"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-amber-300 font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:border-amber-400 focus:outline-none transition-all duration-300"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-amber-300 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-indigo-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:border-amber-400 focus:outline-none transition-all duration-300 resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                          <Heart className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Contact */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                Connect with <span className="text-amber-300">Us</span>
              </h2>

              <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-8 border border-purple-600/50 shadow-xl">
                <h3 className="text-2xl font-bold text-amber-300 mb-6">
                  🚀 Quick Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+919638770089"
                    className="flex items-center gap-4 p-4 bg-indigo-800/50 rounded-xl hover:bg-indigo-700/50 transition-all duration-300 border border-purple-500/30 hover:border-amber-400/50"
                  >
                    <Phone className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Call Now</div>
                      <div className="text-purple-300 text-sm">
                        +91 96387 70089
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/9638770089"
                    className="flex items-center gap-4 p-4 bg-green-800/50 rounded-xl hover:bg-green-700/50 transition-all duration-300 border border-purple-500/30 hover:border-amber-400/50"
                  >
                    <MessageCircle className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">WhatsApp</div>
                      <div className="text-purple-300 text-sm">
                        Instant Response
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:mr.hiteshprajapati07@gmail.com"
                    className="flex items-center gap-4 p-4 bg-purple-800/50 rounded-xl hover:bg-purple-700/50 transition-all duration-300 border border-purple-500/30 hover:border-amber-400/50"
                  >
                    <Mail className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <div className="text-purple-300 text-sm">
                        mr.hiteshprajapati07@gmail.com
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-xl border border-amber-400/30">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                    <div className="text-amber-300 font-bold text-lg mb-2">
                      📍 Our Location
                    </div>
                    <div className="text-white font-semibold mb-1">
                      Prahladnagar
                    </div>
                    <div className="text-purple-200">Ahmedabad, Gujarat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/40 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to <span className="text-amber-300">Celebrate</span>?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Don't miss out on the most divine Navratri celebrations in
              Gujarat!
              <br />
              <span className="text-amber-300 font-semibold">
                Book your spot today! 🎉
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/events")}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-500/50"
              >
                <span className="flex items-center justify-center gap-2">
                  🎊 Book Events Now
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/919638770089", "_blank")
                }
                className="px-8 py-4 border-2 border-amber-400 text-amber-300 font-bold rounded-2xl hover:bg-amber-400 hover:text-indigo-950 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
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

export default ContactUsPage;
