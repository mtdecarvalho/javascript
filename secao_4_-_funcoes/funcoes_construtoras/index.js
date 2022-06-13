// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> new Pessoa
// Fabrica -> criaPessoa()

function Pessoa(nome, sobrenome) {
    // atributo privado
    const ID = 123;

    // metodo privado
    const metodoInterno = () => {

    };

    // atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // métodos públicos
    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const pessoa1 = new Pessoa('Matheus', 'de Carvalho');
const pessoa2 = new Pessoa('Juliana', 'Salustiano');
pessoa1.metodo();
console.log(pessoa1.nome, pessoa2.nome);