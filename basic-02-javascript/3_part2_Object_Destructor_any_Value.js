const course = {
    courseName: "Javascript",
    price: "999$",
    courseInstructor: "Shehroz"
};
/*  NOTE:   "yih bar bar course.agy name likh ky call krwana ek acha impact nahi hai. is ko bahter bnany k liy ham all Value to Destructor kr skty hn or wo sab sy easy method hai".
console.log(course.courseName);
console.log(course.price);
console.log(course.courseInstructor);
*/

//De-structoe the value which you want to call.
//  Destructor VALUE in curly brasess
//                  ||        
const {courseName, price, courseInstructor: Teacher} = course;
//                               Object Name-------------^
console.log(`Course Name: ${courseName}`);
console.log(price);
console.log("Instructor Name: " + Teacher);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++ " APi " +++++++++++++++++++++++++++ << API Calling
// API will be always treat as a JSON. JSON method is written below. JSON is also an Object.
/*
    {
        "name": "Hitesh",
        "age": 22,
        "address": "LAHORE",
        "isLoggedIn": false

    }
*/

// JSON can be in Arry.
[
    {},
    {},
    {}
]

