/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript?
*/

let mes = 8; // Por exemplo, agosto

if (mes >= 1 && mes <= 2 || mes === 12) {
    console.log("Estamos no inverno.");
} else if (mes >= 3 && mes <= 5) {
    console.log("Estamos na primavera.");
} else if (mes >= 6 && mes <= 8) {
    console.log("Estamos no verão.");
} else if (mes >= 9 && mes <= 11) {
    console.log("Estamos no outono.");
} else {
    console.log("Mês inválido.");
}

