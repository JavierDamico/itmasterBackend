const router = require('express').Router()
const path = require("path");
const User = require('../schemas/User')
const nodemailer = require("nodemailer");
//request, response
router.get("/register", function (req, res) {
    let file = path.resolve("src", "views", "register.html");
    res.sendFile(file);
  });
  
  // http://localhost:4000/confirm?token=f6abc1e734ef793c78dbc1f9fa54cbaa
  router.get("/confirm", function (req, res) {
    //aca va la funcion para buscar por token
  
    User.findByToken(req.query.token)
    .then(function (result) {
      if (result){
      return res.send('Confirmado!')
    }
      return res.send('No se encontro el resultado')
    })
    .catch(function (err){
      console.log(err.message)
     return res.send('Error!')
    })
  
  });
  
  router.post("/register", async function (req, res) {
    let user = new User(req.body)
  
    user.save().then(async u => {
  
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
      text: "Bienvenido a nuestro sistema :)", // la parte de la url que viene despues del ? se llama query string
      html: `<a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
                Confirmar cuenta
            </a>
            <b>Bienvenido a nuestro sistema :)</b>`,
    });
    console.log("Message sent: %s", info.messageId);
  
    res.send(nodemailer.getTestMessageUrl(info));
  
  })
  .catch(err => {console.log(err)
  })
  
  });

  module.exports = router