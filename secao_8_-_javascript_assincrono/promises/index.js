function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// com callback

// function esperaAi(mensagem, tempo, cb) {
//     setTimeout(() => {
//         console.log(mensagem);
//         if (cb) cb();
//     }, tempo);
// }

// esperaAi('frase 1', rand(1, 3), function() {
//     esperaAi('frase 2', rand(1, 3), function() {
//         esperaAi('frase 3', rand(1, 3));
//     });
// });

// com promise

function esperaAi(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mensagem !== 'string') reject('BAD VALUE');
            resolve(mensagem);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    // .then(resposta => {
    //     console.log(resposta);
    //     return esperaAi(123, rand(1, 3));
    // })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO: ', e);
    });

console.log('Isso aqui será exibido antes de qualquer promisse.');