import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function VehicleDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./images/innova.jpg",
    "./images/main.png",
    "./images/img1.jpg"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full mx-auto mt-10">
      <div className="relative">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-xl shadow-lg bg-gray-800">
          {/* Carousel Item with Framer Motion */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${index === currentIndex ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }} // Slow motion effect
            >
              <img
                src={image}
                className="w-full h-full object-cover rounded-xl shadow-md border-4 border-gray-300"
                alt={`Slide ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div
          className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 p-3 cursor-pointer text-white bg-black bg-opacity-40 hover:bg-opacity-75 rounded-full transition duration-300"
          onClick={prevSlide}
        >
          <FaChevronLeft size={30} />
        </div>
        <div
          className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 p-3 cursor-pointer text-white bg-black bg-opacity-40 hover:bg-opacity-75 rounded-full transition duration-300"
          onClick={nextSlide}
        >
          <FaChevronRight size={30} />
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2 flex">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-400 hover:bg-white'}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Details Section */}
      <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Name: Innova</h2>
        <p className="text-lg text-gray-600">
          This vehicle is perfect for group travel, offering ample space and a comfortable ride. It's fully equipped with air conditioning, premium seating, and a smooth suspension system for a relaxing journey.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          {/* <span className="text-xl text-blue-600 font-semibold">Price:</span>
          <span className="text-xl text-gray-900">$99/day</span> */}
        </div>
      </div>
    </div>
  );
}
