function usuarioForm() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    // Array para salvar os objetos
    // Todos os envios ficarão salvos dentro da array
    const usuarios = [];

    // Função para captar o envio do form

    function submitDoForm(eventoDeSubmit) {
        eventoDeSubmit.preventDefault();
        form.addEventListener("submit", submitDoForm)

        const nome = form.querySelector("#nome");
        const sobrenome = form.querySelector("#sobrenome");
        const peso = form.querySelector("#peso");
        const altura = form.querySelector("#altura");

        // Adicionando ao array o objeto
        usuarios.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });

        resultado.innerHTML += `<p>${nome.value}  ${sobrenome.value}  ${peso.value}  ${altura.value} </p>`;

    }

};

usuarioForm();
submitDoForm();

