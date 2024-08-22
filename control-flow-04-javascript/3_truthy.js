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



//------Terniary operator------
// condition ? true : false;
let price = 65;
price<100 ? console.log(`price ${price} less than 100.`) : console.log(`price ${price} greater than 100.`);
