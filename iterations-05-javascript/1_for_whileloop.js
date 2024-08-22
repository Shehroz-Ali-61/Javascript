//---------- for loop -----------
for (let i = 1; i < 10; i++) {
    //.log(`outer number: ${i}`)
    for(let j = 1; j < 10; j++){
        //console.log(i+"*"+j+" = "+i*j);
    }
}

let newArray = ["Salman","Amir","Naveed","Tuqeer"];
// console.log(newArray.length);
for (let index = 0; index < newArray.length; index++) {
    const result = newArray[index];
    // console.log(result);
}



//---------- While loop -----------
let myarray = ["Shehroz","Salman","Hamza","Fawad"];
let k=0;
while(k < myarray.length){
    //console.log(`value of k: ${myarray[k]}`);
    k++;
}




//--------- Do While loop ---------
let score = 1;
do{
    //console.log(`current score: ${score}`);
    score = score + 1;
}while(score <= 20)





//--------- break and continue keywords ---------
for(let i = 0; i <= 15; i++){
    if(i == 4){
        console.log("value 4 Error Detected");
        continue;
    }
    if(i == 9){
        console.log("Breaked....");
        break;
    }
    console.log(`value of i ${i}`);
}