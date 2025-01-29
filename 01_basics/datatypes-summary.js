// Primitive

// 7 types: String, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false

let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const BigInteger = 13972385485n

//Reference type(non primitive)

// Array, objects, function

const heros = ["shaktiman", "superman"];
let myObj = {
    name: "Sunny",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);
