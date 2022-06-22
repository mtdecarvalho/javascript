// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
    return this.saldo;
}

// const conta1 = new Conta(11, 22, 100);
// console.log(conta1);

// conta1.depositar(1000);
// console.log(conta1);

// conta1.sacar(2000);
// console.log(conta1);

// conta1.sacar(200);
// console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
}


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta2 = new ContaCorrente(11, 22, 0, 100);
conta2.depositar(10);
conta2.sacar(110);
conta2.sacar(1);

console.log();

const conta3 = new ContaPoupanca(12, 33, 0);
conta3.depositar(10);
conta3.sacar(110);
conta3.sacar(1);