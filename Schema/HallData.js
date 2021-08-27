const mongoose = require("mongoose");
const bookingSchema = require("./booking");
const schema = mongoose.Schema;
let Hall = new schema({
  UID: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Place: {
    type: String,
    required: true,
  },
  Capacity: String,
  Bookings: [
    {
      start_date: {
        type: Date,
        required: true,
      },
      end_date: {
        type: Date,
        required: true,
      },
      Email: {
        type: String,
        required: true,
      },
    },
  ],
  WaitLists: [
    {
      start_date: {
        type: Date,
        required: true,
      },
      end_date: {
        type: Date,
        required: true,
      },
      Email: {
        type: String,
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model("Hall", Hall);
