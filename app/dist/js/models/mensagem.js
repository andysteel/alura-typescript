export class Mensagem {
    constructor(mensagem, criticidade) {
        this.mensagem = mensagem;
        this.criticidade = criticidade;
    }
    paraTexto() {
        return `mensagem: ${this.mensagem}, criticidade: ${this.criticidade}`;
    }
    ehIgual(mensagem) {
        return JSON.stringify(this) === JSON.stringify(mensagem);
    }
}
//# sourceMappingURL=mensagem.js.map