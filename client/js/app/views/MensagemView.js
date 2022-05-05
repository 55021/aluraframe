class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(modelo) {
        // só vai aparecer com o modelo do bootstrap quando for passada a função com uma string dentro
        return modelo.texto ? `
        <p class="alert alert-info">${modelo.texto}</p>
        ` : `<p></p>`;
    }
}