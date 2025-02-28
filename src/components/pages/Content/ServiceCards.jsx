import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBus } from 'react-icons/fa';

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mid-Size Cars */}
          <motion.div
            className="flex flex-col bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">Mid-Size Cars</h3>
              <div className="text-xl mb-2">
                <FaCar size={40} className="text-orange-600" />
              </div>
              <p className="text-gray-600">Models: Wagon R, Etios, Swift Dzire</p>
            </div>
            <div className="flex justify-center md:justify-between mt-4 gap-4">
              {/* Wagon R */}
              <img
                src="./images/wagnor.jpg"
                alt="Wagon R"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Etios */}
              <img
                src="./images/etios.jpg"
                alt="Etios"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Swift Dzire */}
              <img
                src="./images/swift.jpg"
                alt="Swift Dzire"
                className="w-24 h-16 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Standard Cars */}
          <motion.div
            className="flex flex-col bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">Standard Cars</h3>
              <div className="text-xl mb-2">
                <FaCar size={40} className="text-blue-600" />
              </div>
              <p className="text-gray-600">Models: Aura, Honda City, Nissan Sunny, Ertiga</p>
            </div>
            <div className="flex justify-center md:justify-between mt-4 gap-4">
              {/* Aura */}
              <img
                src="./images/Aura.jpg"
                alt="Aura"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Honda City */}
              <img
                src="./images/hondacity.jpg"
                alt="Honda City"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Nissan Sunny */}
              <img
                src="./images/sunny.jpg"
                alt="Nissan Sunny"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Ertiga */}
              <img
                src="./images/ertiga.jpg"
                alt="Ertiga"
                className="w-24 h-16 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Premium Cars */}
          <motion.div
            className="flex flex-col bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">Premium Cars</h3>
              <div className="text-xl mb-2">
                <FaCar size={40} className="text-green-600" />
              </div>
              <p className="text-gray-600">Models: Toyota Altis, Civic, Innova Crysta</p>
            </div>
            <div className="flex justify-center md:justify-between mt-4 gap-4">
              {/* Toyota Altis */}
              <img
                src="./images/altis.jpg"
                alt="Toyota Altis"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Civic */}
              <img
                src="./images/civic.jpeg"
                alt="Civic"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Innova Crysta */}
              <img
                src="./images/innova.jpg"
                alt="Innova Crysta"
                className="w-24 h-16 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Buses */}
          <motion.div
            className="flex flex-col bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center md:justify-between mt-4 gap-4">
              {/* Traveller */}
              <img
                src="./images/traveller.jpg"
                alt="Toyota Altis"
                className="w-24 h-16 object-cover rounded-lg"
              />
              {/* Bus */}
              <img
                src="./images/bus.jpg"
                alt="Innova Crysta"
                className="w-24 h-16 object-cover rounded-lg"
              />
            </div>
            <div className="text-center md:text-left mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">Buses</h3>
              <div className="text-xl mb-2">
                <FaBus size={40} className="text-red-600" />
              </div>
              <p className="text-gray-600">Models: Tempo Traveller 17, Traveller 26, Tata S7 Ultra</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Perfect for group travel</li>
                <li>Multiple seating capacities</li>
                <li>Comfortable long-distance travel</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
