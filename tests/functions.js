const mongoose = require("mongoose");
const UserSchema = require("../src/schemas/User");
const User = mongoose.model("User", UserSchema);
const AddressSchema = require("../src/schemas/Address");
const Address = mongoose.model("Address", AddressSchema);
const CategorySchema = require("../src/schemas/Categories");
const Category = mongoose.model("Category", CategorySchema);
const PaymentSchema = require("../src/schemas/Payment");
const Payment = mongoose.model("Payment", PaymentSchema);
const PhoneSchema = require("../src/schemas/Phones");
const Phone = mongoose.model("Phone", PhoneSchema);
const ProductSchema = require("../src/schemas/Products");
const Product = mongoose.model("Product", ProductSchema);
const PhotoSchema = require("../src/schemas/Photos");
const Photo = mongoose.model("Photo", PhotoSchema);
const ProfileSchema = require("../src/schemas/Profile");
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = {
  createUser() {
    //aca creo una instancia de la const User
    let newUser = new User({
      email: "cinco@gmail.com",
      password: "asdf8eriojwa98rj",
    });
    newUser
      .save()
      .then((user) => {
        console.log("el id del usuario es  " + user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createAddress() {
    let newAddress = new Address({
      country: "Argentina",
      city: "Buenos Aires",
      street: "Av. Siempreviva 123",
      zipCode: "12454",
      userId: User._id,
    });
    newAddress
      .save()
      .then((address) => {
        console.log("el id de la direccion es  " + address._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createCategory() {
    let newCategory = new Category({
      categoryId: "2",
      name: "Almacen",
    });
    newCategory
      .save()
      .then((category) => {
        console.log("el id de la direccion es  " + category._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createPayment() {
    let newPayment = new Payment({
      userId: User._id,
      cardNumber: "1234456789123456",
      securityCode: "123",
      cardHolder: "Javier Damico",
      expirationDate: '2023-05-15',
    });
    newPayment
      .save()
      .then((payment) => {
        console.log("el id del pago es  " + payment._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createPhone() {
    let newPhone = new Phone({
      countryCode: "54",
      areaCode: "011",
      number: "12345",
      userId: User._id
    });
    newPhone
      .save()
      .then((phone) => {
        console.log("el id del telefono es  " + phone._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createProduct() {
    let newProduct = new Product({
      name: "Semillas de lino x 100gr",
      price: 68,
      stock: 1000,
      category: 5,
    });
    newProduct
      .save()
      .then((product) => {
        console.log("el id del producto es  " + product._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createPhoto() {
    let newPhoto = new Photo({
      url: "http://urldelafoto.com",
      productId: Product._id,
    });
    newPhoto
      .save()
      .then((photo) => {
        console.log("el id del producto es  " + photo._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createProfile() {
    let newProfile = new Profile({
      firstName: "Javier",
      lastName: "D'Amico",
      birthDate: "1982-03-11",
      userId: User._id
    });
    newProfile
      .save()
      .then((profile) => {
        console.log("el id del producto es  " + profile._id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
