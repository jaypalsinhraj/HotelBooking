import axios from "axios";

const API_URL = "http://localhost:3001/api/hotels";


export const fetchHotelDetails = async (hotelId) => {
  try {
    const response = await axios.get(`${API_URL}/${hotelId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
};
