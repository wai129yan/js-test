// // Array

// let data = [ 1,2,"a","b","c","d","c",true,false]

// data[0] = "one"
// data [100] = "100"
// data[20] = 20
// console.log(data[0])
// console.log(data.length)
// console.log(data)

// let arr = ["apple", "banana", "orange", "grape", "watermelon"]

// //array destrcture
// //rest operator(...)

// let [a,b, ...c] = arr
// console.log (a,b)
// console.log(c)


// let fe = ['html','css',...[1,2,3,...['a','b','c'],4],'js','jsx','jquery']
// let be = ['php','nodejs',...[100,200,300,...['aa','bb','cc'],4],'ruby','python','go']

// let fs = [fe,be]

// console.log(fs)

// // spread operator
// let all = [...fe, ...be]
// console.log(all)

// console.log(fe[2][3][1])
// console.log(fe[2][4])
// console.log(fe[4])



// console.log(be[3])
// console.log(be[2][3][2])


// let arr = ["apple","banana","orange","grape","apple","water-melon"]
// console.log(arr.lastIndexOf("apple"))
// console.log(arr.fill("hello"))
// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr[0]))
// console.log(arr.includes("apple"))
// console.log(arr.indexOf("apple"))
// console.log(arr.splice(0,1))
// console.log(arr.splice(0,1, "pine-apple")) //replace the index 
// console.log(arr.splice(0,2))


let data = [];

data.push("bobo")
data.push("nono")
data.unshift("apple")
data.unshift("orange")
data.unshift("grape")
data.pop()
data.pop()
data.shift()
data.shift()


console.log(data)