import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaQuestionCircle } from 'react-icons/fa'; // Updated icons
import { motion } from 'framer-motion';

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same FAQ is clicked again
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  const faqs = [
    {
      question: "How can I book a cab for my trip?",
      answer: "You can easily book a cab through our website or mobile app. Just enter your travel details like pick-up time, location, and destination, and we will arrange the best vehicle for you."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes, we offer reliable airport transfer services to and from all major airports. Our drivers are punctual and will ensure that you reach your destination comfortably."
    },
    {
      question: "Are your travel packages customizable?",
      answer: "Absolutely! Our travel packages are fully customizable. Whether you're looking for a city tour, weekend getaway, or multi-day excursions, we can tailor a package to suit your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and cash on delivery. You can choose the method that works best for you."
    },
    {
      question: "Can I cancel or change my booking?",
      answer: "Yes, we offer flexible cancellation and rescheduling options. Please check the terms and conditions for cancellation policies related to your booking type."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer travel insurance as part of our packages. This includes coverage for trip cancellations, medical emergencies, lost baggage, and more. You can opt for this when booking your trip."
    },
  ];

  return (
    <div className="w-full px-6 py-10 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-extrabold mb-3 text-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-200">Find quick answers to your travel-related queries!</p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border border-blue-400 rounded-lg overflow-hidden ${activeIndex === index ? 'shadow-lg bg-blue-800' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* FAQ Button */}
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg bg-blue-700 hover:bg-blue-600 rounded-t-lg transition duration-300 ease-in-out"
                onClick={() => handleToggle(index)} // Toggle the FAQ
              >
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="text-xl text-yellow-400" />
                  <span>{faq.question}</span>
                </div>
                <div>
                  {activeIndex === index ? (
                    <FaAngleUp className="text-lg text-yellow-300" />
                  ) : (
                    <FaAngleDown className="text-lg text-yellow-300" />
                  )}
                </div>
              </button>

              {/* FAQ Content */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="overflow-hidden bg-blue-800 px-6 py-4"
              >
                <p className="text-gray-100">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqContent;
