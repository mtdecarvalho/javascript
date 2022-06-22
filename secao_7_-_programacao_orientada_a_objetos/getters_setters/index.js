const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Corsa');
for (let i = 0 ; i < 200 ; i++) {
    c1.acelerar();
}

console.log(c1);

// c1.velocidade = 2500;
// console.log(c1);
// c1.velocidade = 2500;
// console.log(c1);
// c1.velocidade = -1;
// console.log(c1);
// c1.velocidade = 50;
// console.log(c1);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Matheus', 'de Carvalho');
p1.nomeCompleto = 'theus de carvalho'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);