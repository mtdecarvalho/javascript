// factory functions / constructor functions / class

// factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Matheus', 'de Carvalho');
console.log(p1.nomeCompleto);

// constructor functions 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
    // congela o objeto e impede que ele seja alterado em qualquer momento
}

const p2 = new Pessoa('Matheus', 'de Carvalho');
// Object.freeze(p2);
p2.nome = 'Theus';
console.log(p2);

const p3 = new Pessoa('Juliana', 'Vieira');
console.log(p3);