"use strict";
// 1 - Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);
let nomes = ["Arthur", "Felipe"];
console.log(nomes[1]);
const numeros = [100, 200, 300, 400];
numeros.push(500);
numeros.forEach(n => console.log(n));
// 2 - Parametros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(15, 26));
//3 - Retorno de função
function greeting(name) {
    //return 5;
    return `Hello ${name}`;
}
console.log(greeting("Arthur"));
// 4 - Tipos de objeto
function passCoordinates(coord) {
    console.log(`Coordenadas: x=${coord.x}, y=${coord.y}`);
}
const coordenadas = { x: 25, y: 32 };
passCoordinates(coordenadas);
// 5 - Union Types
function showBalance(balance) {
    console.log(`Seu saldo é: ${balance}`);
}
showBalance("R$ 500.00");
showBalance(500);
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId("12345");
showId(27486);
function printPoint(point) {
    console.log(`Ponto: x=${point.x}, y=${point.y}, z=${point.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
printPoint(coordObj);
// 8 - non null assertions operators
const p = document.getElementById("some-p");
console.log(p.innerText);
