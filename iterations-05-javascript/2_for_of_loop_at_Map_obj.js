//----------- for of loop -------------
const array = ["Apple","Mango","Banana"];
for(let i of array){
    //console.log(i);
}

 

//------for of loop at Map Object -------
const map = new Map();
map.set("id",126);
map.set("Name","Shehroz");
map.set("Address","Lhr");
// console.log(map);

for(const [key, value] of map){
    // console.log(key , ":- ");
    console.log(key , ":- " , value);
}