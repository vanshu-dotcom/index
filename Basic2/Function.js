
// function sayMyName(){
//     console.log("V");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
// }
// // sayMyName()

// // function addTwoNumbers(number1 ,number2){   //Perameaters
// //     console.log(number1 + number2);

// // }


// function addTwoNumbers(number1 ,number2){   //Perameaters
//     let result = number1 + number2
//     return result    // isko ek baar return karne k baad dubra kuch bhi return nhi karega , agr vo return result k uper h to vo print hoga 
// }

// const result = addTwoNumbers(3,5)

// console.log("Result:", result);


// // addTwoNumbers(4,5)
// // addTwoNumbers(4,"5")
// // addTwoNumbers(4,"a")
// // addTwoNumbers(4,null)  //Arguments


// // function loginUserMessage(username){
// function loginUserMessage(username = "sam"){
//     // if(username === undefined){
//     //     console.log("please enter a username");
//     //     return
//     // }
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("vansh"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("vansh"))


// function calculateCartPrice(...num1){
function calculateCartPrice( val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,400))

const user = {
    username: "vansh",
    // price: 199
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "vansh",
    price: 399
})


const myNewArray = [200,300,400,500]

function returnSecondValue(vansh){
    return vansh[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));