const mongoose = require("mongoose");
const functions = require("./functions");

mongoose.connect("mongodb://localhost:27017/itmaster_ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("estamos conectados");
});

// User.find()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

functions.findUsers();
functions.createUser();
functions.createAddress();
functions.createCategory();
functions.createPayment();
functions.createPhone();
functions.createProduct();
functions.createPhoto();
functions.createProfile();