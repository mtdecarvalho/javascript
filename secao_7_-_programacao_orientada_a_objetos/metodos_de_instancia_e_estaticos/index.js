class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // metodo estático
    static trocaPilha() {
        console.log(this.volume);
        console.log('vou trocar');
    }
}

const controle = new ControleRemoto('LG');
console.log(controle);
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
controle.diminuirVolume();
controle.diminuirVolume();
controle.diminuirVolume();
controle.diminuirVolume();
console.log(controle);

// controle.trocaPilha();
ControleRemoto.trocaPilha();