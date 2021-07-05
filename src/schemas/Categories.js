const mongoose = require("mongoose");


let Category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  categoryId: String,
});

module.exports = mongoose.model('Category', Category)