import { motion } from 'framer-motion';
import { FaLeaf, FaCar, FaUsers } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div
      className="relative w-full bg-cover bg-center h-screen flex items-center justify-center bg-white p-4"
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div>  */}

      <div className="relative z-10 text-center text-blue-700 px-6 md:px-12">
        {/* Headline Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Drive Green, Travel Smart, Protect Tomorrow
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        >
          Experience the future of travel with our eco-friendly, sustainable fleet. Join us in making a positive impact on the planet while enjoying safe and comfortable rides.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition duration-300"
        >
          Book Your Ride
        </motion.button>

        {/* Customer Count or Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex -space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-white text-sm">
            Join over 2,500 happy travelers who chose eco-friendly rides with us in the last 24 hours
          </span>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-12 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Eco-Friendly */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-green-600">
            <FaLeaf className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-center">Eco-Friendly Rides</h3>
            <p className="mt-2 text-sm text-center">
              Our fleet is designed with sustainability in mind, reducing carbon emissions and contributing to a greener future.
            </p>
          </div>

          {/* Card 2: Safe Travel */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center text-blue-600">
            <FaCar className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-center">Safe and Comfortable</h3>
            <p className="mt-2 text-sm text-center">
              Enjoy peace of mind while traveling with our comfortable and safe vehicles, equipped with the latest technology.
            </p>
          </div>

          {/* Card 3: Join the Movement */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col items-center text-yellow-600">
            <FaUsers className="text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-center">Join 2,500+ Travelers</h3>
            <p className="mt-2 text-sm text-center">
              Be part of the movement! Over 2,500 happy travelers have already embraced eco-friendly rides in just the last 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
