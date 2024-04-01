/*
Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript?
*/

let idade = 25;

if (idade <= 2) {
    console.log("Bebê");
} else if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

