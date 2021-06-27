const { Schema, Types } = require("mongoose");
module.exports = new Schema({
  // _id: Types.ObjectId,
  userId: {
    type: "ObjectId",
    ref: "User._id",
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
