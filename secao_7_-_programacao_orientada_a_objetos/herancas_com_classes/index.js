class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Telefone');
// console.log(d1);
// d1.ligar();
// d1.ligar();
// console.log(d1);
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);

        this.temWifi = temWifi;
    }

    ligar() {
        console.log('alterou');
    }
    
    desligar() {
        console.log('alterou');
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'sei lá');
const t1 = new Tablet('Samsung', true);
console.log(s1);
console.log(t1);
t1.ligar();
t1.ligar();