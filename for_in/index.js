// for in -> lê os indices ou chaves de um objeto.

const frutas = ['maça', 'morango', 'uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'matheus',
    sobrenome: 'de carvalho',
    idade: 21
}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}