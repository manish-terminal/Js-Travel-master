import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <p className="text-sm text-gray-300 mb-4">
              We are committed to providing eco-friendly transportation solutions that contribute to the preservation of our planet. Join us in reducing carbon emissions while traveling comfortably and conveniently.
            </p>
           
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#rides" className="text-sm text-gray-300 hover:text-white">Eco-Friendly Rides</a></li>
              <li><a href="#subscriptions" className="text-sm text-gray-300 hover:text-white">Ride Subscriptions</a></li>
              <li><a href="#corporate" className="text-sm text-gray-300 hover:text-white">Corporate Solutions</a></li>
              <li><a href="#green-rewards" className="text-sm text-gray-300 hover:text-white">Green Rewards Program</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/tempo-traveller" className="text-sm text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</a></li>
            
           
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 JS Travel Agency, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
