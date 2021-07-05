const User = require("../src/schemas/User");
const Address= require("../src/schemas/Address");
const Category= require("../src/schemas/Categories");
const Payment= require("../src/schemas/Payment");
const Phone= require("../src/schemas/Phones");
const Product= require("../src/schemas/Products");
const Photo= require("../src/schemas/Photos");
const Profile= require("../src/schemas/Profile");


module.exports = {
  findUsers(){
    //este User el lo que se llama metodo estatico o de clase
    // User.find({email: "cinco@gmail.com"}).then(users => { //aca User es el modelo
    //   console.log(users)
    // }).catch(err => {
    //   console.log(err);
    // })
    //------------------------------------------------------------------------------------
    // let user = new User({email : "cinco@gmail.com"})
    // user.findByEmail()
    //     .then(u => console.log(u))
    //     .catch(err => console.log(err))
    //------------------------------------------------------------------------------------
    
    User.findByToken('71fdbf3b2b62a4e9c58050d88778cea7')
        .then(u => console.log(u))
        .catch(err => console.log(err))

  },
  createUser() {
    //aca creo una instancia de la const User, el newUser es un usuario en concreto, no es el modelo.
    let newUser = new User({
      email: "javi@gmail.com",
      password: "asdf8eriojwa98rj",
    });
    newUser
    //metodo de instancia
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
      number: "1234545567",
      userId:"60da4f1653dfe32844f41fef"
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
      birthDate: new Date (1982,2,10),
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
