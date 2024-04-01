/*
Questão 9: Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/

let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}
