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