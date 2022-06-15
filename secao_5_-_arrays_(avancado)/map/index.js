// dobre os numeros
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobrados = numeros.map(num => num * 2);
// console.log(numerosDobrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// para cada elemento:
// retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(pessoa => pessoa.nome);
// console.log(nomes);

// remova apenas a chave 'nome' do objeto
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
// console.log(idades);

// adicione uma chave id em cada objeto
const pessoasComIds = pessoas.map((pessoa, indice) => {
    const novaPessoa = { ...pessoa };
    novaPessoa.id = indice;
    return novaPessoa;
});
console.log(pessoasComIds);