const myObj = {
    game1: "PUBG",
    game2: "Spiderman",
    game3: "Call of Duty"
};
//"Note:-" for of loop is not worked at Simple Objects
/*for(const [key, value] of myObj){
    console.log(key, ":-", value);
}*/


//"NOTE": "for-in loop" ky andr hamesha "key" sy he sab kuch access kiya jay ga. value sy object ki value nae melen gen.


//-------- For-in loop at Objects --------
const langObj = {
    py: "Python",
    js: "Javascript",
    cpp: "C++",
    swift: "Swift"
};
for(const key in langObj){
    // console.log(key + ":- " +langObj[key]);
    console.log(`${key} stand for ${langObj[key]}`);
}