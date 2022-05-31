const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const botao = document.querySelector('#change-cat');

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL); // pega os dados da URL
        const json = await data.json(); // converte para um json
        
        return json[0].url; // dentro do json, pegamos o que importa, que é a url, e retornamos
    }
    catch(err) {
        console.log(err.message);
    }
}

const loadImg = async () => {
    const img = document.querySelector('#cat');
    img.src = await getCats(); // espera a requisição ser concluida e atualiza a img
}

botao.addEventListener('click', loadImg); // quando for clicado, a função roda novamente

loadImg(); // para a img ser carregada ao carregar a pagina