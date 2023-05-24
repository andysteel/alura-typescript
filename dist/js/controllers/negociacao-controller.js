import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }
    criaNegociacao() {
        return new Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), Number(this.inputQuantidade.value), Number(this.inputValor.value));
    }
}
