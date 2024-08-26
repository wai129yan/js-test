let num1 = 100;
let num2 = "100"
let num3 = 500

if(num1 === num2) {
    console.log("true")
}else{
    console.log("false")
}

// ternary operator

let result = num1 == num2 ? "Yes": "No"
console.log(result)

let result2 = num1 < num3 ? "Yes" : (num2 > num3 ? "Yes" : "No")
console.log(result2)


let photo = "user.png"
let result3 = photo ?? "dummy.png"
console.log(result3)


let day = new Date().getDay()
console.log(day)
switch (day) {
    case 0:
    case 6:
        console.log("Today is WeekEnd")
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Today is WeekDay")
        break;
        default:
            console.log("wrong day")
            break;
}

let month = new Date().getMonth()
console.log(month)