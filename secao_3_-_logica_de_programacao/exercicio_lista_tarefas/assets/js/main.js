const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

adicionaTarefasSalvas();

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarBotaoApagar(li) {
    const botaoApagar = document.createElement('button');

    botaoApagar.innerText = 'Apagar';

    // setAttribute pode ser usado para adicionar qualquer atributo em qualquer elemento
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar este elemento');
    
    li.innerText += ' ';
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputTarefa.value = '';

    // coloca o foco para o campo de inputTarefa
    inputTarefa.focus();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    // transforma o array em um JSON no formato de string
    const tarefasJSON = JSON.stringify(listaDeTarefas);

    // depois salva esse json no localstorage, uma espécie de mini BD
    // e coloca o nome de tarefas, que será usado para recuperar 
    // esses dados depois.
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    // pega as tarefas salvas no local storage.
    const tarefas = localStorage.getItem('tarefas');
    
    // transforma-as em string
    const listaDeTarefas = JSON.parse(tarefas);

    // percorre a lista e cria todas as tarefas
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

function criarTarefa(tarefa) {
    const li = criarLi();
    li.innerText = tarefa;
    criarBotaoApagar(li);
    
    tarefas.appendChild(li);
    
    limpaInput();
    salvarTarefas();
}

// checa se enter foi pressionado e adiciona a tarefa
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // checa se existe algum valor no campo de inputTarefa 
        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);
    }
    
})

// checa se botão foi clicado e adiciona a tarefa
btnTarefa.addEventListener('click', function (e) {
    // checa se existe algum valor no campo de inputTarefa 
    if (!inputTarefa.value) return;

    criarTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    // checa se o elemento clicado possui a classe apagar
    if (el.classList.contains('apagar')) {
        // no caso de possuir, remove o elemento pai dele.
        // como esse elemento é filho do li, o li é apagado.
        el.parentElement.remove();
        
        salvarTarefas();
    }
});