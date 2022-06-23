class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contadorRegressivo = cpfArray.length + 1;
        
        const total = cpfArray.reduce((ac, val) => {
            ac += (val * Number(contadorRegressivo));
            --contadorRegressivo;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);

        return digito > 9 ? 0 : digito;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial + String(digito1));
        this.novoCpf = cpfParcial + String(digito1) + String(digito2);
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        this.geraNovoCpf();
        
        return this.cpfLimpo === this.novoCpf;
    }
}

// const cpf2 = new ValidaCPF('111.111.111-11');
// console.log(cpf2.valida());

// const cpf3 = new ValidaCPF('705.484.450-53');
// console.log(cpf3.valida());
