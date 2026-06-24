//const tinderUser = new Object();
const tinderUser = {}

    tinderUser.id = "123abc"
    tinderUser.name = "Vansh"
    tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "vansh@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Vansh",
            lastName: "Kumar"
        }   

    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {3: "c", 4: "d"}

// const obj3 = { obj1,obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) // this will merge the two objects into one object

const obj3 = {...obj1, ...obj2} // this will merge the two objects into one object
// console.log(obj3);


const users = [
    {
        id: [1],
        email: "vansh@gmail.com"    
    },
    {
        id: 1,
        email: "vansh@gmail.com"    
    },
    {
        id: 1,
        email: "vansh@gmail.com"    
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this will return an array of keys of the object
// console.log(Object.values(tinderUser)); // this will return an array of values of the object
// console.log(Object.entries(tinderUser)); // this will return an array of key value pairs of the object

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this will return true if the object has the property name




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vansh"
}

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);
