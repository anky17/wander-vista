import React from "react";
import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    image: "/images/me2.png",
    text: "This travel agency provided excellent service and helped us plan the perfect vacation.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    image: "/images/me.png",
    text: "Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.",
    location: "London, UK",
  },
  {
    name: "Alice Johnson",
    image: "/images/me2.png",
    text: "Great customer service and fantastic travel packages. Will definitely book with them again!",
    location: "Sydney, Australia",
  },
  //   to be added
];

const Client = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Client Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.location}</p>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
