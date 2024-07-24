const express = require('express');
const router = express.Router();
const Retreat = require('../models/Retreat');

router.get('/', async (req, res) => {
    try {
      const { filter, location, page = 1, limit = 5, search } = req.query;
      const query = {};
  
      if (filter) {
        query.title = { $regex: filter, $options: 'i' };
      }
      if (location) {
        query.location = location;
      }
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          // Add other fields as needed
        ];
      }
  
      const retreats = await Retreat.find(query)
        .skip((page - 1) * limit)
        .limit(Number(limit));
      res.json(retreats);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

module.exports = router;
