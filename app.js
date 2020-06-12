var express = require("express");
var app = express();
//const port = 3000;
var path = require("path");
var router = require("./controls/burger_controller.js");
var bodyParser = require("body-parser");

var handlebars = require("express-handlebars");

var port = process.env.PORT || 3000;

//app.engine(
//  "handlebars",
//  handlebars({
//    layoutsDir: `${__dirname}/views/layouts`,
//    extname: "hbs",
//  })
//);
app.use(express.static(path.join(__dirname + "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.get("/", (req, res) => {
//  res.render("main", { layout: "index" });
//});

app.use(router);

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
