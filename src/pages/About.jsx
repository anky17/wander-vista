import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover our story, values, and mission to provide unforgettable
            experiences.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2024, our journey began with a passion for exploration
              and a dream to make travel seamless and memorable. Over the years,
              we have expanded to serve countless travelers worldwide, offering
              personalized experiences and unrivaled customer support.
            </p>
          </div>
          <div>
            <img
              src="/images/me.png"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/me2.png"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to inspire wanderlust by delivering personalized
              travel experiences that enrich lives and foster connections.
              Through innovation, dedication, and sustainability, we strive to
              create lasting memories for every traveler.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Expertise & Experience",
              "24/7 Support",
              "Sustainability Focus",
            ].map((title, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
                <p className="text-gray-600 text-center">
                  {index === 0
                    ? "Over a decade of travel expertise, offering curated adventures tailored to your needs."
                    : index === 1
                    ? "Dedicated customer support ensures peace of mind for every journey."
                    : "Committed to eco-friendly practices for a better future."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Join thousands of travelers who trust us to create unforgettable
            experiences.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
