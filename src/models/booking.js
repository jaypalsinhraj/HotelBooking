export default class Booking {
  constructor(id, guestId, bookingDate, totalPrice) {
    this.id = id;
    this.guestId = guestId;
    this.bookingDate = bookingDate;
    this.totalPrice = totalPrice;
    this.bookedRooms = [];
  }

  addBookedRoom(bookedRoom) {
    this.bookedRooms.push(bookedRoom);
  }
}
