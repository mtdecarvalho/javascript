function validaArray(array, tamanho) {
    try {
        if (!array && !tamanho) throw new ReferenceError('Envie os parâmetros!');

        if (typeof (array) !== 'object' || typeof (tamanho) !== 'number') throw new TypeError('Erro de tipo!');

        if (tamanho > array.length) throw new RangeError('Tamanho inválido!');

        return array;

    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Erro de ReferenceError!');
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log('Erro de TypeError!');
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log('Erro de RangeError!');
            console.log(e.message);
        }
        else {
            console.log('Erro não esperado ocorreu: ' + e);
        }
    }
}

console.log(validaArray());
console.log(validaArray('teste', 5));
console.log(validaArray([1, 2, 3], 5));
console.log(validaArray([1, 2, 3], 3));