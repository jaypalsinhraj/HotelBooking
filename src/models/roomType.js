export default class RoomType {
  constructor(
    id,
    hotelId,
    name,
    description,
    pricePerNight,
    totalRooms,
    capacity
  ) {
    this.id = id;
    this.hotelId = hotelId;
    this.name = name;
    this.description = description;
    this.pricePerNight = pricePerNight;
    this.totalRooms = totalRooms;
    this.capacity = capacity;
    this.features = [];
  }

  addFeature(feature) {
    this.features.push(feature);
  }
}
