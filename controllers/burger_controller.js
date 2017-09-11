
var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res){
	res.redirect("/burgers")
});

router.get("/burgers", function(req, res){
	burgers.selectAll(function(data){
		res.render("index", {burgers: data });
	});
});

router.post("/burgers/insertOne", function(req, res){
	burgers.insertOne(req.body.b_name, function(result){
		res.redirect("/")
	});
});


router.put("/burgers/updateOne", function(req, res){
	burgers.updateOne(res.body.devoured, function(result){
		res.redirect("/");
	});
});

module.exports = router;