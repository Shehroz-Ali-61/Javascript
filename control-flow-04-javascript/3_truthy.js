//------Nullish Coalescring Operator (??): Null Undefined------

let value;
// value = 11 ?? 10;
// value = null ?? 14;
// value = 20 ?? undefined;
// value = null ?? 20 ?? undefined;
value = show(5,2) ?? mul();

function show(num1,num2){
    return num1+num2;
}
function mul(){
    return 4+5;
}
console.log(value);


//false values: false, 0 , -0, "", null, undefined, NaN
// truely values: "0", 'false', " ", [], {}, function(){}


let email = "shehrozali@gmail.com";
if(email.length==0){
    console.log("plz enter email");
}
else{
    console.log(`email: ${email}`);
}


//------- Checking empty Object and Array -------
const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("Empty Object");
}

const emptyarry = [];
if(emptyarry.length === 0){
    console.log("Empty Array");
}





//------Terniary operator------
// condition ? true : false;
let price = 65;
price<100 ? console.log(`price ${price} less than 100.`) : console.log(`price ${price} greater than 100.`);
