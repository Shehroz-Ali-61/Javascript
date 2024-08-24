const courses = [
    {
        courseName: "Js course",
        price: 1500
    },
    {
        courseName: "Python course",
        price: 2000
    },
    {
        courseName: "Data science course",
        price: 2500
    },
    {
        courseName: "Artifical Intelligience course",
        price: 4000
    }
];

/*
const total = courses.reduce( (accumulater, currentValue) => {
        return accumulater + currentValue.price;
}, 0);
// ^---------- initial value
*/



let total = courses.filter( (item)=>{
    return item.courseName=="Js course";
    
})
.reduce((acc,item) => {
    return acc + item.price;
},0);

console.log(`Price: ${total}`);
