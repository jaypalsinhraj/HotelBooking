export default class Hotel {
  constructor(id, name, location, description, rating) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.description = description;
    this.rating = rating;
    this.roomTypes = [];
  }

  addRoomType(roomType) {
    this.roomTypes.push(roomType);
  }
}
