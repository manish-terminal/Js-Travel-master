import React, { useState } from "react";
import { Calendar, Clock, Plane, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
emailjs.init('service_0ta8ftn');

const Booking = () => {
  const [tripType, setTripType] = useState("airport");
  const [direction, setDirection] = useState("to");
  const [city, setCity] = useState("DELHI");
  const [airport, setAirport] = useState("Indira Gandhi International Airport (DEL)");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [localType, setLocalType] = useState();
  const [location, setLocation] = useState("");
  const [tripMode, setTripMode] = useState("oneway");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      tripType,
      direction,
      city,
      airport,
      date,
      time,
      localType,
      location,
      tripMode,
      fromCity,
      toCity,
      returnDate,
    };

    emailjs.send('service_0ta8ftn', 'template_vtvhcfu', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Booking details sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send booking details. Please try again.');
      });
  };

  return (
    <div className="w-3/4 mx-auto bg-blue rounded-lg m-4">
      {/* Tabs */}
      <div className="flex border-b mb-6 text-white rounded-t-lg bg-blue-900">
        {[
          { key: "outstation", label: "Outstation", icon: <MapPin /> },
          { key: "local", label: "Local", icon: <Clock /> },
          { key: "airport", label: "Airport", icon: <Plane /> },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`flex-1 p-3 text-center font-semibold flex items-center justify-center gap-2 border-b-4 transition-all ${
              tripType === tab.key ? "border-blue-500 text-blue-200" : "border-transparent text-white opacity-75"
            }`}
            onClick={() => setTripType(tab.key)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Form */}
      {tripType === "airport" && (
        <div>
          {/* Direction Selection */}
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="to"
                checked={direction === "to"}
                onChange={() => setDirection("to")}
              />
              Going To Airport
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="from"
                checked={direction === "from"}
                onChange={() => setDirection("from")}
              />
              Coming From Airport
            </label>
          </div>

          {/* City Selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">In City</label>
            <select
              className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="DELHI">DELHI</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="BANGALORE">BANGALORE</option>
            </select>
          </div>

          {/* Date and Time Selection */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Date</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Calendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  className="w-full outline-none"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Time</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Clock className="mr-2 text-gray-500" />
                <input
                  type="time"
                  className="w-full outline-none"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {tripType === "local" && (
        <div>
          {/* City Selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">In City</label>
            <select
              className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="DELHI">DELHI</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="BANGALORE">BANGALORE</option>
            </select>
          </div>

          {/* Local Booking Type */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Per hr/Per kms</label>
            <select
              className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={localType}
              onChange={(e) => setLocalType(e.target.value)}
            >
              <option value="perhr">4Hr 40km</option>
              <option value="perhr">Wedding</option>
              <option value="perhr">Hr 40km</option>
              <option value="perkm">Per Km</option>
            </select>
          </div>

          {/* Date and Time Selection */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Date</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Calendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  className="w-full outline-none"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Time</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Clock className="mr-2 text-gray-500" />
                <input
                  type="time"
                  className="w-full outline-none"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Outstation Form */}
      {tripType === "outstation" && (
        <div>
          {/* Trip Mode Selection */}
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="oneway"
                checked={tripMode === "oneway"}
                onChange={() => setTripMode("oneway")}
              />
              One Way
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="roundtrip"
                checked={tripMode === "roundtrip"}
                onChange={() => setTripMode("roundtrip")}
              />
              Round Trip
            </label>
          </div>

          {/* From City */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">From City</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
          </div>

          {/* To City */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">To City</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Date</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Calendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  className="w-full outline-none"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Travel Time</label>
              <div className="flex items-center border p-2 rounded bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                <Clock className="mr-2 text-gray-500" />
                <input
                  type="time"
                  className="w-full outline-none"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Return Date */}
          {tripMode === "roundtrip" && (
            <div className="mb-4">
              <label className="block font-semibold mb-1">Return Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          )}
        </div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full p-3 mt-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={sendEmail}
      >
        Confirm Booking
      </motion.button>
    </div>
  );
};

export default Booking;