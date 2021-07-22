const mongoose = require("mongoose");

let Brand = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Brand", Brand);
