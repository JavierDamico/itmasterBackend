const router = require("express").Router();
const Brand = require("../schemas/Brand");

// http://localhost:4001/categories
router.get("/", function (req, res) {
  let query = {};

  if (req.query.name) {
    query.name = req.query.name;
  }

  if (req.query.price_min) {
    query["$and"] = [
      {
        price: {
          $gte: req.query.price_min,
        },
      },
    ];
  }

  let result = Brand.find(query);

  // order=price&dir=asc
  if (req.query.order) {
    result.sort({ [req.query.order]: req.query.dir === "asc" ? 1 : -1 });
  }

  if (req.query.start) {
    result.skip(Number(req.query.start));
  }

  result.limit(10);

  result
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "error" });
    });
});

// http://localhost:4000/categories/456
router.get("/:id", function (req, res) {
  //enviar detalle de la categoria
  Brand.findById(req.params.id)
    .then(function (brand) {
      brand.views_count = brand.views_count + 1;

      brand.save().then((brand) => {
        res.send(brand);
      });
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

// http://localhost:4000/categories
router.post("/", function (req, res) {
  //enviar el id de la db
  let brand = new Brand(req.body);

  brand
    .save()
    .then(function (brand) {
      res.send({ message: brand._id });
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

// http://localhost:4000/categories/456
router.patch("/:id", function (req, res) {
  //enviar mensaje de confirmacion
  Brand.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.send({ message: "updated" });
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

// http://localhost:4000/categories/456
router.delete("/:id", function (req, res) {
  //enviar mensaje de confirmacion
  Brand.deleteOne({ _id: req.params.id })
    .then(function () {
      res.send({ message: "deleted" });
    })
    .catch(function (err) {
      console.log(err);
      res.send({ message: "error" });
    });
});

module.exports = router;
