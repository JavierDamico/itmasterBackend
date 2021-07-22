const router = require("express").Router();
const Category = require("../schemas/Categories");
const {respondWithError} = require("../helpers");
const {body, validationResult} = require('express-validator')

//name: requerido, min:3 max:50 caracteres
//categoryId: tiene que existir en la db

let validatePost = [
      body('name').notEmpty().withMessage('El nombre no puede ser vacio'),
      body('name').isLength({min: 3, max: 50}).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
      body('categoryId').notEmpty()
   ]



// http://localhost:4001/categories
router.get("/", function (req, res) {
  //enviar listado de todas las categorias
  Category
    .find()
    .exec()
    .then(function (categories) {
      res.send(categories);
    })
    .catch(err => respondWithError(res, err));
});

// http://localhost:4000/categories/456
router.get("/:id", function (req, res) {
  //enviar detalle de la categoria
  Category.findById(req.params.id)
    .then(function (category) {
      res.send(category);
    })
    .catch(err => respondWithError(res, err));
});

// http://localhost:4000/categories
router.post("/", validatePost, function (req, res) {

    let errors = validationResult(req)

    if(errors.isEmpty()) {
      let category = new Category(req.body);

    category
      .save()
      .then(function (category) {
        res.status(201).send({ message: category._id });
      })
    } else {
      respondWithError(res, errors.mapped())
    }

 });

// http://localhost:4000/categories/456
router.patch("/:id", function (req, res) {
  //enviar mensaje de confirmacion
  Category.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.send({ message: "updated" });
    })
    .catch(err => respondWithError(res, err));
});

// http://localhost:4000/categories/456
router.delete("/:id", function (req, res) {
  //enviar mensaje de confirmacion
  Category.deleteOne({ _id: req.params.id })
    .then(function () {
      res.send({ message: "deleted" });
    })
    .catch(err => respondWithError(res, err));
});

module.exports = router;
