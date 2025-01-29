import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ptnimbu",
        "template_c7chuwh",
        templateParams, // Object containing template variables
        "VUknpwykY_PISwIo_"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-200">
            We’d love to hear from you! Reach out to us for any inquiries.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaPhoneAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+977 9806428814</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaEnvelope className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">support@travelagency.com</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaMapMarkerAlt className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">77600 Boje Pokhari, Lalitpur, Nepal</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Get in Touch
            </h2>
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 mb-4 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
              {isSent && (
                <p className="text-center text-green-500 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
