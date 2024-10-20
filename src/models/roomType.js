import Feature from "./feature";

export default class RoomType {
  constructor(
    id,
    hotelId,
    name,
    description,
    pricePerNight,
    capacity,
    features = []
  ) {
    this.id = id;
    this.hotelId = hotelId;
    this.name = name;
    this.description = description;
    this.pricePerNight = pricePerNight;
    this.capacity = capacity;
    this.features = features.map((f) => new Feature(f.id, f.name));
  }
}
