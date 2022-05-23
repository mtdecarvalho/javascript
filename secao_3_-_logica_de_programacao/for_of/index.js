const pessoa = {
    nome: 'Theus',
    sobrenome: 'de Carvalho'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// for clasico -  geralmente com iteráveis (arrays ou strings)
// for in - retorna o índice ou chave (strings, arrays ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)

// const nome = ['Matheus', 'de Carvalho'];

// console.log('####');
// console.log('for classico');
// console.log('####');

// for (let i = 0 ; i < nome.length ; i++ ){
//     console.log(nome[i]);
// }

// console.log('####');
// console.log('for in');
// console.log('####');

// for (let i in nome) {
//     console.log(nome[i]);
// }   

// console.log('####');
// console.log('for of');
// console.log('####');

// for (let valor of nome) {
//     console.log(valor);
// }

// console.log('####');
// console.log('for each');
// console.log('####');

// nome.forEach( (valor, indice, array) => console.log(valor, indice, array) );