// Pulling in the required dependencies
var path = require("path");

// Export HTML routes
module.exports = function(app) {
  // Home html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Survey html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
