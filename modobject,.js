//object----------------------------------------------------
//Nested Object---------------------------------------------
//set variable as property value----------------------------
//dot notation vs bracket notation--------------------------

const colour = "white"; //set variable
let rand = "random-value";

const car = {
  carName: "chervolet",
  engine: "232GTY456",
  colour: colour, //property value
  carConfiguration: {
    //nested object
    chassis: "AWW33YYYIO",
    drive: "4wheeldrive",
    seater: "6 seater",
  },
  cargreeting: function () {
    console.log(`Hello I am Mercedes${carName}`);
  },
  "random-value": "random", // other way to define property
};

console.log(car.carName);
console.log(cargreeting());
console.log(car["random-value"]); //bracket notation//accessing property
console.log(car[rand]); //accessing variable to access property
console.log(car["engine"]);

//this----------------------------------------------------------
//points to the left of the dot---------------------------------

const bob = {
  firstName: "Hassan",
  lastName: "Qamar",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

bob.fullName(); //point to the 'bob object'

/*In Regular Function (not arrow) "this"
determined by how a function is invoked (left of .)
default to global -  window object */

function showThis() {
  console.log(this);
}

const john = {
  fullName: "Hassan Qamar",
  showThis: showThis,
};

const bob = {
  fullname: "Adnan Qamar",
  showThis: showThis,
};

bob.showThis(); // bob object
john.showThis(); // john object
showThis(); // window object

//Blue Print
//Factory Function & Constructor Function
//Factory Function
//new - creates new object, points to it , omit return

const bob = {
  firstName: "Hassan",
  lastName: "Qamar",
};

const suzy = {
  firstName: "Suzy",
  lastName: "Potter",
};

const harry = {
  firstName: "Harry",
  lastName: "Potter",
};

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`my full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const name1 = createPerson("Adnan", "Qamar");
const name2 = createPerson("hassan", "Qamar");
const name3 = createPerson("Zeeshan", "Qamar");

//new----------------------------------------------

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  };
}

const Hassan = new Person("Hassan", "Qamar");
const Aman = new Person("Aman", "Kumar");

//as we know 'this' usually point to global object if not defined, so in order to
//prevent that 'new' is used so that it point to current object as defined here as
//'Hassan object' and 'Aman Object'
const Hassan = Person("Hassan", "Qamar");
//if we dont use 'new' keyword, 'this' will point to window object and will send error.

//Constructor Property------------------------------
//All objects in javascript has access to constructor property that returns a
//constructor function that created it.
//build in constructor function
//arrays and fucntions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React `
    );
  };
}

const pluto = new Person("pluto", "plutonium");
console.log(pluto.constructor);

const mercury = {};
console.log(mercury.constructor); // object constructor

const jupiter = function () {};
console.log(jupiter.constructor); //function constructor

const mars = [];
console.log(mars.constructor); // array constructor

const earth = pluto.constructor("earth", "heaven");
earth.fullName();

//Prototype Property-------------------------------------

function Account(name, Initialbalance) {
  this.name = name;
  this.balance = Initialbalance;
  //this.deposit = function (amount) {
  //  this.balance += this.amount;
  //  console.log(`Hello ${this.name}, your balance is ${this.balance} `);
  // };
}

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += this.amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance} `);
};

const John = new Account("john", 200);
const Bob = new Account("bob", 0);

John.deposit(1400);
Bob.deposit(350);

//Property Lookup ----------------------------------------------
/* if child does not have to ask parent 
Eveything in JS is an Object */

function Account(fullName, initialBalance) {
  this.name = fullName;
  this.balance = initialBalance;
  this.bank = `J P Morgan Chase`;
}

Account.prototype.bank = "Bank of America";

const Earth = new Account("Hassan Qamar", 2000);
console.log(Earth.bank);
//bank will  be 'J P Morgan Chase'
//Prototype is diffent from instance, first preference to instance of object

/*ES6 Classes- Syntactic Sugar----------------------------------------------- 
Prototypal Inheritance*/
