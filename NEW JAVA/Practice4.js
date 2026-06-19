//  Primetive

//  7 types : string, number, Boolearn, Null, Undifined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

// console.log(id === anotherId);


const bigNumber =  34258664675858

// Refrence (Non Primetive)

// Array, Objects, Functions

const heros =  ["shaktiman" , "naagraj", "doga"];
let myObj = {
    name: "vansh",
    age: 17
}
const myfunction = function(){
    console.log("Hello World")
}
console.log(typeof  bigNumber)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubename = "vanshkumardotcom"

let anothername = "myyoutubename"
anothername = "flareFx"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
  
let userTwo = userOne

userTwo.email = "vansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
