const router = require('express').Router()
const Address = require('../schemas/Address')

// http://localhost:4001/categories
router.get('/', function (req, res){
    //enviar listado de todas las categorias
    Address
    .find()
    .exec()
    .then(function (address){
        res.send(address)
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.get('/:id', function (req, res){
    //enviar detalle de la categoria
    Address
    .findById(req.params.id)
    .then(function (address){
        res.send(address)
    })
    .catch(function(){
        res.send({message: "error"})
    })

})

// http://localhost:4000/categories
router.post('/', function(req, res){
    //enviar el id de la db
let address = new Address(req.body)

address
    .save()
    .then(function (address){
        res.send({message: address._id})
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.patch('/:id', function (req, res){
    //enviar mensaje de confirmacion
    Address
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
    Address
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