//var is global variable

var a;
a = 100;
console.log(a)
var a = 300;
console.log(a)
{
    var a = "apple"
    console.log("inside a",a)
}
console.log("final a",a)

let aa;
aa = "apple"
aa = 200
console.log(aa)

let bb = "300"
console.log(bb)

const PI = 3.14;
console.log(PI)

// let & const are scope variables

let num1 = 100;
{
    let num1 = 40000;
    console.log('scope num1: ' + num1)
}

console.log('outside num1'.num1)


const num2 = 100;
{
    const num2 = 5000;
    console.log('const scope num2'. num2)
}

console.log(' const outside num2'.num2)