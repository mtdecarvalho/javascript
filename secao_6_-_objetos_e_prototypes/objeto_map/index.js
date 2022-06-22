const pessoas = [
    { id: 3, nome: 'Matheus' },
    { id: 2, nome: 'Juliana' },
    { id: 1, nome: 'Theus' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// console.log(novasPessoas);
// console.log(novasPessoas.get(2));
// console.log(novasPessoas.get(4));

// for (const [identifier, {id, nome}] of novasPessoas) {
//     console.log(`${identifier} -> ${id} ${nome}`);
// }

// for (const pessoas of novasPessoas) {
//     console.log(pessoas);
// }

// for (const pessoas of novasPessoas.keys()) {
//     console.log(pessoas);
// }

// for (const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);