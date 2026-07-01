const user = {
    username: "Vansh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function two() {
//     let username = "vansh"
//     // console.log(this.username)
// }

// two()

// // const two = function () {
// //     let username = "vansh"
// //     console.log(this.username);
// }

// const two =  () => {
//     let username = "vansh"
//     // console.log(this.username);
//     console.log(this);
// }



// two()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "vansh"})

console.log(addTwo(3,4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()