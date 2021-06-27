const { Schema, Types } = require("mongoose");
const md5 = require("md5");

module.exports = new Schema({
  //   _id: Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  confirmationDate: Date,
  confirmationToken: {
    type: String,
    required: true,
    default: function () {
      return md5(Date.now());
    },
  },
});
