var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use("/public", express.static("public"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/soiled_controller");
// controllers/soiled_controller

app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening on http://localhost:" + PORT);
});