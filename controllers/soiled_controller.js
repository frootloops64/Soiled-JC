var express = require("express");
var router = express.Router();

var soil = require("../models/soil");

router.get("/", function (req, res) {
  // soil.all(function (data) {
  //   var hbsObject = {
  //     soil: data
  //   };
  res.render("index", {
    title: "Get Soil(ed)"
  });
});

router.get("/quote", function (req, res) {
  res.render("quote", {
    title: "Get a quote"
  });
});
// });

module.exports = router;