const express = require("express");
const app = express();
const port = 3000;
//var router = require('.')

const handlebars = require("express-handlebars");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
