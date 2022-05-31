async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    
    return resolved;
}

// com try...catch

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try {
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
    } catch (e) {
        result = e.message;
    }
    
    return result;
}