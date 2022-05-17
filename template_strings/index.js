/*
Matheus de Carvalho tem 22 anos, pesa 80 kg
tem 1.70 de altura e seu IMC é de XXXX
Matheus nasceu em 2000
*/

const nome = "Matheus";
const sobrenome = "de Carvalho";
const idade = 22;
const peso = 80;
const altura = 1.70;
let imc = peso / altura**2;
let anoNascimento = 2022 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);