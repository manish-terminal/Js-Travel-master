import React from 'react';
import { FaTaxi, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';

function FaqHero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-16">
      {/* Main Layout */}
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section 1: Left side with interactive features */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Left Column */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-lg text-white font-semibold">Your Trusted Travel Partner in</p>
            <h2 className="text-4xl md:text-5xl text-white font-bold mt-4">
              Explore Delhi NCR with Our <span className="text-yellow-400">Reliable Cabs</span> and Tours
            </h2>
            <p className="text-lg text-gray-200 mt-4">
              Whether you're traveling for business or leisure, we offer the best cab services and custom travel packages for all your needs in Delhi NCR.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <motion.a
                href="/"
                className="inline-flex items-center px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                Book a Cab
                <IoIosArrowForward className="ml-2" />
              </motion.a>
              <motion.a
                href="/"
                className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors duration-300 ease-in-out"
              >
                Explore Packages
                <FaArrowRight className="ml-2" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Content */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="w-96 h-96 bg-blue-700 rounded-full shadow-lg flex items-center justify-center transform rotate-45">
                <div className="w-64 h-64 bg-white rounded-lg shadow-xl flex items-center justify-center">
                  <p className="text-2xl text-blue-700 font-semibold">Discover Delhi NCR</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2: FAQ Cards with Hover Effects */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center space-x-4">
              <FaTaxi className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">What types of cabs do you offer?</h3>
                <p className="text-gray-600 mt-2">
                  We provide a range of vehicles for your convenience, including sedans, SUVs, and premium cars for airport transfers, local rides, and outstation trips.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center space-x-4">
              <HiOutlineMenu className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">How can I book a ride?</h3>
                <p className="text-gray-600 mt-2">
                  You can book a ride via our website or mobile app. Choose the car type, pick-up location, and desired time, and you're all set to go!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">What travel packages do you offer?</h3>
                <p className="text-gray-600 mt-2">
                  We offer custom travel packages for Delhi, Agra, Jaipur, and other nearby destinations. Whether it's a day trip or a week-long vacation, we’ve got you covered!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FaqHero;
