//----------- for of loop -------------
const array = ["Apple","Mango","Banana"];
for(let i of array){
    //console.log(i);
}

//"NOTE": /"NOTE": for-of loop ky andr "key" or "value" dono sy he key or value access ki ja skti hai. yih zada tar Map() Object main Use hota hai

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