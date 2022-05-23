// declaração de função (Function hoisting)
// basicamente, a engine do JS coloca todas as funções declaradas 
// e variaveis declaradas com var para o topo do arquivo.
// isso possibilita chamadas da função "antes" de sua declaração.
falaOi();
function falaOi() {
    console.log('Oi');
}

// first-class objects (objetos de primeira classe)
// como em python, existe a de tratar funções como dados.
// function expression

const souUmDado = function () {
    console.log('sou um dado');
}

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// arrou function
const funcaoArrow = () => console.log('sou uma arrow function');
funcaoArrow();

// dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
}
obj.falar();
