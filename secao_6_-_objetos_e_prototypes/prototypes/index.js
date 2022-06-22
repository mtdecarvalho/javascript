// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome; 
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome; 
} 

// instância
const pessoa1 = new Pessoa('Matheus', 'de Carvalho'); //  <- Pessoa = função construtora
const pessoa2 = new Pessoa('Juliana', 'Salustiano'); //  <- Pessoa = função construtora

// Pessoa.protoype === pessoa1.__proto__

console.dir(pessoa1);
console.dir(pessoa2);

const data = new Date();
console.dir(data);