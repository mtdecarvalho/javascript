class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
        // precisamos do _ para que nossa função get e set tenha o nome saldo, mas não nossa propriedade
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operacao negada';
        }
        this._saldo -= valor;

        return this._saldo;    
    }

    depositar(valor) {
        this._saldo += valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, 'conta corrente');
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta poupanca');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta universitaria');
    }

    sacar(valor) {
        if (valor > 500 || valor > this._saldo) {
            return 'Operacao negada.';
        }
        this._saldo -= valor;

        return this._saldo;
    }
}

