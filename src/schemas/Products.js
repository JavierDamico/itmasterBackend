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
    required: true,
  },
  category: String,
});
module.exports = mongoose.model('Product', Product)