function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // define o valor da chave
        writable: false, // pode alterar o valor?
        configurable: false // configurável?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // define o valor da chave
            writable: true, // pode alterar o valor?
            configurable: true // configurável?
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // define o valor da chave
            writable: true, // pode alterar o valor?
            configurable: true // configurável?
        },
    })
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 1000;
delete p1.estoque;

console.log(p1);

for (let valor in p1) {
    console.log(valor);
}