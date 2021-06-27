const { Schema, Types } = require("mongoose");

module.exports = new Schema({
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
    type: "ObjectId",
    ref: "User._id",
  },
});
