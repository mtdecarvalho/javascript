function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressionaEnter();
        },

        pressionaEnter() {
            // se enter for pressionado tenta realizar a conta.
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            // função perigosa
            let conta = this.display.value;

            try {
                conta = eval(conta);

                // se conta for NaN ou similar, gera um alerta e sai do método.
                if(!conta) {
                    alert('Conta inválida!');
                    this.clearDisplay();
                    return;
                }
                
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            // retorna o valor da string -1 caractere
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e) => {
                // arrow functions não permitem a alteração do this, dessa forma
                // não precisamos usar o .bind() ao fim da função como precisaria
                // numa declaração "normal" de função por function.
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            // concatena o valor ao display
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();