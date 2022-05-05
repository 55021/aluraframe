class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // qualquer alteração em negociacoes será feita na cópia
        return [].concat(this._negociacoes);
    }
}