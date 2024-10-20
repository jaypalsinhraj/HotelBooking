import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelDetails } from "../services/hotelDetailsService";

const HotelDetailsPage = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotelDetails = async () => {
      try {
        const hotelData = await fetchHotelDetails(hotelId);
        setHotel(hotelData);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    getHotelDetails();
  }, [hotelId]);

  if (!hotel) {
    return <p>Loading hotel details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
      </header>
      <main className="container mx-auto py-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Hotel Information</h2>
          <p className="text-gray-600 mb-1">Location: {hotel.location}</p>
          <p className="text-gray-600 mb-4">Rating: {hotel.rating} ⭐</p>
          <p className="text-gray-700 mb-4">{hotel.description}</p>

          <h3 className="text-xl font-semibold mb-2">Available Room Types</h3>
          {hotel.roomTypes.length > 0 ? (
            <ul>
              {hotel.roomTypes.map((roomType) => (
                <li key={roomType.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium">{roomType.name}</h4>
                      <p className="text-gray-600">
                        Capacity: {roomType.capacity} persons
                      </p>
                      <p className="text-gray-600 mb-1">
                        Price: ${roomType.pricePerNight} per night
                      </p>
                      <p className="text-gray-500">
                        Features:{" "}
                        {roomType.features
                          .map((feature) => feature.name)
                          .join(", ")}
                      </p>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">
                      Book Now
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No available room types.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default HotelDetailsPage;
