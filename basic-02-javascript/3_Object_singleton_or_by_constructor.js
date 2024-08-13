/*
    Object constructor <== Singelton maked in this object
*/

/*const tindder = new Object();
// const tindder = {};
tindder.id = "Bscsf21a123";
tindder.name = "Shehroz";
tindder.isLoggedIn = false;

console.log(tindder); */



///+++++++++ "Nusted Object" +++++++++ <<== we can use nusted object and access easily.
/*
const regularUser = {
    email: "rajout829@gmail.com",
    fullName: {
        UserfullName: {
            firstName: "Samm",
            lastName: "Chauhdry"
        }
    }
};
console.log(regularUser["email"]);
console.log(regularUser.fullName);
console.log(regularUser.fullName.UserfullName["lastName"]);
*/





const obj1 = {
    id: "126_A",
    name: "sammy king"
};
const obj2 = {
    age: 22,
    address: "Muridke"
};
const obj3 = {
    email: "@Yahoo.com",
    isLoggedIn: false
};
// >>>>>>>>>>>> Three way to combine all objects and access the object. <<<<<<<<<<<<<<<
const obj4_firstWay = { obj1, obj2, obj3}; // <== 1st way but logical error occur in this way. not a best way.
// console.log(obj4_firstWay);

const obj4_2ndWay = Object.assign({}, obj1, obj2, obj3); // <== 2nd Way to combine all objects. it's a Best but we will not use this.
// console.log(obj4_2ndWay);

const obj4_3rdWay = {...obj1, ...obj2, ...obj3}; // <= 3rd and best way to combile all objects. we will use spread for combine all objects.
console.log(obj4_3rdWay);