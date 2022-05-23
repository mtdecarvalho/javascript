// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz;
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número = retorna o próprio número
// Use a função com números de 0 a 100

function fizzBuzz(num) {
    if (typeof num !== 'number')        return num;
    if (i % 3 === 0 && i % 5 === 0)     return 'FizzBuzz';
    if (i % 3 === 0)                    return 'Fizz';
    if (i % 5 === 0)                    return 'Buzz';
    return num;
}

console.log(fizzBuzz('sla'));

let i = 0;
while (i <= 100) {
    console.log(fizzBuzz(i));
    i++;
}