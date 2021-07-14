// //JSON...fields with inverted quomas
//WEDNESDAY MORNING CODE

// var users = [
//   {
//     firstName: "john",
//     lastName: "Smith",
//     email: "johnsmith@gmail.com",
//     loggedIn: false,
//     level: 3,
//   },
//   {
//     firstName: "Alex",
//     lastName: "Sm1",
//     email: "Alexsmith@gmail.com",
//     loggedIn: true,
//     level: 2,
//   },
//   {
//     firstName: "Bob",
//     lastName: "Smithss",
//     email: "bobsmith@gmail.com",
//     loggedIn: false,
//     level: 5,
//   },
//   {
//     firstName: "Charlie",
//     lastName: "Smithdfdfdfd",
//     email: "charliesmith@gmail.com",
//     loggedIn: false,
//     level: 1,
//   },
// ];

// // console.log(users[2].firstName); //.notation
// // console.log(users[2]["firstName"]); //arrray notation

// // users.forEach(function (user) {
// //   console.log(user["email"].toUpperCase());
// //   console.log(user.email.length);
// // });

// // var obj = { name: "Keyin" };

// //getter setter

// // console.log(obj.name); // getting
// // obj.name = "New Foundland"; //setter property
// // console.log(obj.name);

// // obj.location = "NL"; //setter has setup another field
// // obj.category = 4;
// // console.log(obj);

// // obj.location = null;
// // console.log(obj);
// // delete obj.location;
// // console.log(obj);

// // Object Oriented Programming - Class - Objects -Constructors - getters  - setters

// var data = [
//   {
//     firstName: "Charlie",
//     lastName: "Smithdfdfdfd",
//     email: "charliesmith@gmail.com",
//     loggedIn: false,
//     level: 1,
//     hobbies: ["reading", "soccer"],
//     pref: {
//       color: "red",
//       width: 1024,
//     },
//     score: null,
//   },
//   {
//     firstName: "John",
//     lastName: "johnhdfdfdfd",
//     email: "charliesmith@gmail.com",
//     loggedIn: false,
//     level: 1,
//     hobbies: ["reading", "soccer"],
//     pref: {
//       color: "green",
//       width: 1024,
//     },
//     score: null,
//   },
// ];

// //console.log(data[0].hobbies[0]);

// console.log(data[1].pref.color);
// console.log(data[0].pref["color"]);

// user = {
//   firstName: "Charlie",
//   lastName: "Smithdfdfdfd",
//   email: "charliesmith@gmail.com",
//   loggedIn: false,
//   level: 1,
//   hobbies: ["reading", "soccer"],
//   pref: {
//     color: "red",
//     width: 1024,
//   },
//   score: null,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user.loggedIn);
// console.log("--------------");
// user.login();
// console.log(user.loggedIn);
// user.logout();
// console.log("--------------");
// console.log(user.loggedIn);

//4:30 OPTIONAL TUTORIAL...

//AFTERNOON CODE FOR WEDNESDAY

// console.log(user.pref.color.toUpperCase());

//Constructor ...if a function starts with capital letter IT IS CALLED CONSTRUCTOR IN JS

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// var john = new User("John", "Smith"); //"this" represents john here!

// console.log(john.firstName);
// console.log(john.lastName);

// var bob = new User("Bob", "Smith"); //"this" represents bob
// console.log(bob.firstName);
// console.log(bob.lastName);

// function User(a, b) {
//   this.name = a;
//   this.lname = b;
//   this.address = "St. John";
//   this.student = "Keyin";
//   this.loggedIn = false;
//   this.pref = { color: "Red", width: 1024 };
//   this.hobbies = ["Reading", "Writing"];
//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let obj1 = new User("abd", "xyz");
// let obj2 = new User("xyz", "abc");

// var myObj = new User("Evan", "Murphy");
// console.log(`the address of ${myObj.name} is ${myObj.address}`);
// myObj.address = "Kitchener";
// console.log(`the address of ${myObj.name} is ${myObj.address}`);
// var myObj2 = new User("Tyler", "Downey");
// console.log(myObj2.name);
// console.log(myObj2.lname);
// console.log(myObj2.address);
// console.log(myObj.student);

// var chris = new User(1, 2); //??? YES
// console.log(chris.name);
// console.log(chris.lname);

// var myObj1 = new User();
// console.log(myObj1.name);
// console.log(myObj1.lname);

// var evan = new User();

// console.log(evan.name);
// console.log(evan.lname);

// var chris = new User();
// consoel.log(chris.name);
// consoel.log(chris.lname);

function User(a) {
  this.name = a;
  this.lname = "Last Name";
  this.address = "St. John";
  this.student = "Keyin";
  this.loggedIn = false;
  this.pref = { color: "Red", width: 1024 };
  this.hobbies = ["Reading", "Writing"];
  this.login = function () {
    this.loggedIn = true;
  };
  this.logout = function () {
    this.loggedIn = false;
  };
}

var evan = new User("Atique");
console.log(evan.name);

// var evan = new User("Evan", "Murphy");
// evan.login();
// console.log(evan);
// evan.logout();
// console.log(evan);
// var evan = new User("Evan", "Murphy", "ABC");
// console.log(evan.student);

console.log("hello git");
