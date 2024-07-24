const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/book', async (req, res) => {
  const { user_id, retreat_id } = req.body;

  try {
    const existingBooking = await Booking.findOne({ user_id, retreat_id });
    if (existingBooking) {
      return res.status(400).send('Retreat already booked by this user');
    }

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send('Booking created');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
