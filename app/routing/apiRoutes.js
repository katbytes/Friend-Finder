// Pulling in the required dependencies
var path = require("path");

// Import the list of friends
var friends = require("../data/friends");

// Exporting API routes
module.exports = function(app) {
  // The total list of friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // Add a 'new friend'
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    // Kat To dos: setup and object called: Best Friend w/ prop (name, pic).
    // Total dif on best friend above
    // Loop over friends object
    // Nested for loop in a for loop
    // Second loop figures out scores, set up a car to keep track of diff
    // Equal to
    // res.j back to the user
    // ------------------------------------------------------------------------
    var userInput = req.body;
    // console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    // console.log('userResponses = ' + userResponses);

    // Finding a BFF match
    var matchName = "";
    var matchImage = "";
    var totalDifference = 10000;
    // Loop through the existing friends in the data/friends.js
    for (var i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Calculate the differenes within each of the ?'s
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      // console.log('diff = ' + diff);

      // If low difference, record the friend match
      if (diff < totalDifference) {
        // console.log('Closest match found = ' + diff);
        // console.log('Friend name = ' + friends[i].name);
        // console.log('Friend image = ' + friends[i].photo);

        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    // Add the new user
    friends.push(userInput);

    // Sending response
    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
    // ------------------------------------------------------------------------
  });
};
