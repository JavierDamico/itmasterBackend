const mongoose = require("mongoose");

let Product = new mongoose.Schema({
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
    default : 1,
    required: true,
  },
  views_count: {
    type: Number,
    default: 0
  },
  sold_count: {
    type: Number,
    default: 0,
  },
  category: String,
});
module.exports = mongoose.model('Product', Product)