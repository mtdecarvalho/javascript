const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const botao = document.querySelector('#change-cat');

const getCats = async() => {
    const data = await fetch(BASE_URL) // pega os dados da url
    .then(res=> res.json()) // converte a response em json
    .catch(e => console.log(e.message)) // no caso de erro, loga a mensagem
    
    return data[0].url;// retorna a url da imagem de gato
}

const loadImg = async () => {
    const img = document.querySelector('#cat');
    img.src = await getCats(); // espera a requisição ser concluida e atualiza a img
}

botao.addEventListener('click', loadImg); // quando for clicado, a função roda novamente

loadImg(); // para a img ser carregada ao carregar a pagina