import { motion } from 'framer-motion';
import { FaTaxi } from 'react-icons/fa'; // Icon for cab service
import { MdLocationOn } from 'react-icons/md'; // Location pin icon

const locations = [
  { name: "Gurgaon", icon: <MdLocationOn className="text-4xl text-indigo-600" /> },
  { name: "Delhi NCR", icon: <MdLocationOn className="text-4xl text-indigo-600" /> },
  { name: "Rewari", icon: <MdLocationOn className="text-4xl text-indigo-600" /> }
];

const TravelLocations = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Our Cab Services Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{location.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{location.name}</h3>
              <p className="text-gray-600 mt-2">Reliable cab services available in {location.name} for all your travel needs.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelLocations;
