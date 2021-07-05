const router = require('express').Router()
const User = require('../schemas/User')

// http://localhost:4001/categories
router.get('/', function (req, res){
    //enviar listado de todas las categorias
    User
    .find()
    .exec()
    .then(function (user){
        res.send(user)
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.get('/:id', function (req, res){
    //enviar detalle de la categoria
    User
    .findById(req.params.id)
    .then(function (user){
        res.send(user)
    })
    .catch(function(){
        res.send({message: "error"})
    })

})

// http://localhost:4000/categories
router.post('/', function(req, res){
    //enviar el id de la db
let user = new User(req.body)

user
    .save()
    .then(function (user){
        res.send({message: user._id})
    })
    .catch(function(){
        res.send({message: "error"})
    })
})

// http://localhost:4000/categories/456
router.patch('/:id', function (req, res){
    //enviar mensaje de confirmacion
    User
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
    User
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