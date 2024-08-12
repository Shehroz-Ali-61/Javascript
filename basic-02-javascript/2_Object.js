/*
    Two ways by which declare the Object.
    1. Object Literals      <== singleton does not created in this object
    2. Object Constructor   <== singleton created in this object
*/

// Object Literals
const mySmybol = Symbol("key1");

const person = {
    name: "Shehroz",
    "Nationality": "Pakistani",
    [mySmybol]: "126-E",
    age: 22,
    address: "Lahore",
    email: "sh829@gmail.com",
    game: function(){
        console.log("Game Changer the House Baby")
    }
};
            // Two way of access to Object Literals.
// console.log(person.name);       // First Way
// console.log(person["age"]);     // 2nd Way
// console.log(person["address"]);
// console.log(person.Nationality);
// console.log(person["Nationality"]);
// console.log(person[mySmybol]);
// console.log(typeof person[mySmybol]);

person.email = "PU@Yahoo.com";
// console.log(person);

// "Note":
//++++++++ we can freeze our object so that k koe or hamary Object main changing na kr sky oska syntex kuch is trhan hai
// Object.freeze(person);
person.email="YahuBaba.com";
// console.log(person); // No Changing in email of person Object by using Freeze

console.log(person.game);
console.log(person.game());

person.portfolio = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(person.portfolio());