const coding = ["java","python","cpp","ruby"];

coding.forEach(function (item){         //--- 1
    //console.log(item);
});

coding.forEach( (val) => {              //--- 2
    //console.log(val);
} )



function printme(item){
    console.log(item);
}
//coding.forEach(printme);              //---- 3




coding.forEach( (item, index, arr)=>{   //---- 4
    //console.log(item, index, arr)
} )




//--------- [{},{},{}]  => Object in Array => this is used in forEach loop ------------
const myCoding = [
    {
        mobileName: "Iphone",
        price: "3Lakh"
    },
    {
        mobileName: "Samsung A71",
        price: "81K"
    },
    {
        mobileName: "Infinik Hot10",
        price: "50K"
    },
    
];
myCoding.forEach((item)=>{
    // console.log(item);
    // console.log(item.mobileName);
    console.log(`${item.mobileName}:- ${item.price}`);
});