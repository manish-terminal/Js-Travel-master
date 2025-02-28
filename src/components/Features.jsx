import React from 'react'
import { FaLeaf, FaRoute, FaMapMarkedAlt, FaGift } from 'react-icons/fa'

function Features() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 py-5">
              Eco-Friendly Cab Features
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mx-auto max-w-3xl">
              Experience a smarter, greener way to travel with our environmentally conscious fleet and innovative features.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <div className="relative w-full max-w-xs mx-auto group md:w-2/5 lg:w-1/4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-green-50 rounded-full flex justify-center items-center mb-6 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-green-600">
                <FaLeaf className="text-green-600 group-hover:text-white text-3xl" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize">Green Fleet</h4>
              <p className="text-sm text-gray-500">
                Travel sustainably with our eco-friendly vehicles designed to reduce carbon footprints.
              </p>
            </div>

            <div className="relative w-full max-w-xs mx-auto group md:w-2/5 lg:w-1/4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-blue-50 rounded-full flex justify-center items-center mb-6 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-blue-600">
                <FaRoute className="text-blue-600 group-hover:text-white text-3xl" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize">Smart Route Optimization</h4>
              <p className="text-sm text-gray-500">
                Save time, energy, and fuel with intelligent route planning and optimization.
              </p>
            </div>

            <div className="relative w-full max-w-xs mx-auto group md:w-2/5 lg:w-1/4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-yellow-50 rounded-full flex justify-center items-center mb-6 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-yellow-600">
                <FaMapMarkedAlt className="text-yellow-600 group-hover:text-white text-3xl" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize">Real-Time Tracking</h4>
              <p className="text-sm text-gray-500">
                Keep track of your ride’s location and estimated arrival time for better planning.
              </p>
            </div>

            <div className="relative w-full max-w-xs mx-auto group md:w-2/5 lg:w-1/4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-orange-50 rounded-full flex justify-center items-center mb-6 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                <FaGift className="text-orange-600 group-hover:text-white text-3xl" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize">Green Rewards Program</h4>
              <p className="text-sm text-gray-500">
                Earn points for each eco-friendly ride and redeem them for exciting offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
