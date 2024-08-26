// const user = {
//     name: 'John Doe',
//     age: 30,
//     gender: 'male',
//     isDev: true,
//     address:{
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//     },
//     hobbies: ["reading","writing","finance"],
//     getFullName: function(newName){
//         return this.name;
//     },
//     setFullName: function(newName){
//         this.name = newName;
//     },
//     getBio(){
//         return `I am ${this.name},I am ${this.age}years old,I am ${this.gender}, I am ${this.isDev ? 'developer' : 'designer' }`;
//     }
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))



// const {name,age,gender,isDev,hobbies,address} = user

// console.log(`${name},${age},${gender},${isDev},${hobbies[0]},${address.street}`);

// console.log(user['name'])
// console.log(user['age'])
// console.log(user['gender'])
// console.log(user['isDev'])
// console.log(user['hobbies'])
// console.log(user['hobbies'][0])
// console.log(user)

// console.log(user.name)
// console.log(user.age)
// console.log(user.gender)
// console.log(user.isDev)
// console.log(user.address.city)
// console.log(user.getBio())

// console.log(user.getFullName())
// console.log(user.setFullName('cherry'))
// user.gender = 'female'
// user.isDev = false
// console.log(user.getBio())
// console.log(user)


// const userLists = [
//     { id:1,name:"John",age:27,gender:"male" ,address:"Yangon",hobbies:['game','running']},
//     { id:2,name:"Jane",age:32,gender:"female",address:"Tokyo"},
//     { id:3,name:"Mike",age:35,gender:"male",address:"Seoul"},
//     { id:4,name:"Emma",age:28,gender:"female",address:"Osaka"},
//     { id:5,name:"David",age:40,gender:"male",address:"Delhi"},
//     {id:6,name:"Tom",age:40,gender:"male",address:"new York"},
//     {id:7,name:"Henry",age:33,gender:"male",address:"paris"},
//     {id:8,name:"rooney",age:22,gender:"male",address:"London"},
//     {id:9,name:"Terry",age:33,gender:"male",address:"manchester"}
// ]

// console.log(userLists)

// console.log(userLists[1].age)
// console.log(userLists[4].address)
// console.log(userLists[7].gender)
// console.log(userLists[8].id)
// console.log(userLists[0].hobbies)
// console.log(userLists[0].hobbies[0])


// console.log(userLists)
// let textFile = JSON.stringify(userLists) //store as jason
// console.log(textFile)


// let jsonData = JSON.parse(textFile) // as array
// console.log(jsonData)



const dice = {
    sides: 6,
    roll(count) {
        let a = [];
        let b = [];
        for(let i = 0;i<count;i++){
            let res = Math.floor(this.sides *(Math.random())) + 1;
            res <= 3 ? a.push(res) : b.push(res);
        }
        console.log("a result is =>" + a);
        console.log("b result is =>" + b);
        console.log(`a win ${a.length} `);
        console.log(`b win ${b.length}`);

        if (a.length === b.length) {
            document.write("Game is Draw")
    } else {
        if(a.length > b.length) {
            document.write("a winner")
        }else{
            document.write("b winner")
        }
    }
},
}

dice.roll(100)