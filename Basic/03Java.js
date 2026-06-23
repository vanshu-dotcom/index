// object literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Vansh",
    "full name": "Vansh kumar",
    [mySym]:"mykey1",
    age: 17,
    location: "Dehli",
    email: "vansh@gmail.com",
    isloggedIn: false,
    lastloginDays:  ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mysym)


JsUser.email ="vansh@outlook.com"
// Object.freeze(JsUser) // freeze the object so that no changes can be made to it
JsUser.email ="vansh@google.com" // this will not work as the object is frozen
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JsUser")}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name }`);
}
console.log(JsUser.greeting()); // this will work as the function is added to the object
console.log(JsUser.greetingTwo());// this will work as the function is added to the object