"use client";
import { useState, useEffect } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import WhatsAppCommunity from "../../../../components/WhatsAppCommunity";
import { Heart, Users, Star, Trophy, Sparkles } from "lucide-react";

const AboutUsPage = () => {
  const [isClient, setIsClient] = useState(false);

  // Fixed positions for background elements to prevent hydration mismatch
  const backgroundElements = [
    { top: 15, left: 10, delay: 0 },
    { top: 25, left: 80, delay: 0.5 },
    { top: 40, left: 25, delay: 1.0 },
    { top: 35, left: 70, delay: 1.5 },
    { top: 60, left: 15, delay: 2.0 },
    { top: 75, left: 85, delay: 2.5 },
    { top: 20, left: 45, delay: 3.0 },
    { top: 55, left: 65, delay: 3.5 },
    { top: 80, left: 30, delay: 4.0 },
    { top: 10, left: 55, delay: 4.5 },
    { top: 90, left: 75, delay: 5.0 },
    { top: 30, left: 90, delay: 5.5 },
  ];

  const teamMembers = [
    {
      name: "Rajesh Patel",
      role: "Founder & CEO",
      image: "🙏",
      description: "20+ years organizing traditional Garba events",
      specialty: "Cultural Heritage",
    },
    {
      name: "Priya Shah",
      role: "Event Director",
      image: "💃",
      description: "Expert in traditional dance and cultural programs",
      specialty: "Dance Choreography",
    },
    {
      name: "Amit Desai",
      role: "Operations Head",
      image: "🎭",
      description: "Ensures seamless execution of all events",
      specialty: "Event Management",
    },
    {
      name: "Meera Joshi",
      role: "Cultural Consultant",
      image: "🌟",
      description: "Preserving authentic Gujarati traditions",
      specialty: "Traditional Arts",
    },
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50,000+",
      label: "Happy Participants",
      description: "Across all our events",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "100+",
      label: "Events Organized",
      description: "Successfully completed",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
      description: "In event management",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "4.9/5",
      label: "Customer Rating",
      description: "Average satisfaction",
    },
  ];

  const values = [
    {
      icon: "🙏",
      title: "Divine Connection",
      description:
        "We believe in creating sacred spaces where devotees can connect with Maa Durga through traditional celebrations.",
    },
    {
      icon: "🎭",
      title: "Cultural Heritage",
      description:
        "Preserving and promoting authentic Gujarati culture and traditions for future generations.",
    },
    {
      icon: "🤝",
      title: "Community Unity",
      description:
        "Bringing together families and communities to celebrate our rich cultural heritage as one.",
    },
    {
      icon: "✨",
      title: "Excellence",
      description:
        "Delivering exceptional experiences with attention to every detail and highest quality standards.",
    },
  ];

  // Check if we're on the client to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-rose-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/60 to-rose-800/80" />

        {/* Animated Background Elements - Only render on client to prevent hydration mismatch */}
        {isClient && (
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
        )}

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-purple-400 mb-6 drop-shadow-2xl">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Celebrating{" "}
            <span className="text-amber-300 font-bold">15 years</span> of
            bringing divine Navratri celebrations to life
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Our <span className="text-amber-300">Divine Journey</span>
              </h2>
              <div className="space-y-6 text-purple-100 leading-relaxed">
                <p className="text-lg">
                  Founded in 2010 with a simple vision - to create authentic,
                  soul-stirring Navratri celebrations that honor Maa Durga and
                  bring communities together in divine harmony.
                </p>
                <p className="text-lg">
                  What started as a small community gathering has grown into
                  Gujarat&apos;s most trusted name for premium Garba and Dandiya
                  events. We&apos;ve had the privilege of hosting over 100
                  successful events, touching the lives of more than 50,000
                  devotees.
                </p>
                <p className="text-lg">
                  Our commitment goes beyond entertainment - we&apos;re
                  preserving cultural heritage, fostering community bonds, and
                  creating sacred spaces where tradition meets celebration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/40 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🕉️</div>
                  <h3 className="text-2xl font-bold text-amber-300 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    &quot;To create divine celebrations that honor our
                    traditions, unite our communities, and spread the blessings
                    of Maa Durga through authentic Navratri experiences.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
            Our <span className="text-amber-300">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-600/50 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {achievement.number}
                </div>
                <div className="text-amber-300 font-semibold mb-2">
                  {achievement.label}
                </div>
                <div className="text-purple-200 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
            Our <span className="text-amber-300">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-8 border border-purple-600/50 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4 drop-shadow-lg">
                  {value.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/40 to-rose-900/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
            Meet Our <span className="text-amber-300">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-600/50 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                  {member.name}
                </h3>
                <div className="text-amber-300 font-semibold mb-3">
                  {member.role}
                </div>
                <div className="text-purple-200 text-sm mb-3 leading-relaxed">
                  {member.description}
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-amber-500/30 to-rose-500/30 rounded-full text-amber-200 text-xs border border-amber-400/50">
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-12 border border-amber-400/40 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Join Our{" "}
              <span className="text-amber-300">Divine Celebration</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience the magic of authentic Navratri celebrations with us.
              <br />
              <span className="text-amber-300 font-semibold">
                Jai Mata Di! 🙏
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/events")}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-500/50"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explore Events
                  <Sparkles className="w-5 h-5" />
                </span>
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-8 py-4 border-2 border-amber-400 text-amber-300 font-bold rounded-2xl hover:bg-amber-400 hover:text-indigo-950 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Contact Us
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

export default AboutUsPage;
