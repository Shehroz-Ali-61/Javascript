//----------- requirements fullfill by this below forEach process ---------------------
/*
const myNum = [1,2,3,4,5,6,7,8,9,10];
const arr = [];
myNum.forEach((num)=>{
    if(num>5){
        arr.push(num);
    }
})
console.log(arr);
*/



//------------------------ Filter -------------------------
// you can also use filter
const myNum = [1,2,3,4,5,6,7,8,9,10];
/*let my = myNum.filter( (num)=>{
    return num%2==0;                // there should be write "return" keyword due to impilict return.
}  ); */

let my = myNum.filter( (num)=> (num>5) ); // filter will return the values automatically due to explict return.

// console.log(my);







//---------------- Example of ForEach loop ---------------
// Q:- first we creat an objects in Array of employe and show the details.
const employe = [
    {
        id: 101,
        name: "Aman Hanif",
        department: "Computer Science Department",
        fall: 2021,
        degree: "BSCS"
    },
    {
        id: 102,
        name: "Husnain Alil",
        department: "Computer Science Department",
        fall: 2021,
        degree: "BSCS"
    },
    {
        id: 103,
        name: "Zain Haider",
        department: "Commerce Department",
        fall: 2021,
        degree: "BCOM"
    },
    {
        id: 104,
        name: "Azam Sultan",
        department: "Law Department",
        fall: 2020,
        degree: "LAW"
    },
    {
        id: 105,
        name: "Momina Tariq",
        department: "Commerce Department",
        fall: 2019,
        degree: "BBA"
    },
    {
        id: 106,
        name: "Hamza",
        department: "Computer Science Department",
        fall: 2020,
        degree: "BSCS"
    },
    {
        id: 107,
        name: "Aftkhar Butt",
        department: "Computer Science Department",
        fall: 2019,
        degree: "BSCS"
    },
    {
        id: 108,
        name: "Hamna Tariq",
        department: "English Department",
        fall: 2022,
        degree: "BS English"
    },
    {
        id: 109,
        name: "Abdul Mateen",
        department: "Commerce Department",
        fall: 2018,
        degree: "BBA"
    },
    {
        id: 110,
        name: "Hussnain Sial",
        department: "Law Department",
        fall: 2020,
        degree: "LAW"
    },
];

let students = employe.filter( (item)=> (item.name=="Husnain Alil") );
students = employe.filter((num)=>{
    return num.id>104 && num.department=="Commerce Department";
});
console.log(students);