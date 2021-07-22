const mongoose = require("mongoose");
const md5 = require("md5");

let User = new mongoose.Schema({
  //   _id: Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  confirmationDate: Date,
  confirmationToken: {
    type: String,
    required: true,
    default: function () {
      return md5(Date.now());
    },
  },
});

/*
Aca puedo usar directamente el User porque estoy trabajando con el modelo/schema.
User.findByToken()
*/

User.statics.findByToken = function (token) {
  return this.findOne({ confirmationToken: token });
};

/*
Aca primero creo la instancia
let user = new User()
y luego lo uso
user.findByEmail({email: '...'})
*/

User.methods.findByEmail = function (cb) {
  return mongoose.model("User").find({ email: this.email }, cb);
};

module.exports = mongoose.model("User", User);
