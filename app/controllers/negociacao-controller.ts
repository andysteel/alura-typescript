import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector<HTMLInputElement>('#data');
        this.inputQuantidade = document.querySelector<HTMLInputElement>('#quantidade');
        this.inputValor = document.querySelector<HTMLInputElement>('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }

    criaNegociacao(): Negociacao {
        return  new Negociacao(
            new Date(this.inputData.value.replace(/-/g,',')),
            Number(this.inputQuantidade.value),
            Number(this.inputValor.value)
        )
    }
}