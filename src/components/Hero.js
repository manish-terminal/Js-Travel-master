import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center text-blue-900 overflow-hidden pt-24">
      
      {/* Floating Animated Elements */}
      <motion.div
        className="absolute top-10 left-10 opacity-50"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      >
        <Leaf size={40} className="text-blue-400" />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6">
        
        {/* Text Content with Motion */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Drive <span className="text-blue-500">Smarter</span>,  
            <span className="text-blue-700"> Drive Cleaner. 🚙</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl opacity-90 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Choose a zero-emission ride and contribute to a cleaner, greener planet. 
            Every ride makes a difference.
          </motion.p>

          {/* Call-to-Action Buttons with Motion */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link 
                to="/book" 
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm md:text-base"
              >
                Book a Ride 🚖
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link 
                to="/about" 
                className="flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-sm md:text-base"
              >
                Explore More <ArrowRightCircle size={20} className="ml-2 text-blue-600" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Eco-Friendly Car Illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img 
            src="./images/hero.jpg" 
            alt="Eco-Friendly Car" 
            className="w-72 md:w-96 drop-shadow-xl  rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
