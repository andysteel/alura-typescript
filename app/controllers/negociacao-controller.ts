import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector<HTMLInputElement>('#data');
        this.inputQuantidade = document.querySelector<HTMLInputElement>('#quantidade');
        this.inputValor = document.querySelector<HTMLInputElement>('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
    }

    criaNegociacao(): Negociacao {
        return  new Negociacao(
            new Date(this.inputData.value.replace(/-/g,',')),
            Number(this.inputQuantidade.value),
            Number(this.inputValor.value)
        )
    }
}