// fetch(url, options)
//     .then(response => response.json())
//     .then(json => console.log(json))

// exemplo metodo GET

fetch('https://endereco-da-api.com', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))
    
    
// exemplo metodo POST

fetch('https://endereco-da-api.com', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))

// todos retornam uma promise