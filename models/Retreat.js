const mongoose = require('mongoose');

const retreatSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  duration: String,
  description: String,
});

module.exports = mongoose.model('Retreat', retreatSchema);
