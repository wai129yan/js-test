const userLists = [
    { id:1,name:"John",age:27,gender:"male" ,address:"Yangon",hobbies:['game','running']},
    { id:2,name:"Jane",age:32,gender:"female",address:"Tokyo"},
    { id:3,name:"Mike",age:35,gender:"male",address:"Seoul"},
    { id:4,name:"Emma",age:28,gender:"female",address:"Osaka"},
    { id:5,name:"David",age:40,gender:"male",address:"Delhi"},
    {id:6,name:"Tom",age:40,gender:"male",address:"new York"},
    {id:7,name:"Henry",age:33,gender:"male",address:"paris"},
    {id:8,name:"rooney",age:22,gender:"male",address:"London"},
     {id:9,name:"Terry",age:33,gender:"male",address:"manchester"}
 ]

//  for(let i = 0; i < userLists.length; i++)
//  {
//     const user = userLists[i];
//     if (user.gender == "male"){
//         console.log(`MR.${user.name} ${user.age} ${user.gender}`)
//     }else{
//         console.log(`MRs.${user.name} ${user.age} ${user.gender}`)
//     }
    
//  }

// userLists.forEach(user=>{
//     console.log(user)
//     console.log(`{${user.name} ${user.age} ${user.gender}`)
//     const { name,age,gender,address } = user
//     console.log(name,age,gender,address)
// });

// console.log("********************")

// userLists.forEach(({name,age,gender,address}) => {
//         console.log(name,age,gender,address)
//     });

// for in 

for(const key in userLists){
    console.log(userLists[key]);
    // let user = userLists[key];
    // console.log(user.name,user.age)

}

let user1 = { id: 9, name: "Terry", age: 33, gender: "male", address: "manchester" }

for ( const key in user1) {
    console.log(`key is ${key} value: ${user1[key]}`)
}

for ( const user of userLists) {
    console.log(user)
    const {name,age} = user
    console.log(name,age)
}

for(const{name,age,gender,address}of userLists){
    console.log(name,age,gender,address)
}



// destructure
// const{name,age,gender,address} = userLists
// console.log(name,age,gender,address)


//  console.log(`${id[0].name}`)

// json data
// let user = JSON.stringify(userLists) //store as jason
// console.log(user)

// let json = JSON.parse(user)
// console.log(json)