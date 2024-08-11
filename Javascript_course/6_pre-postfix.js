let x = 3;
const y = x++;  // postfix

console.log("x:"+x+", "+"y:"+y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  // prefix

console.log("a:"+a+", "+"b:"+b);
// Expected output: "a:4, b:4"