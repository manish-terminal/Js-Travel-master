import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <section className="py-24 relative bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <motion.div
                className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <img
                  className="rounded-xl object-cover"
                  src="./images/map.jpg"
                  alt="Cab Service"
                />
              </motion.div>
              <motion.img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="./images/hero2.jpg"
                alt="Cab Service"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <motion.div
                  className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                >
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Your Reliable Partner for Safe and Convenient Travel
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At [Your Company], we provide fast, reliable, and comfortable cab services that ensure
                    you travel with ease. Whether you need a ride to the airport, a local trip around town, or
                    an outstation journey, we guarantee a smooth experience with professional drivers and well-maintained vehicles.
                  </p>
                </motion.div>
                <motion.div
                  className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">10+</h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Service</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">5000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Trips</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">3000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Customers</h6>
                  </div>
                </motion.div>
              </div>
              <motion.button
                className="sm:w-fit w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 ease-in-out rounded-lg shadow-lg transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">Learn More</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
