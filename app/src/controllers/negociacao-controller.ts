import { CriticidadeMensagem } from "../enums/criticidade-mensagem.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector<HTMLInputElement>('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector<HTMLInputElement>('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector<HTMLInputElement>('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(new Mensagem('Apenas negociações em dias úteis são aceitas',CriticidadeMensagem.ERROR));
            return;
        }
  
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.mensagemView.update(new Mensagem('Negociação adicionada com sucesso.', CriticidadeMensagem.SUCCESS));

    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
    }
}