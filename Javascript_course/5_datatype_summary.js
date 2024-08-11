/*______________"primitive dataType"__________ ==> Call by Value
    7 Types: String, Number, Boolean, Null, Undefined, symbol, BigInt, ParsInt
*/

let score = 100;
let scoreValue = 100.3;
let inLoggedIn = false;
let outSideTemp = null;
let userEmail = undefined;

const id = Symbol("126");
const anotherId = Symbol("126");
//console.log(id === anotherId);


/*
____________"Reserence (Non Primitive DataType)"________==> Call by Reference
    Array, Objects, Functions, 
*/

const vehicals = ["Daweo","Hilux Dala","Civic","Sonata"]; // ==. Array
let person = {      // ==> Object
    name: "Shehroz_Ali",
    age: 22,
    address: "Muridke"
};
let mFunction = function(){     // ==> Function
    console.log("Hi Everyone");
};
console.log(typeof vehicals);
console.log(typeof person);
console.log(typeof mFunction);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________Memory Locate_____________________
// Stack(primitive type)  ,   Heap(Non-primitive type)

    // Stack(primitive type) ==> Call by Value and change in copy, not in original
var person_name = "Original American Beauty";  
let anotherName = person_name;
anotherName = "Copy Chines_Beauty";

// console.log(person_name);
// console.log(anotherName);


    //  Heap(Non-primitive type) ==> Call by Refference and change in original
var Person = {
    email: "shehrozrajout829@gmail.com",
    name: "Shehro_Ali",
    age: 22
};
let anotherPerson = Person;
anotherPerson.email = "Bscsf21a126@gmail.com";
console.log(Person.email);
console.log(anotherPerson.email);