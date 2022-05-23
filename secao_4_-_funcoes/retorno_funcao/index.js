// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    // essa função recebe o parametro multiplicador
    // que depois é utilizado na função interior.
    // ela sempre vai se lembrar do seu escopo.
    return function (n) {
        return n * multiplicador;
    };
}

// por ex, nesse caso duplica está com o multiplicador 2.
// logo, para multiplicar algum numero por 2, basta passar o mesmo para o duplica.
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// para ilustrar melhor, o que acontece é:

// const duplica = criaMultiplicador(2); -> retorna a função usada para a multiplicação
// const doisVezesDois = duplica(2); -> retorna a multiplicação usando a função armazenada na variavel criada acima.