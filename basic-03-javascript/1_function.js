function addTwoNumbers(number1, number2){
    /*let res = number1 + number2;
    return res;*/
    return number1 + number2;
}
let result =  addTwoNumbers(3 , 5);
// console.log("Result: ", result);



//++++++++++++++++++++++++++++++++++++++
function userloggedIn(username){
    return `${username} is Logged In`;
}
// console.log(userloggedIn('Shehroz'));



//++++++++++++++++++++++++++++++++++++++
function LoggedInMessage(username){
    /*if(username === undefined){
        console.log("Please enter username");
        return;
    }
    console.log(`${username} is logged in`);
        // else{
        //     console.log(`${username} is logged in`)
        // }
    */
   
    if(!username){
        console.log("Please enter username");
        return;
    }
    console.log(`${username} is logged in`);
}
LoggedInMessage("");
// LoggedInMessage("hamzakhan@gmail.com");





//+++++++++++++++++++++++++++++++++++++++++++
// Handel by Object
const user = {
    username: "Shehroz",
    price: 199
};
function handelObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}
// handelObject(user); // you can use this only or below method.
handelObject({      // Note: You can define Object in this call Function. as like this.
    username: "Hitesh",
    price: 259
});




//++++++++++++++++++++++++++++++++++++++++++
// Handel by Array
const newArray = [100, 150, 200, 340];
function returnSecondValue(getArray){
    return getArray[1];
    //return getArray[4];
}
/*newArray.push(120);
console.log(returnSecondValue(newArray)); */

// console.log(returnSecondValue(newArray)); // you can use this only or below method.
console.log(returnSecondValue([300, 269, 530])); 
// Note: You can define Array in this call Function. as like this.

