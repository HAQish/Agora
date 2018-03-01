var mongoose = require('mongoose');
var uriString = process.env.MONGODB_URI || 'mongodb://localhost/Greenfield';
mongoose.connect(uriString);
var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose connection error', err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//  [{}] => an object within an array means that the schema can handle any number of objects in that array
          //as long as the key:value pairs match key name and value type
var projectSchema = mongoose.Schema({
    name: String,
    description: String,
    customer: String,
    resources: [{name:String, value:String}],
    finances: [{name:String, value:String}],
    timeline: {tasks:[{name:String,dueDate:Date}],start:Date, end:Date, status: String}
  });

var Projects = mongoose.model('Projects', projectSchema);
  // created collection/table with name Projects(capital) here, but will be projects(lowercase) in database

var createProject = function(obj, username){ // adds a new project document/row to Projects table/collection
                                            // and project id to logged-in user in Users table/collection

  var newProject = new Projects({
    _id: new mongoose.Types.ObjectId(),
    name: obj.name,
    description: obj.description,
    customer: obj.customer
  });
  newProject.save(function(err) {
    if (err) throw err;
    console.log("Project saved.");

    Users.findOne({username: username}, function(err, user) { // finding user document in Users collection to update with newProject._id
      user.projects = user.projects.concat(newProject._id); // for some reason, user.projects.push(id) doesn't work, but array.concat works fine
      user.save();
    })
  });
};

var selectAll = function(username) { // returns the new user document with the projects now an array of project objects, rather than just ObjectIds

  return Users.findOne({username: username}).populate("projects").exec(function (err, projects) { // now, in place of just ObjectIds are actual project objects
    if (err) {return err}
  })
}

var updateProject = function(obj) { // currently not being used
  Projects.findByIdAndUpdate(obj._id, obj);
}

var selectAllCustomers = function() { // currently not being used by front end
  console.log("selectAllCustomers function");
  return Projects.find().select("customer");
};

//the ref in projects in this schema is used for population in the selectAll function
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Projects' }]
});

var Users = mongoose.model('Users', userSchema); // like Projects, is Users(capital) here, but users(lowercase) in the database

var createUser = function(obj) { // creates new user document/row in Users collection/table
  var newObj = {
    username: obj.username,
    password: obj.password,
  };

  var newUser = new Users(newObj);
  newUser.save();
}

var validateUser = function(obj) { // returns boolean, currently not being fully implemented, emulated on front end
  return Users.findOne({username: obj.username}, function(err, user) {
    if (err) return err;
    console.log("DB password is " + user.password);
    console.log("App password is " + obj.password);
    if (user.password == obj.password) {
      return true;
    } else {
      return false;
    }
  });
}

module.exports.selectAll = selectAll;
module.exports.createProject = createProject;
module.exports.selectAllCustomers = selectAllCustomers;
module.exports.updateProject = updateProject;
module.exports.createUser = createUser;
module.exports.validateUser = validateUser;
