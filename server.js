// Pulling in the required dependencies
var express = require("express");
var path = require("path");

// Express application settings
var app = express();
var PORT = process.env.PORT || 3000;
// HEROKU & LOCAL INFO

// parsing incoming request bodies (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is pulling in the applicaation routes
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// Listening on PORT
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });