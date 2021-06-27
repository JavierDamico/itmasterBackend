const { Schema, Types } = require("mongoose");

module.exports = new Schema({
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
    type: "ObjectId",
    ref: "User._id",
  },
});
