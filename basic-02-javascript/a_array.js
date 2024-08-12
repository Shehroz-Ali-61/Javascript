/*
    There are some methods that are used in array
    1. puush() => push one array into another array. and show in nusted array.
    2. concat() =>concate one array in another array and show all values of both array in one array.
    3.  ...arrayNAme => "..." it is a "spread" that will be used for spread all array in one array.
    4. flat(depth number) => 
*/

const indian_Heros = ["Akshy Kumar","Salman Khan","Sunny Leon"];
const pak_Heros = ["Imran Abas","Danish Tamoor","Aleeza Shah"];
const funny_Heros = ["Aftkhar Thakur","Aiza Khan", " Naseem Viki"];

// indian_Heros.push(pak_Heros);
// console.log(indian_Heros);
// console.log(indian_Heros[3][2]);

// const all_Heros = indian_Heros.concat(pak_Heros); // combine one array with anothr array.
// console.log(all_Heros); 


const new_all_heros = [...indian_Heros, ...pak_Heros, ...funny_Heros];
// console.log(new_all_heros[4]);
// console.log(new_all_heros);

const Heros_Array = [1,2,3,[4,5,6],7,8,[3,4,[5,6,7]]];
// console.log(Heros_Array.flat(Infinity)); // flat(depth number) show nusted nusted array in one array.
// console.log(Heros_Array.flat(Infinity)[8]);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++ Data Scraping +++++++++++++++++++++++
console.log(Array.isArray("Hamster"));
console.log(Array.from("Hamster")); // from() is use for converting into array and return value in array.
console.log(Array.from({ name: "Hamster"})); // return empty. don't conver object into array.

let score1 = 100;
let score2 = 200;
let score3 = "Hamster";
// console.log(Array.of(score1, score2, score3));


let car = Array.of(score1, score2, score3);
console.log(car[2]);