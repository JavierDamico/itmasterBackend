const { Schema, Types } = require("mongoose");

module.exports = new Schema({
  // _id: Types.ObjectId,
  categoryId: String,
  name: {
    type: String,
    required: true,
  },
});
