
import React from "react";

const ServiceDescriptions = () => {
  const services = [
    { title: "Sedan", description: "Comfortable and affordable", price: "₹12/km" },
    { title: "SUV", description: "For larger groups and extra space", price: "₹18/km" },
    { title: "Tempo Traveller", description: "Ideal for family trips", price: "₹25/km" },
  ];

  return (
    <section className=" py-8">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <p className="mt-2 text-lg font-bold text-blue-500">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDescriptions;
