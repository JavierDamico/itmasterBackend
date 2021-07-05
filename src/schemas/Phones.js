const mongoose = require("mongoose");

 let Phone = new mongoose.Schema({
  // _id: Types.ObjectId,
  countryCode: {
    type: String,
    required: true,
  },
  areaCode: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    minLength: [8, 'Debe contener 8 numeros, obtuve {VALUE}'],
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model('Phone', Phone)