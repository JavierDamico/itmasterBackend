const mongoose = require('mongoose')

let Address = new mongoose.Schema({
  // _id: Types.ObjectId,
  country: String,
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model('Address', Address)