function one(){
    console.log("one connected");
    two();
}
function two(){
    console.log("Two connected");
}
function three(){
    console.log("Three connected");
}
one();
two();
three();