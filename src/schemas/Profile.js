const mongoose = require("mongoose");

let Profile = new mongoose.Schema({
// _id: Types.ObjectId,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('Profile', Profile)