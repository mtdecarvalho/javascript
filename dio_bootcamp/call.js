const pessoa = {
    nome: 'Juliana'
};

const animal = {
    nome: 'Doki'
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
// 12