const mongoose = require("mongoose");

let Category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categoryId: {
    required: false,
    type: mongoose.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Category', Category);
