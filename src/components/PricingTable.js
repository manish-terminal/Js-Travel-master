import React from "react";
import ServiceDescriptions from "./ServiceDescriptions";

const PricingTable = () => {
  const pricing = [
    { route: "Bangalore to Airport", sedan: "₹600", suv: "₹900", tempo: "₹1200" },
    { route: "Bangalore to Mysore", sedan: "₹1500", suv: "₹2200", tempo: "₹3000" },
    { route: "Bangalore to Goa", sedan: "₹4500", suv: "₹6500", tempo: "₹8500" },
    { route: "Bangalore to Chennai", sedan: "₹3500", suv: "₹5000", tempo: "₹7000" },
  ];

  return (
    <section className="bg-blue-100 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Pricing</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-sm md:text-base">Route</th>
                <th className="px-6 py-3 text-sm md:text-base">Sedan</th>
                <th className="px-6 py-3 text-sm md:text-base">SUV</th>
                <th className="px-6 py-3 text-sm md:text-base">Tempo</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-3 text-gray-700 text-sm md:text-base">{item.route}</td>
                  <td className="px-6 py-3 text-blue-600 font-semibold text-sm md:text-base">{item.sedan}</td>
                  <td className="px-6 py-3 text-blue-600 font-semibold text-sm md:text-base">{item.suv}</td>
                  <td className="px-6 py-3 text-blue-600 font-semibold text-sm md:text-base">{item.tempo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ServiceDescriptions />
    </section>
  );
};

export default PricingTable;
