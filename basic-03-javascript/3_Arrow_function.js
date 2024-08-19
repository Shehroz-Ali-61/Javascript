// ++++++++++++++++ How to use "this" keyword in object +++++++++++++ Define Below
const user = {
    username: "Arslan Zahid",
    course: "Web developement",
    price: 999,
    welcome: function(){
        console.log(`${this.username} , welcome to enrollment in ${this.course}`);
        console.log(this);
         
    }
};
// user.welcome();
// user.username = "Iftkhar Hussain";
// user.welcome();
// console.log(this); // <== it gives us empty object.








// ++++++++++++++++ How to use "this" keyword in function +++++++++++++ Define Below
/* //----- 1st -----
function chai(){
    console.log(this);
}
chai();
*/


//----- 2nd ------
function chai(){
    const username = "Shehroz";
    console.log(this.username); // Note: "this" keyword cant't be access in function. it can access just in Object
    // console.log(username);
}
chai();


//-------- 3rd ------
const code = function() {
    const id = "A-126";
    console.log(this.id); // Note: Henced, "this" is also not access and give the proper response in function.
}
chai();






//++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++
const Arrow = () => {
    first_name: "Muhammad";
    last_name: "SAYAZ";
    console.log(first_name);
};
// Arrow();



//-----Explicit Return Function----- when we use "return" keyword in "{}" curly braces.
// ^-----Basic Arrow Function-----^
const addtwo = (num1, num2) => {
    return num1 + num2;
};
// console.log(addtwo(2,4));



// VVVVVVVVV Imp Function
// -----Implicit Return Function-----when we don't use "return" keyword and not curly braces. This functiono definition also declare in same line, not in prenthises.
// const sumtwo = (num1, num2) => num1 + num2;
// const sumtwo = (num1, num2) => (num1 + num2); both are same uper and This function declaration
const sumtwo = (num1, num2) => ({username: "Shehroz"});
console.log(sumtwo(7,4));
