const name = "Shehroz";
const age = 22;
// console.log("My Name: "+name+" and "+" my age is "+age); ==> Old syntex


// Note: we use all content in `` backticks and use dollar sign for given any variable.
console.log(`My name is ${name} and my age is ${age}`);// <<=== it is called "string inerpolation".



const webName = new String("Pubg");
// console.log(webName);
// console.log(webName[2]);
// console.log(webName.__proto__);




let newString = webName.substring(0,3);
console.log(newString);

let anotherString = webName.slice(-3,4); // slice ko apni marzi ky mutabak Text show krwany k liy use krty hn. jase k start sy e word ko miss krwana or jetna text chaiye serf otna he show krwana by start and end number of key od every letter.
console.log(anotherString);

let newStringOne = " Pakistan Zindabad kasmheer bnyga pakistan   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() is used for delete extra space

let url = "https://tokenHub.com/Name%20Shehroz";
console.log(url);
console.log(url.replace("%20","-")); // replace(search value, replace value) is used for replacement the value by searching to change value.
console.log(url.includes("Shehroz")); // include(searching value) check krta hai k kya searching value string main available hai?

// var spaceWord =  newStringOne.split(" ");
// console.log(spaceWord[3]);
console.log(newStringOne.split(" "));




const gameName = {
    name: "Pubg",
    version: 32.2
};
// console.log(gameName.name);
// console.log(gameName.name.length);
// console.log(gameName.name.charAt(2));
// console.log(gameName.name.toUpperCase());

