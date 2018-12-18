var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
      console.log(req.body);
      var newFriend = req.body
      // To dos: setup and object called: Best Friend w/ prop (name, pic).
      // Loop over friends object
      // Nested for loop in a for loop
      // Second loop figures out scores, set up a car to keep track of diff
      
  });
};