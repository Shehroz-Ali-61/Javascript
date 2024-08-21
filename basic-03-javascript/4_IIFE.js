//--------IIFE (Immediately Invoked Function Expression)---------
// "NOTE:"there is necessary to end every IIFE


/*function run(){
    console.log(`DB CONNECTED`);
}
run();*/


//-----------Named IIFE-----------
(function run(){
    console.log(`DB CONNECTED`);
})();


// First () is used for Function Declaration. 2nd () is used for Execution as like when we call the function "chai();"
// Arrow function in IIFE
//-----------simple IIFE-----------
(
    () => {
        console.log(`DB NOT CONNECTED`);
    }
)();



(
    (name) => {
        console.log(`invalid username* ${name}`);
    }
)("shehroz");

