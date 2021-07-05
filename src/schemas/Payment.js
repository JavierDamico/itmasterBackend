const mongoose = require("mongoose");
 let Payment = new mongoose.Schema({
  // _id: Types.ObjectId,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  cardNumber: {
    type: String,
    required: true,
  },
  securityCode: {
    type: String,
    required: true,
  },
  cardHolder: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('Payment', Payment)