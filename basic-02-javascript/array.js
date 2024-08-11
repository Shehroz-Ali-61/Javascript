const array = ["pakistan",1947,"National Country"];
// for(var i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// console.log(array[2]);


//_______ There are many way to declare the Array _______
const newarray = new Array("shehroz",22,"Muridke");
// console.log(newarray[2]);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++ Array Methods +++++++++++

newarray.push("shakh");
// newarray.pop();
// console.log(newarray);

// newarray.unshift(126); // this method is used for insert any element in first index
// newarray.unshift("id"); // act same as push() at first index
// newarray.shift();  // act same as pop() from first index
// console.log(newarray);


var myarray = newarray.join();
// console.log(newarray);
// console.log(myarray);



//>>>>>>>>>>>>>>>> Two another Methods <<<<<<<<<<<<<<<<<
// slice , splice methods
const changeArray = new Array(3,7,12,16,21,27,31);
console.log("A: ",changeArray);
const sliceArray = changeArray.slice(0, 4); // ==> slice(0,3) in this method print the value from 0 to 3 but skip index 3 value.
console.log("sliced: ",sliceArray);
console.log("B: ",changeArray);
const spliceArray = changeArray.splice(0, 4); // ==> in splice(0,3) in this method print the value from 0 index to 3 index and no skip 3rd index.
console.log("spliced: ",spliceArray);       // and sliced value will be removed from main array and won't show in main Array.
console.log("C: ",changeArray);