const pessoa = {
    nome: 'Theus',
    sobrenome: 'de Carvalho',
    idade: 21,
    endereco: {
        rua: 'ABC',
        numero: 123
    }
};

// atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);
