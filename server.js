var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static("public"));

// app.use(express.static(process.cwd() + '/public'));


app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);