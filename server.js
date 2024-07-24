const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const retreatsRouter = require('./routes/retreats');
const bookingsRouter = require('./routes/bookings');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sdeepakncy:deepaksharma@cluster0.sdlfzzw.mongodb.net/wellness-retreat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/retreats', retreatsRouter);
app.use('/book', bookingsRouter);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
