class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido!');
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres!');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário deve conter apenas letras e/ou números!');
            valid = false;
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        // remove os erros ao enviar o formulário novamente
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            // pega o label do campo
            const label = campo.previousElementSibling.innerText.toLowerCase().slice(0, -1);

            // se campo estiver vazio
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar vazio!`);
                valid = false;
            }

            // checa cpf
            if (campo.classList.contains('input-cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            // checa usuario
            if (campo.classList.contains('input-usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.input-senha');
        const repetirSenha = this.formulario.querySelector('.input-repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais!');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais!');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres!');
        }

        return valid;
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');

        // insere a div criada logo após o final do campo
        campo.insertAdjacentElement('afterend', div);

        
    }
}

const valida = new ValidaFormulario();