// function hello (){

// }
// hello();

// function hi(){
//     console.log("hello");
// }
// hi();

// function hey(){
//     return "hey";
// }
// hey(); // call hey() output hey

// function res(){
//     let value = 455 + 555
//     //console.log(value);
//     return value;
// }
// res();

// //do only one function
// function red(){
//     document.bgColor = "red";
// }
// red();

// // helper function
// let computer = 2500 ;
// document.write("$-",computer)

// function usd(val){
//     console.log("$-", val)
// }
// usd(computer)

// function mmk(val,rate){
//     console.log(val * rate + " mmk")
// }
// // mmk(computer, 0000);

// function log(val){
//     console.log(val)
// }

// log("hello")
// log("world")


// function getInfo(name = "john doe",age=15,address="yangon")
// {
//     if (typeof name === "string" || typeof age === "number" || typeof address === "string") // return "datatype is incorrect";
//     {
//         console.log(`Name:${name},Age:${age},Address:${address}`)
//     }//return `Name:${name},Age:${age},Address:${address}`;
//     else{
//         console.log('Your Input Is Wrong');
//     }
// }

// getInfo ("bobo",20,"yangon");
// getInfo ("mgmg",30);



// const userList1 = [];

// function register (name,email,age,gender,password){
//     let newUser = {id:userList1.length +1 ,name,email, age,gender,password};
//     return userList.push(newUser);
// }
// register("bobo","bobo@gmail.com",20,"male","12345");
// register("mgmg","mgmg@gmail.com",20,"male","23445");

// // function login(email,password)
// // {
// //     for (let i= 0; i<userList.length;i++)
// //     {
// //         const user = userList[i];
// //         {
// //             if(user.email === email && user.password === password)
// //             {
// //                 return "login success";
// //             }
// //         }
// //     }
// //     return "Login Fail";

// // }

// function login(email,password)
// {
// for (const user of userList) {
//     if(user.email === email && user.password === password){
//         return "Login success";
//     }else{
//         return "Login Fail";
//     }
// }
// }

// console.log(login("bobo@gmail.com","12345"));
// console.log(login("bobo11@gmail.com", "12345"));

// // console.log(userList);

// const basket = [] ;
// function addToBasket (item,quantity){
//     for (const product of basket) {
//         if (product.item === item){
//             console.log(item ," is already added ");
//             return;
//         }   
//     }
//     basket.push({id:basket.length + 1,item,quantity});
//     console.log(item, " is added !")
// }

// addToBasket("apple",2);
// addToBasket("grape",3);
// addToBasket("pine-apple",4);
// addToBasket("apple",2);

// console.log("basket", basket);



console.log("******************");



const userList = [];
const sessionList = [];

function register(name, email, age, gender, password) {
    if (!name || !email || !age || !gender || !password) {
        return "All fields are required.";
    }
    //  
    if (userList.some(user => user.email === email)) {
        return "Email already registered.";
    }
    let newUser = { id: userList.length + 1, name, email, age, gender, password };
    userList.push(newUser);
    return `Registration successful. Welcome, ${name}!`;
}

function generateSessionToken() {
    return Math.random().toString(36).substr(2); // Simple token generation
}
console.log("test", generateSessionToken());

function login(email, password) {
    for (let user of userList) {
        if (user.email === email && user.password === password) {
            let sessionToken = generateSessionToken();
            sessionList.push({ userId: user.id, sessionToken });
            return `Login successful. Welcome, ${user.name}. Your session token is ${sessionToken}.`;
        }
    }
    return "Invalid email or password";
}

function logout(sessionToken) {
    const index = sessionList.findIndex(session => session.sessionToken === sessionToken);
    if (index !== -1) {
        sessionList.splice(index, 1);
        return "Logout successful.";
    }
    return "Invalid session token.";
}

console.log(register("John Doe", "john.doe@example.com", 25, "male", "password123"));
const loginMessage = login("john.doe@example.com", "password123");
console.log(loginMessage);
const sessionToken = loginMessage.split("Your session token is ")[1];
console.log(logout(sessionToken));


console.log("*******************")



class Cart {
    constructor() {
        this.items = [];
    }

    addItem(productName, quantity) {
        for (const product of this.items) {
            if (product.name === productName) {
                product.quantity += quantity;
                console.log(`${productName} quantity updated`);
            }
        }
        this.items.push({ id: this.items.length + 1, name: productName, quantity });
        console.log(`${productName} added to card!`);
    }

    displayCart() {
        console.log("Items in your cart:");

        this.items.forEach(item => {
            console.log(`- ${item.name}: ${item.quantity}`);
        });
    }
}

const cart = new Cart();
cart.addItem("Apple", 2);
cart.addItem("Grape", 3);
cart.addItem("Pineapple", 4);
cart.addItem("Apple", 3); // Apple quantity should be updated

cart.displayCart();


function car() {
    console.log("this is car")
}
console.log("hello");