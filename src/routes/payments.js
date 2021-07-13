
const router = require('express').Router()
const Payment = require('../schemas/Payment')

// http://localhost:4001/categories
router.get('/', function (req, res){
    //enviar listado de todas las categorias
    Payment
    .find()
    .exec()
    .then(function (payment){
        res.send(payment)
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.get('/:id', function (req, res){
    //enviar detalle de la categoria
    Payment
    .findById(req.params.id)
    .then(function (payment){
        res.send(payment)
    })
    .catch(function(){
        res.send({message: "error"})
    })

})

// http://localhost:4000/categories
router.post('/', function(req, res){
    //enviar el id de la db
let payment = new Payment(req.body)

payment
    .save()
    .then(function (payment){
        res.send({message: payment._id})
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.patch('/:id', function (req, res){
    //enviar mensaje de confirmacion
    Payment
    .findByIdAndUpdate(req.params.id, req.body)
    .then(function (){
        res.send({message: "updated"})
    })
    .catch(function(){
        res.send({message: "error"})
    })
})


// http://localhost:4000/categories/456
router.delete('/:id', function (req, res){
    //enviar mensaje de confirmacion
    Payment
    .deleteOne({_id: req.params.id})
    .then(function (){
        res.send({message: "deleted"})
    })
    .catch(function(err){
        console.log(err);
        res.send({message: "error"})
    })
})

module.exports = router