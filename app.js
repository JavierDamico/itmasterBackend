const express = require("express");
const app = express();
const path = require("path");
// const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const md5 = require("md5");

// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}));

app.get("/", function (req, res) {
  res.send("Bienvenido a backend");
});

//request, response
app.get("/register", function (req, res) {
  let file = path.resolve("src", "views", "register.html");
  res.sendFile(file);
});

app.get("/confirm", function (req, res) {
  res.send("confirmado!");
});

app.post("/register", async function (req, res) {
  let token = md5(req.body.email + Date.now());
  console.log(token);
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    // si tira error de tls se puede agregar lo siguiente
    //tls:{
    //   rejectUnautorized:false
    // }
  });

  let info = await transporter.sendMail({
    from: '"Backend 👻" <no-reply@example.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Has completado tu registro exitosamente",
    text: "Bienvenido a nuestro sistema :)",
    html: `<a href="http://localhost:4000/confirm?token=${token}">
              Confirmar cuenta
          </a>
          <b>Bienvenido a nuestro sistema :)</b>`,
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.send(req.body);
});

app.listen(4000);
