const { Schema, Types } = require("mongoose");

module.exports = new Schema({
  // _id: Types.ObjectId,
  productId: {
    type: "ObjectId",
    ref: "Product",
  },
  url: {
    type: String,
    required: true,
  },
});
