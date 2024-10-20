import axios from 'axios';
import Hotel from '../models/hotel';
import RoomType from '../models/roomType';
import Feature from '../models/feature';
import RoomAvailability from '../models/roomAvailability';


const API_URL = 'http://localhost:3001/api/hotels';


export const fetchHotels = async () => {
    try {
        const response = await axios.get(API_URL);
        const hotelsData = response.data;

        return hotelsData.map(hotelData => {
            const hotel = new Hotel(
                hotelData.id, 
                hotelData.name, 
                hotelData.location, 
                hotelData.description, 
                hotelData.rating
            );

            hotel.roomTypes = hotelData.roomTypes.map(roomTypeData => {
                const roomType = new RoomType(
                    roomTypeData.id,
                    hotelData.id,  
                    roomTypeData.name,
                    roomTypeData.description,
                    roomTypeData.pricePerNight,
                    roomTypeData.capacity,
                    roomTypeData.features
                );

                roomType.features = roomTypeData.features.map(featureData => {
                    return new Feature(
                        featureData.id,
                        featureData.name
                    );
                });

                roomType.availability = roomTypeData.availability.map(availData => {
                    return new RoomAvailability(
                        availData.id,
                        roomTypeData.id,
                        availData.date,
                        availData.availableRooms
                    );
                });

                return roomType;
            });

            return hotel;
        });
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};
