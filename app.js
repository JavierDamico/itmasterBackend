const mongoose = require('mongoose')
const express = require("express");
const app = express();

mongoose.connect("mongodb://localhost:27017/itmaster_ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const profilesRouter = require('./src/routes/profiles')
const addressesRouter = require('./src/routes/addresses')
const paymentsRouter = require('./src/routes/payments')
const phonesRouter = require('./src/routes/phones')
const productsRouter = require('./src/routes/products')
const usersRouter = require('./src/routes/users')

// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}));

app.use('/auth', authRouter)
app.use('/categories', categoriesRouter)
app.use('/profiles', profilesRouter)
app.use('/addresses', addressesRouter)
app.use('/payments', paymentsRouter)
app.use('/phones', phonesRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)

app.get("/", function (req, res) {
  res.send("Bienvenido a backend");
});

app.listen(4000);
