export default class RoomAvailability {
  constructor(id, roomTypeId, date, availableRooms) {
    this.id = id;
    this.roomTypeId = roomTypeId; // Foreign key to RoomType
    this.date = date;
    this.availableRooms = availableRooms;
  }
}
