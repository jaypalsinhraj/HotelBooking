export default class BookedRoom {
  constructor(id, bookingId, roomTypeId, date, pricePerNight) {
    this.id = id;
    this.bookingId = bookingId;
    this.roomTypeId = roomTypeId;
    this.date = date;
    this.pricePerNight = pricePerNight;
  }
}
