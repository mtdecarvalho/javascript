const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// some todos os numeros (reduce)
const total = numeros.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(total);

// retorne um array com os pares (filter)
const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0)
        acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

// retorne um array com o dobro dos valores (map)
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

// resolução padrão
const maisVelha1 = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha1);

// resolução com operador ternário
const maisVelha2 = pessoas.reduce((acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor);
console.log(maisVelha2);