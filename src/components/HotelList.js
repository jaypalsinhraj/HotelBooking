import React from 'react';
import { useSelector } from 'react-redux';

const HotelList = () => {
    const hotels = useSelector(state => state.hotels.hotels);
    const status = useSelector(state => state.hotels.status);
    const error = useSelector(state => state.hotels.error);

    if (status === 'loading') {
        return <p className="text-center">Loading...</p>;
    }

    if (status === 'failed') {
        return <p className="text-center error-text">Error: {error}</p>;
    }

    return (
        <div className="my-6">
            <h3 className="text-xl font-bold text-center mb-4">Hotel Results:</h3>
            {hotels.length > 0 ? (
                <ul className="space-y-4">
                    {hotels.map(hotel => (
                        <li
                            key={hotel.id}
                            className="p-4 border rounded shadow-sm hover:bg-gray-50"
                        >
                            <div className="hotel-name">{hotel.name}</div>
                            <div className="hotel-location">{hotel.location}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-600">No hotels found.</p>
            )}
        </div>
    );
};

export default HotelList;
