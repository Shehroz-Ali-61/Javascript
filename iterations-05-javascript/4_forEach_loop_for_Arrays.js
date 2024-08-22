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
    console.log(item, index, arr)
} )