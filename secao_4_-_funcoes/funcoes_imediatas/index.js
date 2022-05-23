// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {

    const sobrenome = 'Carvalho';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Theus'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(21, 81, 1.80);
