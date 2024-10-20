import axios from "axios";
import Hotel from "../models/hotel";
import RoomType from "../models/roomType";
import Feature from "../models/feature";

const API_URL = "http://localhost:3001/api/hotels";

const calculateAvailability = (totalRooms, bookedRooms) => {
  return totalRooms - bookedRooms;
};

export const fetchAvailableHotels = async (location, fromDate, toDate) => {
  try {
    const response = await axios.get(API_URL);
    const hotelsData = response.data;

    return hotelsData
      .filter((hotelData) =>
        hotelData.location.toLowerCase().includes(location.toLowerCase())
      )
      .map((hotelData) => {
        const hotel = new Hotel(
          hotelData.id,
          hotelData.name,
          hotelData.location,
          hotelData.description,
          hotelData.rating
        );

        hotel.roomTypes = hotelData.roomTypes
          .map((roomTypeData) => {
            const totalRooms = roomTypeData.total_rooms;

            const bookedRoomsInRange = roomTypeData.bookings
              .filter((booking) => {
                const bookingDate = new Date(booking.date);
                const from = new Date(fromDate);
                const to = new Date(toDate);
                return bookingDate >= from && bookingDate <= to;
              })
              .reduce((sum, booking) => sum + booking.booked_rooms, 0);

            const availableRooms = calculateAvailability(
              totalRooms,
              bookedRoomsInRange
            );

            if (availableRooms > 0) {
              const roomType = new RoomType(
                roomTypeData.id,
                hotelData.id,
                roomTypeData.name,
                roomTypeData.description,
                roomTypeData.price_per_night,
                totalRooms,
                roomTypeData.capacity
              );

              roomTypeData.features.forEach((featureData) => {
                const feature = new Feature(featureData.id, featureData.name);
                roomType.addFeature(feature);
              });

              return roomType;
            }

            return null;
          })
          .filter((roomType) => roomType !== null);

        return hotel.roomTypes.length > 0 ? hotel : null;
      })
      .filter((hotel) => hotel !== null);
  } catch (error) {
    console.error("Error fetching available hotels:", error);
    throw error;
  }
};
