//Object----------------------------------------------------------
//Object is a collection of property 
//It contain key-value pairs
//In order to access property and to invoke the methods, we need to use dot(.) notaion.

const person = {
  name: 'Harry',
  lastName: 'Potter',
  age: 23,
  college: Hogwarts,
  married: false,
  friends: ['Hermione','Severus','Dumbuldore'],
  hogwartsgreeting(){
    console.log('welcome to Hogwarts Harry Potter');
  },
}
 console.log(person.name);
 console.log(person.married);
 console.log(person.friends[2]);
 person.hogwartsgreeting();
//we can assign the propertuy value 
const age = person.age;
console.log(age);
//we can reassign the value
person.friends[2] = 'Alfred';
console.log(person.friends[1]);


// String Properties and Methods--------------------------------

let txt = "Hello";
console.log(txt.length); //String property
console.log(txt.indexOf("e")); //String Methods

console.log(txt.trim().toLocaleLowerCase().startsWith("e"));
console.log(txt.slice(1, 2)); //2nd and 3rd value
console.log(txt.slice(-1, -3)); //last value and 2nd last value

// Tempelate Literals (ES6)----------------------------------
//(``) Backtick
//${}   Interpolation

console.log(`hello this is ${txt}`);
console.log(`hello let trip the string ${txt.toUpperCase()}`);



//Array Properties and Methods------------------------------

let nam = ["Hassan", "Qamar", "Adnan", "Qamar"];
let foodie = ["Pizza", "Burger", "Biryani"];

console.log(nam.length() - 1);
console.log(nam.concat(foodie));

// #unshift(Append at beginning of array)
// #shift(delete at the beginning of array)
// #push(append at the end of array)
// #pop(delete at the end of array)

console.log(nam.unshift("Biryani"));
console.log(nam.shift);
console.log(foodie.push("Momos"));
console.log(foodie.pop);

//splice(mutates original array)(both array are effected)

let word = ["a", "b", "c", "d", "e"];
let password = word.splice(2, 4);

console.log(word); // a,b
console.log(password); //c,d,e

//Array and For Loop--------------------------------------------

const fruits = ["apple", "Banana", "Orange", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Pass by value & Pass by Reference------------------------------
//Pass by value(Primitive Data Types)
//Pass by Reference(Object Data Types)

//Primitive Data Types: number, string, symbol, boolean, null, Not defined
//object: function, array, object

const num = 10;
let num2 = num;
console.log(num); // output will be 10
console.log(num2); // output will be 10

let person = { name: "bob" };
let person2 = person;
console.log(person); //output bob
console.log(person2); //output bob

person2.name = "suzy"; //reassigned to different value

console.log(person); //output suzy
console.log(person2); //output suzy

//pass by reference effect
//To Prevent this we use 'spread operator'  ES6
//person2 =  {...person}

//Falsy Values----------------------------------------------------------------
// "",'',``, NaN, Undefined, NULL, 0, -1, False


//Powerful Array Method--------------------------------------------------------
//forEach, map, reduce, filter, find


//forEach
//does not retun new array

const people = [
  { nameval: "Hassan", age: 30, add: "phulwari", id :1, salary:200 },
  { nameval: "Aman", age: 30, add: "Patliputra",id :2, salary:500 },
  { nameval: "Adnan", age: 28, add: "Haroon Nagar",id :3, salary:2800 },
  { nameval: "Zeeshan", age: 36, add: "Shanti Kunj",id :4, salary:800 },
];

people.forEach(function (items) {
  console.log(items);
});


//map
//returna  new array 
//does not change the size of array
//uses value form original array when making new one

const person = [
  { nameval: "Hassan", age: 30, add: "phulwari", id :1, salary:200 },
  { nameval: "Aman", age: 30, add: "Patliputra",id :2, salary:500 },
  { nameval: "Adnan", age: 28, add: "Haroon Nagar",id :3, salary:2800 },
  { nameval: "Zeeshan", age: 36, add: "Shanti Kunj",id :4, salary:800 },
];

const newPerson = person.map(function(item){
  return item.salary > 500 ;
});

const oldPerson =  person.map(function(item){
  return{
    namevalue : item.nameval.toLocaleUpperCase(),
    ageval: item.age > 30,
  };
});

const happyPerson = person.map(function(item){
  return  item.age > 20;
})


//filter
//Return a new Array
//can manipulate the size of new array
//return based on condition
//return empty array if conditon doesnt matches

let na = people.filter(function(a){
  return na.id == 2;
})
console.log(na[0].nameval)

const arr = people.filter(function (item) {
  return item.age <= 30;
});
console.log(arr);

const newArr = people.filter(function(item){
  return item.add === 'Shanti Kunj';
})
console.log(newArr);


//find
//return single instance(object)
//return first match
//if no match, retun Undefined
//great for getting unique values

const naming =  people.find(function(na){
   return na.age == 30; 
})
console.log(naming.name); //return first instance

const arr = people.find(function (nam) {
  return nam.nameval === "bob";
});

console.log(arr);

//reduce
//iterate and callback funtion
//reduce to single value: number, array, object
//1st parameter(acc): Total of all calculation
//2nd parameter(curr):current iteration value

const total = people.reduce(function (acc, curr) {
  console.log(`Total: ${acc}`);
  console.log(`Current Money: ${curr.salary}`);
  acc += curr.salary;
  return acc; 
}, 0); 

//very important syntax for reduce function
//return value need to be defined always either its number, object, array or anything
console.log(total);
