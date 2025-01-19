"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.error("Invalid types");
    }
}
sum("15", "26");
sum(12, 35.5);
sum("20", 12);
// 2 - Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(`Soma: ${sum}`);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(`Multiplicação: ${multiply}`);
        }
    }
    else {
        console.log("Nenhum operador especificado");
    }
}
operations([1, 2, 3, 4, 5]);
operations([2, 4, 6, 8], "sum");
operations([5, 10, 15], "multiply");
//3 - Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver todos os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const megui = new Dog("Megui", "Pincher");
const bob = new Dog("Bob", "Poodle");
const bell = new Dog("Bell");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`Nome: ${dog.name}, Raça: ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD!");
    }
}
showDogDetails(megui);
showDogDetails(bob);
showDogDetails(bell);
