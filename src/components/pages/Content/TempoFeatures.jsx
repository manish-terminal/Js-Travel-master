import React from 'react';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaUserAlt, FaRoute, FaCogs, FaBus } from 'react-icons/fa';

export const TempoFeature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r from-blue-100 to-green-200">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-500">
            New Arrival
          </p>
        </div>
        <motion.h2
          className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Experience the Ultimate Comfort and Style
        </motion.h2>
        <motion.p
          className="text-base text-gray-700 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Travel in style with our new Tempo Traveller. Offering advanced features and exceptional comfort, it's perfect for any journey.
        </motion.p>
      </div>

      <div className="grid gap-8 row-gap-10 lg:grid-cols-3 md:grid-cols-2">
        {/* Feature 1 */}
        <motion.div
          className="max-w-md sm:mx-auto sm:text-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaTachometerAlt className="w-12 h-12 text-teal-500 sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-3 text-xl font-semibold">Smooth Ride</h6>
          <p className="mb-3 text-sm text-gray-900">
            Our Tempo Traveller ensures a smooth, comfortable ride for all passengers, making long journeys feel like a breeze.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="max-w-md sm:mx-auto sm:text-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaUserAlt className="w-12 h-12 text-blue-500 sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-3 text-xl font-semibold">Spacious Interiors</h6>
          <p className="mb-3 text-sm text-gray-900">
            With comfortable seating and ample legroom, you and your group can relax and enjoy the journey in style.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="max-w-md sm:mx-auto sm:text-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaRoute className="w-12 h-12 text-orange-500 sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-3 text-xl font-semibold">Versatile Journey</h6>
          <p className="mb-3 text-sm text-gray-900">
            Whether it's a road trip or a city tour, the Tempo Traveller is built to handle all your travel needs.
          </p>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          className="max-w-md sm:mx-auto sm:text-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaCogs className="w-12 h-12 text-purple-500 sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-3 text-xl font-semibold">Advanced Features</h6>
          <p className="mb-3 text-sm text-gray-900">
            Equipped with modern amenities like air conditioning, a high-quality sound system, and more.
          </p>
        </motion.div>

        {/* Feature 5 */}
        <motion.div
          className="max-w-md sm:mx-auto sm:text-center bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaBus className="w-12 h-12 text-yellow-500 sm:w-16 sm:h-16" />
          </div>
          <h6 className="mb-3 text-xl font-semibold">Group Travel Ready</h6>
          <p className="mb-3 text-sm text-gray-900">
            With seating for up to 12+1 passengers, it's perfect for group travel, family vacations, or corporate trips.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
