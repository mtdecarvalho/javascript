function rand(min=0, max=3) {
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

// esperaAi('Fase 1', rand())
//     .then(fase => { 
//         console.log(fase);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ', fase);
//     })
//     .catch(e => console.log(e));

/*
basicamente, async permite que se utilize
a palavra await dentro de uma função
para esperar uma promise ser resolvida.

uma promise tem tres estados:
pending -> pendente
fullfiled -> resolvida
rejected -> rejeitada
*/

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);
        
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        const erro = await esperaAi(4, rand());

        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

