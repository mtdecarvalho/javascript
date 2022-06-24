function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        // usando fetch api ao invés de response
        const response = await fetch(href);
    
        if (response.status !== 200) throw new Error('ERRO 404');
        
        const html = await response.text();
        carregaResultado(html);
    } catch (e) {
        console.error(e);
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
});