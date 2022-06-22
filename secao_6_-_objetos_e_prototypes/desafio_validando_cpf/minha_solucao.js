/*
705.484.450-52 070.987.720-03

705.484.450
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
se o numero digito for maior que 9, consideramos que seja 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
se o numero digito for maior que 9, consideramos que seja 0

705.484.450-52 === 705.484.450-52
*/

function criaDigitoVerificador(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += Number(val) * contador;
        --contador;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);

    return digito > 9 ? 0 : digito;
}

function isSequencia(cpfLimpo) {
    const sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
    return sequencia === cpfLimpo;
}

function verificarCpf(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '');

    if (typeof cpfLimpo === 'undefined') return false;
    if (cpfLimpo.length !== 11) return false;
    if (isSequencia(cpfLimpo)) return false;

    let cpfResultado = cpfLimpo.slice(0, -2);

    let primeiroDigito = criaDigitoVerificador(cpfResultado);
    let segundoDigito = criaDigitoVerificador(cpfResultado + String(primeiroDigito));

    cpfResultado += String(primeiroDigito) + String(segundoDigito);

    return cpfLimpo === cpfResultado;
}

console.log(verificarCpf('705.484.450-52'));
