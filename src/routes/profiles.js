const router = require("express").Router();
const Profile = require("../schemas/Profile");

router.get("/", function (req, res) {
  Profile.find()
    .exec()
    .then(function (profile) {
      res.send(profile);
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

router.get("/:id", function (req, res) {
  Profile.findById(req.params.id)
    .then(function (profile) {
      res.send(profile);
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

router.post("/", function (req, res) {
  console.log("asdf");
  let profile = new Profile(req.body);
  console.log(req.body);

  profile
    .save()
    .then(function (profile) {
      res.status(201).send({ message: profile._id });
    })
    .catch(function (err) {
      console.log(err);
      res.send({ message: "error" });
    });
});

router.patch("/:id", function (req, res) {
  Profile.findByIdAndUpdate(req.params.id, {})
    .then(function () {
      res.send({ message: "updated" });
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});

router.delete("/:id", function (req, res) {
  Profile.deleteOne(req.params.id)
    .then(function () {
      res.send({ message: "deleted" });
    })
    .catch(function () {
      res.send({ message: "error" });
    });
});
module.exports = router;
