const mongoose = require("mongoose");

 let Photo = new mongoose.Schema({
  // _id: Types.ObjectId,
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  url: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Photo', Photo)