"use strict";
// 1 - Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);
let nomes = ["Arthur", "Felipe"];
console.log(nomes[1]);
const numeros = [100, 200, 300, 400];
numeros.push(500);
numeros.forEach(n => console.log(n));
// 2 - parametros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(15, 26));
//3 - retorno de função
function greeting(name) {
    //return 5;
    return `Hello ${name}`;
}
console.log(greeting("Arthur"));
