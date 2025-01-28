import React from "react";

const destinations = [
  {
    image: "/images/gal1.jpg",
    title: "Paris, France",
    description:
      "The City of Light draws millions of visitors every year with its unforgettable charm.",
  },
  {
    image: "/images/gal2.jpg",
    title: "Bali, Indonesia",
    description:
      "Bali is a living postcard, an Indonesian paradise that feels like a fantasy.",
  },
  {
    image: "/images/gal3.png",
    title: "New York, USA",
    description:
      "New York City is the largest city in the United States and home to many world-famous landmarks and attractions.",
  },
  {
    image: "/images/gal4.jpg",
    title: "Tokyo, Japan",
    description:
      "Tokyo offers a seemingly unlimited choice of entertainment, shopping, culture, and culinary experiences.",
  },
  //   to be added
];

const PopularDestination = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destination
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
