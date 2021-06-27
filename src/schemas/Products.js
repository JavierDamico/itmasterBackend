const { Schema, Types } = require("mongoose");

module.exports = new Schema({
  // _id: Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: String,
});
