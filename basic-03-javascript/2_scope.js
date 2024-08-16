/*let a = 10;
const b = 20;
var c = 30;*/
/*
let a = 200;
var c = 30;
if(true){
    let a = 10;
    const b = 20;
    var c = 65;
    console.log("a:",a);

}
console.log(a);
console.log(c);

// console.log(`${a} , ${b} , ${c}`);   */







//++++++++++++++++ Scope of the Function +++++++++++++
function user(){
    const username = "Shehroz";
    function id(){
        const rollno = 126;
        console.log(username);
    }
    // console.log(rollno);
    id();
}
// console.log(username);
user();







//++++++++++++++++ Scope of Conditional statement +++++++++++++
if(true){
    const name = "SYAZ";
    if(name === "SYAZ"){
        const password = "sayaz829";
        console.log(name);
    }
    // console.log(password);
}
// console.log(name);




//++++++++++++++++ Many way of Function Declaration ++++++++++++++++++
console.log(addone(5));
function addone(number){
    return number + 1;
}
// addone(5);


console.log(addtwo(7)); // <== There are error. Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2;
}
// console.log(addtwo(7));