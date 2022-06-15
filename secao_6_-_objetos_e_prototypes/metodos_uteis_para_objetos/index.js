/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {
    nome: 'produto',
    preco: 1.9
}

// metodos de copiar objetos

// const caneca = {
//     ...produto,
//     material: 'porcelana'
// };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });
// const caneca = { nome: produto.nome, preco: produto.preco };

// consultando propriedades

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'qualquer outra coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}