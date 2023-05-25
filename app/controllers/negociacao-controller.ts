import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector<HTMLInputElement>('#data');
        this.inputQuantidade = document.querySelector<HTMLInputElement>('#quantidade');
        this.inputValor = document.querySelector<HTMLInputElement>('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso.')
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