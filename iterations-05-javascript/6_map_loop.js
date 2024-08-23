//NOTE: "filter" is used for return only True False and "map" is used for arithmetacion and "forEach" & "map" both are use for conditions and for more other operations.
//---------- map -----------
const myNum = [1,2,3,4,5,6,7,8,9,10];
let newNum = myNum.map((num)=>(num*2));

// console.log(newNum);





//-------------- Chaining ------------------------
const numbers = [1,2,3,4,5,6,7,8,9,10];
let result = numbers
                .map((num)=>num+10)
                .map((num)=>(num*2))
                .filter((num)=>{
                    return num>25 && num<35;
                });
console.log(result);
