import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock, FaHandshake, FaCalendarAlt } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className="pricing py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-800 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Our Pricing Plans
        </motion.h2>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Per Day Rate */}
          <motion.div
            className="pricing-card bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaRegClock className="text-4xl text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-600">Per Day Rate</h3>
            </div>
            <p className="text-gray-600 mt-3 text-xl">₹ 10,000</p>
            <p className="text-gray-500 mt-3 text-sm">Enjoy unlimited travel for a full day!</p>
          </motion.div>

          {/* Half Day Rate */}
          <motion.div
            className="pricing-card bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaHandshake className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-600">Half Day Rate</h3>
            </div>
            <p className="text-gray-600 mt-3 text-xl">₹ 5,500</p>
            <p className="text-gray-500 mt-3 text-sm">Perfect for shorter trips, up to 6 hours.</p>
          </motion.div>

          {/* Hourly Rate */}
          <motion.div
            className="pricing-card bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-4xl text-yellow-600 mr-4" />
              <h3 className="text-2xl font-semibold text-blue-600">Hourly Rate</h3>
            </div>
            <p className="text-gray-600 mt-3 text-xl">₹ 1,500 per hour</p>
            <p className="text-gray-500 mt-3 text-sm">Ideal for quick, hourly trips.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
