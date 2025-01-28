import React from "react";

const images = [
  "/images/gal1.jpg",
  "/images/gal2.jpg",
  "/images/gal3.png",
  "/images/gal4.jpg",
  "/images/gal5.webp",
  "/images/gal6.webp",
  "/images/gal7.jpg",
  "/images/gal8.jpg",
];

const Gallery = () => {
  return (
    <div>
      <div
        className="relative  bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-110">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
