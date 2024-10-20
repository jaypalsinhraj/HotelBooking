import React from "react";

const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.location}</p>
          <p className="text-gray-600 mb-4">{hotel.description}</p>
          <h3 className="text-lg font-bold">Available Room Types:</h3>
          <ul>
            {hotel.roomTypes.map((roomType) => (
              <li key={roomType.id} className="room-type">
                <p>
                  {roomType.name} - ${roomType.price_per_night} per night
                </p>
                <p>Capacity: {roomType.capacity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
