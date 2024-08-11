let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);



// let myCreateDate = new Date(2022,0,16);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2022,0,16,11,3,15);
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-24"); //  "yy/mm/dd"  <=== formate
// console.log(myCreateDate.toLocaleString());


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(`${newDate.getFullYear()} is current year `);

// newDate.toLocaleString("default",{
//     weekday: "long"
// })

console.log(newDate.toLocaleString("default",{
    weekday: "long",
    dayPeriod: "short"
}));
