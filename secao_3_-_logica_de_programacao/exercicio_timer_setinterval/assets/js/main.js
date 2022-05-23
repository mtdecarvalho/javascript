function relogio() {
    const relogio = document.querySelector('.relogio');
    let timer;
    
    function criarHoraDosSegundos(segundos) {
        return new Date(segundos * 1000) // nova data dos segundos, convertidos em milissegundos
                    .toISOString()      // cria a hora no formato ISO
                    .slice(11, 19);     // pega apenas HH:MM:SS
    }
    
    // retorna apenas segundos passando hora min e segundo
    function calcularSegundos(hr, min, seg) {
        return  (Number.parseInt(hr) * 3600) + // converte hora em segs
                (Number.parseInt(min) * 60) +  // converte min em segs
                Number.parseInt(seg) + 1;      // segs
    }
    
    function iniciarTimer(timer) {
        const [hr, min, seg] = timer.split(':');
    
        let segundos =  calcularSegundos(hr, min, seg);
    
        return criarHoraDosSegundos(segundos);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            timer = setInterval(function(){
                relogio.textContent = iniciarTimer(relogio.textContent);
            }, 1000);
        }
    
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.textContent = '00:00:00';
        }
    
    });
}

relogio();