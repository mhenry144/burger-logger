var express = require("express");
var burger = require("../config/burgers.js");

var router = express.Router();

router.get("/", function (req, res) {
  burger.select(function (data) {
    var devoured = [];
    var not_devoured = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].devoured) {
        devoured.push(data[i]);
      } else {
        not_devoured.push(data[i]);
      }
    }

    res.render("index", { devoured: devoured, not_devoured: not_devoured });
  });
});

router.post("/", function (req, res) {
  console.log(req.body);
  console.log(req.body.burger_name);

  burger.insert(req.body.burger_name, function (data) {
    res.json(data);
  });
});

router.put("/", function (req, res) {
  var updated = {
    devoured: req.body.devoured,
    id: req.body.id,
  };

  burger.update(updated, function (data) {
    res.json(data);
  });
});

module.exports = router;
