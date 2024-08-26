// Boolean, String,Number,NaN,null,undefined,Symbol
// // Primitive Data 
// Function,Array,Object 
// //Non-primitive

// var a = 100;
// var a = 2.5;
// var a = -2.5
// var a = "apple";
// var a = 'a';
// var a = `a`;
// var a = true ;
// var a;
// var a = Infinity ;
// var a = false - false;
// var a = false + true ;
// var a = [] == []
// var a = {} == {}
// var a = "a" + 2
// var a = "2" + 2
// var a = "2" - 2
// var a = "a" - 2
// console.log(typeof a,a); // Output: number
// var aa;
// console.log('aa', typeof aa); // Output:

// let arr = [];
// console.log ('arr', typeof arr,arr)

// let obj = {}
// console.log ('obj', typeof obj, obj)

// let fn = _ => _;
// console.log('fn', typeof fn, fn)


// let email = " Bobo@gmail.com";


// console.log(email[1])
// console.log(email.charAt(0))
// console.log(email.repeat(3))
// console.log(email.replace("gmail.com","@gmail.com"))
// console.log(email.includes('@'))
// console.log(email.trim().length)
// console.log(email.toLowerCase())
// console.log(email.length)
// console.log(email)

// let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt esse tenetur praesentium error consequuntur voluptatum, voluptas architecto minus sequi non."

// console.log(text.split(" ").length)



let text = "hello welcome developer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt esse tenetur praesentium error consequuntur voluptatum, voluptas architecto minus sequi non.";

console.log(text.slice(0,100))
console.log(text.slice(0,5))
console.log(text.slice(0,13))
console.log(text.slice(6,13))
console.log(text.substring(0,5))
console.log(text.substring(0,13))
console.log(text.substring(6,13))
console.log(text.substr(0,5)) //0 from 5 digit
console.log(text.substr(6,7))
console.log(text.substr(14,10))


let name = "bobo"
let age = 20
let gender = "male"
let isDev = true
console.log("name: " + name + " age: " + age + " gender: " + gender)

console.log(`name is ${name.toUpperCase()} and age is ${age - 2} and gender is ${gender} he is ${isDev ? "Developer" : "Designer"}`)
