// 1 - Arrays

let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers[3]);

let nomes: string[] = ["Arthur", "Felipe"]

console.log(nomes[1])

const numeros: Array<number> = [100, 200, 300, 400]

numeros.push(500)

numeros.forEach(n => console.log(n));

// 2 - Parametros tipados

function soma(a: number, b: number): number {
    return a + b;
}

console.log(soma(15, 26));

//3 - Retorno de função

function greeting(name: string): string {
    //return 5;
    return `Hello ${name}`
}

console.log(greeting("Arthur"));

// 4 - Tipos de objeto

function passCoordinates(coord: { x: number, y: number}){
    console.log(`Coordenadas: x=${coord.x}, y=${coord.y}`);
}

const coordenadas = {x: 25, y:32}

passCoordinates(coordenadas);

// 5 - Union Types

function showBalance(balance: string | number){
    console.log(`Seu saldo é: ${balance}`);
}

showBalance("R$ 500.00");
showBalance(500)

// 6 - Type alias

type ID = string | number

function showId(id: ID){
    console.log(`O id é: ${id}`);
}

showId("12345")
showId(27486)

// 7 - Interfaces

interface Point {
    x: number;
    y: number;
    z: number;
}

function printPoint(point: Point){
    console.log(`Ponto: x=${point.x}, y=${point.y}, z=${point.z}`);
}

const coordObj: Point = {
    x: 10,
    y: 20,
    z: 30
}

printPoint(coordObj);

// 8 - non null assertions operators

const p = document.getElementById("some-p")

//console.log(p!.innerText)

// 9 - Bigint

let n: bigint

n = 1000n

console.log(n)
console.log(typeof n)

// 10 - symbol

const symbol1:symbol = Symbol("a")
const symbol2 = Symbol("a")

console.log(symbol1 == symbol2)
console.log(symbol1 === symbol2)