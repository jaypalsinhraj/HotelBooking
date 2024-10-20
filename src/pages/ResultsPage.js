import React from "react";
import { useSelector } from "react-redux";
import HotelList from "../components/HotelList";

const ResultsPage = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Available Hotels</h1>
      </header>
      <main className="container mx-auto py-6 px-4">
        {hotels.length > 0 ? (
          <HotelList hotels={hotels} />
        ) : (
          <p className="text-center text-gray-700">
            No hotels available for the selected location and date range.
          </p>
        )}
      </main>
    </div>
  );
};

export default ResultsPage;
