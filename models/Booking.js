const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: String,
  user_name: String,
  user_email: String,
  user_phone: String,
  retreat_id: String,
  retreat_title: String,
  retreat_location: String,
  retreat_price: Number,
  retreat_duration: String,
  payment_details: String,
  booking_date: Date,
});

module.exports = mongoose.model('Booking', bookingSchema);
