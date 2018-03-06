var express = require("express"); // using express for routing
var db = require('../database/index.js');
var app = express(); // initializing app variable for routing
var request = require('request');
var session = require('express-session');
app.use(session({ // the current version is not using sessions, but emulating it via react, currently have to relogin after a page refesh
  secret: 'Secret token',
  cookie: {
    maxAge: 6000000
  }
})); // sessions seem to not persist, it seems that using passport rather than express-session helps with session permanence


var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html

// var premadeProjects = require("../dummyData.js") <== dummy data we used to test rendering without database connection

app.post("/projects", function(req, res) { // fetching user-specific projects from database
  console.log("Heard get from app.");
  db.selectAll(req.body.username).then(function(results) {  // username coming from react state rather than session, see line 6
    res.send(JSON.stringify(results.projects))});
})

app.get("/customers", function(req, res) { // fetching all customers from database, currently not working for specific user
  console.log("Heard request for all customers.");
  console.log(req.session.user);
  db.selectAllCustomers().then(function(customers) {res.send(customers)});
});

app.post("/project", function(req, res) { // adding a new project to the database, one in the Projects table, and a reference ID in the Users table
  console.log("Heard post from app.");
  db.createProject(req.body.data, req.body.username); // Async issues
  res.send(JSON.stringify(req.body) + " will be added to the database."); // could potentially be send before project creation, .then causing issues
})

app.put("/projects", function(req, res) { // updating an existing project in the database, no functionality linked to front end
  console.log("Heard put from app.");
  db.updateProject(req.body);
})

app.post("/signup", function(req, res) { // signing up, creating new user in database with object from request body
  console.log("Signup attempt.");
  db.createUser(req.body);
  // currently not sending a response
})

app.post("/login", function(req, res) { // logging in, needs to validate user with data from object in request body
  console.log('Login body: ', req.body);
  db.validateUser(req.body)
  .then(function(status) {
      console.log(status);
      if (status) { // if user is validated, then officially create session, currently not implemented
        // req.session.regenerate(function(err) {
        //   if (err) console.log("ERROR: " + JSON.stringify(err));
        //   req.session.user = req.body.username;
        //   console.log('user session: ', req.session.user)
        //   res.send("true");
        // });
        res.send("User is validated.");
      } else {
        res.send("Invalid credentials.");
      }
  })
})

app.get("/logout", function(req, res) { // signing out, destroys session, currently only being emulated on front end by clearing the state in React
  console.log("Signout attempt.");
  req.session.destroy(function() {
    res.send("Logged out.");
  })
})

// app.get("/", function(req, res) { // checking to see if logged in, and prompted to do so if not, currently not implemented
//   console.log('In / home route!');
//   console.log('User session: ', req.session.user);
//   if (!!req.session.user === false) {
//     res.send("false");
//   } else {
//     res.send("true");
//   }
// })


var port = process.env.PORT || 8080;

app.listen(port, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})
