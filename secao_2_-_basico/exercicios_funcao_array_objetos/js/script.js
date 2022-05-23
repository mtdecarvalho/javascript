function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm(evento){
        evento.preventDefault();

        const pessoa = {
            nome: form.querySelector('.nome').value,
            sobrenome: form.querySelector('.sobrenome').value,
            altura: form.querySelector('.altura').value,
            peso: form.querySelector('.peso').value
        };
        
        resultado.innerHTML += `<p>Nome: ${pessoa.nome}, sobrenome: ${pessoa.sobrenome}, 
                                altura: ${pessoa.altura}, peso: ${pessoa.peso}</p>`

        pessoas.push(pessoa);

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();