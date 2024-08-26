const add = function (a,b){
    return a + b;
};

console.log(add(5,5));


const h1 = function()
{
    console.log("h1");
};
h1();

const sayHello = function (name,age) {
    console.log(`Hello ${name},you are ${age} years old`);
};
sayHello("bobo",20);

const add2 = (a,b) => a + b;
console.log(add(5,5));

const hi2 = () => "hi2" ;
console.log(hi2());

const add3 = (a, b) => "a + b";
