// filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.

// retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // utilizando uma função de callback
// // function callbackFunction(valor, indice, array) {
// //     return valor > 10;
// // }
// // const maioresQue10 = numeros.filter(callbackFunction);

// // simplificando a função de callback
// // function callbackFunction(valor) {
// //     return valor > 10;
// // }
// // const maioresQue10 = numeros.filter(callbackFunction);

// // transformando em função anonima
// // const maioresQue10 = numeros.filter(function (valor) {
// //     return valor > 10;
// // });

// // transformando em arrow function
// // const maioresQue10 = numeros.filter((valor) => {
// //     return valor > 10;
// // });

// // arrow function final.
// const maioresQue10 = numeros.filter(valor => valor > 10);

// console.log(maioresQue10);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasComMaisDe50Anos);

const pessoasTerminandoComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminandoComA);