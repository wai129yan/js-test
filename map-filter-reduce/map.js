const userLists = [
    { id: 1, name: "John", age: 27, gender: "male", address: "Yangon", hobbies: ['game', 'running'] },
    { id: 2, name: "Jane", age: 32, gender: "female", address: "Tokyo" },
    { id: 3, name: "Mike", age: 35, gender: "male", address: "Seoul" },
    { id: 4, name: "Emma", age: 28, gender: "female", address: "Osaka" },
    { id: 5, name: "David", age: 40, gender: "male", address: "Delhi" },
    { id: 6, name: "Tom", age: 40, gender: "male", address: "new York" },
    { id: 7, name: "Henry", age: 33, gender: "male", address: "paris" },
    { id: 8, name: "rooney", age: 22, gender: "male", address: "London" },
    { id: 9, name: "Terry", age: 33, gender: "male", address: "manchester" }
]


let name = userLists.map(u => u.name)
console.log(name)

let age = userLists.map(u => u.age)
console.log(age)

let userData = userLists.map(u => `${u.name},${u.address},${u.gender}`)
console.log(userData)

let male = userLists.filter(u => u.gender == 'male')
console.log('male',male)

let female = userLists.filter(u=>u.gender !== 'male').map(u=>u.name)
console.log('female',female)


let cart = [200,3000,45000,3000,1000,6500]
let total = cart.reduce((acc,item) => acc + item,0)
console.log('total',total)