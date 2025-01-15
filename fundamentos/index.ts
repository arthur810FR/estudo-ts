// 1 - Numbers
let x: number = 10

x = 16;

console.log(x)
console.log(typeof x)

const y: number = 15.7323189

console.log(typeof y)
console.log(y.toPrecision(3))

// 2 - Strings

let firstName: string = "Arthur";
console.log(firstName.toUpperCase())
console.log(typeof firstName)

let lastName: string = "Francisco";
console.log(lastName.toUpperCase())
console.log(typeof lastName)

const fullName: string = firstName + " " + lastName
console.log(fullName)

// 3 - Booleans

let isStudent: boolean = true;
console.log(isStudent)
console.log(typeof isStudent)

isStudent = false;

console.log(isStudent)

// 4 - Inferences e annotations

let ann: string = "Testando";
let inf = "Testando2"