import axios from 'axios';
import Hotel from '../models/hotel';

// Base URL for the Mockoon API
const API_URL = 'http://localhost:3001/api/hotels';  // Use your Mockoon URL

// Fetches hotel data from the Mockoon API
export const fetchHotels = async () => {
    try {
        const response = await axios.get(API_URL);
        const hotelsData = response.data;

        // Map the response to the Hotel model
        const hotels = hotelsData.map((hotel) => new Hotel(hotel.id, hotel.name, hotel.location));
        return hotels;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};
