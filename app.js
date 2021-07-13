const mongoose = require("mongoose");
const express = require("express");
const app = express();

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
const usersRouter = require("./src/routes/users");
const Product = require("./src/schemas/Products");
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

app.listen(4000);
