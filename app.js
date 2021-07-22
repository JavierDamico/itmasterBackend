const mongoose = require("mongoose"); //traigo la libreria mongoose
const express = require("express"); //traigo la libreria express
const app = express(); //guardo en la const app una instancia de express

//configuro socket.io
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"]
  }
});



mongoose.connect("mongodb://localhost:27017/itmaster_ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRouter = require("./src/routes/auth");
const categoriesRouter = require("./src/routes/categories");
const profilesRouter = require("./src/routes/profiles");
const addressesRouter = require("./src/routes/addresses");
const paymentsRouter = require("./src/routes/payments");
const phonesRouter = require("./src/routes/phones");
const productsRouter = require("./src/routes/products");
const brandsRouter = require("./src/routes/brands");
const usersRouter = require("./src/routes/users");
const Product = require("./src/schemas/Products");
const Profile = require("./src/schemas/Profile");
const User = require("./src/schemas/User");
const Brand = require("./src/schemas/Brand");
const Category = require("./src/schemas/Categories");
const cors = require("cors");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/profiles", profilesRouter);
app.use("/api/addresses", addressesRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/phones", phonesRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/brands", brandsRouter);

app.get("/", function (req, res) {
  res.send("Bienvenido a backend");
});

app.get("/products", function (req, res) {
  //listado de producto
});

app.get("/products/create", function (req, res) {
  //formulario de alta de productos
  res.sendFile(__dirname + "/src/views/products-create.html");
});

app.post("/products", function (req, res) {
  //recibir datos del formulario
  //guardar en la base de datos
  // si quiero gurardar asociando un id se puede hacer algo asi
  // return res.send({
  //   ...req.body,
  //   sellerId : 1234565
  // })

  let schema = new Product(req.body);
  // si quiero gurardar asociando un id se puede hacer algo asi
  //   ...req.body,
  //   sellerId : 1234565
  // })
  schema
    .save()
    .then(() => {
      res.status(201).send({ message: "created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(422).send({ message: err });
    });
});

app.get("/profiles", function (req, res) {
  //listado de perfiles
});

app.get("/profiles/create", function (req, res) {
  //formulario de alta de productos
  res.sendFile(__dirname + "/src/views/profiles-create.html");
});

app.post("/profiles", function (req, res) {
  //recibir datos del formulario
  //guardar en la base de datos
  // si quiero gurardar asociando un id se puede hacer algo asi
  // return res.send({
  //   ...req.body,
  //   sellerId : 1234565
  // })

  let schema = new Profile(req.body);
  // si quiero gurardar asociando un id se puede hacer algo asi
  //   ...req.body,
  //   sellerId : 1234565
  // })
  schema
    .save()
    .then(() => {
      res.status(201).send({ message: "created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(422).send({ message: err });
    });
});

app.get("/users", function (req, res) {
  //listado de producto
});

app.get("/users/create", function (req, res) {
  //formulario de alta de productos
  res.sendFile(__dirname + "/src/views/users-create.html");
});

app.post("/users", function (req, res) {
  //recibir datos del formulario
  //guardar en la base de datos
  // si quiero gurardar asociando un id se puede hacer algo asi
  // return res.send({
  //   ...req.body,
  //   sellerId : 1234565
  // })

  let schema = new User(req.body);
  // si quiero gurardar asociando un id se puede hacer algo asi
  //   ...req.body,
  //   sellerId : 1234565
  // })
  schema
    .save()
    .then(() => {
      res.status(201).send({ message: "created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(422).send({ message: err });
    });
});

app.get("/brands", function (req, res) {
  //listado de producto
});

app.get("/brands/create", function (req, res) {
  //formulario de alta de productos
  res.sendFile(__dirname + "/src/views/brand-create.html");
});

app.post("/brands", function (req, res) {
  //recibir datos del formulario
  //guardar en la base de datos
  // si quiero gurardar asociando un id se puede hacer algo asi
  // return res.send({
  //   ...req.body,
  //   sellerId : 1234565
  // })

  let schema = new Brand(req.body);
  // si quiero gurardar asociando un id se puede hacer algo asi
  //   ...req.body,
  //   sellerId : 1234565
  // })
  schema
    .save()
    .then(() => {
      res.status(201).send({ message: "created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(422).send({ message: err });
    });
});

app.get("/categories", function (req, res) {
  //listado de producto
});

app.post("/categories", function (req, res) {
  //recibir datos del formulario
  //guardar en la base de datos
  // si quiero gurardar asociando un id se puede hacer algo asi
  // return res.send({
  //   ...req.body,
  //   sellerId : 1234565
  // })

  let schema = new Category(req.body);
  // si quiero gurardar asociando un id se puede hacer algo asi
  //   ...req.body,
  //   sellerId : 1234565
  // })
  schema
    .save()
    .then(() => {
      res.status(201).send({ message: "created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(422).send({ message: err });
    });
});
app.get('/chat', function (req, res){
  res.sendFile(__dirname + '/src/views/chat.html')
})

io.on("connection", socket => {
  console.log('alguien se conecto a traves de websockets')
  socket.on('saludo', event => {
  socket.emit('respuesta', {text: 'bienvenido'})
})

socket.on("disconnect", function () {
  console.log('Un usuario se ha desconectado');
})
});


httpServer.listen(5000)
app.listen(4000);
