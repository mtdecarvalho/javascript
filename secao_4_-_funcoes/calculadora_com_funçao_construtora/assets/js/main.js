function Calculadora() {
    // público
    this.inicia = () => {
        cliqueBotoes();
        clearDisplay();
        pressionaEnter();
    };
    
    // privado
    const display = document.querySelector('.display');

    const pressionaEnter = () => {
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida!');
                clearDisplay();
                return;
            }

            display.value = String(conta);
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    };

    const clearDisplay = () => display.value = '';

    const apagaUm = () => display.value = display.value.slice(0, -1);


    const cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                realizaConta();
            }
        });
    };

    const btnParaDisplay = valor => {
        display.value += valor;
        display.focus();
    }
};

const calculadora = new Calculadora();
calculadora.inicia();