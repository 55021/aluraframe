class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    // static: método da classe, não pertencente ao domínio da instância

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error("Deve estar no formato YYYY-MM-DD");
        }

        return new Date(...texto
            .split('-')
            .map((item, index) => item - index % 2)); // Um outro método de atingir o mesmo resultado do split (os campos separados por vírgula) seria o .replace(/-/g, ','), onde a regex encontraria globalmente todas as ocorrências do caractere e o substituiria.
    }


}