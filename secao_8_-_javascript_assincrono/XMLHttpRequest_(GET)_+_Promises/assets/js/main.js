// função que recebe um objeto como parametro
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // cria um xhr passando os atributos do objeto
        xhr.open(obj.method, obj.url, true);
        // send é usado em método POST
        xhr.send();
    
        // quando for carregado, executa a função
        xhr.addEventListener('load', () => {
            // requisição de sucesso
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    // espera a requisição e joga o retorno em response
    try {
        const response = await request({
            method: 'GET',
            url: href
        });
        // carrega o resultado de response
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
}

// captura todos os cliques na pág
document.addEventListener('click', e => {
    // seleciona o elemento do click
    const el = e.target;
    // seleciona a tag do elemento
    const tag = el.tagName.toLowerCase();

    // se for uma tag de link
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})