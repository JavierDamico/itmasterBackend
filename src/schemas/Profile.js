const { Schema, Types } = require("mongoose");

module.exports = new Schema({
  // _id: Types.ObjectId,
  userId: {
    type: "ObjectId",
    ref: "User._id",
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
