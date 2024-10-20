import React from "react";
import { Link } from "react-router-dom";

const HotelList = ({ hotels }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
          <p className="text-gray-600 mb-1">Location: {hotel.location}</p>
          <p className="text-gray-600 mb-4">Rating: {hotel.rating} ⭐</p>
          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
