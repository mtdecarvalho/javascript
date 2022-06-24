function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mensagem !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(mensagem.toUpperCase() + ' - Passei na promise');
            return; 
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, rand(1, 5)),
    // 'Outro valor'
];

// tenta resolver todas promises num array
// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

// retorna a primeira que for resolvida
// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        // return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));