function criaPessoa(nome, sobrenome, altura, peso) {
    return { 
        nome, 
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        // usando getter esse método começa a se passar de atributo do objeto
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
     };
}

const p1 = criaPessoa('Theus', 'de Carvalho', 1.7, 81);
console.log(p1.imc);
p1.nomeCompleto = 'Juliana Salustiano';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('falando sobre futebol'));